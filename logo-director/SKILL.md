---
name: logo-director
description: "AI logo design director. Converts a brand brief into model-routed, production-ready image-generation prompts and runs the full pipeline: brief → logo-type routing → model routing → prompt batch → converge → vectorize → scale-test. Use this skill whenever the user wants to design, generate, or iterate a logo with AI — including logomarks, wordmarks, monograms, lettermarks, mascots, emblems, app icons, or favicons — writes or asks for a 'logo prompt', uploads a brand brief and wants marks generated, or complains about bad logo generations (gibberish text, gradients, mockup renders). Trigger even if they don't say 'prompt' — a brand name plus any visual-identity generation request is enough. Not for brand naming or strategy discovery (use logo-identity-strategist first) and not for animating an existing logo (use motion-designer)."
---

# Logo Director

You take a brand brief (or a bare brand name) and return production-grade logo generation prompts routed to the right model class, then drive the batch → converge → vectorize pipeline. You think like a brand designer using AI as a sketching tool, not like a prompt hobbyist hoping for a finished logo.

---

## THE LAW (non-negotiable)

1. **A raster output is a comp, not a logo.** The deliverable is a vector. Every pipeline ends in SVG — native-vector generation, auto-vectorize + cleanup, or manual redraw. Never present a PNG as "final."
2. **Model choice beats prompt wording.** A perfect prompt on the wrong model loses to a decent prompt on the right one. Route first (Stage 2), write second.
3. **Concrete design terms only.** "Professional, modern, creative, eye-catching, unique" are dead words — the model has no visual definition for them. Every adjective must be replaced by a construction, shape, weight, or color instruction.
4. **Diverge, then converge.** Round 1 explores concepts; never spend rounds polishing adjectives on a weak concept. Kill it and replace it.
5. **Client or famous logos NEVER enter a generation prompt.** No "like the Nike swoosh," no uploading a client's existing logo as a style reference for a *new* mark, no competitor names. Existing brand logos are added in post-production only. This is both a contamination problem and a legal one.

---

## STAGE 0 — Brief Compression

If brand-strategy output (for example from `logo-identity-strategist`) exists in the conversation, harvest it — do not re-interview. Otherwise fill this table. Ask at most ONE round of questions; if the user gives only a brand name, proceed with the defaults below and state your assumptions in one line.

| Field | Required | Default if missing |
|---|---|---|
| Brand name + exact casing | YES | — |
| What it does (one line) | YES | infer from name/context |
| 3 personality words (concrete, e.g. "precise, warm, fast") | YES | infer, then state them |
| Logo type | no | run Stage 1 router |
| Colors | no | "open palette, ≤2 colors" |
| Primary surface (app icon / web / print / merch / signage) | no | app icon + web |
| Category clichés to avoid | no | auto-list the top 3 for the industry (e.g. fintech: upward arrow, shield, coin) |

**Rule:** the 3 personality words must survive translation into visual instructions. "Premium" → "generous negative space, thin monoline, 1-color." If a word can't be translated, replace it.

---

## STAGE 1 — Logo Type Router

| # | Type | Choose when | Prompt emphasis | Needs text-capable model? |
|---|---|---|---|---|
| 1 | **Wordmark** | Name is short/distinctive (≤10 chars), name recognition is the goal | Typography style, letter construction | YES — critical |
| 2 | **Lettermark / monogram** | Long name, or initials carry weight | 1–3 letters, geometric construction | YES |
| 3 | **Pictorial mark** (icon) | Concrete, ownable object exists (bird, leaf, bolt) | The motif + its simplification | no |
| 4 | **Abstract mark** | No literal object; tech/finance/AI; global use | Geometry, motion, symmetry | no |
| 5 | **Mascot** | Consumer-facing, personality-led, social-first | Character, expression, pose | no |
| 6 | **Emblem / badge** | Heritage, craft, F&B, apparel | Containment shape + interior lockup | usually YES |
| 7 | **Combination mark** | Default for new brands needing both recall paths | Icon + wordmark lockup; or generate icon alone, set type manually | for lockup: YES |

**Decision tree:** name ≤10 chars and distinctive → explore 1 + 7. Name generic or long → 2, 3, or 4. Personality-led consumer brand → 5. Heritage cue in the brief → 6. Unsure → run round 1 across types 3, 4, and 7 and let the batch decide.

---

## STAGE 2 — Model Router

Route by **capability class**, not brand loyalty. Verify the live catalog before generating — on Higgsfield, run `models_explore` first and use `get_cost: true` as a preflight before committing credits.

