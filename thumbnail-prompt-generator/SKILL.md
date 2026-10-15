---
name: "thumbnail-prompt-generator"
description: "Use when you want a YouTube podcast thumbnail made, redesigned or critiqued with ChatGPT as the only image tool — ChatGPT makes a people-free, text-free background plate; you composite the real hosts and the headline in Photoshop; one short copy-paste prompt; safe for regulated (finance) brands."
---

# Thumbnail Prompt Generator (v5, ChatGPT-only)

## Why v5 exists: the failures we actually saw

I ran the v3/v4 prompts in ChatGPT for a podcast episode about the credit boom and got 4 bad outputs. Each failure traces back to a line in the prompt:

| Output | What went wrong | Prompt cause |
|---|---|---|
| Card-city skyline | Cards read as buildings; hosts point at nothing | A metaphor ("city made of cards") with no readable shape at feed size |
| X-ray card | Reads as a poster held up; no focal point | A meaning ("card reveals India") that a camera can't capture |
| Swipe burst | POS, scooter, fridge and sofa fighting each other | 4+ objects listed, so the model weights every noun equally |
| Sea of glowing cards | Cards read as phones or lights; glossy HDR | Repetition ("thousands of") turns into texture; "glow" turns into plastic |

All four outputs also shared these failures:
- the same hosts-flanking-centre template;
- cheesy pointing and shrugging;
- AI-drawn text in the wrong font with a glow;
- faces lit differently from the scene, so they look stuck on.

**Root cause [Likely]:** each prompt asked ChatGPT for the *whole thumbnail*: real hosts, an abstract idea and the text, in one generation. ChatGPT does all three badly. v5 gives ChatGPT one job it can do well and moves everything else to Photoshop.

## 1. The split (non-negotiable)

| Job | Who does it |
|---|---|
| Background plate: one object or place, light, mood | **ChatGPT** |
| Real hosts: cutout, scale, relight | **You, in Photoshop**, using a frame grab from the episode |
| Headline text: verbatim, your brand typeface, one accent-colour keyword | **You, in Photoshop** |
| Final grade and grain | **You, in Photoshop** |

ChatGPT never draws the real hosts and never draws the headline. If someone asks for that, say once that it will drift and look AI-made, and offer the plate instead.

Exception (route B): a solo story piece with **one** consenting person, where some likeness drift is acceptable. See section 6.

## 2. Concept rules (all from the four failures)

1. **One subject.** Exactly one hero object or one place. Count the nouns in the prompt: one hero, plus at most two setting nouns.
2. **The 168 px test.** At thumbnail size, a 10-year-old must be able to name the subject in 2 words ("payment machine", "shop counter"). If you need a sentence to explain it, reject it.
3. **Camera, not meaning.** Only write what a photographer would physically set up. Words like reveals, represents, symbolises, made of, inside it, turning into, are banned.
4. **No repetition as the hero.** Never use "thousands of", "sea of", "wall of", "city of" or "stack of" as the main idea. Repetition only works as an out-of-focus background behind one sharp subject.
5. **Shootability test.** A photographer could shoot it in one day with real props or a real location.
6. **Banned clichés:**
   - hourglass, clock;
   - piggy bank, rocket, light bulb;
   - chess pieces, puzzle pieces, money rain;
   - giant card or coin used as a symbol;
   - glowing charts or arrows;
   - maze, dominoes;
   - X-ray or hologram anything;
   - cities made of objects.
7. **A human trace beats a symbol.** An anonymous hand mid-action (tapping, holding, reaching) is allowed and adds life. Never a full anonymous person: they compete with the hosts.
8. **Vary the layout.** Pick one before writing the prompt and reserve its empty space:
   - **Flank:** hosts left and right, subject centre. Use this at most 1 time in 3.
   - **Hero right:** subject right, both hosts stacked or grouped left, text top-left.
   - **Foreground:** subject large and close in the lower centre, hosts behind it left and right, text on top.
   - **Low angle:** the camera looks up at the subject; hosts in the lower corners.

## 3. Prompt rules for ChatGPT (plate)

Template, 50–80 words, one paragraph:

