// node build/build.mjs [id ...] — renders venues/<id>.mjs and artists/<id>.mjs into <id>/index.html (self-contained: CSS + JS inlined).
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { roles, contrastReport, HOURS_JS, fillHours, openingSpec } from './lib.mjs';

// Public address of the collection (GitHub Pages). Used for link previews, which need absolute URLs.
const BASE = 'https://mooque-dev.github.io/restaurant-concepts/';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CSS = readFileSync(join(ROOT, 'ds/m3.css'), 'utf8');
const JS = readFileSync(join(ROOT, 'ds/m3.js'), 'utf8').replace('/*__HOURS__*/', HOURS_JS);

// ---------- helpers ----------
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const L = x => (x && typeof x === 'object' && !Array.isArray(x) ? x : { en: x });           // normalise copy to {en, ko}
// Element with bilingual inner HTML: copy values may contain trusted markup from venue files
const T = (tag, x, attrs = '') => { const c = L(x); if (c.en == null || c.en === '') return ''; const ko = c.ko && c.ko !== c.en ? ` data-ko="${esc(c.ko)}"` : ''; return `<${tag}${attrs ? ' ' + attrs : ''}${ko}>${c.en}</${tag}>`; };
const icon = n => `<span class="icon" aria-hidden="true">${n}</span>`;
const ext = href => /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : '';
const btn = (b, cls = 'm-btn--filled') => `<a class="m-btn ${b.style ? 'm-btn--' + b.style : cls} m-interactive" href="${esc(b.href)}"${ext(b.href)}>${b.icon ? icon(b.icon) : ''}${T('span', b.label)}</a>`;
const altAttr = a => { const c = L(a); return c.ko && c.ko !== c.en ? ` alt="${esc(c.en)}" data-ko-attr='${esc(JSON.stringify(['alt', c.en, c.ko]))}'` : ` alt="${esc(c.en)}"`; };
function img(i, sizes = '(max-width: 900px) 92vw, 33vw', eager = false) {
  if (!i) return '';
  const set = i.srcset ? ` srcset="${esc(i.srcset)}" sizes="${esc(i.sizes || sizes)}"` : '';
  const style = [i.focal && `--focal:${i.focal}`, i.zoom && `--zoom:${i.zoom}`].filter(Boolean).join(';');
  return `<img src="${esc(i.src)}"${set}${i.w ? ` width="${i.w}" height="${i.h}"` : ''}${altAttr(i.alt || '')}${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async"${style ? ` style="${style}"` : ''}>`;
}
const head = (s, cls = '') => `<div class="m-head ${cls}"><div>${T('div', s.eyebrow, 'class="t-label-m eyebrow"')}${T('h2', s.title, 'class="t-display-m"')}</div>${T('p', s.text, 'class="t-body-l muted"')}</div>`;
const ctas = list => list && list.length ? `<div class="m-ctas" style="display:flex;gap:10px;flex-wrap:wrap">${list.map((b, i) => btn(b, i ? 'm-btn--outlined' : 'm-btn--filled')).join('')}</div>` : '';

// ---------- sections ----------
const R = {};
// Labelled placeholder frame for sketches (no borrowed photos)
const ph = (label, ratio = '4/5') => `<div class="m-ph" data-ratio="${ratio}" role="img" aria-label="${esc(L(label).en)} placeholder">${icon('image')}${T('span', label)}</div>`;
// One hero for every page: text plus one image in a fixed 4:5 frame; with no image it becomes a type-only hero
R.hero = (s, v) => {
  const text = `<div class="hero__text">${T('div', s.eyebrow, 'class="t-label-m eyebrow"')}${T('h1', s.title, 'class="t-display-l"')}${T('p', s.text, 'class="t-body-l hero__lead"')}${ctas(s.ctas)}</div>`;
  const visual = s.image ? `<figure class="m-media hero__frame ${s.cutout ? 'm-media--cutout' : ''}" data-ratio="4/5">${img(s.image, '(max-width: 900px) 92vw, 40vw', true)}</figure>` : s.placeholder ? ph(s.placeholder) : '';
  return `<header class="hero ${visual ? 'hero--split' : 'hero--type'}" data-bar-hide><div class="m-container hero__in">${text}${visual ? `<div class="hero__visual">${visual}</div>` : ''}</div></header>`;
};
R.facts = s => `<div class="m-facts" style="--n:${s.items.length}">${s.items.map(f => `<div>${T('b', f.value)}${T('span', f.label)}</div>`).join('')}</div>`;
R.story = s => `<section class="m-section ${s.tint ? 'm-section--tint' : ''}" ${s.id ? `id="${s.id}"` : ''}><div class="m-container story">
  <div class="story__text">${T('div', s.eyebrow, 'class="t-label-m eyebrow"')}${T('h2', s.title, 'class="t-display-m"')}${(s.paras || []).map(p => T('p', p, 'class="t-body-l muted"')).join('')}${s.extra || ''}</div>
  <div class="story__media">${(s.images || []).map((im, k) => `<figure class="m-media" data-ratio="${k ? '1/1' : '4/3'}">${img(im)}</figure>`).join('')}</div></div></section>`;
