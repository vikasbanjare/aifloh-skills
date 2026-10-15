# Maps, Chains & Consistency Audits

How to track generation lineage across the two stages and audit consistency.

---

## Why Maps Matter

The pipeline produces dozens of generations across Stage 1 (5 styles) and Stage 2 (multiple frames × variations + multiple shots + hero variations). Without explicit job_id tracking, the user can't iterate, you can't reuse references, and identity drifts silently.

**Surface every job_id in a visible map.** Don't bury them in tool calls — print them in the response.

---

## STYLE MAP (Stage 1, after §4 generation)

```
STYLE MAP (Stage 1)
─────────────────────────────────────────────────────────────
Style 1: Editorial Gouache Kinetic    — Bold          → job_id: a3f2…b91c
Style 2: Flat Vector Snap             — Safe          → job_id: 4c8d…e72f
Style 3: Riso Print Pulse             — Experimental  → job_id: 91ab…fc34
Style 4: Hand-Drawn Cel Warmth        — Playful       → job_id: 6e1f…a05b
Style 5: Bauhaus Geometric Restraint  — Minimalist    → job_id: 2d97…b48e
─────────────────────────────────────────────────────────────
```

Always include the Role column so the user can see the spread.

---

## FRAME MAP (Stage 2, after §4-cont generation)

```
FRAME MAP (Stage 2 — picked style: #2 Flat Vector Snap)
─────────────────────────────────────────────────────────────
Frame 1 (HERO, locked from Stage 1)  → job_id: 4c8d…e72f
Frame 2  → job_id: 7b1a…d42c
  ├─ Variation A (PICK — stronger contrast, clearer silhouette) → 7b1a…d42c
  └─ Variation B → 7b1a…d42d
Frame 3  → job_id: 9e5f…a18b
  ├─ Variation A (PICK — aligns with vibe anchor) → 9e5f…a18b
  └─ Variation B → 9e5f…a18c
Frame 4  → job_id: 3c2d…b95a
  ├─ Variation A → 3c2d…b95a
  └─ Variation B (PICK — composition reads better at thumbnail size) → 3c2d…b95b
─────────────────────────────────────────────────────────────
```

For each variation pair, mark which is the PICK and state the reason in one short clause. If you regenerated a frame after a drift check, note that too.

---

## SHOT MAP (after §5 generation)

```
SHOT MAP (Stage 2)
─────────────────────────────────────────────────────────────
Shot 1 (HERO)        → references Frame 1 (4c8d…e72f) → job_id: 8a2f…c01d
Shot 2               → references Frame 2-A (7b1a…d42c) → job_id: 5c4e…f33b
Shot 3               → references Frame 3-A (9e5f…a18b) → job_id: 1f6d…a92c
Shot 4               → references Frame 4-B (3c2d…b95b) → job_id: 6b8a…d54e
Shot 5 (closing)     → references Frame 1 (4c8d…e72f) → job_id: 4d9c…b71f
─────────────────────────────────────────────────────────────
```

Show which §4 frame anchors each shot. This is how the user (and you) verify the identity chain.

---

## VARIATIONS MAP (after §6 generation)

```
HERO VARIATIONS MAP (§6)
─────────────────────────────────────────────────────────────
Shot 1 alternates (references Frame 1):
  ├─ Var A (camera language: parallax push)        → job_id: 2e7f…c84a
  ├─ Var B (pacing: snappier 2s with held end)     → job_id: 9b1c…e35f
  └─ Var C (framing: tight detail crop on coin)    → job_id: 7a3d…f02b
─────────────────────────────────────────────────────────────
```

---

## Final FULL CHAIN MAP (in §7 HANDOFF)

Combine all of the above into a single tree the user can iterate from:

```
FULL CHAIN MAP
═════════════════════════════════════════════════════════════
PICKED STYLE: #2 Flat Vector Snap
└─ STYLE FRAME (anchor): 4c8d…e72f
   ├─ FRAME 1 (HERO): 4c8d…e72f
   │  └─ SHOT 1: 8a2f…c01d
   │     ├─ Var A: 2e7f…c84a
   │     ├─ Var B: 9b1c…e35f
   │     └─ Var C: 7a3d…f02b
   ├─ FRAME 2 (PICK = A): 7b1a…d42c
   │  └─ SHOT 2: 5c4e…f33b
   ├─ FRAME 3 (PICK = A): 9e5f…a18b
   │  └─ SHOT 3: 1f6d…a92c
   ├─ FRAME 4 (PICK = B): 3c2d…b95b
   │  └─ SHOT 4: 6b8a…d54e
   └─ FRAME 1 (reused as closing): 4c8d…e72f
      └─ SHOT 5: 4d9c…b71f
═════════════════════════════════════════════════════════════
```

---

## CONSISTENCY AUDIT (after every batch returns)

Run this audit in plain text after each §4-cont batch and after the §5 batch. Don't skip it — register slippage and identity drift compound silently.

### Audit Template

```
CONSISTENCY AUDIT — §5 Production Shots
─────────────────────────────────────────────────────────────
Subject identity holds across shots?     [Y / N + which drift]
Palette consistent?                       [Y / N + which drift]
Line weight / shading approach holds?     [Y / N + which drift]
Register holds (still 2D mograph,
  no photoreal slippage)?                 [Y / N + which drift]
Animation feel consistent
  (easing, frame rate vibe)?              [Y / N + which drift]
─────────────────────────────────────────────────────────────
Action: [drift shots → silent regen once with stronger anchor 
descriptors, OR all clear → proceed]
```

### What to Check For

**Subject identity drift** — same character across shots looks different (face, body, color)
**Palette drift** — colors shift across shots
**Line-weight drift** — outlines vary thickness or style
**Register slippage** — a shot starts looking photoreal, 3D, or styled-out-of-register
**Animation feel inconsistency** — one shot has snappy ease-out, another has linear-only motion

### Drift Response Protocol

1. Identify the drifting shot(s) by number
2. Pull the locked descriptors list
3. Strengthen the anchor language in the prompt (more register-lock phrases, more locked descriptors verbatim)
4. Re-pass the picked frame's `job_id` in `medias`
5. Regenerate ONCE
6. If still drifting after one regen: flag in §7 risk areas, don't loop indefinitely

---

## Locked Descriptors List (output at end of §4-cont)

The 3–5 phrases that copy-paste verbatim into every Stage 2 prompt. Surface them as a list the user can ctrl-F verify.

Example:

```
LOCKED DESCRIPTORS (copy-paste into every Stage 2 prompt)
─────────────────────────────────────────────────────────────
1. "flat 2D vector illustration, no photorealism"
2. "pink ceramic piggy bank in geometric construction"
3. "mint-green background with subtle dot grid pattern"
4. "palette: #b8e6c1 / #f5b7a8 / #f9c74f / #2d3142"
5. "clean vector edges, two-tone posterized shading"
─────────────────────────────────────────────────────────────
```

If a Stage 2 prompt is missing one of these phrases, the prompt is incomplete. Self-check before each `generate_*` call.

---

## When to Use job_display vs show_generations

- `Higgsfield:job_display` — when you want to re-render a specific known job_id (e.g., showing the user the picked Stage 1 frame at the start of §3 Style Lock)
- `Higgsfield:show_generations` — when the user asks "what did we generate again?" or wants to browse history without you pulling specific job_ids
