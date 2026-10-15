# Redesign audit

The point of the audit is to decide what dies. A redesign that keeps every slide is a reskin, and a reskin of a badly structured deck still fails in the room.

## Step 1 — Extract

```bash
markitdown deck.pptx > deck.md                          # content
python scripts/thumbnail.py deck.pptx deck-thumbs       # layout grid (pptx skill)
```

Then render every slide to image (see the `pptx` skill's Converting to Images) and look at them. Content and layout fail in different ways; you need both views.

Note before scoring: **who the audience is and what decision the deck is asking for.** Almost every scoring judgement below depends on those two answers. If the user hasn't said, ask — one question, not a discovery session.

## Step 2 — Score every slide

Six axes, 0–2 each. 12 points possible.

| Axis | 0 | 1 | 2 |
|---|---|---|---|
| **Message** | Headline is a category label (`Overview`, `Our Process`) | Headline hints at a point | Headline is an assertion with a verb and a subject |
| **Density** | > 80 words, or > 6 list rows | 40–80 words | ≤ 40 words, ≤ 5 rows |
| **Hierarchy** | One or two type sizes; no clear entry point | Some contrast, but the eye hunts | Obvious first read, second read, detail |
| **Alignment** | Elements sit on no shared axis | Mostly aligned, some drift | Everything on a grid; edges share x/y exactly |
| **Colour** | > 3 hues, or accent used everywhere | Coherent but muddy | One dominant surface, one ink, one accent used once |
| **Evidence** | Claim with nothing supporting it | Generic stock visual or decorative icon | Data, screenshot, diagram, or specific example that earns the claim |

Record it as a table. Don't average — the pattern of low axes tells you *what kind* of problem the deck has, and that determines the fix:

- **Message low across the board** → a content problem. Rewriting headlines will fix more than any layout will. Do that first, out loud, before designing.
- **Density + Hierarchy low** → the deck was written as a document. Split slides; move detail to an appendix or the speaker notes.
- **Alignment + Colour low, Message fine** → a genuine reskin job. This is the cheapest and fastest kind.
- **Evidence low** → you cannot fix this with design. Flag it to the user as a content gap and name what's missing.

## Step 3 — Verdict per slide

| Score | Default verdict |
|---|---|
| 10–12 | **KEEP** — reapply tokens only |
| 7–9 | **RESKIN** — same content, new layout archetype |
| 4–6 | **REBUILD** — rewrite the headline, cut copy, new archetype |
| 0–3 | **CUT or MERGE** |

Override the default when:
- Two adjacent slides make the same point → **MERGE**, regardless of score.
- A slide exists only because someone asked for it once and nobody has looked at it since → **CUT**. Agenda slides, "About Us" at position 2, and thank-you slides are the usual suspects.
- The slide is legally or contractually required (disclaimers, compliance) → **KEEP**, styled to `label` size, and moved to the back.
- Appendix candidates: detail that answers a question nobody has asked yet. Move it behind the closing slide rather than cutting it — this is what makes people agree to the cut.

## Step 4 — The plan

Present before building. Nothing gets rebuilt until this is agreed.

```
Deck: <name> · <n> slides in → <m> slides out

Three structural problems:
1. …
2. …
3. …

Direction: <style direction name> · <surface> / <ink> / <accent> · <font>

| #  | Current headline | Score | Verdict | New assertion |
|----|------------------|-------|---------|---------------|
```

Then say the sentence people need to hear out loud: *"This removes N slides. Here's where that content goes."* Attachment to slide count is the main reason redesigns get rejected, and naming it early defuses it.

## Step 5 — Rebuild and prove it

Build to the agreed plan. Then render two or three of the worst originals beside their rebuilds. Before/after is the only argument that reliably lands with a stakeholder who liked their old deck.

## Common failure patterns, and what they actually need

| Symptom | Real cause | Fix |
|---|---|---|
| "It looks cluttered" | Too many assertions per slide | Split, don't shrink |
| "It looks cheap" | Type all one size; default template colours | Type scale + rationed accent |
| "It doesn't look professional" | Misalignment and inconsistent gaps | Grid, one gap value |
| "It's boring" | No entry point; every slide the same archetype | Vary archetype; add one stat-hero and one statement |
| "Too corporate" | Stock photography and icon-per-bullet | Real screenshots, data, or nothing |
| "Nobody remembers it" | Headlines are labels, so there's nothing to remember | Rewrite every headline as a claim |
| "Client keeps adding text" | The deck is doubling as a leave-behind | Build two artefacts: a presented deck and a read-alone doc |
