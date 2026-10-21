# Creative direction: "Concert photos that sell the next show"

## The idea
Pritam's real asset is the archive: concert photographs Pritam shot, signed "Pritam Haldar Photography", of Fakira, Cactus,
Jeet Ganguly, Fossils, Monali Thakur and Anupam Roy. The site treats each of those nights as a marketing case study,
built on a single argument: *a concert photo is a marketing asset with a deadline.* Every frame works for one of
three audiences: the artist (the face), the sponsor (the stage) and the promoter (the crowd).

The positioning sits between a photographer's portfolio and a marketer's CV, which is why it suits marketing,
event and partnership roles as well as photography work.

## Principles applied
Drawn from general familiarity with editorial and photographer portfolios. The reference sites suggested in the brief
(Awwwards, Behance, websitebuilderexpert.com, founderjar.com) were **not** opened during this build, and nothing was
copied from any site. The principles used:
- Lead with one confident sentence and one great image instead of a skills grid. Since the first-3-seconds pass
  (`docs/research/`), that sentence classifies first ("Concert photos that sell the next show.") and the image is a real
  frame annotated with who each part of it is for.
- Use type as the main graphic element and let photos carry the colour.
- Number things like a printed index (No. 02, 03, …) so the page reads as a publication.
- Case studies should read as stories (context, challenge, idea, execution, outcome, lesson), not galleries.
- Hiring actions should always be one tap away, especially on mobile.

## System
- **Paper** `#F4EFE4`, **ink** `#171513`, **grey** `#6D665C`, one accent: **stage red** `#C4361C`, taken from the
  red and orange rig light in the Fakira, Fossils and Cactus sets. The near-black `#100F0E` is used for the
  "approach" section and footer, like a dark stage.
- **Type:** two faces, chosen from what the audience's own sites use (see `docs/TYPE_RESEARCH.md`). **League Gothic** for
  headlines (film-credit / gig-poster caps, as on Adweek) and **Archivo** for everything else, labels included. Both are
  self-hosted through Fontsource (OFL licence).
- **Layout:** a 12-column grid that is deliberately broken. The hero headline overlaps the photo column, the
  selected-work rows alternate between three compositions, the approach cards step down, and the contact sheets are
  staggered. Corners are square, there are no gradients, no glass and no cards.
- **Motion:** short fade/rise reveals, a 1.025 image scale on hover, an underline that slides in the nav, a 2 px
  scroll-progress line, and a pulsing availability dot. All of it is off under `prefers-reduced-motion`, and nothing
  is hidden if JavaScript doesn't run.

## Photography handling
- 254 originals reviewed, 84 selected (13–15 per artist). Bursts, near-duplicates, very dark frames and one
  960 px file were left out. See `docs/asset-inventory.csv`.
- No colour, exposure or "enhancement" edits: the frames are already graded in Lightroom, and re-processing would
  change Pritam's look. Derivatives are only resized (Lanczos3) and converted to sRGB. They were checked against
  the originals at 1:1 and are visually identical.
- The Anupam Roy set only exists as 2048 px web exports, so it is shown at that size and not upscaled.
- Pritam's signature watermark is kept on every frame.
