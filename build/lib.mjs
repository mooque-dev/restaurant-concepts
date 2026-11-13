// Shared build utilities: colour roles (M3-style, derived in OKLab), contrast checks, and the hours engine.

// ---------- colour ----------
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.replace(/./g, c => c + c) : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255].map(v => v / 255);
}
export function rgbToHex([r, g, b]) {
  return '#' + [r, g, b].map(v => Math.round(clamp(v) * 255).toString(16).padStart(2, '0')).join('');
}
const toLin = c => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const toGam = c => (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055);
function rgbToOklab(rgb) {
  const [r, g, b] = rgb.map(toLin);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return [0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s, 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s, 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s];
}
function oklabToRgb([L, a, b]) {
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s, -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s, -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s].map(v => toGam(clamp(v)));
}
// Mix two colours in OKLab; t = share of b
export function mix(a, b, t) {
  const A = rgbToOklab(hexToRgb(a)), B = rgbToOklab(hexToRgb(b));
  return rgbToHex(oklabToRgb(A.map((v, i) => v + (B[i] - v) * t)));
}
export function luminance(hex) {
  const [r, g, b] = hexToRgb(hex).map(toLin);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
export function contrast(a, b) {
  const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
}
// Push `fg` toward black or white (whichever is further from bg) until it meets `min` contrast on `bg`
export function ensure(fg, bg, min = 4.5) {
  if (contrast(fg, bg) >= min) return fg;
  const target = luminance(bg) > 0.18 ? '#000000' : '#ffffff';
  for (let t = 0.05; t <= 1.0001; t += 0.05) {
    const c = mix(fg, target, t);
    if (contrast(c, bg) >= min) return c;
  }
  return target;
}
const onColor = bg => (contrast('#ffffff', bg) >= contrast('#111111', bg) ? '#ffffff' : '#111111');

// Build M3-style colour roles from a few brand seeds.
// theme = { scheme: 'dark'|'light', primary, secondary, tertiary?, neutral }
export function roles(theme) {
  const dark = theme.scheme === 'dark';
  const n = theme.neutral;
  const ink = dark ? '#ffffff' : '#000000';
  const r = {};
  r.surface = n;
  r['surface-dim'] = mix(n, '#000000', dark ? 0.25 : 0.06);
  r['surface-container-lowest'] = dark ? mix(n, '#000000', 0.35) : '#ffffff';
  r['surface-container-low'] = mix(n, ink, dark ? 0.03 : 0.015);
  r['surface-container'] = mix(n, ink, dark ? 0.06 : 0.035);
  r['surface-container-high'] = mix(n, ink, dark ? 0.1 : 0.06);
  r['surface-container-highest'] = mix(n, ink, dark ? 0.15 : 0.09);
  r['on-surface'] = ensure(mix(n, ink, 0.92), n, 12);
  r['on-surface-variant'] = ensure(mix(n, ink, 0.66), r['surface-container-high'], 4.6);
  r.outline = mix(n, ink, 0.4);
  r['outline-variant'] = mix(n, ink, dark ? 0.16 : 0.13);
  for (const k of ['primary', 'secondary', 'tertiary']) {
    const seed = theme[k] || theme.primary;
    r[k] = seed;
    r[`on-${k}`] = onColor(seed);
    r[`${k}-container`] = mix(seed, n, dark ? 0.62 : 0.78);
    r[`on-${k}-container`] = ensure(mix(seed, ink, dark ? 0.6 : 0.55), r[`${k}-container`], 4.6);
    // Accent used as text on the page surface (eyebrows, links): must stay readable
    r[`${k}-text`] = ensure(seed, n, 4.6);
    r[`${k}-text-on-low`] = ensure(seed, r['surface-container-low'], 4.6);
  }
  r.scrim = '#000000';
  r['inverse-surface'] = dark ? '#f4f0ea' : '#1d1b18';
  r['inverse-on-surface'] = dark ? '#1d1b18' : '#f4f0ea';
  return r;
}
// Text/background pairs every theme must pass (≥4.5:1, large display text ≥3:1)
export function contrastReport(r) {
  const pairs = [
    ['on-surface', 'surface', 4.5], ['on-surface-variant', 'surface', 4.5], ['on-surface-variant', 'surface-container-high', 4.5],
    ['on-surface', 'surface-container', 4.5], ['on-surface', 'surface-container-high', 4.5],
    ['on-primary', 'primary', 4.5], ['on-secondary', 'secondary', 4.5], ['on-tertiary', 'tertiary', 4.5],
    ['on-primary-container', 'primary-container', 4.5], ['on-secondary-container', 'secondary-container', 4.5],
    ['primary-text', 'surface', 4.5], ['secondary-text', 'surface', 4.5], ['tertiary-text', 'surface', 4.5],
    ['primary-text-on-low', 'surface-container-low', 4.5], ['inverse-on-surface', 'inverse-surface', 4.5]
  ];
  return pairs.map(([f, b, min]) => ({ f, b, min, ratio: +contrast(r[f], r[b]).toFixed(2) })).map(p => ({ ...p, ok: p.ratio >= p.min }));
}

// ---------- hours ----------
// A location's week: index 0 = Sunday … 6 = Saturday; each day [openMin, closeMin] or null.
// closeMin may exceed 1440 when the shift runs past midnight (e.g. 5:30pm–2:30am = [1050, 1590]).
export function hoursState(week, day, min) {
  const today = week[day], yesterday = week[(day + 6) % 7];
  if (yesterday && yesterday[1] > 1440 && min < yesterday[1] - 1440)
    return { open: true, closesAt: yesterday[1] - 1440, closesIn: yesterday[1] - 1440 - min, shift: 'yesterday' };
  if (today && min >= today[0] && min < today[1])
    return { open: true, closesAt: today[1], closesIn: today[1] - min, shift: 'today' };
  if (today && min < today[0]) return { open: false, opensAt: today[0], opensDay: 0 };
  for (let i = 1; i <= 7; i++) { const d = week[(day + i) % 7]; if (d) return { open: false, opensAt: d[0], opensDay: i }; }
  return { open: false };
}
export const HOURS_JS = `function hoursState(week,day,min){const t=week[day],y=week[(day+6)%7];if(y&&y[1]>1440&&min<y[1]-1440)return{open:true,closesAt:y[1]-1440,closesIn:y[1]-1440-min};if(t&&min>=t[0]&&min<t[1])return{open:true,closesAt:t[1],closesIn:t[1]-min};if(t&&min<t[0])return{open:false,opensAt:t[0],opensDay:0};for(let i=1;i<=7;i++){const d=week[(day+i)%7];if(d)return{open:false,opensAt:d[0],opensDay:i}}return{open:false}}`;
