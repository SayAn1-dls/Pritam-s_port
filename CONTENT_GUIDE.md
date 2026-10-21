# Content guide

Everything on the site comes from three files. You never need to touch the page templates to publish new work.

| File | Controls |
| --- | --- |
| `src/data/site.ts` | Name, availability, phone/WhatsApp, email, LinkedIn, Instagram, resume, location, hire categories, production partners |
| `src/data/projects.ts` | Case studies (`/work/<slug>/`) and which ones are featured on the home page |
| `src/data/photos.json` | Every photo: artist, project, caption, alt text, category, public/private |
| `src/data/home.ts` | Home page first screen: headline, sub-line, the annotated hero frame, the show ledger |

After editing, run `npm run dev` to check, then commit and push. The host rebuilds automatically.

---

## Contact details & availability (`src/data/site.ts`)

- **Availability:** `availability.open: true | false`. When `false`, the header, hire page and CTAs switch to
  `closedLabel`.
- **Phone / WhatsApp:** `phoneDisplay` is what people see. `phoneE164` is digits only with the country code
  (`918240680176`) and drives both `tel:` and `https://wa.me/…`. `whatsapp: false` hides the WhatsApp buttons.
  `whatsappMessage` is the text pre-filled in the chat.
- **Email, LinkedIn, Instagram, location:** set the string. An empty string (`''`) hides the button or line everywhere.
- **Resume:** put the PDF at `public/resume.pdf` and set `resume: '/resume.pdf'`. While it is empty, every resume
  button is hidden. There is never a dead link.
- **Hire categories:** edit `opportunities`. Set `offered: false` to hide one, or add a new `{ title, body, offered: true }`.
  New categories also appear in the form's dropdown.

## Add photos

1. Put the original files in `originals/<ARTIST FOLDER>/` (this folder is git-ignored, so originals never go online),
   or keep them anywhere and point to them with `ORIGINALS=/path/to/folder`.
2. Add one entry per photo to `src/data/photos.json`:

```json
{
  "id": "fakira-dsc-1234",
  "original": "FAKIRA/DSC_1234.jpg",
  "artist": "Fakira",
  "project": "fakira",
  "category": "Crowd",
  "tone": "colour",
  "caption": "Short, human caption",
  "alt": "What is in the photo, for screen readers",
  "focus": "50% 30%",
  "credit": "Pritam Haldar",
  "public": true,
  "downloadable": false
}
```

   - `id`: lowercase, dashes, unique. It becomes the file name.
   - `project`: the `slug` of a case study in `projects.ts`. It drives the archive's artist filter.
   - `category`: any label. New labels automatically become archive filter chips
     (current ones: On stage, Band, Crowd, Wide, Monochrome, Portrait, Sponsor visibility).
   - `focus`: optional crop anchor used when a layout crops the photo (`x% y%`). The viewer always shows the full frame.
3. Run `npm run images`. This writes `public/assets/photos/full/<id>.webp` (long edge up to 2800 px, never upscaled)
   and thumbnails at 480/960/1600 px. It also fills in `width`, `height` and `widths` in the manifest.
   It only resizes and converts to sRGB: no re-grading, no smoothing, no AI upscaling, and EXIF/GPS data is stripped.
4. Commit the manifest and the new files in `public/assets/photos/`.

**Pritam's portrait** is the manifest entry `pritam-haldar-portrait` (project `pritam`). It is used as the photo pass on
the home hero and on the About page and is kept out of the archive. To swap it, replace `originals/PRITAM/pritam-haldar-portrait.jpg` and run
`npm run images`.

**Hide a photo:** set `"public": false`. It disappears from every page but stays in the manifest.
**Change a caption:** edit `caption` / `alt`. No rebuild of images is needed.
**Add several photos to an existing project:** add entries with the same `project`, then add their ids to that
project's `sequence` in `projects.ts` if you want them on the case-study page as well (the archive picks them up
automatically).

To review a new batch before choosing, run `npm run scan -- /path/to/folder /tmp/scan`. It writes labelled contact
sheets and an `inventory.json` with size, sharpness score and near-duplicate detection.

## Add or edit a case study (`src/data/projects.ts`)

Copy an existing entry and change:

- `slug` (URL), `artist`, `title`, `kicker` (one-line poster tagline), `category`, `cover` (a photo id).
- `year`, `venue`, `company`: **leave as `''` until confirmed.** Empty fields are hidden on the page.
- Story fields: `summary`, `context`, `challenge`, `idea`, `execution` (list), `deliverables` (list),
  `outcomes.verified` (only facts you can back up: counts, confirmed numbers), `outcomes.qualitative`, `notes`.
- `sequence`: photo ids in the order they appear on the page. The first two form the pair after "The context",
  the next three the trio, then one full-width image, and the rest become the contact sheet.
- `featured: true` puts it on the home page (the first five featured are shown). `draft: true` hides it everywhere.

## Verified achievements

Add them to `outcomes.verified` on the relevant project, written exactly as true:
"Photographed for Eventures Entertainment", "Set used in the sponsor's recap deck", "₹X raised in sponsorship (team total)".
Separate team results from your own contribution.

## Home page first screen (`src/data/home.ts`)

The first screen has one job: in about three seconds a visitor should know who you are, what you do, who you've
worked with, and how to reach you. See `docs/plan/first-3-seconds.plan.xml` for the rules.

- **Headline and sub-line:** `hero.title` and `hero.sub`. Keep the headline to 8 words or fewer, and the sub-line to 28.
  `npm run check` fails if they grow past that.
- **Annotated frame:** `frame.photo` is the concert photo. Each entry in `frame.marks` puts a numbered marker at `x`/`y`
  (percent of the photo's width and height), with its label on the `side` you choose. Keep markers off faces.
- **Show ledger:** built automatically from `projects.ts`. The bar length is the number in each show's first
  `outcomes.verified` line ("54 frames in the final edited set").
- **Copy rules:** `npm run check` also runs `scripts/check-copy.mjs`. It fails on any paragraph over 40 words, on
  stock marketing words (elevate, seamless, passionate…), on emoji, and on a hero that loses your name, role or partners.

