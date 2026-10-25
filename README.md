# Pritam Haldar — portfolio

Concert and artist photography. A static, photo-led portfolio built with [Astro](https://astro.build).
No database and no API keys, with minimal JavaScript. It deploys to any static host.

## Run it locally

Requires Node 22+.

```bash
npm install
npm run dev        # http://localhost:4321
```

Other commands:

| Command | What it does |
| --- | --- |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run check` | Type check (`astro check`), build, then crawl `dist/` for broken links, images and srcset entries |
| `npm run images` | Build web versions of the photos listed in `src/data/photos.json` (see CONTENT_GUIDE.md) |
| `npm run scan -- <folder> <out>` | Inventory a folder of originals (size, sharpness, duplicates) and make contact sheets |

## Where things live

```
src/data/site.ts         ← name, availability, WhatsApp, Instagram, resume, hire categories
src/data/projects.ts     ← case studies (one entry = one /work/<slug>/ page)
src/data/photos.json     ← photo manifest: captions, alt text, artist, category, public/private
src/pages/               ← routes: / · /work/ · /work/[slug]/ · /about/ · /gallery/ (/archive/ redirects here) · /hire/ · /contact/ · 404
src/components/          ← Header, Footer, Photo (responsive image), Lightbox (shared viewer), HireCta
public/assets/photos/    ← generated web images (full/ for the viewer, w/ for responsive sizes)
scripts/                 ← image pipeline + site checker
docs/                    ← creative direction, asset inventory, list of things still to verify
```

Original photos are **not** in this repository. They stay in Google Drive, and the `originals/` folder is git-ignored.
Only web derivatives are committed.

## Deploy

### Vercel (recommended)
1. Push this repo to GitHub (already done: `SayAn1-dls/Pritam-s_port`).
2. On vercel.com, choose **Add New → Project**, import the repo and keep the detected Astro settings
   (build `npm run build`, output `dist`).
3. Once you have the final domain, update `site.url` in `src/data/site.ts`, `site` in `astro.config.mjs`
   and the sitemap line in `public/robots.txt`.

### Netlify / Cloudflare Pages / GitHub Pages
Use build command `npm run build` and publish directory `dist`. No server is needed.

## External services

None are required. Optional:

| Service | Why | Setup |
| --- | --- | --- |
| Formspree (or any form endpoint that accepts POST) | Lets the hire form send email directly instead of opening the visitor's email app | Create a form at formspree.io and set the environment variable `PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxx` in your host. This is a public endpoint, not a secret. |

Without it, the form validates the input and then opens the visitor's own email app with the message pre-filled.
It says so on the page; there is no fake "sent!" message.

## Tests that were run

October 2026 update (content, gallery and performance pass):

- `astro check`: 0 errors, 0 warnings, 0 hints. `astro build`: 13 pages (+ the `/archive/` → `/gallery/` redirect).
- `scripts/check-site.mjs`: 2,378 internal references checked, 0 broken; no portrait-orientation photo on any page
  (only the photographer's own portrait on About / the photo pass); no text under gallery photos.
  The only contact destination is `https://wa.me/918240680176`; Instagram appears once its URL is set.
- `scripts/check-copy.mjs`: 0 failures, including the new rule that no page mentions sponsors, promoters or LinkedIn.
- Browser (Playwright/Chromium, 1440 px and 390 px): no console errors, failed requests or horizontal overflow on any page;
  all 151 gallery photos load after scrolling (also with JavaScript off); filters, viewer and the Work list without hover
  popups checked.
- Performance was measured locally (throttled Chromium), not on the deployed site. Run Lighthouse on the deployed URL.
