---
name: deck-director
description: Art-directs presentations to a locked design system — modern editorial layout, real grid, fixed type scale, and a diagnostic redesign protocol for fixing existing decks. Use this skill whenever the user wants a deck designed, redesigned, cleaned up, "made modern", "made to look professional", rebranded, or de-uglified; whenever they upload a .pptx/.potx/PDF deck and ask for feedback, a facelift, or a rebuild; whenever they ask for slide layouts, a deck design system, a presentation template, or a pitch/sales/investor/QBR/webinar deck. Trigger even when the request sounds purely about content ("tighten these slides", "this deck is too wordy", "make this board-ready") — the fix is almost always structural. Pair with the `pptx` skill, which handles file mechanics; this skill owns the design decisions.
---

# Deck Director

You are art-directing, not decorating. The `pptx` skill knows how to write the file. This skill decides what goes on the slide, where, at what size, and — for a redesign — what gets deleted.

**Read `pptx/SKILL.md` too.** It owns pptxgenjs footguns, XML editing, validation, and rendering. Never duplicate or contradict it. Where this skill sets a number (type size, margin, grid position), this skill wins — those numbers are chosen to hold together as a system.

## Pick the mode first

| Signal | Mode | Go to |
|---|---|---|
| Existing deck supplied (.pptx/.potx/.pdf/screenshots) | **Redesign** | Workflow A |
| Content supplied (doc, notes, outline, script) but no deck | **Build** | Workflow B |
| "Give me a template / design system / direction" | **Spec** | Workflow C |

If a deck is supplied *and* new content is supplied, it's a Redesign with additions. Ask which slides are load-bearing before cutting anything.

## Non-negotiables

These are what separate a designed deck from a decorated one. Apply in every mode.

1. **One slide, one assertion.** The headline is a claim with a verb, not a category label. `Q3 Revenue` → `Q3 revenue grew 34%, carried by enterprise renewals`. If a slide can't be reduced to one assertion, it is two slides.
2. **Everything snaps to the grid.** No eyeballed coordinates. Every x, y, w comes from the grid helpers in `references/design-system.md` or `scripts/deckkit.js`. Misalignment of 0.05" is the single most common tell of an amateur deck.
3. **Fixed type scale, no in-between sizes.** Five sizes per deck, maximum. Pick from the scale; never invent 19pt because 18 "looks small".
4. **Three levels of hierarchy on every slide** — entry point (biggest thing), support, detail. If everything is 16pt, nothing is read.
5. **Colour is rationed.** One dominant surface, one ink, one accent. The accent appears once or twice per slide — it marks the thing you want looked at first. A deck where the accent is everywhere has no accent.
6. **Word budget.** ≤ 40 words of body copy per content slide, ≤ 12 words per headline, ≤ 5 rows in any list. Over budget → split, cut, or convert to a visual.
7. **Whitespace is a component.** Deliberate empty area on every slide. Content stops at the safe area; it does not creep toward the edge to fill space.
8. **No AI-deck tells.** No accent line under the title, no colour stripe down the edge of a card or slide, no drop-shadowed gradient blobs, no icon on every single bullet, no centre-aligned body copy, no beige.

## Workflow A — Redesign an existing deck

Do not open a design tool until the audit is done and agreed. Rebuilding an incoherent deck slide-for-slide just produces a better-looking incoherent deck.

**A1. Extract.** Follow the `pptx` skill: `markitdown deck.pptx` for content, `scripts/thumbnail.py` for the layout grid, full renders for anything you'll judge visually.

**A2. Audit.** Run the protocol in `references/redesign-audit.md`. It scores every slide on six axes and classifies it KEEP / RESKIN / REBUILD / MERGE / CUT.

**A3. Present the plan before building.** Always output this table first and get sign-off:

```
| # | Current headline | Verdict | Why | New assertion |
```

Plus a one-paragraph read on the deck's three biggest structural problems and the proposed style direction. Expect the slide count to drop 20–40%. Say so explicitly — people are attached to their slides.

**A4. Rebuild** to the agreed direction using Workflow B's build steps, honouring anything the user marked KEEP.

**A5. Before/after.** Render two or three of the worst original slides next to their rebuilds. This is what proves the work.

## Workflow B — Build

**B1. Lock the direction.** Choose one from `references/style-directions.md` (or the user's brand palette). State the choice in one line — direction name, surface, ink, accent, font pairing — and move on. Don't offer four moodboards for a deck.

**B2. Structure before styling.** Write the full slide list as assertion headlines only, with an archetype tagged to each:

```
03 · Manual QA eats 6 hours per release        → stat-hero
04 · Three failure points cause 80% of reworks → triad-cards
```

Vary the archetypes. Three consecutive slides on the same archetype is a rhythm failure — see `references/layout-library.md` for the fourteen archetypes and their exact coordinates.

**B3. Build.** `pptxgenjs`, `pres.layout = "LAYOUT_WIDE"` (13.333" × 7.5") set before any slide is added. Import the tokens and grid helpers rather than retyping numbers:

```js
const { GRID, col, span, scale, THEMES } = require('./scripts/deckkit.js');
```

**B4. QA gate.** Run the `pptx` skill's full QA — `validate.py`, content check, and visual render of every slide — then the design checklist at the bottom of this file. Fix, re-render only what changed, stop.

## Workflow C — Spec only

Deliver a markdown design system, not a file: direction, palette with hex + contrast ratios, type scale, grid numbers, the archetype list, and do/don't examples. No HTML unless the user asks for it. Offer to build a `.potx` template afterwards.

## Typography

**Default font: Inter** (headings 600/700, body 400). Fall back to Calibri, or use the family the user names.

A missing font is a real trap in this environment and you need to handle it deliberately:

```bash
fc-list | grep -i "inter"
```

- **Present** → visual QA is trustworthy; read text fit normally.
- **Absent** (common) → LibreOffice substitutes a different-width face, so overflow in the render may be fake and fit may be false comfort. Size every text container with ~10% slack and treat fit as approximate, per the `pptx` skill's font guidance. Never fix a "fit problem" by dropping below the type scale — widen the box or cut words.

Never write Aptos. Never mix more than two families.

## Design QA checklist

Run after the `pptx` skill's QA passes. Look at the rendered images fresh — after staring at generator code you see intent, not output.

- Every headline is an assertion, not a label
- No slide exceeds the word budget
- Left edges of stacked elements share an x to 2 decimal places
- Exactly one accent focal point per slide
- At least three distinct type sizes, all from the scale
- Consistent gap value throughout (one of 0.2 / 0.3 / 0.5 — not a mix of all three)
- Nothing within 0.5" of the slide edge
- Body contrast ≥ 4.5:1, large text ≥ 3:1
- Archetype varies at least every third slide
- Zero items from the "AI-deck tells" list in Non-negotiables

## References

Read these as needed — don't load all four upfront.

- `references/design-system.md` — grid maths, type scale, spacing tokens, colour rules, contrast pairs
- `references/layout-library.md` — 14 slide archetypes with exact inch coordinates for 13.333 × 7.5
- `references/redesign-audit.md` — the six-axis scoring protocol and verdict rules for existing decks
- `references/style-directions.md` — four locked modern directions with full token sets and verified contrast
- `scripts/deckkit.js` — grid helpers and theme tokens for pptxgenjs
