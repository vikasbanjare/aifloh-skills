# Design system

All numbers are inches on a `LAYOUT_WIDE` canvas: **13.333" × 7.5"**. Set `pres.layout = "LAYOUT_WIDE"` before adding any slide, or coordinates past 10" are silently written off-canvas.

## Contents
- [The grid](#the-grid)
- [Vertical zones](#vertical-zones)
- [Type scale](#type-scale)
- [Spacing tokens](#spacing-tokens)
- [Colour rules](#colour-rules)
- [Elevation and surfaces](#elevation-and-surfaces)
- [Charts](#charts)

## The grid

12 columns · 0.667" side margins · 0.2" gutter · 0.81667" column width.

```
x(n)      = 0.667 + (n - 1) × 1.01667      // left edge of column n
width(s)  = s × 1.01667 − 0.2               // width of an s-column span
```

Precomputed — use these rather than recalculating:

| col n | x | span s | width |
|---|---|---|---|
| 1 | 0.667 | 1 | 0.817 |
| 2 | 1.684 | 2 | 1.833 |
| 3 | 2.700 | 3 | 2.850 |
| 4 | 3.717 | 4 | 3.867 |
| 5 | 4.734 | 5 | 4.883 |
| 6 | 5.750 | 6 | 5.900 |
| 7 | 6.767 | 7 | 6.917 |
| 8 | 7.784 | 8 | 7.933 |
| 9 | 8.800 | 9 | 8.950 |
| 10 | 9.817 | 10 | 9.967 |
| 11 | 10.834 | 11 | 10.983 |
| 12 | 11.850 | 12 | 12.000 |

Full-bleed elements (background images, dark bands) ignore the grid and run 0 → 13.333. Everything else lives inside it.

**Workhorse spans:** 12 (full), 6+6 (halves), 7+5 (asymmetric — better than 6+6 for text-plus-visual), 4+4+4 (triad), 3+3+3+3 (quad), 8 (single text column, keeps line length readable).

Never let a paragraph run wider than span 8. Beyond ~90 characters per line the eye loses the return.

## Vertical zones

| Zone | y | height | Use |
|---|---|---|---|
| Safe top | 0.50 | — | Nothing above this line |
| Kicker | 0.55 | 0.28 | Section label, uppercase, optional |
| Headline | 0.90 | 1.00 | The assertion. Two lines max |
| Content | 2.05 | 4.55 | Everything else |
| Footer | 6.75 | 0.25 | Source / page number, optional |
| Safe bottom | 7.00 | — | Nothing below this line |

On a slide with no kicker, start the headline at y 0.70 and content at y 1.90. Keep the choice consistent across the deck — a headline that jumps 0.2" between slides reads as a jitter when you page through.

## Type scale

Six steps. Use five per deck at most.

| Token | pt | Weight | Use |
|---|---|---|---|
| `stat` | 72 | 700 | One hero number. Never two on a slide |
| `display` | 44 | 700 | Cover and section-divider titles only |
| `h1` | 34 | 700 | Slide headline / assertion |
| `h2` | 22 | 600 | Sub-assertion, column heading |
| `h3` | 16 | 600 | Card title, row label |
| `body` | 14 | 400 | Paragraphs and list items |
| `label` | 10 | 600 | Kicker, axis label, footer. Uppercase, `charSpacing: 1.5` |

Line spacing: `lineSpacingMultiple: 1.05` on `stat`/`display`/`h1`, `1.30` on `body`. Headlines set at body line-height look inflated; body set tight looks cramped.

`letterSpacing` is silently ignored by pptxgenjs — the option is `charSpacing`, and its unit is points.

Text boxes carry built-in inset. Set `margin: 0` on any text that must align with a shape, rule, or icon at the same x.

## Spacing tokens

Pick **one** gap value for a deck and hold it:

| Token | in | Use |
|---|---|---|
| `xs` | 0.10 | Label to the value it labels |
| `sm` | 0.20 | Inside a card, between stacked text runs |
| `md` | 0.30 | Between cards in a row (matches the gutter closely enough to read as intentional) |
| `lg` | 0.50 | Between major blocks; minimum edge margin |
| `xl` | 0.80 | Around a hero stat, or above a closing line |

Card internal padding: 0.30 all sides. Below 0.25 the card looks shrink-wrapped.

## Colour rules

Every direction resolves to five roles. Never introduce a sixth.

| Role | What it does |
|---|---|
| `surface` | The slide background. Carries 60–70% of visual weight |
| `surfaceAlt` | Cards, bands, table stripes. A near-neighbour of `surface`, not a new hue |
| `ink` | Primary text |
| `muted` | Secondary text, captions, axis labels |
| `accent` | The single thing you want seen first |

Rules that actually hold decks together:

- **Accent appears once or twice per slide.** A number, a bar, a highlighted word — not the headline, the icon, the underline, and the card border all at once.
- **`surfaceAlt` must be a tint of `surface`, not a competing colour.** Light directions: `surface` white, `surfaceAlt` 2–4% grey. Dark directions: `surfaceAlt` = white at 6–8% over `surface`.
- **Hairlines, not borders.** If a divider is needed at all, use `ink` at 8–12% opacity, 0.5–1pt. Never a 2pt coloured rule.
- **Contrast floors:** body text ≥ 4.5:1, text ≥ 24pt ≥ 3:1, and any chart element carrying meaning ≥ 3:1 against its background. Verify the pair rather than assuming; light accents on white fail constantly.
- **Colour-code only when the code repeats.** Four categories in four colours is fine if those four colours mean the same four things on every slide. If not, use one hue and vary tint.

pptxgenjs hex takes **no `#` and no alpha** — `color: "1B1F27"`. Both `"#1B1F27"` and 8-digit hex corrupt the file. For translucency use `transparency: 0-100` on fills, `opacity` on shadows; each is ignored on the other.

## Elevation and surfaces

Depth on light directions comes from shadow, never from an outline plus a shadow.

```js
shadow: { type: 'outer', blur: 18, offset: 3, angle: 90, color: '0B1220', opacity: 0.10 }
```

Build a fresh options object for every `add*` call — pptxgenjs mutates them in place and a shared object silently corrupts the second use. Shadow `offset` must be ≥ 0; to throw a shadow upward use `angle: 270` with a positive offset.

Dark directions get depth from surface tint, not shadow — a shadow on near-black is invisible and just costs render time.

Rounded corners only on `ROUNDED_RECTANGLE` (`rectRadius: 0.06`); `rectRadius` does nothing on `RECTANGLE`.

## Charts

Keep charts native (`addChart`) — a chart pasted as an image is the second-loudest amateur signal after misalignment.

Defaults to override every time, since pptxgenjs ships a dated look:

- `chartColors` from the palette — accent for the series that matters, `muted` for the rest
- `showValue: true` with `dataLabelPosition` set; on stacked bars only `ctr` / `inEnd` / `inBase` are legal (`outEnd` corrupts the file)
- `showLegend: false` for single-series; label the series in the headline instead
- `valGridLine: { color: <hairline>, size: 0.5 }`, `catGridLine: { style: 'none' }`
- `catAxisLabelColor` / `valAxisLabelColor` set to `muted`, size 10
- Kill the chart title — the slide headline is the title

One chart per slide. Two charts means two assertions, which means two slides.
