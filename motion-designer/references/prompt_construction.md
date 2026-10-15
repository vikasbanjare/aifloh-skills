# Prompt Construction

How to build prompts for Higgsfield generations that hold the 2D mograph register across image and video.

---

## Layered Structure (Image — Nano Banana Pro / Soul 2)

Build the prompt in this exact order. Treat each layer as required:

```
[1. 2D register lock]
+ [2. shot type as designed frame]
+ [3. subject with locked descriptors]
+ [4. environment as graphic space]
+ [5. shading approach]
+ [6. color palette anchors]
+ [7. texture / medium tags]
+ [8. composition rule]
+ [9. aspect ratio statement]
```

### Layer Examples

**1. 2D register lock** (always lead with this):
- "Flat 2D vector illustration, no photorealism"
- "Hand-drawn cel animation frame, 12fps style"
- "Soft gouache editorial illustration"
- "Riso print illustration, halftone shading"

**2. Shot type as designed frame** (qualifies framing in graphic terms):
- "Designed frame, medium shot composition"
- "Editorial illustration, wide composition"
- "Graphic poster composition, central subject"

**3. Subject with locked descriptors** (the locked phrases that copy verbatim across all frames):
- "A figure in red coat, geometric construction, simple shapes"
- "A coffee cup, flat vector, three solid color shapes"

**4. Environment as graphic space** (NOT photoreal location):
- "Set against a flat solid blue background"
- "Layered paper-cutout environment with abstract shapes"
- "Minimalist negative space, no photographic backdrop"

**5. Shading approach** (one and only one):
- "Flat fills, no shading"
- "Posterized two-tone shading with hard edges"
- "Soft gouache shading with visible brushwork"
- "Halftone dot-pattern shading"

**6. Color palette anchors** (named hex or descriptive):
- "Palette: #1a1a2e (background), #f4a261 (accent), #2a9d8f (highlight), #e76f51 (subject)"
- "Limited 3-color riso palette: warm red, soft blue, cream"

**7. Texture / medium tags:**
- "Clean vector edges, no grain"
- "Paper grain texture, slight print misregistration"
- "Halftone dot pattern, screen-print feel"

**8. Composition rule:**
- "Rule-of-thirds, subject in left third"
- "Centered symmetric composition"
- "Asymmetric grid, swiss-design layout"

**9. Aspect ratio statement** (passed as parameter, but state in prompt for emphasis on extreme ratios):
- "Vertical 9:16 composition optimized for mobile"
- "Wide 16:9 horizontal composition"

---

## Worked Example — Image Prompt

Brief: 15s Reel about saving money. Vibe: "calm and reassuring." Style picked: Flat Vector / Geometric. Hero moment: a coin dropping into a piggy bank.

```
Flat 2D vector illustration, no photorealism, no 3D rendering. 
Designed frame, medium shot composition. A pink ceramic piggy bank 
in geometric construction with simple shapes, a single gold coin 
suspended mid-fall above the slot. Set against a flat solid mint-green 
background with subtle dot grid pattern. Flat fills with two-tone 
posterized shading, hard-edged shadows. Palette: #b8e6c1 (background), 
#f5b7a8 (piggy bank), #f9c74f (coin), #2d3142 (outline accent). 
Clean vector edges, no grain, no texture. Centered symmetric 
composition, coin aligned with vertical axis. Vertical 9:16 
composition optimized for mobile.
```

---

## Layered Structure (Video — Seedance 2.0 / Kling 3.0)

Seedance prefers natural prose over comma-stacked tags. Build as a paragraph that contains all of these in flowing language:

```
[1. 2D register restatement] — keep brief, the i2v reference holds most of it
+ [2. subject locked descriptors] — same exact phrasing as image prompt
+ [3. action / element animation] — what moves, with easing
+ [4. camera/layer motion] — explicit, named move
+ [5. duration intent] — pacing language, not just seconds
+ [6. atmosphere / mood] — supporting feeling
+ [7. negative prompt] — separate field, photoreal terms always
```

### Worked Example — Video Prompt (paragraph form)

```
A 2D flat vector animation of a pink geometric piggy bank with a 
single gold coin suspended above the slot. The coin drops into the 
piggy bank with anticipation-and-release easing — a brief hold, 
then a snappy fall, then an overshoot-and-settle bounce as it 
disappears into the slot. The piggy bank wobbles slightly on its 
feet with a soft spring ease. Camera is locked, the entire animation 
happens within the held frame. Pacing is calm and reassuring, 
roughly 2 seconds total. Mint-green background with subtle dot grid 
remains static. Clean vector edges throughout, no texture drift, 
no photorealism.

Negative: photorealistic, 3D rendering, lens flare, DSLR, depth of 
field, ray-traced, volumetric lighting, bokeh, anamorphic, 8K, 
cinematic.
```

---

## Consistency Anchors (Locked Descriptors)

Before generating Stage 2 frames and shots, define **3–5 locked descriptor phrases** that copy-paste verbatim into every prompt. Treat them like CSS variables.

For the example above, the locked descriptors might be:
1. "pink ceramic piggy bank in geometric construction with simple shapes"
2. "flat 2D vector illustration, no photorealism"
3. "mint-green background with subtle dot grid pattern"
4. "palette: #b8e6c1 / #f5b7a8 / #f9c74f / #2d3142"
5. "clean vector edges, no grain, two-tone posterized shading"

Surface this list at the end of §4-cont so the user can ctrl-F verify across the SHOT MAP.

---

## Negative Prompt Template (Video)

Always include in `negative` for video gens:

```
photorealistic, 3D rendering, photograph, photo, DSLR, lens flare, 
depth of field, shallow focus, bokeh, anamorphic, ray-traced, 
volumetric lighting, PBR materials, subsurface scattering, 8K, 
cinematic film look, motion blur from camera lens
```

Add style-specific negatives if relevant (e.g., for a flat-vector style, also: "no painterly brushwork, no gouache texture, no halftone dots").

---

## Common Failure Modes & Fixes

**Frame drifts photoreal mid-sequence**
→ Strengthen the 2D register lock at the START of the prompt. Add a second register-lock phrase mid-prompt. Add more photoreal terms to negatives.

**Text/typography becomes illegible**
→ Move to nano_banana_2 if you weren't already (best for type). Specify font weight and style explicitly. Reduce the amount of text in frame.

**Hands or fingers come out malformed**
→ Common in i2v. Either crop hands out of frame, or pose them in simple geometric positions ("hand in fist, simple geometric shape").

**Shot drifts off-style from the picked Stage 1 frame**
→ Stronger language reuse from the picked style's STYLE CARD. Pass the Stage 1 frame's `job_id` in `medias` again on the regen.

**Camera move feels lens-based instead of layer-based**
→ Replace any "dolly", "zoom", "push" language with explicit layer-motion verbs: "parallax push, foreground layer slides faster than background", "2.5D camera with held foreground subject".