R.cards = s => {
  const media = it => {
    if (s.media === 'plate') return `<div class="m-plate" role="img" aria-label="${esc(L(it.alt || it.title).en)}" style="--src:url(${it.plate.src});--cx:${it.plate.cx};--cy:${it.plate.cy};--r:${it.plate.r};--s:${s.plateSize || 180}"></div>`;
    if (s.media === 'type') return `<div class="m-media m-media--type" data-ratio="${s.ratio}"><span class="type-mark">${esc(it.mark)}</span></div>`;
    return `<div class="m-media ${s.media === 'cutout' ? 'm-media--cutout' : ''}" data-ratio="${s.ratio}">${img(it.image, `(max-width: 900px) 78vw, ${Math.round(100 / (s.cols || 3))}vw`)}${it.badge ? `<span class="m-media__badge m-chip m-chip--badge">${T('span', it.badge)}</span>` : ''}</div>`;
  };
  const foot = it => {
    const parts = [];
    if (it.prices) parts.push(`<div class="m-seg" data-variant role="group" aria-label="Size">${it.prices.map((p, k) => `<button class="m-seg__btn" type="button" data-value="${p.size}" data-price="${esc(p.price)}" aria-pressed="${k === 0}">${p.size}</button>`).join('')}</div>`);
    if (it.temps && it.temps.length > 1) parts.push(`<div class="m-seg" data-temp role="group" aria-label="Temperature">${it.temps.map((t, k) => `<button class="m-seg__btn" type="button" data-value="${t}" aria-pressed="${k === 0}">${icon(t === 'hot' ? 'local_fire_department' : 'ac_unit')}<span class="sr">${t}</span></button>`).join('')}</div>`);
    else if (it.temps) parts.push(`<span class="m-chip">${icon(it.temps[0] === 'hot' ? 'local_fire_department' : 'ac_unit')}${T('span', it.temps[0] === 'hot' ? { en: 'Hot', ko: '따뜻하게' } : { en: 'Iced', ko: '아이스' })}</span>`);
    if (it.tags) parts.push(it.tags.map(t => `<span class="m-chip">${T('span', t)}</span>`).join(''));
    return parts.length ? `<div class="m-card__foot">${parts.join('')}</div>` : '';
  };
  const card = it => `<article class="m-card ${s.media === 'plate' ? 'm-card--plate' : ''}" data-zoom-hover ${it.temps ? `data-temp="${it.temps[0]}"` : ''}>${media(it)}<div class="m-card__body">${T('div', it.kicker, `class="m-card__kicker"${/[\uac00-\ud7a3]/.test(L(it.kicker).en || '') ? ' data-native' : ''}`)}<div class="m-card__title">${T('h3', it.title)}${it.prices ? `<span class="m-price" data-price-out>${esc(it.prices[0].price)}</span>` : it.price ? `<span class="m-price">${esc(it.price)}</span>` : ''}</div>${T('p', it.desc)}${foot(it)}</div></article>`;
  return `<section class="m-section ${s.tint ? 'm-section--tint' : ''}" ${s.id ? `id="${s.id}"` : ''}><div class="m-container">${head(s)}<div class="m-grid m-grid--${s.cols || 3} ${s.scroll !== false ? 'm-scroll-x' : ''}">${s.items.map(card).join('')}</div>${T('p', s.note, 'class="t-body-m muted" style="margin-top:16px"')}${ctas(s.ctas) ? `<div style="margin-top:28px">${ctas(s.ctas)}</div>` : ''}</div></section>`;
};
R.menu = s => `<section class="m-section ${s.tint ? 'm-section--tint' : ''}" id="${s.id || 'menu'}"><div class="m-container" data-search-scope>${head(s)}
  ${s.search ? `<label class="m-search">${icon('search')}<input type="search" data-search placeholder="${esc(L(s.search).en)}" data-ko-attr='${esc(JSON.stringify(['placeholder', L(s.search).en, L(s.search).ko || L(s.search).en]))}'></label>` : ''}
  <div class="m-tabs" role="tablist">${s.tabs.map((t, k) => `<button class="m-tab m-interactive" role="tab" id="tab-${t.id}" aria-controls="panel-${t.id}" aria-selected="${k === 0}" tabindex="${k ? -1 : 0}">${T('span', t.label)}</button>`).join('')}</div>
  ${s.tabs.map((t, k) => `<div class="m-panel" role="tabpanel" id="panel-${t.id}" aria-labelledby="tab-${t.id}"${k ? ' hidden' : ''}>${T('p', t.note, 'class="t-body-m muted" style="margin-bottom:8px"')}<div class="m-list">${t.rows.map(r => `<div class="m-list__row"><b>${r.name}${r.ko ? ` <span class="muted" style="font-weight:500">${r.ko}</span>` : ''}${r.tag ? ` <span class="m-chip" style="min-height:22px;padding:0 8px;vertical-align:2px">${T('span', r.tag)}</span>` : ''}</b><span class="m-price">${r.price}</span>${T('small', r.desc)}</div>`).join('')}</div></div>`).join('')}
  ${s.search ? T('p', { en: 'No dishes match that search.', ko: '검색 결과가 없어요.' }, 'class="t-body-m muted" data-search-empty hidden style="padding:16px 0"') : ''}
  ${T('p', s.note, 'class="t-body-m muted" style="margin-top:16px"')}</div></section>`;