```
A real photograph, landscape 16:9. <ONE subject, concrete nouns, mid-action if a hand is involved>, <where it sits in frame per layout>. Setting: <1–2 nouns, out of focus>. Light: <one practical source you could buy — bulb, tube light, shop sign, window>, warm against deep navy blue shadows. <Reserved empty space per layout>, plain and dark, for people and text added later. Shot on a 35mm lens, shallow depth of field, matte finish, light film grain, muted realistic colour. All surfaces blank, no writing, no logos, no people.
```

**Wording that fights the AI look:** use "real photograph", "matte finish", "light film grain", "muted realistic colour", and a *named* practical light source.

**Banned words** (each one caused the glossy look we saw): glowing, glow, neon, cinematic, epic, dramatic, hyper-realistic, 8K, masterpiece, vibrant, futuristic, holographic, magical, explosion, burst.

**Other rules:**
- Never put text in quotes in a plate prompt; ChatGPT will render it.
- Never use hex codes. Name colours in words: warm orange, deep navy.
- Don't stack "no X" lists. One closing line covers it: "All surfaces blank, no writing, no logos, no people."

**How to run it in ChatGPT:**
1. Use a fresh chat for each new concept. Old chats carry the previous style forward.
2. Paste the prompt alone, with no extra explanation.
3. Make one fix per follow-up message, always ending with "Keep everything else identical." Fixes:
   - "Make the subject larger and closer to camera."
   - "Darken and empty the left third."
   - "Remove all writing from every surface."
   - "Less shine, more matte, more natural."
4. ChatGPT outputs 3:2 landscape. Crop to 16:9 in Photoshop and leave headroom when reserving space.

## 4. Photoshop finish (you)

1. **Hosts.** Use a frame grab from the episode with a real expression (mid-laugh, raised eyebrows, mid-sentence), not the posed photo. Remove the background. Size per the layout table (section 8).
2. **Relight to match the plate:**
   - Curves clipped to each host: shadows toward the plate's shadow colour, highlights toward its light source colour, 3–6% each.
   - A 2–6 px rim light on the side facing the plate's light.
   - A contact shadow under the shoulders.
3. **Face colour:**
   - Set white balance from a neutral, not from skin. Indian skin is roughly C 15–30 / M 35–50 / Y 45–60, with Y a little above M.
   - Match the hosts to each other: lightness within ±5 L*, hue within ±3°.
   - Dodge and burn on 50% grey; pull forehead hotspots to about L* 70.
   - Reds: saturation −5 to −10. Eye whites +10–15% at most; never change the iris colour. Teeth off-white.
   - Clarity at most +5 on bearded or older skin.
   - Face 0.5–1 stop brighter than the plate around it.
4. **Text:** the supplied words verbatim, in your brand typeface at its heaviest weight, with one keyword in your accent colour. A soft shadow only, no glow or bevel.
5. **Grade:** darkest 5% around 12%, brightest 5% around 92%. 2–4% grain over everything, so the plate and the hosts share one texture.

## 5. Default output: SHORT

```
VERDICT: one harsh, true line (REDESIGN: score /10)
CONCEPT: subject in 2 words + layout name + one line why it reads
PROMPT (paste into a fresh ChatGPT chat):
  <the plate prompt>
IF IT GOES WRONG: 2 one-line follow-up fixes
FINISH (Photoshop): hosts frame/size · text verbatim + keyword · grade
STATUS: CLEARED | NEEDS COMPLIANCE REVIEW (why) | NOT CLEARED (rule)
```

**Self-check before handing over** (silently):
- one subject;
- passes the 168 px test;
- zero banned words;
- zero meaning verbs;
- layout space reserved;
- closing blank/no-people line present.

**After handover:** "Send me the ChatGPT output and I'll score it." Never write a second round of prompts without seeing the first output.

## 6. Route B: solo story piece (one person, ChatGPT edit)

Only when there is one presenter, they have consented, and some likeness drift is acceptable:
1. Upload their photo.
2. Prompt: "Use the person in the uploaded photo. <one action with one prop>, <setting>, <named light source>. Real photograph, matte, film grain. Keep their face, hair and glasses as in the photo. Blank surfaces, no writing."
3. Expect drift. If the face drifts, switch to the plate method: generate the scene without the person, then composite the real photo in.

