# Verification: first-3-seconds pass

Branch `feat/first-3-seconds`, checked 22 October 2026 against the pass and fail criteria in `docs/plan/first-3-seconds.plan.xml`.

## P1: first viewport (fold audit)
Each size is a fixed-size frame of the built site. "Visible" means the element's box intersects the first viewport.

| Viewport | Name, photographer, marketer, concert, both partners | Artists in view | Buttons in view | Work photo in view | Result |
| --- | --- | --- | --- | --- | --- |
| 1920 × 1080 | all present | 6 | 2 | yes | PASS |
| 1440 × 900 | all present | 6 | 2 | yes | PASS |
| 1280 × 720 | all present | 6 | 2 | yes | PASS |
| 1024 × 768 | all present | 6 | 2 | yes | PASS |
| 768 × 1024 | all present | 6 | 2 | yes | PASS |
| 390 × 844 | all present | 6 | 2 | yes | PASS |
| 375 × 812 | all present | 6 | 2 | yes | PASS |
| 375 × 667 | all present | 6 | 2 | yes | PASS |
| 320 × 568 | all present | 6 | 2 | yes | PASS (after the short-phone rule) |

**Before** (`main` @ 76dce0f), at both 1440 × 900 and 375 × 812, the first screen showed 15 words:
- no role
- no artist
- no partner
- no button

## P2: copy lint (`scripts/check-copy.mjs`)
- **The gate works.** On the baseline it failed 4 times: paragraphs of 69, 64 and 44 words, and no hero contract.
- **After the changes:** 13 pages, 0 failures.
- **Limits it enforces:**
  - H1 at most 8 words, and it must contain a category noun. The H1 is 7 words.
  - Sub-line at most 28 words. The sub-line is 24.
  - No paragraph over 40 words.
  - No banned words, no emoji, no placeholder text.

## P3: research alignment
| Hero element | Teardown rule | Source pattern |
| --- | --- | --- |
| "Concert photos that sell the next show." | 1: the H1 classifies | Knowvia, Rishav, Schbang |
| Annotated Cactus frame: face, stage, crowd | 2: the work is shown doing its job | Knowvia's example card |
| Six artists and both partners in the first screen | 3: names carry the authority | Anurag Bansal, Schbang |
| Ledger bars made of each show's own frames | 4: infographics drawn from the data | Knowvia stat cards |
| Counts computed from `projects.ts` | 5: every number has a source | Knowvia |
| Case-study spec line above the cover | 6: open with the spec | Candid Shutters, Schbang |

## P4: layout
- **No sideways scroll:** 13 pages × 8 widths (320, 375, 390, 768, 1024, 1280, 1440, 1920) = 104 renders, 0 with horizontal overflow.
- **H1 wrapping:** at most 3 lines at every tested width, using balanced wrapping.
  - Artist names never split across lines.
  - "254 edited frames" stays together.
- **Callout placement:** markers measured from the DOM and drawn onto the photo.
  - No marker or label covers a face, a performer, or the photographer's watermark.
  - On phones the labels become a numbered legend under the photo.
- **Photos:** no image is stretched. The hero frame keeps its native 16:10 ratio, and the ledger thumbnails are cropped 3:2 from the real frames.

## P5: engineering
- `astro check`: 0 errors, 0 warnings, 0 hints.
- Link check: 1453 internal references, 0 broken.
- **No new dependencies:** `package.json` only gains the copy-lint step.
- No `console` statements in `src/`.
- **Works without JavaScript:** the hero and the ledger have no reveal class and no `hidden` attribute, so they render on first paint.
- **No new motion:** only colour transitions on hover.
- **Modular:**
  - All copy and the infographic data live in `src/data/home.ts`.
  - There are three components in `src/components/home/`.
  - The frame-count helper `editedFrames()` lives in `projects.ts` and is shared by the home page and the case studies.

## P6: honesty
- **Numbers:** 254, 45/51/54/38/31/35 and "six" are all computed from `projects.ts` → `outcomes.verified`.
- **Partners:** the companies appear as "with Eventures Entertainment and Hottogol" and are never attached to a specific show.
- **No turnaround, reach or result claims.** The callouts say who a part of the frame is *for*, not what it achieved.
- **The "event marketer" label** is in TO_VERIFY #8 for Pritam to confirm.

## Fail criteria
None was triggered:
- no bento grid, glass, gradient blob, emoji or flat icon
- no new colour or font
- nothing gated behind an animation
- no typed-in numbers
- originals untouched (only existing derivatives are used)

## Not verified
- Real devices (only emulated viewports in the browser pane).
- Lighthouse and Core Web Vitals.
- Comprehension with real people. The 80–90% target is inferred from the fold audit. A 5-second test with three or four people would confirm it.
