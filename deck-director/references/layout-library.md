# Layout library

Fourteen archetypes. All coordinates in inches on 13.333 × 7.5, taken from the grid in `design-system.md`. Coordinates are `{ x, y, w, h }`.

Rules of use:
- Tag an archetype to every slide during structuring, before any styling.
- Never run the same archetype three slides in a row.
- A deck of 12–20 slides should use at least six different archetypes.
- If content doesn't fit an archetype, the content is too long. Cut it; don't stretch the layout.

## Contents
1. [cover](#1-cover) · 2. [section-divider](#2-section-divider) · 3. [statement](#3-statement) · 4. [stat-hero](#4-stat-hero) · 5. [stat-row](#5-stat-row) · 6. [triad-cards](#6-triad-cards) · 7. [quad-grid](#7-quad-grid) · 8. [split-visual](#8-split-visual) · 9. [half-bleed](#9-half-bleed) · 10. [comparison](#10-comparison) · 11. [process-flow](#11-process-flow) · 12. [chart-focus](#12-chart-focus) · 13. [list-rows](#13-list-rows) · 14. [closing](#14-closing)

---

## 1. cover
Inverted surface (dark if the deck is light, and vice versa). No logo lockup bigger than 0.5" tall.

| Element | x | y | w | h | Type |
|---|---|---|---|---|---|
| Kicker | 0.667 | 4.10 | 5.900 | 0.28 | `label` accent |
| Title | 0.667 | 4.45 | 8.950 | 1.40 | `display` |
| Meta line | 0.667 | 6.00 | 5.900 | 0.30 | `body` muted |

Title sits low, not centred — the top two-thirds carry either emptiness or one full-bleed image at 20% overlay. Centred cover titles read as template.

## 2. section-divider
Inverted surface, number + name only. No body copy, ever.

| Element | x | y | w | h | Type |
|---|---|---|---|---|---|
| Section no. | 0.667 | 2.60 | 1.500 | 0.90 | `display` accent |
| Section name | 0.667 | 3.55 | 8.950 | 0.90 | `h1` |

## 3. statement
One sentence, nothing else. Use for the thesis, the turn, or a quote. Maximum two per deck.

| Element | x | y | w | h | Type |
|---|---|---|---|---|---|
| Sentence | 1.684 | 2.40 | 9.967 | 2.20 | `display` (drop to 36pt past 90 chars) |
| Attribution | 1.684 | 4.80 | 5.900 | 0.30 | `label` muted |

## 4. stat-hero
One number carrying the slide. The most under-used layout in business decks.

| Element | x | y | w | h | Type |
|---|---|---|---|---|---|
| Kicker | 0.667 | 0.55 | 5.900 | 0.28 | `label` |
| Headline | 0.667 | 0.90 | 6.917 | 1.00 | `h1` |
| Stat | 0.667 | 2.60 | 4.883 | 1.30 | `stat` accent |
| Stat caption | 0.667 | 3.95 | 4.883 | 0.60 | `body` muted |
| Support text | 6.767 | 2.70 | 5.900 | 2.20 | `body` |

## 5. stat-row
Three or four numbers of equal rank. Not five.

Three across, span 4 each: x = 0.667 / 4.734 / 8.800, w = 3.867.
Four across, span 3 each: x = 0.667 / 3.717 / 6.767 / 9.817, w = 2.850.

Per cell (relative to cell x): number `stat` at y 3.00 h 1.10; label `label` at y 4.15 h 0.50. Hairline dividers between cells at 12% ink, full cell height, or nothing at all.

## 6. triad-cards
Three parallel ideas. The workhorse.

Cards: y 2.20, h 3.60, span 4 → x = 0.667 / 4.734 / 8.800, w = 3.867. Fill `surfaceAlt`, `ROUNDED_RECTANGLE`, `rectRadius: 0.06`, padding 0.30.

Inside each card (offsets from card x + 0.30, card y + 0.30):
- Icon 0.42 × 0.42, or a `display`-weight numeral in accent
- Card title `h3`, 0.55 below icon top
- Body `body`, ≤ 22 words, starts 0.30 below title

Cards must be equal height. If one has more text, cut it — do not let cards ragged-bottom.

## 7. quad-grid
Four items, 2 × 2. Use when the four have a relationship (axes, quadrants, stages); otherwise use 5 or 6.

Cells: x = 0.667 / 6.767, w = 5.900; y = 2.10 / 4.50, h = 2.20. Gap 0.20 vertical, 0.20 horizontal.

## 8. split-visual
Text and one visual. Use 7+5 asymmetric, not 6+6 — equal halves look undecided.

| Element | x | y | w | h |
|---|---|---|---|---|
| Kicker | 0.667 | 0.55 | 5.900 | 0.28 |
| Headline | 0.667 | 0.90 | 6.917 | 1.00 |
| Body | 0.667 | 2.20 | 6.917 | 2.40 |
| Visual | 8.183 | 0.90 | 4.483 | 5.20 |

Mirror it (visual left, text right) on alternating slides to break rhythm.

## 9. half-bleed
Image runs off one edge, full height. Highest-impact layout available; costs nothing but a good image.

| Element | x | y | w | h |
|---|---|---|---|---|
| Image | 6.900 | 0 | 6.433 | 7.50 |
| Headline | 0.667 | 2.30 | 5.400 | 1.60 |
| Body | 0.667 | 4.10 | 5.400 | 1.60 |

Never place text over the image unless you first lay a solid or 60%+ scrim over that region — text directly on photography fails contrast almost every time.

## 10. comparison
Before/after, us/them, old/new. Two columns, deliberately unequal in visual weight — the winning side gets the accent, the other gets `muted`.

Columns: x = 0.667 and 6.900, w = 5.767. Header row `h2` at y 2.10 h 0.45. Rows start y 2.75, height 0.62 each, hairline between rows at 10% ink. Maximum five rows.

## 11. process-flow
Sequential steps, 3–5. Also serves as a timeline when the step labels are dates.

Horizontal band: y 3.00, h 1.90. Steps span 3 (four steps): x = 0.667 / 3.717 / 6.767 / 9.817, w = 2.850. Numeral in accent at `h2` above each step title.

Connector: a single hairline at y 3.35 running the full band width, drawn **behind** the numerals. Do not use arrow shapes between every step — chevron chains are a template tell.

## 12. chart-focus
The chart is the argument. Give it room.

| Element | x | y | w | h |
|---|---|---|---|---|
| Headline (states the finding) | 0.667 | 0.70 | 8.950 | 0.90 |
| Chart | 0.667 | 1.90 | 8.950 | 4.60 |
| Read-out / so-what | 9.817 | 1.90 | 2.850 | 4.60 |

The read-out column is 2–3 short lines saying what the chart means. A chart without a stated conclusion makes the audience do the work, and they won't.

## 13. list-rows
Replaces the bulleted list. Five rows maximum.

Rows: x 0.667, w 12.000, h 0.72, starting y 2.20, gap 0.20 → y = 2.20 / 3.12 / 4.04 / 4.96 / 5.88.

Per row: icon or numeral 0.40 × 0.40 at row x; label `h3` at x + 0.70; description `body` on the same line at x + 4.40, muted. Keeping label and description on one baseline reads faster than stacking them.

## 14. closing
Inverted surface, matching the cover. One ask.

| Element | x | y | w | h | Type |
|---|---|---|---|---|---|
| Ask | 0.667 | 3.00 | 8.950 | 1.20 | `display` |
| Next step | 0.667 | 4.35 | 6.917 | 0.60 | `h2` accent |
| Contact | 0.667 | 6.20 | 5.900 | 0.30 | `body` muted |

"Thank you" is not a closing slide. The last thing on screen during Q&A should be the ask or the key number.