**Story engine for route B:**
- **who / does / stakes:** the hero, the title's verb made physical, and what's at stake;
- **split second:** the frame just before the payoff;
- **camera inside the moment:** point of view, top-down, behind glass;
- **one tension device:** a gap not yet closed, a cover flipped open, a hand reaching toward the lens.

Sketch the layout at the final ratio first and attach it with the photo. [Counted: 8 of 9 renders followed the sketch's layout exactly.]

Never use route B for two or more real people.

**Full mode,** only when asked for it: add three concept options (each on a different layout), the layout spec and a drawn sketch.

## 7. Score (/10, one point each)

1. One subject, readable at 168 px.
2. No cliché, and it passes the shootability test.
3. No AI gloss (matte, natural light).
4. Layout space usable, and not the flank layout again.
5. Faces at 4/5 expression, sized per the table.
6. Light direction matches between hosts and plate, with a rim light.
7. Text exact, one keyword, brand typeface.
8. Three depth layers.
9. No AI tells (micro-text, warped props, odd fingers).
10. Compliance passes.

7 or more = ship; 5–6 = fix the weakest item; below 5 = new concept.

## 8. Reference

**Layout, 1280×720** (×1.5 for 1920):
- Margin 52 px. Keep the bottom-right 248×100 (timestamp) and the top-right ~200×100 clear.
- Faces:
  - 1 person: 30–40% of height;
  - 2 equal: 28–32% each, eyes on one line ±15 px;
  - hero + guest: 35% and 24%;
  - never below 20%.
- Eye line 33–42% from the top.
- Text: at most 5 words, 3 lines; headline 110–145 px, letter height at least 76 px; at least 40 px from faces.
- Pointers: 0–1. Three depth layers.

**AI tells to remove:**
- garbled micro-text;
- warped props;
- odd fingers or disconnected limbs;
- mask halos;
- electric-blue irises;
- plastic or HDR skin;
- everything sharp.

**Compliance (finance and other regulated brands; your own compliance team has the final say)**
- Never:
  - return or ₹ claims;
  - stock tips;
  - "guaranteed" or "low risk";
  - regulator or third-party logos;
  - real public figures;
  - fabricated app screens;
  - implied-return visuals (rising money, filling jars, rockets);
  - fear or shame framing;
  - gore or peril.
- Flag NEEDS COMPLIANCE REVIEW, without changing the words:
  - advice imperatives;
  - unsourced statistics;
  - metaphors describing how a fund behaves.
- Consent for every face.

## 9. Worked example: a podcast episode on the credit boom

```
VERDICT: 4/10 — a text banner between two passport photos; nothing shows credit.
CONCEPT: "card tap" · foreground layout · a hand tapping a card on a kirana counter terminal is the everyday credit moment, readable at 168 px.
PROMPT (fresh ChatGPT chat):
  A real photograph, landscape 16:9. Close-up of a hand tapping a plain blank credit card on a small handheld payment terminal resting on a worn wooden shop counter, large in the lower centre of the frame. Setting: shelves of packaged goods far behind, out of focus. Light: a single bare warm bulb hanging above the counter, warm orange against deep navy blue shadows. Upper third and left and right edges plain and dark, for people and text added later. Shot on a 35mm lens, shallow depth of field, matte finish, light film grain, muted realistic colour. All surfaces blank, no writing, no logos, no people besides the one hand.
IF IT GOES WRONG: "Make the card and terminal screen fully blank; keep everything else identical." / "Less shine, more matte and natural; keep everything else identical."
FINISH: hosts from a reactive frame, 28–30% each, behind the counter at left and right · "THE / CREDIT BOOM", BOOM in the accent colour, top · navy shadows, warm skin, 3% grain
STATUS: CLEARED (blank card and terminal, no claims, no logos) — consent for both hosts
```

## 10. Honest limits

- No click-through data. These are craft patterns; test with YouTube Test & Compare.
- ChatGPT's image model changes often. The banned-word list is [Likely], not guaranteed.
- AI hands can warp. Check the fingers, and fix them with a follow-up message or in Photoshop.
- Expression comes from the footage, never from prompting.