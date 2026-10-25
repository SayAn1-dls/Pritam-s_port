// Build web derivatives for every photo in src/data/photos.json.
//
//   node scripts/build-images.mjs            (uses ./originals)
//   ORIGINALS=/path/to/folder node scripts/build-images.mjs
//
// For each entry it writes, without ever touching the original file:
//   public/assets/photos/full/<id>.webp        viewer copy, long edge ≤ 2800px, never upscaled
//   public/assets/photos/w/<id>-<width>.webp   responsive sizes (240 / 480 / 960 / 1600 / 2200)
// and records the real pixel dimensions back into photos.json.
//
// No re-grading is applied: Pritam already colour-graded these in Lightroom,
// so the pipeline only resizes (Lanczos3), converts to sRGB and strips EXIF/GPS data.
import sharp from 'sharp';
import fs from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const ORIGINALS = path.resolve(process.env.ORIGINALS ?? path.join(ROOT, 'originals'));
const MANIFEST = path.join(ROOT, 'src/data/photos.json');
const OUT = path.join(ROOT, 'public/assets/photos');
const FULL_EDGE = 2800;
// 240: the small strip tiles on the home page. 2200: large photos on high-density screens,
// so they don't fall through to the 2800px viewer copy.
const WIDTHS = [240, 480, 960, 1600, 2200];

const manifest = JSON.parse(await fs.readFile(MANIFEST, 'utf8'));
await fs.mkdir(path.join(OUT, 'full'), { recursive: true });
await fs.mkdir(path.join(OUT, 'w'), { recursive: true });

const fresh = (out, src) => existsSync(out) && statSync(out).mtimeMs >= statSync(src).mtimeMs;
let built = 0, skipped = 0, missing = 0;

for (const p of manifest.photos) {
  const src = path.join(ORIGINALS, p.original);
  if (!existsSync(src)) {
    // Keep already-built derivatives usable (e.g. on CI where originals are not checked in).
    if (!existsSync(path.join(OUT, 'full', `${p.id}.webp`))) {
      console.warn(`! missing original and no derivative: ${p.original}`);
      missing++;
    }
    continue;
  }
  const meta = await sharp(src).metadata();
  const rotated = (meta.orientation ?? 1) >= 5;
  const w0 = rotated ? meta.height : meta.width;
  const h0 = rotated ? meta.width : meta.height;
  const scale = Math.min(1, FULL_EDGE / Math.max(w0, h0));
  const fw = Math.round(w0 * scale), fh = Math.round(h0 * scale);

  const fullOut = path.join(OUT, 'full', `${p.id}.webp`);
  const base = () => sharp(src).rotate().withIccProfile('srgb');
  if (!fresh(fullOut, src)) {
    await base()
      .resize(fw, fh, { kernel: 'lanczos3', withoutEnlargement: true })
      .webp({ quality: 90, smartSubsample: true, effort: 5 })
      .toFile(fullOut);
    built++;
  } else skipped++;

  const widths = WIDTHS.filter((w) => w < fw);
  for (const w of widths) {
    const o = path.join(OUT, 'w', `${p.id}-${w}.webp`);
    if (fresh(o, src)) continue;
    await base().resize(w, null, { kernel: 'lanczos3' }).webp({ quality: 82, effort: 5 }).toFile(o);
  }

  p.width = fw;
  p.height = fh;
  p.originalSize = `${w0}x${h0}`;
  p.widths = widths;
  p.enhancement = 'Resized only (Lanczos3), sRGB, EXIF stripped. No re-grading, no upscaling, no generative edits.';
  process.stdout.write('.');
}

await fs.writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
console.log(`\nbuilt ${built}, up to date ${skipped}, missing ${missing}`);
