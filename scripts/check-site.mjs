// Crawl the built site in dist/ and fail on any broken internal link, image or srcset entry.
// Usage: npm run build && node scripts/check-site.mjs
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const DIST = path.resolve(import.meta.dirname, '../dist');
const pages = [];
async function walk(d) {
  for (const e of await fs.readdir(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) await walk(p);
    else if (e.name.endsWith('.html')) pages.push(p);
  }
}
await walk(DIST);

const resolve = (from, url) => {
  const clean = url.split('#')[0].split('?')[0];
  if (!clean) return null;
  const abs = clean.startsWith('/') ? path.join(DIST, clean) : path.join(path.dirname(from), clean);
  if (existsSync(abs) && (abs.endsWith('/') || !path.extname(abs))) return path.join(abs, 'index.html');
  return abs;
};

let bad = 0, checked = 0;
const external = new Set();
for (const page of pages) {
  const html = await fs.readFile(page, 'utf8');
  const urls = [
    ...[...html.matchAll(/\s(?:href|src|data-full)="([^"]+)"/g)].map((m) => m[1]),
    ...[...html.matchAll(/\ssrcset="([^"]+)"/g)].flatMap((m) => m[1].split(',').map((s) => s.trim().split(' ')[0])),
  ];
  for (const u of urls) {
    if (/^(mailto:|tel:)/.test(u)) { external.add(u.split('?')[0]); continue; }
    if (/^https?:\/\//.test(u)) { external.add(u.split('?')[0]); continue; }
    const f = resolve(page, u);
    if (!f) continue;
    checked++;
    if (!existsSync(f)) { bad++; console.log(`✗ ${path.relative(DIST, page)} → ${u}`); }
  }
}
console.log(`${pages.length} pages, ${checked} internal references checked, ${bad} broken`);
console.log('external / contact destinations:\n  ' + [...external].sort().join('\n  '));
process.exit(bad ? 1 : 0);