R.list = s => `<section class="m-section ${s.tint ? 'm-section--tint' : ''}" ${s.id ? `id="${s.id}"` : ''}><div class="m-container feature">
  <figure class="m-media feature__media" data-ratio="4/3">${img(s.image, '(max-width: 900px) 92vw, 45vw')}</figure>
  <div>${T('div', s.eyebrow, 'class="t-label-m eyebrow"')}${T('h2', s.title, 'class="t-display-m" style="margin:10px 0 16px"')}${T('p', s.text, 'class="t-body-l muted"')}<div class="m-list" style="margin-top:20px">${s.rows.map(r => `<div class="m-list__row">${T('b', r.title)}<span class="m-chip">${T('span', r.serve)}</span>${T('small', r.desc)}</div>`).join('')}</div></div></div></section>`;
R.steps = s => `<section class="m-section ${s.tint ? 'm-section--tint' : ''}" ${s.id ? `id="${s.id}"` : ''}><div class="m-container">${head(s)}<div class="m-stepper" style="--n:${s.steps.length}">${s.steps.map((st, k) => `<button class="m-step m-interactive" type="button"><span class="m-step__n">0${k + 1}</span>${T('b', st.title)}${T('p', st.text)}</button>`).join('')}</div><div class="m-progress" aria-hidden="true"><i></i></div></div></section>`;
R.quotes = s => `<section class="m-section m-section--accent"><div class="m-container m-quote" data-quotes='${esc(JSON.stringify(s.items))}'>${T('div', s.eyebrow, 'class="t-label-m"')}<blockquote aria-live="polite">${esc(s.items[0].q)}</blockquote><div class="t-label-m" data-who>${esc(s.items[0].who)}</div><div class="m-dots"></div></div></section>`;
R.gallery = s => `<section class="m-section ${s.tint ? 'm-section--tint' : ''}" ${s.id ? `id="${s.id}"` : ''}><div class="m-container">${head(s)}<div class="m-gallery">${s.images.map((im, k) => `<figure>${img(im, k ? '(max-width: 900px) 46vw, 23vw' : '(max-width: 900px) 92vw, 46vw')}${T('figcaption', im.caption)}</figure>`).join('')}</div>${s.perks ? `<div class="m-grid m-grid--4 perks" style="margin-top:36px">${s.perks.map(p => `<div>${T('b', p.title, 'class="t-title-m" style="display:block;margin-bottom:4px"')}${T('p', p.text, 'class="t-body-m muted"')}</div>`).join('')}</div>` : ''}</div></section>`;
R.band = s => `<section class="m-section m-section--accent band" ${s.id ? `id="${s.id}"` : ''}><div class="m-container" style="text-align:center">${s.top || ''}${T('h2', s.title, 'class="t-display-m" style="max-width:18ch;margin:0 auto"')}${T('p', s.text, 'class="t-body-l" style="max-width:52ch;margin:18px auto 28px;opacity:.9"')}${ctas(s.ctas)}</div></section>`;
R.locations = (s, v) => {
  const multi = v.locations.length > 1 && s.switch !== false;
  const loc = (l, k) => `<article class="m-loc" data-loc="${l.id}"${k === 0 ? ' data-active' : ''}>
    <div class="m-loc__top"><div>${T('div', l.tag || s.eyebrow, 'class="t-label-m eyebrow"')}${T('h3', l.title || l.name, 'class="t-headline-l" style="margin-top:6px"')}${T('div', l.near, 'class="t-body-m muted"')}</div><span class="m-loc__badge" data-loc-badge="${l.id}"></span></div>
    <table class="m-hours" data-hours="${l.id}" aria-label="Opening hours"></table>
    <dl>${(l.rows || []).map(r => `${T('dt', r.k)}<dd>${r.html ? r.v : T('span', r.v)}</dd>`).join('')}</dl>
    <div class="m-loc__acts">${(l.actions || []).map((a, i) => btn(a, i ? 'm-btn--outlined' : 'm-btn--filled')).join('')}${l.address ? `<button class="m-btn m-btn--text m-interactive" type="button" data-copy="${esc(l.address)}">${icon('content_copy')}${T('span', { en: 'Copy address', ko: '주소 복사' })}</button>` : ''}</div></article>`;
  return `<section class="m-section ${s.tint ? 'm-section--tint' : ''}" id="${s.id || 'visit'}"><div class="m-container visit">${head(s)}
   <div class="visit__grid ${s.image ? 'visit__grid--img' : ''}"><div class="m-locs" ${multi ? 'data-switch' : ''} data-bar-hide>
   ${multi ? `<div class="m-seg m-seg--lg m-locs-switch" role="group" aria-label="Location">${v.locations.map((l, k) => `<button class="m-seg__btn" type="button" data-value="${l.id}" aria-pressed="${k === 0}">${T('span', l.short || l.name)}</button>`).join('')}</div>` : ''}
   ${v.locations.map(loc).join('')}</div>${s.image ? `<figure class="m-media visit__img" data-ratio="4/3">${img(s.image, '(max-width: 900px) 92vw, 45vw')}${T('figcaption', s.imageCaption, 'class="visit__cap"')}</figure>` : ''}</div></div></section>`;
};
R.links = s => `<section class="m-section" style="padding-top:0"><div class="m-container">${T('div', s.eyebrow, 'class="t-label-m eyebrow" style="margin-bottom:18px"')}<div class="m-grid m-grid--${s.items.length} m-links">${s.items.map(it => `<a class="m-card m-card--outlined m-interactive" href="${esc(it.href)}"${ext(it.href)} style="padding:22px">${T('div', it.kicker, `class="m-card__kicker"${/[\uac00-\ud7a3]/.test(L(it.kicker).en || '') ? ' data-native' : ''}`)}${T('h3', it.title, 'class="t-headline-s" style="margin:6px 0 4px"')}${T('p', it.text, 'class="t-body-m muted"')}</a>`).join('')}</div></div></section>`;
// ----- editorial sections (artists) -----
R.prose = s => `<section class="m-section ${s.tint ? 'm-section--tint' : ''}" ${s.id ? `id="${s.id}"` : ''}><div class="m-container prose">
  <div class="prose__side">${T('div', s.eyebrow, 'class="t-label-m eyebrow"')}${s.placeholder ? ph(s.placeholder, s.ratio || '4/5') : ''}</div>
  <div class="prose__body">${T('h2', s.title, 'class="t-display-m"')}${(s.paras || []).map(p => T('p', p, 'class="t-body-l"')).join('')}${s.facts ? `<dl class="prose__facts">${s.facts.map(f => `${T('dt', f.k)}${T('dd', f.v)}`).join('')}</dl>` : ''}${ctas(s.ctas) ? `<div style="margin-top:28px">${ctas(s.ctas)}</div>` : ''}</div></div></section>`;
