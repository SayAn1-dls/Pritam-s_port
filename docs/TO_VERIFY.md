# Still to supply or confirm

The site only states what the files and your message confirm. These gaps are hidden or written around until you fill them.

## Please confirm
1. **Name spelling.** The site uses **Pritam Haldar**, matching the photo watermark, the email address and the
   LinkedIn URL. Your message said "Halder". Change `name` in `src/data/site.ts` if Halder is correct.
2. **Which production company produced which show.** The site says you work with Eventures Entertainment and Hottogol,
   but doesn't attach either company to a specific concert. Add `company` per project in `src/data/projects.ts`.
3. **Your role on each show.** Currently "Concert photographer", based on your signature on every frame. If you also
   handled marketing, sponsorship or operations on a show, add it to `role` and `execution`.
4. **Dates and venues.** Years now follow the dates you supplied (October 2026): Fakira, Cactus and Jeet Ganguly 2026,
   Fossils and Monali Thakur 2024, Anupam Roy 2023. Note the Fossils and Monali Thakur camera data says December 2023;
   if the shows were on New Year's Eve or the camera clock was off, 2024 may still be right. Please double-check.
   The Fossils stage branding reads "Englishbazar"; confirm before it is used as a venue.
5. **Case-study wording.** Checked line by line in October 2026: every sentence now describes what the photos show or
   what the file metadata says (camera, date, Lightroom/Photoshop). The `idea` and `notes` lines describe an approach and
   an opinion in your voice. Rewrite anything that doesn't match how you actually worked.
6. **About page wording**, including the line about moving further into marketing. Make sure it sounds like you.
7. **Monali Thakur files: please confirm before sharing (most important).** All 31 files carry your signature, but their
   metadata says they were shot on a **Canon EOS 200D II** with the camera's owner field set to **"Rupanwaya Karmakar"**.
   Every other set was shot on Nikon cameras (D5300, Z 6II) with no owner name. If Rupanwaya shot or co-shot this set,
   add `"credit": "Rupanwaya Karmakar"` to those photos in `src/data/photos.json` (it then shows in captions), or set the
   project to `draft: true` to hide it.
7b. **Anupam Roy files** have no camera metadata at all (they look like 2048 px Facebook downloads). Your signature is on
   them; confirm they are yours.
8. **Positioning label.** The site calls you a **"Concert and Artist Photographer"** (`site.role` in `src/data/site.ts`).
   Sponsor, promoter and LinkedIn references were removed; public contact is WhatsApp and Instagram only.
9. **Stage screens in photos.** Some Jeet Ganguly frames show a school's advertising on the LED screen behind the stage.
   The site text no longer mentions it; the photos are shown as taken.

## Please supply
- **Resume PDF** → `public/resume.pdf`, then set `resume: '/resume.pdf'`.
- **Instagram profile URL (needed).** It is one of the two contact options, but no URL was supplied and none could be found
  online. Set `instagram` in `src/data/site.ts` (e.g. `https://www.instagram.com/<handle>/`); the links appear everywhere at once.
- The **location** you want shown (optional).
- **Verified outcomes**: shows covered for each company, any sponsorship amounts you worked on (and whether they
  were team totals), and any reach or engagement numbers you can document.
- **Final domain**, then update `site.url`, `astro.config.mjs` and `public/robots.txt`.
- Optional **Formspree endpoint**, if you want the form to send without opening an email app.
