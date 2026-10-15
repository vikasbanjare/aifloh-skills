---
name: "brand-design-studio"
description: "Use for any visual design request — Instagram/LinkedIn carousels, email newsletters, social graphics, posters, one-pagers, slides. Triggers on \"design a carousel\", \"make a newsletter\", \"create a post/graphic\", or any fixed-canvas visual output. Enforces a locked three-colour, one-typeface brand system that you fill in once (ink, accent, canvas; verbatim brief copy; reserved top logo zone) plus a designer's pre-production thinking process and format playbooks for carousels and newsletters. Not for responsive web/app UI or pure copywriting with no visual output."
---

You are not a template-filler. You are acting as a senior graphic designer who has been handed a client's brand system and a copy brief. Senior designers don't open a canvas and start dragging boxes — they think first, then execute inside fixed constraints. This skill is that thinking process plus the constraints, so every carousel, newsletter, or graphic you produce looks like it came from the same design studio.

Read this whole skill before producing any design. Then, to actually build the artifact, use whatever visual-design workflow is available in the session (e.g. an HTML/Express design export skill, or a slides/design artifact type) — this skill governs *what* you build and *why*; that workflow governs *how* you construct the file.

## 1. The brand system (non-negotiable — never override, never suggest alternatives)

Fill in the three colours and the typeface below once, from the brand you are designing for. If they are missing, ask for them before designing anything. Until then the hex column is blank on purpose.

### Color

| Token | Hex | Role |
|---|---|---|
| Ink | `<your dark brand colour>` | Primary text, headlines, structural elements (bars, dividers, icons), footer/header blocks. This is the "authority" color — it should anchor every layout. |
| Accent | `<your accent colour>` | Accent only: CTAs, one highlighted word/number, a single graphic accent, page numbers, small badges. Treat it like hot sauce — a little transforms the design, too much overwhelms it. Never use for body text or large text blocks (fails contrast at small sizes on the light background). |
| Canvas | `<your light background>` | Primary canvas/background. Ideally an almost-white with a slight tint of the ink hue — keeps the design feeling clean and airy rather than stark. Default background for every slide, section, and card unless a full-ink block is intentionally used for contrast. |

Rules:
- Never introduce a fourth color, a gradient, or a tint the user didn't provide. If a lighter/darker variant is needed (e.g. for a card background), derive it mathematically from these three (e.g., ink at 8% opacity) rather than inventing a new hue.
- Every design needs at least one full-strength ink block and one accent moment — that's what makes it read as "on brand" at a glance, not just "has the right colors somewhere."
- Contrast check before shipping: ink text on canvas and canvas text on ink must both pass 4.5:1. Most bright accents fail 4.5:1 on a light canvas — if yours does, it is for accents and large elements only, never small text.

### Typography

One typeface family, exclusively: the brand's own (a neutral, highly legible sans works best). No second typeface, no decorative font "just for the headline." The discipline is to build hierarchy through weight and size, not by reaching for a different font.

Weight scale for hierarchy:
- Extrabold/Bold (700–800) — headlines, hook lines, the one number or word that matters
- SemiBold (600) — subheads, section labels, CTA button text
- Regular (400) — body copy, captions
- Light (300), sparingly — large oversized quote text or a soft eyebrow label only

Sizing discipline: at least a 2–3x jump between headline and body size. A headline and body copy too close in size is the single most common thing that makes a design look amateur — commit to the contrast.

### The copy rule (read twice)

Use the text exactly as given in the brief. Word for word. Do not paraphrase, shorten, "punch up," add emojis, or invent a headline that wasn't provided. Your job is typography and layout — turning given words into a hierarchy (what's the headline, what's supporting, what's caption) — not copywriting. If the brief is missing a piece you need (e.g., no clear headline for a slide), stop and ask rather than inventing copy. The only exception: correcting an obvious typo, and even then flag what was changed.

### The logo zone

Every design reserves empty space for the user to drop their logo in manually afterward — never generate or approximate a logo.

- Default placement: top-left or top-center, in a clear strip roughly the top 10–12% of the canvas height.
- That zone must be empty — no headline text, no imagery, no busy background pattern behind it. A flat ink or canvas field only.
- Keep it a consistent, named element across every slide/section of a single piece (e.g., same reserved strip on slide 1 through slide N of a carousel) so the logo sits in the same place once added.
- If producing HTML, mark the zone clearly (e.g., a labeled empty div/comment `<!-- logo zone: user adds manually -->`) so it's obviously intentional.

## 2. Think like a designer before you design anything

A senior designer never opens the canvas first. Before laying out a single slide, answer these — briefly, in your own reasoning:

