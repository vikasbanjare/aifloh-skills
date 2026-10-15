# Drawing-Input Rules

How to handle sketches, storyboards, napkin drawings, and reference images that the user uploads as creative direction.

---

## Core Principle

A user's drawing is **primary creative direction**, not decoration. Your job is to interpret it faithfully and execute on it through the Higgsfield pipeline. If you produce output that doesn't visibly honor the drawing, you've failed the brief.

---

## Image Type Routing

In §-1 VISUAL READ, classify the image into one of these:

### Rough sketch / napkin drawing
- **Intent over execution.** The drawing tells you what they want, not how it should look.
- A loose pencil sketch ≠ "make it look hand-drawn." Don't translate the medium of the sketch into the style of the output unless they explicitly say so.
- Treat as the anchor shot in §2 (usually the hero shot or the opener).

### Storyboard panels (multi-panel)
- **Sequential intent.** The panels ARE the shot list spine.
- Each panel becomes a row in §2 with "Source: User panel N".
- You may add bridge shots between panels — flag them as "Source: Added (bridge)".
- Don't reinvent the sequence. Refine it.

### Reference photo
- **Style or subject anchor.** Ask yourself: are they showing you the subject they want, or the look they want?
- If style: reverse-engineer the look in §3 (skip the 5-style exploration if they explicitly said "match this").
- If subject: lock the subject's identity and use it as a descriptor.

### Existing frame from another video
- **Continuation request.** They want more of this exact thing.
- Use the frame's job_id as the identity anchor for the entire pipeline.
- Skip §4 Stage 1 style exploration — the style is already locked to this frame.

### Mood board / collage
- **Tonal direction.** Multiple images = aggregate vibe, not literal style.
- Read the dominant aesthetic across the collage and weight your §4 picks accordingly.

### UI mockup / graphic design
- **Motion brief for static asset.** They want this static thing animated.
- Treat the mockup as Frame 1 directly. §4 becomes "how do we move this?" not "what does this look like?"

---

## Reading Specific Drawing Elements

### Arrows
- **Arrows on subjects = motion direction.** If they drew a figure with an arrow pointing right, that figure moves right. Honor it.
- **Arrows around the frame = camera direction.** If they drew an arrow pointing into the scene, that's a push. Pointing across, a pan. Curving, an orbit.
- Don't ignore arrows. Don't reinterpret them. Transcribe them into camera/layer motion language in §5.

### Speed lines / motion blur cues
- The element with motion lines IS the moving element. Specify it as such with appropriate easing.

### Multiple poses (same character drawn 2–3 times in sequence)
- They're showing you keyframes. Build the shot's animation around those keyframes.

### Camera annotations ("zoom in", "POV", "wide", numerical labels like "1", "2", "3")
- Quote them verbatim in §-1.6 ANNOTATIONS.
- Honor them as authoritative direction unless they conflict with the brief.

### Text labels on the drawing
- These are titles, captions, on-screen text, or annotations. Don't translate them into prompts unless the user says so. Quote them and ask if unclear.

---

## Composition Preservation

The composition the user drew is the composition you generate, unless it's technically broken.

**Preserve:**
- Subject placement in frame (left/center/right, foreground/background)
- Eyeline and gaze direction
- Negative space distribution
- Leading lines

**Fix only when broken** — and explain what you changed:
- Subject cropped at a tangent line (e.g., feet exactly at the bottom edge)
- Eyeline pointing off-screen with no payoff
- Composition that doesn't fit the requested aspect ratio (re-frame, don't redraw)

If you fix anything, state in §-1.7 WHAT'S AMBIGUOUS: "I'll re-frame your composition to fit 9:16 — moving the subject up to leave room for caption space at the bottom."

---

## Sketch as Composition Anchor in §4 Stage 1

When generating the 5 style references in §4 Stage 1:

- Pass the uploaded sketch's media UUID in the `medias` array of every `generate_image` call.
- The sketch's COMPOSITION should hold across all 5 styles.
- Only the illustration register varies between the 5 outputs.
- This is what makes them comparable — same composition, different aesthetic.

If a generated style frame ignores the sketch composition entirely, regenerate ONCE with the sketch UUID more heavily weighted and the composition language more explicit in the prompt. Don't deliberate.

---

## Sketch as Identity Anchor in Stage 2

After the user picks a style:

- The picked Stage 1 frame's `job_id` is the identity anchor for ALL Stage 2 generations.
- Pass this `job_id` in the `medias` of every §4-cont and §5 call.
- The sketch UUID can also be retained as a secondary reference if composition continuity matters across multiple frames.

---

## What NOT to Do

- ✗ Ignore the drawing because the text brief is more detailed
- ✗ Invent subjects not in the drawing (one figure in sketch ≠ a crowd in output)
- ✗ Translate a 2D sketch into a photoreal scene
- ✗ Assume "they want it to look hand-drawn" because the sketch is loose — sketches are intent docs, not style docs
- ✗ Reorder a multi-panel storyboard's sequence without explicit user permission
- ✗ Skip the §-1 VISUAL READ to "save time" — misreading the image poisons everything downstream

---

## Reconciling Sketch + Text When They Conflict

If the user's text brief says one thing and the sketch shows another:

1. Flag the conflict in §-1.7 WHAT'S AMBIGUOUS
2. Make your call (state which you're prioritizing and why)
3. Proceed
4. Note in §0 that the user can correct before §4 generates

Don't stall on a clarifying question for minor conflicts. Pick, state, proceed.

For major conflicts (text says "minimal flat illustration of a cat", sketch shows a complex spaceship battle): stop and ask. That's not a conflict you should resolve unilaterally.
