# Style directions

"Modern" is not a direction — it's a mood word that produces grey slides with a blue accent. Pick one of these and commit. Each is internally consistent and each looks different from the others in a thumbnail grid, which is the real test.

Contrast ratios below are computed against that direction's own surface. Where a colour fails 4.5:1 it is listed as **graphics-only** — meaning fills, bars, rules, and ≥24pt display type, never body copy. Ignoring this is how decks become unreadable on a projector.

## Contents
- [1. Editorial Mono](#1-editorial-mono) — publishing, thought leadership, keynote
- [2. Soft Depth](#2-soft-depth) — product, SaaS, internal review
- [3. Dark Premium](#3-dark-premium) — investor, launch, brand film
- [4. Studio Night](#4-studio-night) — AI-Floh house direction
- [Choosing](#choosing)

---

## 1. Editorial Mono

Magazine logic: enormous headlines, one accent, no cards, generous white. Nothing to hide behind — needs strong writing.

| Role | Hex | Contrast vs surface |
|---|---|---|
| `surface` | `FAFAF8` | — |
| `surfaceAlt` | `F0F0EC` | — |
| `ink` | `0E0E10` | 19:1 |
| `muted` | `6A6A6E` | 5.4:1 |
| `accent` | `D9401F` | 4.3:1 — **graphics-only** |

Signature moves: headline set to span 9 and allowed to break to two lines; hairline rules at 10% ink between sections; page numbers as `label`; zero card fills. Cards break this direction — if you find yourself boxing things, you've switched directions.

## 2. Soft Depth

Light, calm, product-like. White cards floating on a cool grey field. The safest direction for internal and client-facing work, and the easiest to execute well.

| Role | Hex | Contrast vs surface |
|---|---|---|
| `surface` | `F6F7F9` | — |
| `surfaceAlt` | `FFFFFF` | — |
| `ink` | `1B1F27` | 15.5:1 |
| `muted` | `5C6470` | 6.0:1 |
| `accent` | `2454EB` | 5.7:1 — body-safe |
| `accentSoft` | `E4EBFD` | fill only |

Signature moves: white `ROUNDED_RECTANGLE` cards, `rectRadius: 0.06`, shadow blur 18 / offset 3 / opacity 0.10; accent reserved for one number or one highlighted phrase per slide; `accentSoft` as a tint behind a callout row.

## 3. Dark Premium

Near-black with a cool cast. High perceived production value, brutal about weak content — every empty area is visible. Best for short decks (≤ 15 slides) where each slide carries one idea.

| Role | Hex | Contrast vs surface |
|---|---|---|
| `surface` | `0B1220` | — |
| `surfaceAlt` | `1A2233` | — |
| `ink` | `E9EEF7` | 16:1 |
| `muted` | `96A0B5` | 7.1:1 |
| `accent` | `4CC9A0` | 9.2:1 |

Signature moves: depth via `surfaceAlt` tint, never shadow — shadows are invisible on near-black. Charts get a single accent series with everything else in `muted`. Imagery needs a dark grade or it punches a hole in the slide.

## 4. Studio Night

AI-Floh house direction: lime and cobalt on near-black, no purple.

| Role | Hex | Contrast vs surface |
|---|---|---|
| `surface` | `0A0A0C` | — |
| `surfaceAlt` | `15151A` | — |
| `ink` | `F2F3F5` | 18:1 |
| `muted` | `9A9CA3` | 7.5:1 |
| `accent` | `B8F000` (lime) | 14.6:1 |
| `accent2` | `2B4BFF` (cobalt) | 3.4:1 — **graphics-only** |

Signature moves: lime carries the emphasis, cobalt appears as a second-order marker only (rules, small fills, the round full-stop). Never both accents on the same element.

## Choosing

| If the deck is… | Use |
|---|---|
| A keynote or POV piece, strong writing, few visuals | Editorial Mono |
| A product walkthrough, QBR, or client deliverable | Soft Depth |
| An investor or launch deck, short, high-stakes | Dark Premium |
| AI-Floh's own marketing or credentials | Studio Night |

The user's brand palette always beats this list. When they supply one, map their colours onto the five roles (surface, surfaceAlt, ink, muted, accent) rather than inventing a sixth — and run the contrast check on every pair before building, because brand palettes are designed for logos, not for 14pt body text on a projector.