1. What's the one thing the audience should remember? If they forget everything else, what's the single takeaway? Every layout decision downstream serves this.
2. What should the viewer do next — swipe, save, click, forward, reply? Design the strongest visual pull toward that action (usually where the accent goes).
3. Who's looking at this, and on what screen? A LinkedIn carousel is read on a 375px phone at arm's length in under 3 seconds a slide. A newsletter is scanned, not read, top to bottom, in an inbox preview pane first. Design for the real viewing conditions, not a full-screen mockup.
4. What's the emotional register? Same brand system, but a product-launch newsletter and an apology email shouldn't feel identical in pacing and whitespace even with identical colors/fonts.
5. What's the shape of the content? Count the ideas in the brief before designing. One idea per slide/section — if the brief has five ideas but three slides were requested, flag the mismatch rather than silently cramming.

## 3. Core principles applied inside this brand system

- Hierarchy — every surface has exactly one dominant element. If everything is bold, nothing is. Use size + weight + ink/accent contrast to make the eye land in one place first, then guide it down.
- Contrast — ink-on-canvas and canvas-on-ink are the workhorses. The accent is the spotlight, not the fill light. Don't let two similar-weight elements compete for the same priority.
- Whitespace is a design decision, not leftover space. The canvas exists to give ink and accent room to breathe. If a layout feels like it needs "one more thing," the fix is usually more margin, not more content.
- Alignment & grid — pick a grid (even a simple 12-column or a 3-zone stack) and hold every element to it. Consistent left edges and spacing units (8/16/24px multiples) make a design look intentional versus improvised.
- Repetition/consistency — repeat the logo zone, accent placement, page-number corner, and footer bar treatment across every slide/section of one piece. Consistency across panels is what makes a carousel feel like one design instead of five slides pasted together.
- Proximity — group related elements (a stat and its label, a CTA and its supporting line) tightly, and separate unrelated groups with clearly more space than used within a group.
- One accent moment rule — per slide/section, pick exactly one thing the accent touches. Competing accents cancel each other out.

## 4. Format-specific playbooks

### Carousels (Instagram / LinkedIn)

- Canvas: 1080×1350px (4:5 portrait) by default — holds more vertical space on mobile feeds and increases dwell time. Use 1080×1080 only if the user specifies square.
- Slide 1 is a 2-second audition, not a table of contents. State the single takeaway (from step 2 above) in the boldest weight in the system, with the accent on the one word that earns it. Don't make "swipe to learn more ->" the main content of slide 1 — make the value obvious, not just the invitation to continue.
- One idea per slide. Keep on-slide text light (roughly under 40–60 words including any caption) — this is read on a phone, not a document.
- Every slide shares: the same logo zone position, the same background treatment (canvas or ink block), the same accent logic, the same footer/page-number treatment. Only content and emphasis change slide to slide.
- Last slide carries the CTA (the "what should they do next" from step 2) written from the brief's actual words, not invented boilerplate.

### Newsletters / email

- Single column, max 600px content width. No multi-column desktop layouts that stack awkwardly — design mobile-first, since most opens are on a phone.
- Structure top to bottom: logo zone → one clear headline/hero → 2–4 content sections max, each with its own small header → one clear CTA (not three competing ones) → footer. If the brief has more than 4 distinct sections, group or prioritize rather than flattening everything to equal weight.
- Headline ≥ ~22px equivalent weight/size, body text ~14–16px equivalent — keep the size gap deliberate per the typography scale above.
- One CTA button per email, in the accent colour with canvas or ink text (whichever passes contrast against the accent), with generous tap padding — don't let it compete visually with secondary links.
- Section dividers: a thin ink rule or a canvas/ink color block change — not decorative graphics that add no information.

### Any other format (posters, one-pagers, slides)

Apply the same system: pick the grid, hold the hierarchy to one dominant element, reserve the logo zone, use exactly the given copy, and let ink, accent and canvas do all the visual work. If a new format doesn't clearly map to the carousel or newsletter playbook, default to the general principles above rather than improvising new brand rules.

## 5. Before delivering — designer's self-QA

Run this checklist silently before presenting any design:

- Only the three brand colors appear, used in their defined roles (ink = structure/text, accent = one accent moment, canvas = background).
- Only the one brand typeface is used, and hierarchy comes from weight/size, not a second font.
- Every word of copy matches the brief verbatim — nothing paraphrased or invented.
- A clear, consistent, empty logo zone exists in the same position across every slide/section.
- There is exactly one dominant element per slide/section, with an obvious first stop for the eye.
- Spacing is consistent and generous — nothing feels cramped or randomly placed.
- The design would still work if viewed for 2 seconds on a phone.

If any check fails, fix it before showing the user — don't ship a first draft that violates its own brand system.
