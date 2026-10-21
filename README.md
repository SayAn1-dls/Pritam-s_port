# Pritam Haldar — portfolio

Concert photography and show marketing. A static, photo-led portfolio built with [Astro](https://astro.build).
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
src/data/site.ts         ← name, availability, phone/WhatsApp, email, LinkedIn, resume, hire categories
src/data/projects.ts     ← case studies (one entry = one /work/<slug>/ page)
src/data/photos.json     ← photo manifest: captions, alt text, artist, category, public/private
src/pages/               ← routes: / · /work/ · /work/[slug]/ · /about/ · /archive/ · /hire/ · /contact/ · 404
src/components/          ← Header, Footer, Photo (responsive image), Lightbox (shared viewer), HireCta
public/assets/photos/    ← generated web images (full/ for the viewer, w/ for thumbnails)
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

- `astro check`: 0 errors, 0 warnings, 0 hints across 21 files.
- `astro build`: 13 pages built.
- `scripts/check-site.mjs`: 1,391 internal references (links, `src`, `srcset`, viewer images) checked, 0 broken.
  Contact destinations confirmed: `https://wa.me/918240680176`, `tel:+918240680176`,
  `mailto:pritamhaldar.my@gmail.com`, `https://www.linkedin.com/in/pritam-haldar/`.
- Browser (Chromium in the Claude desktop app):
  - No horizontal overflow on any of the 13 routes at 320, 390, 768, 1024 and 1440 px.
  - Archive filters (artist, frame type), search, the empty state, reset and URL sync (`?artist=fossils`) all work.
  - Viewer: opens the full-resolution file, keeps aspect ratio with `contain`, prev/next with buttons and arrow keys,
    Escape closes and returns focus to the photo that opened it, swipe left/right/down works, the sequence follows
    the active filter.
  - Mobile menu opens and closes, and updates `aria-expanded`.
  - Hire form: all four errors flag and focus moves to the first invalid field, the budget field appears only for
    project-type enquiries, and a valid submit produces the honest mailto hand-off message.
- Not measured: Lighthouse / Core Web Vitals scores. Run Lighthouse on the deployed URL.
