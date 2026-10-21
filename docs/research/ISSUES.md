# Issue triage: first-3-seconds pass

**Severity:**
- **P0** blocks the goal. The visitor cannot classify Pritam in the first screen.
- **P1** weakens the proof or the scannability.
- **P2** is polish.

**Status:** `open` · `planned` (in the XML plan) · `deferred` (needs input from Pritam).

| ID | Sev | Area | Evidence | Fix | Plan task | Status |
| --- | --- | --- | --- | --- | --- | --- |
| FTS-01 | P0 | Home hero copy | Fold audit: the 15 visible words contain no role, no names and no action | New eyebrow, H1 and sub-line, as in the copy diff | T3 | planned |
| FTS-02 | P0 | Home hero visual | The first screen shows a portrait (still loading), not the work | Annotated concert frame with three callouts; portrait becomes a pass inset | T4 | planned |
| FTS-03 | P0 | Home hero proof | Artists and companies only appear below the fold | Artist line plus companies in the sub-line, inside the hero | T3 | planned |
| FTS-04 | P0 | Home hero actions | No button in the first screen at 1440×900 or 375×812 | Primary "See the six shows" and secondary "WhatsApp me" in the fold | T3 | planned |
| FTS-05 | P1 | Home proof strip | Bare numbers 6 / 254 / 2 with no visual and no per-show context | Show ledger: filmstrip bars sized by frame count, built from real frames | T5 | planned |
| FTS-06 | P1 | Home approach band | Three ~25-word paragraphs repeat what the hero now shows | Cut to ≤ 16 words each and retitle "Three layers, every song" | T6 | planned |
| FTS-07 | P1 | Case-study header | Spec facts sit below a full-width cover | Spec line above the cover; frames count from verified outcomes | T7 | planned |
| FTS-08 | P1 | About copy | Paragraphs of 68 and 64 words | Split into ≤ 40-word paragraphs, same facts | T8 | planned |
| FTS-09 | P1 | Home intro paragraph | 44 words | Removed. The sub-line replaces it. | T3 | planned |
| FTS-10 | P2 | Meta | Role reads "Concert photography & show marketing" | `site.role` becomes "Concert photographer & event marketer"; description matches the sub-line | T2 | planned |
| FTS-11 | P2 | Accent discipline | Red appears on the stamp, the H1 and the button in one view | Stamp removed; red only on the outcome words and the primary button | T4 | planned |
| FTS-12 | P2 | Tooling | No automated check for copy rules | `scripts/check-copy.mjs` added to `npm run check` | T1 | planned |
| FTS-13 | P2 | Positioning label | "Event marketer" is not confirmed by Pritam | Added to TO_VERIFY | T9 | planned |
| FTS-14 | P2 | OG image | The share card does not use the new hero | Regenerate the share card once the copy is approved | none | deferred |
| FTS-15 | P2 | Turnaround and reach | Buyers look for these (Candid Shutters spec sheet), but there is no data | Ask Pritam for real turnaround times and any reach numbers | none | deferred |