R.index = s => `<section class="m-section ${s.tint ? 'm-section--tint' : ''}" ${s.id ? `id="${s.id}"` : ''}><div class="m-container">${head(s)}<ol class="m-index">${s.rows.map((r, k) => { const tag = r.href ? 'a' : 'div'; return `<li><${tag} class="m-index__row ${r.href ? 'm-interactive' : ''}"${r.href ? ` href="${esc(r.href)}"${ext(r.href)}` : ''}><span class="m-index__n">${String(k + 1).padStart(2, '0')}</span>${T('b', r.title)}${T('span', r.meta, 'class="m-index__meta"')}${r.tag ? `<span class="m-chip">${T('span', r.tag)}</span>` : '<span></span>'}${r.href ? icon('arrow_outward') : '<span></span>'}</${tag}></li>`; }).join('')}</ol>${T('p', s.note, 'class="t-body-m muted" style="margin-top:16px"')}</div></section>`;
R.empty = s => `<section class="m-section ${s.tint ? 'm-section--tint' : ''}" ${s.id ? `id="${s.id}"` : ''}><div class="m-container">${head(s)}<div class="m-empty">${icon(s.icon || 'event')}<div>${T('b', s.label)}${T('p', s.hint)}</div></div></div></section>`;
R.contact = s => `<section class="m-section m-section--accent band" ${s.id ? `id="${s.id}"` : ''}><div class="m-container">${T('div', s.eyebrow, 'class="t-label-m"')}${T('h2', s.title, 'class="t-display-m" style="margin:10px 0 0;max-width:16ch"')}${T('p', s.text, 'class="t-body-l" style="max-width:52ch;margin:18px 0 26px;opacity:.9"')}<div class="m-todos">${(s.todos || []).map(t => `<span class="m-todo">${icon('edit_note')}${T('span', t)}</span>`).join('')}</div></div></section>`;
R.raw = s => s.html;

