# Still to supply or confirm

The site only states what the files and your message confirm. These gaps are hidden or written around until you fill them.

## Please confirm
1. **Name spelling.** The site uses **Pritam Haldar**, matching the photo watermark, the email address and the
   LinkedIn URL. Your message said "Halder". Change `name` in `src/data/site.ts` if Halder is correct.
2. **Which production company produced which show.** The site says you work with Eventures Entertainment and Hottogol,
   but doesn't attach either company to a specific concert. Add `company` per project in `src/data/projects.ts`.
3. **Your role on each show.** Currently "Concert photographer", based on your signature on every frame. If you also
   handled marketing, sponsorship or operations on a show, add it to `role` and `execution`.
4. **Dates and venues.** Fossils and Monali Thakur are dated 2023 from the camera data. The Cactus, Fakira and Jeet
   Ganguly cameras had their clock set to the year 2000, and the Anupam Roy files have no date, so those years are hidden.
   The Fossils stage branding reads "Englishbazar"; confirm before it is used as a venue.
5. **Case-study wording.** The `context`, `challenge`, `idea`, `execution` and `notes` text was drafted from what
   the photos show. Rewrite anything that doesn't match how you actually worked.
6. **About page wording**, including the line about moving further into marketing. Make sure it sounds like you.
7. **Monali Thakur files** list "Rupanwaya Karmakar" as the creator in their metadata, alongside your watermark.
   If someone else edited or co-shot that set, add a `credit` and it will show in captions.
8. **Positioning label.** The home page and page titles now call you a **"Concert photographer & event marketer"**
   (`site.role` in `src/data/site.ts`). It matches the hire categories, but change it if you'd describe yourself differently.
9. **Sponsor branding.** The Jeet Ganguly set shows a school's branding and phone numbers on the LED screen. It is
   public stage advertising, but check the sponsor is happy to be shown.

## Please supply
- **Resume PDF** → `public/resume.pdf`, then set `resume: '/resume.pdf'`.
- **Instagram** URL (optional) and the **location** you want shown (optional).
- **Verified outcomes**: shows covered for each company, any sponsorship amounts you worked on (and whether they
  were team totals), and any reach or engagement numbers you can document.
- **Final domain**, then update `site.url`, `astro.config.mjs` and `public/robots.txt`.
- Optional **Formspree endpoint**, if you want the form to send without opening an email app.