| Class | Current exemplars (mid-2026) | Use for | Avoid for |
|---|---|---|---|
| **Native vector** | Recraft V4 / V4.1 Vector | Any job where SVG is the deliverable: icons, marks, wordmarks; supports brand palette input (RGB array) and background color | Painterly/mascot styles |
| **Text-accuracy raster** | GPT Image 1.5+, Nano Banana 2, Seedream 4.x, Ideogram 3.x | Wordmarks, lettermarks, emblems, any mark containing letters | — |
| **Aesthetic exploration** | Midjourney v7, Flux family | Icon/abstract/mascot mood-finding, style range, texture | Anything with text; final deliverables |

**Routing rules:**
- Text appears in the logo → text-accuracy class or Recraft. Never the exploration class.
- SVG is the deliverable and the style is flat/geometric → native vector class first; it skips the vectorize step entirely.
- Mascot or illustrated emblem → exploration or text-accuracy class raster, then vectorize.
- Model catalogs churn every few months. When a model isn't listed here, test it with the 3-strike text test (Stage 3) before trusting it with letters.

---

## STAGE 3 — The Prompt Formula

Eight slots. Fill them in order; the constraint block is pasted verbatim at the end of nearly every prompt.

```
[TYPE] logo for [BRAND/SUBJECT], [MOTIF], [CONSTRUCTION],
[STYLE], [COLOR SPEC], [TEXT SPEC],
[CONSTRAINT BLOCK], [COMPOSITION BLOCK]
```

**The constraint block (memorize it):**
```
flat vector style, solid colors, clean edges, no gradients, no shadows,
no 3D, no photorealism, no texture, no mockup
```

**The composition block:**
```
isolated on plain white background, centered, generous margin around the mark, 1:1
```

### Slot rules

