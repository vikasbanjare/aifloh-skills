# 2D Motion Graphics Doctrine

**Read this before writing any prompt — image or video.** The default visual register is **2D animated motion graphics**. Every prompt must be written in that register. AI tools default to photoreal unless explicitly steered.

---

## Language That LOCKS 2D Mograph

Use these phrases liberally — they steer the model away from photoreal:

- "Flat 2D illustration"
- "Vector illustration"
- "Cel animation frame"
- "Hand-drawn 2D animation, frame-by-frame style"
- "Limited color palette, posterized shading"
- "Bold graphic shapes, geometric forms"
- "No depth of field, no photographic realism"
- "Solid color fills, hard-edged shapes"
- "Soft gouache textures, visible brushwork"
- "Designed frame", "graphic composition", "editorial illustration"
- "Smear frames", "squash and stretch", "shape morph transitions"
- "Kinetic typography", "frame-by-frame redraws"
- "Riso print texture", "halftone grain", "screen-print feel"

---

## Language That POISONS 2D Mograph

Avoid these unless explicitly required by the brief:

- ✗ "Cinematic", "photorealistic", "8K", "masterpiece"
- ✗ "DSLR", "shallow depth of field", "shallow focus"
- ✗ "Volumetric lighting", "ray-traced", "PBR materials"
- ✗ "Lens flare", "anamorphic", "bokeh"
- ✗ "Realistic skin texture", "subsurface scattering"
- ✗ Photographic lens language (unless used as metaphor and explicitly qualified — e.g., "wide-angle compositional feel — no actual lens distortion")

---

## Camera / Layer Motion Vocabulary

In 2D mograph, "moves" are usually parallax/layer offsets, not lens-based moves. Use precise language.

**Live-action analogs** (still apply, but expressed as layer behavior):
- dolly, truck, pedestal, tilt, pan, roll, push, pull, locked

**Mograph-native moves:**
- Parallax push (foreground/midground/background slide at different speeds)
- 2.5D camera move (flat layers offset in pseudo-depth)
- Held frame with internal animation (camera locked, elements animate within)
- Layer reveal, mask reveal, iris in/out
- Whip transition, shape-wipe transition, matched-shape morph
- Shape-morph cut, matched-shape cut

**Framing terms:** ECU, CU, MCU, MS, MLS, LS, ELS, OTS, POV, top-down, dutch — but always qualify with "designed frame" or "graphic composition" to keep register.

**Never write "cinematic camera move"** — name the move.

---

## Shading Vocabulary (2D)

Pick exactly one approach per style:
- **Flat fills** — single color per shape, no shading
- **Posterized shading** — 2–3 tone steps, hard-edged
- **Cel-shaded with two tones** — light and shadow only
- **Soft gouache** — painterly, visible brushwork, soft edges
- **Halftone gradient** — dot-pattern shading
- **Gradient mesh** — smooth color transitions, vector-style
- **Hard-edged shadow** — solid drop shadow, no soft falloff
- **No shading** — pure outline + flat fill

Avoid all photographic lighting language unless used as metaphor.

---

## Easing & Motion Vocabulary

Easing matters MORE in mograph than in live action. Always specify the easing for primary motion.

**Mograph-signature easing:**
- "Heavy ease-out with overshoot and settle" — the classic mograph snap
- "Snappy spring"
- "Anticipation-and-release"
- "Held pose, then snap to next pose" (animation principle)
- "Continuous loop animation"
- "Frame-by-frame redraw cycle"

**Frame rate intent** — always specify:
- 12fps cel animation feel (Cartoon Saloon, traditional)
- 24fps standard (smooth but classic)
- 60fps slick mograph (Buck-style precision)

---

## Register Discipline Checklist

For every prompt before submission:
- Does the prompt include at least one explicit 2D-register lock phrase?
- Are photoreal poison words absent?
- For video gens: are photoreal terms in the `negative` field?
- Is the camera/layer move named precisely (not "cinematic move")?
- Is easing specified for primary motion?
- Is frame rate intent stated?
