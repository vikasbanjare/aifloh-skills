/**
 * deckkit.js — grid, scale and theme tokens for deck-director.
 * Canvas: LAYOUT_WIDE, 13.333in x 7.5in. Set pres.layout = "LAYOUT_WIDE"
 * BEFORE adding any slide or coordinates past 10in are written off-canvas.
 *
 * Usage:
 *   const { GRID, col, span, box, scale, SPACE, THEMES, shadow } = require('./deckkit.js');
 *   slide.addText("...", { ...box(1, 8, 0.90, 1.0), ...scale.h1, color: t.ink });
 */

const GRID = {
  W: 13.333,
  H: 7.5,
  MARGIN: 0.667,
  GUTTER: 0.2,
  COLS: 12,
  COL_W: 0.81667,
  STEP: 1.01667, // COL_W + GUTTER
  SAFE_TOP: 0.5,
  SAFE_BOTTOM: 7.0,
};

/** Left edge of column n (1-indexed). */
function col(n) {
  return round(GRID.MARGIN + (n - 1) * GRID.STEP);
}

/** Width of an s-column span. */
function span(s) {
  return round(s * GRID.STEP - GRID.GUTTER);
}

/** Full {x, y, w, h} for a block starting at column n, s columns wide. */
function box(n, s, y, h) {
  return { x: col(n), y: round(y), w: span(s), h: round(h) };
}

/** Evenly split the content width into `count` equal cells; returns [{x, w}]. */
function row(count) {
  const s = GRID.COLS / count;
  if (!Number.isInteger(s)) {
    throw new Error(`row(${count}): 12 columns do not divide evenly. Use 2, 3, 4, 6 or 12.`);
  }
  return Array.from({ length: count }, (_, i) => ({
    x: col(i * s + 1),
    w: span(s),
  }));
}

/** Vertical zones — keep these consistent across the deck. */
const ZONE = {
  kicker: { y: 0.55, h: 0.28 },
  headline: { y: 0.9, h: 1.0 },
  content: { y: 2.05, h: 4.55 },
  footer: { y: 6.75, h: 0.25 },
  // no-kicker variant
  headlineBare: { y: 0.7, h: 0.9 },
  contentBare: { y: 1.9, h: 4.7 },
};

/**
 * Type scale. Spread into addText options.
 * fontFace is set per-theme; override only if the user named a font.
 */
const scale = {
  stat:    { fontSize: 72, bold: true,  lineSpacingMultiple: 1.05 },
  display: { fontSize: 44, bold: true,  lineSpacingMultiple: 1.05 },
  h1:      { fontSize: 34, bold: true,  lineSpacingMultiple: 1.05 },
  h2:      { fontSize: 22, bold: true,  lineSpacingMultiple: 1.15 },
  h3:      { fontSize: 16, bold: true,  lineSpacingMultiple: 1.2 },
  body:    { fontSize: 14, bold: false, lineSpacingMultiple: 1.3 },
  // charSpacing is the real option — letterSpacing is silently ignored.
  label:   { fontSize: 10, bold: true,  charSpacing: 1.5 },
};

const SPACE = { xs: 0.1, sm: 0.2, md: 0.3, lg: 0.5, xl: 0.8, cardPad: 0.3 };

/**
 * Themes. Hex values carry NO "#" and NO alpha — both corrupt the .pptx.
 * `accentGraphicsOnly: true` means the accent fails 4.5:1 on that surface:
 * fills, bars, rules and >=24pt display type only, never body copy.
 */
const THEMES = {
  editorialMono: {
    font: 'Inter',
    surface: 'FAFAF8', surfaceAlt: 'F0F0EC',
    ink: '0E0E10', muted: '6A6A6E',
    accent: 'D9401F', accentText: 'B02F14',
    hairline: '0E0E10', hairlineAlpha: 90, // transparency %, i.e. 10% opacity
    accentGraphicsOnly: true, dark: false,
  },
  softDepth: {
    font: 'Inter',
    surface: 'F6F7F9', surfaceAlt: 'FFFFFF',
    ink: '1B1F27', muted: '5C6470',
    accent: '2454EB', accentSoft: 'E4EBFD', accentText: '2454EB',
    hairline: '1B1F27', hairlineAlpha: 90,
    accentGraphicsOnly: false, dark: false,
  },
  darkPremium: {
    font: 'Inter',
    surface: '0B1220', surfaceAlt: '1A2233',
    ink: 'E9EEF7', muted: '96A0B5',
    accent: '4CC9A0', accentText: '4CC9A0',
    hairline: 'E9EEF7', hairlineAlpha: 88,
    accentGraphicsOnly: false, dark: true,
  },
  studioNight: {
    font: 'Inter',
    surface: '0A0A0C', surfaceAlt: '15151A',
    ink: 'F2F3F5', muted: '9A9CA3',
    accent: 'B8F000', accent2: '2B4BFF', accentText: 'B8F000',
    hairline: 'F2F3F5', hairlineAlpha: 88,
    accentGraphicsOnly: false, dark: true,
  },
};

/**
 * Fresh shadow object per call — pptxgenjs mutates option objects in place,
 * so a shared object silently breaks the second shape that uses it.
 * offset must be >= 0; for an upward shadow use angle 270 with positive offset.
 * Dark themes get no shadow: it is invisible and only costs render time.
 */
function shadow(theme) {
  if (theme.dark) return undefined;
  return { type: 'outer', blur: 18, offset: 3, angle: 90, color: '0B1220', opacity: 0.1 };
}

/** Apply the theme font to a scale token. */
function type(theme, token) {
  return Object.assign({ fontFace: theme.font }, scale[token]);
}

function round(n) {
  return Math.round(n * 1000) / 1000;
}

module.exports = { GRID, col, span, box, row, ZONE, scale, type, SPACE, THEMES, shadow };