// ---------- page ----------
function themeCss(v) {
  const r = roles(v.theme.colors), sh = v.theme.shape, f = v.theme.fonts;
  const rep = contrastReport(r).filter(p => !p.ok);
  if (rep.length) throw new Error(`${v.id}: contrast failures ${JSON.stringify(rep)}`);
  const vars = Object.entries(r).map(([k, c]) => `--md-sys-color-${k}:${c}`).join(';');
  return `:root{${vars};--md-ref-typeface-brand:${f.brand};--md-ref-typeface-plain:${f.plain};--md-ref-typeface-ko:${f.ko || "'Apple SD Gothic Neo',sans-serif"};${f.wordmark ? `--md-ref-typeface-wordmark:${f.wordmark};` : ''}${f.card ? `--md-ref-typeface-card:${f.card};` : ''}--md-ref-display-weight:${f.displayWeight || 400};--md-ref-display-tracking:${f.tracking || '-.02em'};--md-ref-brand-tracking:${f.brandTracking || '.2em'};--md-ref-accent-style:${f.accentStyle || 'italic'};--md-sys-shape-corner-xs:${sh[0]}px;--md-sys-shape-corner-s:${sh[1]}px;--md-sys-shape-corner-m:${sh[2]}px;--md-sys-shape-corner-l:${sh[3]}px;--md-sys-shape-corner-xl:${sh[4]}px;--md-sys-shape-corner-full:${sh[5] ?? 999}px;${v.theme.cutoutBg ? `--md-ref-cutout-bg:${v.theme.cutoutBg};` : ''}color-scheme:${v.theme.colors.scheme}}`;
}
// Browser-tab icon: the brand's first letter (or v.favicon) on its primary colour
function favicon(v) {
  const r = roles(v.theme.colors), ch = v.favicon || (v.brand.wordmark.replace(/<[^>]+>/g, '').trim()[0] || '•');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${r.primary}"/><text x="32" y="45" font-family="Georgia,serif" font-size="38" font-weight="700" text-anchor="middle" fill="${r['on-primary']}">${ch}</text></svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}
// schema.org data for venues, generated from the same locations and hours the page shows
function schema(v) {
  if (!v.locations.length || !v.schema) return '';
  const plain = x => String(L(x).en || '').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&');
  const items = v.locations.map(l => {
    const tel = (JSON.stringify(l).match(/tel:(\+?[0-9]+)/) || [])[1];
    return { '@context': 'https://schema.org', '@type': v.schema.type || 'Restaurant', name: v.locations.length > 1 ? `${v.schema.name} (${plain(l.name)})` : v.schema.name,
      servesCuisine: v.schema.cuisine, address: l.address, ...(tel ? { telephone: tel } : {}), ...(v.schema.url ? { sameAs: v.schema.url } : {}),
      ...(v.schema.menu ? { hasMenu: v.schema.menu } : {}), ...(v.schema.reservations ? { acceptsReservations: v.schema.reservations } : {}),
      openingHoursSpecification: openingSpec(l.hours) };
  });
  return `\n<script type="application/ld+json">${JSON.stringify(items.length > 1 ? items : items[0]).replace(/</g, '\\u003c')}</script>`;
}
function render(v) {
  v.locations = v.locations || [];
  const H = x => (v.locations.length ? fillHours(x, v.locations) : x); v.bar = v.bar || []; v.micro = v.micro || []; v.langs = v.langs || ['en'];
  v.strings = v.strings || { en: { copied: 'Copied', days: [] } };
  const body = v.sections.map(s => { if (!R[s.type]) throw new Error('unknown section ' + s.type); return R[s.type](s, v); }).join('\n');
  const nav = v.nav.map(n => `<a class="m-interactive" href="${n.href}">${T('span', n.label)}</a>`).join('');
  const langSeg = v.langs.length > 1 ? `<div class="m-seg" data-lang role="group" aria-label="Language">${v.langs.map(l => `<button class="m-seg__btn" type="button" data-value="${l}" aria-pressed="${l === 'en'}">${l === 'en' ? 'EN' : '한국어'}</button>`).join('')}</div>` : '';
  const page = `
<div class="m-ribbon">${T('span', v.ribbon)}</div>
${v.locations.length ? '<div class="m-status" aria-live="polite"></div>' : ''}
<nav class="m-topbar"><div class="m-container m-topbar__in">
 <a class="m-brand" href="#"><span>${v.brand.wordmark}</span>${v.brand.mark ? `<small>${v.brand.mark}</small>` : ''}</a>
 <div class="m-nav">${nav}</div>
 <div class="m-topbar__actions">${langSeg}${btn(v.primary, 'm-btn--filled m-btn--sm')}<button class="m-btn m-btn--icon m-interactive m-menu-btn" type="button" data-sheet-open aria-expanded="false" aria-label="Menu">${icon('menu')}</button></div>
</div></nav>
<main>
${body}
</main>
<footer class="m-footer" data-bar-hide><div class="m-container">${v.footer}</div></footer>
${v.bar.length ? '<nav class="m-bar" data-away="true" aria-label="Quick actions">' : '<nav hidden>'}${v.bar.map(b => `<a class="m-interactive" href="${esc(b.href)}"${ext(b.href)}${b.primary ? ' data-primary' : ''}>${icon(b.icon)}${T('span', b.label)}</a>`).join('')}</nav>
<div class="m-scrim"></div>
<div class="m-sheet" role="dialog" aria-label="Menu"><div class="m-sheet__handle"></div>${v.nav.map(n => `<a class="m-interactive" href="${n.href}">${T('span', n.label)}${icon('arrow_forward')}</a>`).join('')}<div style="padding:12px 16px 0">${btn(v.primary, 'm-btn--filled')}</div></div>
<div class="m-snackbar" role="status"></div>`;
  // ---------- fonts: Korean display subset + icon subset ----------
  const koText = [...page.matchAll(/data-ko="([^"]*)"/g)].map(m => m[1]).join('') + JSON.stringify(v.strings.ko || {}) + JSON.stringify(v.title.ko || '');
  const hangul = [...new Set([...koText].filter(c => c >= '\uac00' && c <= '\ud7a3'))].sort().join('');
  const f = v.theme.fonts, fontLinks = [];
  const ascii = Array.from({ length: 95 }, (_, i) => String.fromCharCode(32 + i)).join('');
  const allChars = () => [...new Set([...page, ...JSON.stringify(v.strings), ...JSON.stringify(v.title), ...hangul, ...ascii, ...'·–—’‘“”…×'])].filter(c => c.trim() && c.charCodeAt(0) > 31).sort().join('');
  for (const fam of f.css) fontLinks.push(fam.includes('{SUBSET}') ? fam.replace('{SUBSET}', encodeURIComponent(allChars())) : fam);
  const koFont = f.koCss && hangul ? `${f.koCss}&text=${encodeURIComponent(hangul + ' ·,.?!~–—()&\'‘’“”0123456789:')}` : null;
  const icons = [...new Set([...page.matchAll(/<span class="icon"[^>]*>([a-z_]+)<\/span>/g)].map(m => m[1]).concat(['local_fire_department', 'ac_unit']))].sort();
  fontLinks.push(`https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..24,400..500,0..1,0&icon_names=${icons.join(',')}&display=block`);
  const data = { id: v.id, tz: 'America/Toronto', langs: v.langs, title: v.title, micro: v.micro || [], koFont, strings: v.strings, locations: v.locations.map(l => ({ id: l.id, name: l.short || l.name, hours: l.hours, kitchen: l.kitchen })) };
  const title = L(v.title).en, desc = v.description;
  return H(`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="robots" content="noindex">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta property="og:type" content="website"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${BASE}${v.id}/"><meta property="og:image" content="${BASE}${v.id}/thumb.jpg"><meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${favicon(v)}">${schema(v)}
<meta name="theme-color" content="${v.theme.colors.neutral}">
${v.preload ? `<link rel="preload" as="image" href="${v.preload.href}"${v.preload.srcset ? ` imagesrcset="${v.preload.srcset}" imagesizes="100vw"` : ''} fetchpriority="high">` : ''}
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
${fontLinks.map(h => `<link href="${h}" rel="stylesheet">`).join('\n')}
<style>${themeCss(v)}
${CSS}
${v.css || ''}</style></head><body>
${page}
<script type="application/json" id="venue">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>
<script>${JS}</script>
</body></html>`);
}

const DIRS = ['venues', 'artists'];
const all = DIRS.flatMap(d => { try { return readdirSync(join(ROOT, d)).filter(f => f.endsWith('.mjs') && !f.startsWith('_')).map(f => [f.replace('.mjs', ''), d]); } catch (e) { return []; } });
const want = process.argv.slice(2);
for (const [id, dir] of all.filter(([id]) => !want.length || want.includes(id))) {
  const v = (await import(pathToFileURL(join(ROOT, dir, id + '.mjs')).href + '?t=' + Date.now())).default;
  const out = join(ROOT, id, 'index.html');
  mkdirSync(dirname(out), { recursive: true });
  const html = render(v);
  writeFileSync(out, html);
  const worst = contrastReport(roles(v.theme.colors)).sort((a, b) => a.ratio / a.min - b.ratio / b.min)[0];
  console.log(`${id}: ${Math.round(html.length / 1024)} KB · lowest contrast ${worst.f} on ${worst.b} ${worst.ratio}:1`);
}
