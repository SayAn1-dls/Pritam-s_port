// Copy lint over the built site in dist/. Enforces the copy rules in docs/plan/first-3-seconds.plan.xml.
// Usage: npm run build && node scripts/check-copy.mjs
import fs from 'node:fs/promises';
import path from 'node:path';

const DIST = path.resolve(import.meta.dirname, '../dist');
const LIMITS = { h1Words: 8, subWords: 28, paragraphWords: 40 };
const BANNED = [
  'elevate', 'unleash', 'seamless', 'cutting-edge', 'synergy', 'game-changer', 'passionate', 'world-class',
  'leverage', 'delve', 'tapestry', 'testament', 'next-level', 'revolutionise', 'revolutionize', 'supercharge',
];
const PLACEHOLDERS = /\b(lorem|ipsum|todo|tbd)\b|\[object Object\]|>\s*(undefined|NaN)\s*</i;
// What a visitor must be able to read inside the home hero (who, what, proof).
const HERO_REQUIRED = [/Pritam Haldar/, /Concert and Artist Photographer/, /photograph/i, /concert/i];
// The site is a photography portfolio: no sponsor / promoter positioning and no LinkedIn anywhere.
const FORBIDDEN = [/\bsponsor/i, /\bpromoter/i, /three audiences/i, /linkedin/i];
// Pages talk about the artists, the photographer and how he works, never about what is in a photo or how it was lit.
const PICTURE_TALK = /\b(haze|co2|confetti|smoke|backlit|backlight|led (screen|wall|visuals)|beams?|monochrome|lighting rig|flame effects?)\b/i;
const HERO_CATEGORY = /\b(concert|photo|photos|photographer)\b/i;

const pages = [];
async function walk(d) {
  for (const e of await fs.readdir(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) await walk(p);
    else if (e.name.endsWith('.html')) pages.push(p);
  }
}
await walk(DIST);

const text = (html) =>
  html
    .replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&#39;|&rsquo;/g, '’').replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
const words = (s) => (s ? s.split(' ').length : 0);

const failures = [];
const fail = (page, msg) => failures.push(`✗ ${page}: ${msg}`);

for (const file of pages) {
  const page = path.relative(DIST, file);
  const html = await fs.readFile(file, 'utf8');
  const visible = text(html);

  for (const m of html.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)) {
    const n = words(text(m[1]));
    if (n > LIMITS.paragraphWords) fail(page, `paragraph of ${n} words (max ${LIMITS.paragraphWords}): "${text(m[1]).slice(0, 60)}…"`);
  }
  for (const w of BANNED) {
    if (new RegExp(`\\b${w}\\b`, 'i').test(visible)) fail(page, `banned word "${w}"`);
  }
  if (/\p{Emoji_Presentation}/u.test(visible)) fail(page, 'emoji in page text');
  for (const re of FORBIDDEN) if (re.test(html)) fail(page, `forbidden reference ${re}`);
  const pic = visible.match(PICTURE_TALK);
  if (pic) fail(page, `describes the photo ("${pic[0]}"): keep copy about the artist`);
  if (PLACEHOLDERS.test(html.replace(/<(script|style)[\s\S]*?<\/\1>/g, ''))) fail(page, 'placeholder text');
}

// Home hero: the first-3-seconds contract.
const home = await fs.readFile(path.join(DIST, 'index.html'), 'utf8');
const hero = home.match(/<section\b[^>]*data-hero[^>]*>([\s\S]*?)<\/section>/)?.[1];
if (!hero) fail('index.html', 'no <section data-hero> found');
else {
  const heroText = text(hero);
  for (const re of HERO_REQUIRED) if (!re.test(heroText)) fail('index.html', `hero is missing ${re}`);
  const h1 = text(hero.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? '');
  if (!h1) fail('index.html', 'hero has no <h1>');
  if (words(h1) > LIMITS.h1Words) fail('index.html', `H1 is ${words(h1)} words (max ${LIMITS.h1Words}): "${h1}"`);
  if (!HERO_CATEGORY.test(h1)) fail('index.html', `H1 has no category noun: "${h1}"`);
  const sub = text(hero.match(/<p\b[^>]*data-hero-sub[^>]*>([\s\S]*?)<\/p>/)?.[1] ?? '');
  if (!sub) fail('index.html', 'hero has no sub-line (data-hero-sub)');
  if (words(sub) > LIMITS.subWords) fail('index.html', `sub-line is ${words(sub)} words (max ${LIMITS.subWords})`);
  if (!/<a\b[^>]*class="[^"]*\bbtn\b/.test(hero)) fail('index.html', 'hero has no action button');
}

console.log(failures.length ? failures.join('\n') : '');
console.log(`${pages.length} pages, ${failures.length} copy rule failures`);
process.exit(failures.length ? 1 : 0);
