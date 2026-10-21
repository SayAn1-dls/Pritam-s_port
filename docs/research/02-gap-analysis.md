# Gap analysis: the current site compared with the teardown rules

Branch `research/gap-analysis`, built on `research/assessment`. Baseline is `main` @ `76dce0f`.

## The 3-second test, measured
Method: render the home page, then collect every text node inside `<main>` whose box intersects the first viewport. The snippet is `scripts/fold-audit.browser.js`.

| Viewport | Text a visitor can read without scrolling (all of it) |
| --- | --- |
| 1440 × 900 | "The show lasts / three hours. / The pictures sell the next one. / Shoots it. / Sells it." |
| 375 × 812 | The same 15 words |

**What a first-time visitor can tell from that:**

| Question in the visitor's head | Answered in the first screen? |
| --- | --- |
| Who is this? | Only the small logo text "Pritam Haldar" in the header |
| What do they do? | No. "Photographer", "concert" and "marketing" are all absent. |
| Is it real, and who trusts them? | No artist names, no production companies, no work. The portrait is still a blank box while it loads. |
| What can I do here? | No button in view. |

**Estimated comprehension is about 20–30%:** "something about shows and pictures". The target is 80–90%.

## Rule by rule
| # | Teardown rule | Current build | Gap | Severity |
| --- | --- | --- | --- | --- |
| 1 | The H1 classifies (category noun first) | H1 is a riddle: "The show lasts three hours. The pictures sell the next one." | The H1 has to carry "concert photos" and the outcome in ≤ 8 words | **P0** |
| 2 | Show the work doing its job beside the H1 | Portrait plus a stamp: a person, not the work | No concert frame in the first screen. The "three audiences" idea is buried in section 4. | **P0** |
| 3 | Names in the first screen | Artists and companies only appear below the fold (intro paragraph and proof strip) | Move them into the hero | **P0** |
| 4 | Infographics drawn from data, using real frames | Proof strip is three bare numbers (6 / 254 / 2) | Numbers with no picture: forgettable, and "254" has no context | P1 |
| 5 | Every number sourced and computed | Already computed from `projects.ts` and `photos.json` | Keep it. Show what each number counts ("edited frames", per show). | ✓ |
| 6 | Result-led case studies with a spec table first | Case-study H1 = artist name, then a full-width cover; the facts list sits *below* the cover | Move the spec (role, frames, type, production, year) above the cover | P1 |
| 7 | Scannable: ≤ 40-word paragraphs, sentence headings | Two About paragraphs are 68 and 64 words; the home paragraph is 44 | Split or rewrite | P1 |
| 7b | Nothing behind an animation | Hero has no reveal (good). Below-the-fold sections use `.rv`, with a 2.5 s safety net. | Keep the hero and the first infographic free of `.rv` | ✓ / guard |
| 8 | One primary and one secondary action | Hero buttons exist but sit below the fold | Bring them into the first screen | **P0** |
| 9 | Meta title and description classify too | `<title>` "Pritam Haldar — Concert photography & show marketing" | Fine, but "photographer & event marketer" is the role recruiters search for | P2 |
| 10 | One accent per view | Red is used on the H1 `em`, the stamp and the button | Drop the stamp. Keep red for the outcome words and the primary button only. | P2 |

## Copy diff: before and after
```diff
- [hero H1]  The show lasts three hours. The pictures sell the next one.
+ [eyebrow]  Pritam Haldar · Concert photographer & event marketer
+ [hero H1]  Concert photos that sell the next show.
+ [sub-line] I shoot live shows with Eventures Entertainment and Hottogol, framing every set for
+            the artist's feed, the sponsor's report and the promoter's next poster.
+ [proof]    Shot live: Fakira · Cactus · Jeet Ganguly · Fossils · Monali Thakur · Anupam Roy
+ [actions]  See the six shows ↓     WhatsApp me →

- [visual]   Portrait + "Shoots it. Sells it." stamp
+ [visual]   One real frame (Cactus, open air) annotated: the face → the artist's post,
+            the stage → the sponsor's proof, the crowd → the next poster.
+            Portrait as a photo-pass inset ("Pritam Haldar, photo") on the frame.

- [proof]    6 · 254 · 2 (bare numbers)
+ [ledger]   "Six artists. 254 edited frames." Each show is a filmstrip bar whose length is its
+            frame count, built from that show's own photos, linking to the case study.

- [case]     H1 artist → cover → facts
+ [case]     H1 artist → spec line (role · frames · type · production · year) → cover
```

Why each change:
- **H1:** passes Harry Dry's test. You can picture "concert photos"; the "next show" outcome can be checked by a promoter; and the line belongs to someone who shoots concerts *for marketing*.
- **Sub-line:** it names the three audiences, which are exactly the three callouts on the frame. The words and the picture say the same thing (dual coding).
- **Proof line:** recognisable names do the authority work, the Anurag Bansal pattern.

## Honesty checks on the new copy
- **"With Eventures Entertainment and Hottogol"** is confirmed by the user. It does *not* say which company produced which show; that is still on TO_VERIFY #2.
- **"Event marketer"** is a positioning label that matches the existing site ("show marketing") and the hire categories. It is added to TO_VERIFY for Pritam to confirm.
- **All numbers** come from `projects.ts` (`outcomes.verified`) and `photos.json`.
- **No turnaround times or reach figures are claimed.**

See `ISSUES.md` for the triaged list and `../plan/first-3-seconds.plan.xml` for the build plan.
