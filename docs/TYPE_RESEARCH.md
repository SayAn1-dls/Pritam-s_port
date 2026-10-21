# Type research: what the audience reads, and what that means for this site

Target audience: people who hire for **marketing, videography, photography and production management**, plus the
**agencies** that commission that work. These are agency creatives, brand and marketing leads, producers, directors and
fellow shooters.

## 1. Where they spend time, and the fonts those sites use

Font families were pulled from each site's live HTML and CSS on 22 Oct 2026 (`font-family` declarations, counted).

| Site | Who reads it | Fonts found | Notes |
| --- | --- | --- | --- |
| itsnicethat.com | Agency creatives, designers, art directors | **Labil Grotesk** + **Bradford** | Both commercial (Kobi Benezri / Lineto) |
| adweek.com | Marketing and advertising people | **League Gothic** (headlines), **Geist**, **Source Serif 4** | League Gothic is free (OFL): a 1903 American gothic, a staple of film credits and posters |
| vimeo.com | Videographers, editors, directors | **ABC Repro** (Dinamo), Inter Tight fallback | Commercial |
| shots.net | Ad and production industry (commercials, music video) | **Brother 1816** | Commercial; an industrial 19th-century grotesque |
| nofilmschool.com | Indie filmmakers and videographers | **Figtree** | Free |
| frame.io | Post-production and producers | **Inter** | The default most anti-slop guides warn against |
| directorsnotes.com | Directors | Montserrat, Open Sans | Generic |
| awwwards.com | Digital agencies | "Universal" (custom) | — |
| Behance, Cargo, D&AD, Ads of the World, LBB, The Call Sheet, Campaign | — | Not readable (rendered client-side or behind variables) | — |

**Pattern:** the publications this audience actually trusts (It's Nice That, shots, Vimeo, Adweek) use
**characterful grotesques with a historical or industrial edge** (Labil, Repro, Brother 1816), plus **condensed gothics
for headlines** (League Gothic). The generic sites use Inter, Montserrat and Open Sans, which are exactly the
"invisible defaults" the anti-slop projects flag.

## 2. What the anti-slop open-source projects say about type

- **Taste Skill** (github.com/leonxlnx/taste-skill, `references/type.md` and `tells.md`): its rules come from a measured
  study of 247 sites.
  - Use two faces at most, each with one job.
  - Size contrast is the main lever: the strongest sites set their largest type around 8.4vw.
  - Set all-caps display with tracking of 0 to +0.03em and leading around 0.9.
  - No outline strokes, gradients or shadows on display type.
  - No accent-coloured or italic word inside a headline ("one face, one colour").
  - Italic is not decoration.
  - It bans: mono micro-labels, `01 / 02` index numbering, tiny tracked uppercase captions, decorative pulsing status
    dots, and agency micro-meta ("Vol. 2026").
  - The repo itself notes that several of these bans are the owner's taste: some of them appear *more* often on
    top-scored award sites.
- **Hallmark** (Nutlope/hallmark slop gates): at most three families (display + body + optional outlier), no italic
  headings, all-caps leading of at least 1.0, and Inter, Roboto and Open Sans banned unless deliberately chosen.
- **Impeccable-derived `typeset` skills** (skills.sh): treat Inter, Roboto, Arial, Open Sans and system fonts as
  "invisible defaults" to question, and say more than 2–3 families is almost always a mess.
- **shadcn / tweakcn theme collections**: mostly Inter, Poppins, Outfit, DM Sans, Montserrat and Playfair. These are useful
  as a list of what *not* to pick if you want to avoid looking like a template.

## 3. Decision for this site

| Role | Face | Why |
| --- | --- | --- |
| Headlines, numbers, artist names | **League Gothic** | It's on Adweek, read by the agency and marketing audience, and it comes from the film-credit and gig-poster tradition, which fits a concert shooter and producer. It reads as "poster", not "AI landing page". Free (OFL). |
| Everything else, labels included | **Archivo** (variable) | A grotesque revival of 19th-century American type: the same lineage as Brother 1816 (shots.net) and close in spirit to Labil and Repro, all of which are paid fonts. Free (OFL). |

Changes made to follow the research:
- Anton and JetBrains Mono removed: two faces only, and no monospace "technical" voice.
- Outlined and red accent words removed from headlines. Red is kept for the stamp and buttons.
- Italic taglines are now roman weight 600.
- Removed the index numbering (No. 02, 01 —, #001), the "Vol. 2026" line, the eyebrow line above the hero, and
  the pulsing status dot.
- Labels are sentence case at 14–16px instead of tiny tracked caps.
- The hero is set larger (up to about 10.6vw) so it gets its punch from scale, not effects.

Thin 1px dividers were then replaced: section starts get a 6px ink bar, list separators became spacing or a tone fill. Only form fields and buttons keep borders.

## 4. If budget allows later
Commercial faces the audience's own sites use: **Brother 1816**, **ABC Repro / ABC Diatype** (Dinamo) and
**Labil Grotesk**. Free alternatives worth trying: **Familjen Grotesk**, **Schibsted Grotesk**, **Big Shoulders Display**,
and the Fontshare families (General Sans, Switzer, Cabinet Grotesk).