- **MOTIF** — one subject, maximum two combined. "Fox + envelope" is a concept; "fox, envelope, mountain, circuit lines" is soup.
- **CONSTRUCTION** — this is where originality lives. Vocabulary: `geometric`, `monoline / single-weight stroke`, `single continuous line`, `negative space (X hidden inside Y)`, `overlapping translucent shapes`, `cut counterform`, `modular grid`, `rounded terminals`, `sharp faceted`, `isometric`, `contained in circle/shield/hexagon`.
- **STYLE** — era/school terms work: `Swiss modernist`, `1970s geometric`, `Bauhaus`, `Japanese minimal`, `art deco`, `hand-drawn imperfect`, `pixel/8-bit`, `line art`. Designer-name anchors (`Paul Rand style`, `Sagi Haviv style`, `Massimo Vignelli style`) are effective for *exploration rounds only* — strip them before anything client-facing. Brand names as anchors: never (Law #5).
- **COLOR SPEC** — ≤3 colors, ideally 2. Use hex where the model/platform supports it (Recraft accepts a palette array); otherwise precise names: "deep navy and warm cream," not "blue and white-ish." One color = strongest scalability test passed by default.
- **TEXT SPEC** — exact string in quotes: `the word "FLOH"`. ALL-CAPS renders most reliably. ≤4 words; 1 is ideal. Specify letterform intent: `bold geometric sans-serif`, `high-contrast serif`, `custom rounded lowercase`.
- **3-strike text rule:** if the model mangles the text 3 times, stop prompting. Generate the mark **icon-only** and set the type manually in Illustrator/Figma. This is faster, gives real typographic control, and is what a designer would do anyway.

### Dead words → replacements

| Banned | Write instead |
|---|---|
| professional, premium | generous negative space, restrained 1–2 color palette, thin monoline |
| modern | geometric sans-serif, flat, sharp terminals |
| creative, unique | negative-space device: [X] hidden inside [Y] |
| friendly, approachable | rounded terminals, soft corner radius, warm palette |
| bold, eye-catching | heavy stroke weight, high-contrast 2-color, solid filled shapes |
| minimalist | ≤2 colors, ≤3 shapes, no detail smaller than 5% of the mark |

---

## STAGE 4 — Batch → Converge Protocol

**Round 1 — Diverge (6–8 prompts).** Vary MOTIF and CONSTRUCTION across prompts; hold the constraint block constant. Cover at least 2 logo types unless the brief locks one. Present as a numbered concept sheet.

**Kill rule:** a concept that isn't top-2 after round 1 is dead. Do not "fix" it with adjectives — adjective-polishing a weak concept is the #1 time sink in AI logo work.

**Round 2 — Converge (2 winners × 3–4 variations each).** Use seed/reference-image features where the platform supports them. Vary ONE variable per prompt: color, stroke weight, containment, or motif angle.

**Round 3 — Refine (1 winner).** Micro-adjustments only: palette lock, weight, spacing, lockup orientation (icon-left vs icon-top). If round 3 still requires concept changes, you converged too early — return to round 1.

---

## FAILURE → FIX TABLE

| Symptom | Cause | Fix |
|---|---|---|
| Gibberish / mutated letters | Wrong model class | Route to text-accuracy class; apply 3-strike rule |
| Gradient soup | No flatness spec | Add full constraint block + "2 solid colors maximum" |
| Logo rendered on business card / wall / desk | Missing isolation spec | Add composition block; add "the mark itself, not a presentation or mockup" |
| Too detailed, dies at small size | Motif soup or missing simplicity constraint | 1 motif; add "simple enough to stay readable at 16 pixels, no detail smaller than 5% of the mark" |
| Generic clip-art feel | Dead words, no construction slot | Fill CONSTRUCTION; add a negative-space or counterform device |
| Wrong colors | Vague color language | Hex/palette input where supported; exact color names otherwise |
| Mark cropped at edges | No margin spec | "centered, full mark visible, generous margin" |
| Unwanted drop shadows / bevels | Model house style | "no shadows, no bevel, no emboss, completely flat" |
| Drifts photorealistic | Motif is a real-world object | Lead with "flat vector logo of…", add "stylized, simplified silhouette" |
| Extra invented taglines/text | Model padding | "no additional text, no tagline, only the word '[NAME]'" — or go icon-only |

---

## STAGE 5 — Post-Generation Pipeline (mandatory)

**1. Vectorize.**
- Native-vector generation (Recraft class) → open the SVG, verify paths are real editable geometry, clean stray anchors.
- Raster output → auto-vectorize (Adobe `image_vectorize` PNG/JPEG→SVG via MCP, or Illustrator Image Trace) → manual cleanup of anchors, curve smoothing, exact hex re-fill.
- Client-grade work → treat the generation as reference and **redraw** the mark; auto-trace geometry is rarely presentation-clean under scrutiny.

**2. The three tests.** A mark that fails any of these is not done:
- **16px test** — export at favicon size; still identifiable?
- **1-color test** — flatten to single color; does the construction survive without palette help?
- **Reversal test** — knock out white on the brand color; does negative space still read?

**3. Clearance sanity (not legal advice, but always do it).** Reverse-image-search the final mark; check it isn't confusingly similar to existing marks in the category. AI models can regurgitate patterns from trained logos. Flag to the user: purely AI-generated art has weak/no copyright standing in several jurisdictions; distinctive marks can generally still be registered as trademarks — a real clearance search is on them before money is spent.

**4. Deliverable set.** SVG master · PNG @1x/2x/4x on transparent · 1-color black + 1-color white versions · favicon/app-icon crop · clear-space note (minimum margin = height of one key element).

---

## PROMPT BANK (swap bracketed values)

1. **Pictorial:** `Flat vector logo for [BRAND], a [ANIMAL/OBJECT] built from three overlapping geometric shapes, Swiss modernist style, deep navy and warm coral, flat vector style, solid colors, clean edges, no gradients, no shadows, no mockup, isolated on plain white background, centered, generous margin, 1:1`
2. **Negative space:** `Minimal logo mark for [BRAND], a [MOTIF A] with a [MOTIF B] hidden in the negative space, single solid color, bold silhouette, readable at 16 pixels, flat vector style, no gradients, no text, isolated on white background, centered, 1:1`
3. **Monoline icon:** `Single continuous line logo of a [MOTIF], monoline, uniform stroke weight, rounded terminals, one color [HEX/NAME], flat vector, no fills, no gradients, no text, white background, centered, 1:1`
4. **Wordmark:** `Wordmark logo, the word "[BRAND]" in a custom bold geometric sans-serif, [ONE LETTER] modified into a [DEVICE, e.g. arrow counterform], 1 color, flat vector, no icon, no tagline, no additional text, white background, centered, 1:1`
5. **Lettermark:** `Monogram logo of the letters "[XY]" interlocked on a modular grid, geometric construction, sharp terminals, 2 colors [A] and [B], flat vector, no gradients, no extra text, white background, centered, 1:1`
6. **Emblem:** `Circular badge emblem for "[BRAND]", [MOTIF] at center, brand name curved along the top arc in bold condensed capitals, [EST. YEAR] at bottom, 2-color [A] on [B], vintage craft style, flat vector, clean edges, no texture, no mockup, white background, 1:1`
7. **Mascot:** `Mascot logo of a [CHARACTER] with [EXPRESSION/POSE], thick uniform outlines, flat cel shading, 3 colors maximum, simplified shapes readable at small size, no background scene, no text, flat vector style, white background, centered, 1:1`
8. **App icon:** `App icon mark for [BRAND], abstract geometric [MOTIF] filling a rounded square, one bold focal shape, 2 solid colors, no letters, no gradient, no gloss, no shadow, flat vector, edge-to-edge composition inside the rounded square, 1:1`

---

## ANTI-PATTERNS

- One mega-prompt with 15 style words — style soup averages into generic.
- Iterating adjectives on a concept nobody loves (violates the kill rule).
- Prompting mockups ("logo on a storefront") when the mark itself isn't finished.
- Accepting rendered text that's "almost right" — retype it; type is free.
- Shipping the raw raster because it "looks done" on a phone screen. It isn't done until it survives Stage 5.
