// Inventory every original photo: dimensions, EXIF, sharpness, exposure, near-duplicates.
// Usage: node scripts/scan-originals.mjs <originals-dir> <out-dir>
// Writes <out-dir>/inventory.json and labelled contact sheets (<out-dir>/sheet-*.jpg) for visual review.
// Originals are only read, never written.
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const [, , srcDir, outDir] = process.argv;
if (!srcDir || !outDir) {
  console.error('usage: node scripts/scan-originals.mjs <originals-dir> <out-dir>');
  process.exit(1);
}
await fs.mkdir(outDir, { recursive: true });

const IMG = /\.(jpe?g|png|webp|heic|tiff?)$/i;

async function walk(dir) {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (IMG.test(e.name)) out.push(p);
  }
  return out;
}

// Variance of a Laplacian on a fixed-size greyscale copy: higher = sharper.
async function sharpness(file) {
  const { data, info } = await sharp(file)
    .rotate()
    .resize(800, 800, { fit: 'inside' })
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  let sum = 0, sq = 0, n = 0;
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const i = y * w + x;
      const v = 4 * data[i] - data[i - 1] - data[i + 1] - data[i - w] - data[i + w];
      sum += v; sq += v * v; n++;
    }
  }
  const mean = sum / n;
  return sq / n - mean * mean;
}

// 8x8 average hash for near-duplicate detection.
async function ahash(file) {
  const px = await sharp(file).rotate().resize(8, 8, { fit: 'fill' }).greyscale().raw().toBuffer();
  const avg = px.reduce((a, b) => a + b, 0) / px.length;
  return [...px].map((v) => (v > avg ? 1 : 0)).join('');
}
const hamming = (a, b) => [...a].reduce((d, c, i) => d + (c !== b[i] ? 1 : 0), 0);

const files = (await walk(srcDir)).sort();
const items = [];
for (const file of files) {
  const rel = path.relative(srcDir, file);
  const folder = rel.split(path.sep)[0];
  try {
    const meta = await sharp(file).metadata();
    const rotated = (meta.orientation ?? 1) >= 5;
    const width = rotated ? meta.height : meta.width;
    const height = rotated ? meta.width : meta.height;
    const stats = await sharp(file).rotate().resize(400).stats();
    const brightness = Math.round(stats.channels.slice(0, 3).reduce((a, c) => a + c.mean, 0) / 3);
    let exifDate = '';
    if (meta.exif) {
      const m = meta.exif.toString('latin1').match(/(\d{4}):(\d{2}):(\d{2}) \d{2}:\d{2}:\d{2}/);
      if (m) exifDate = `${m[1]}-${m[2]}-${m[3]}`;
    }
    const st = await fs.stat(file);
    items.push({
      rel, folder, file: path.basename(file), width, height,
      megapixels: +((width * height) / 1e6).toFixed(1),
      orientation: width > height * 1.05 ? 'landscape' : height > width * 1.05 ? 'portrait' : 'square',
      bytes: st.size, format: meta.format, exifDate, brightness,
      sharpness: Math.round(await sharpness(file)),
      hash: await ahash(file),
    });
    process.stdout.write('.');
  } catch (err) {
    items.push({ rel, folder, file: path.basename(file), error: String(err) });
    process.stdout.write('x');
  }
}
console.log();

// near duplicates within the same folder
for (const a of items) {
  if (!a.hash) continue;
  a.nearDuplicates = items
    .filter((b) => b !== a && b.hash && b.folder === a.folder && hamming(a.hash, b.hash) <= 4)
    .map((b) => b.file);
}
await fs.writeFile(path.join(outDir, 'inventory.json'), JSON.stringify(items, null, 2));

// contact sheets: 6 columns, 300px cells, labelled with index + filename
const COLS = 6, CELL = 300, LABEL = 34;
const ok = items.filter((i) => !i.error);
const byFolder = Object.groupBy(ok, (i) => i.folder);
for (const [folder, list] of Object.entries(byFolder)) {
  for (let page = 0; page * 36 < list.length; page++) {
    const chunk = list.slice(page * 36, page * 36 + 36);
    const rows = Math.ceil(chunk.length / COLS);
    const composites = [];
    for (const [k, it] of chunk.entries()) {
      const x = (k % COLS) * CELL, y = Math.floor(k / COLS) * (CELL + LABEL);
      const thumb = await sharp(path.join(srcDir, it.rel)).rotate()
        .resize(CELL - 6, CELL - 6, { fit: 'contain', background: '#222' }).jpeg().toBuffer();
      composites.push({ input: thumb, left: x + 3, top: y + 3 });
      const label = `${page * 36 + k + 1}. ${it.file.slice(0, 28)} ${it.width}x${it.height} s${it.sharpness}`;
      const svg = `<svg width="${CELL}" height="${LABEL}"><rect width="100%" height="100%" fill="#fff"/><text x="4" y="22" font-family="Helvetica" font-size="13" fill="#000">${label.replace(/&/g, '&amp;')}</text></svg>`;
      composites.push({ input: Buffer.from(svg), left: x, top: y + CELL });
    }
    const name = `sheet-${folder.replace(/\W+/g, '_')}-${page + 1}.jpg`;
    await sharp({ create: { width: COLS * CELL, height: rows * (CELL + LABEL), channels: 3, background: '#fff' } })
      .composite(composites).jpeg({ quality: 80 }).toFile(path.join(outDir, name));
    console.log('sheet', name);
  }
}
console.log(`${items.length} files scanned`);
