// node build/owners.mjs — writes one owner page per active concept to for/<id>/index.html.
// Each page is compare.html in owner view with only that concept's data inlined (no sources, team notes or other concepts),
// plus its own title and link preview. Run by build.mjs, so the pages cannot drift from data/concepts.js.
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://mooque-dev.github.io/restaurant-concepts/';
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const KEEP = ['id', 'name', 'short', 'category', 'accent', 'pitch', 'evidence', 'interactions', 'changes', 'next', 'confirm', 'noBefore', 'live', 'liveUnsafe', 'beforeDate'];

export function buildOwners() {
  const ctx = { window: {} };
  vm.runInNewContext(readFileSync(join(ROOT, 'data/concepts.js'), 'utf8'), ctx);
  const { CONCEPTS, STUDIO } = ctx.window;
  const tpl = readFileSync(join(ROOT, 'compare.html'), 'utf8');
  if (existsSync(join(ROOT, 'for'))) rmSync(join(ROOT, 'for'), { recursive: true });
  const made = [];
  for (const c of CONCEPTS.filter(c => c.group === 'active')) {
    const one = Object.fromEntries(KEEP.filter(k => c[k] != null).map(k => [k, c[k]]));
    one.group = 'active';
    const title = `${c.name} · Before & after`, desc = c.pitch;
    const data = `<script>window.OWNER=${JSON.stringify(c.id)};window.STUDIO=${JSON.stringify({ name: STUDIO.name })};window.CONCEPTS=${JSON.stringify([one]).replace(/</g, '\\u003c')};</script>`;
    let html = tpl
      .replace(/<title>[\s\S]*?<\/title>/, `<base href="../../">\n<title>${esc(title)}</title>\n<meta name="description" content="${esc(desc)}">`)
      .replace(/<meta property="og:type"[^\n]*\n/, `<meta property="og:type" content="website"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${BASE}for/${c.id}/"><meta property="og:image" content="${BASE}${c.id}/thumb.jpg"><meta name="twitter:card" content="summary_large_image">\n`)
      .replace('<script src="data/concepts.js"></script>', data);
    if (!html.includes('window.OWNER=') || !html.includes('<base href')) throw new Error('owner template markers not found in compare.html');
    const out = join(ROOT, 'for', c.id, 'index.html');
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, html);
    made.push(c.id);
  }
  // Isolation check: an owner page must not mention any other concept by id-in-data or by name.
  for (const id of made) {
    const html = readFileSync(join(ROOT, 'for', id, 'index.html'), 'utf8');
    for (const o of CONCEPTS) {
      if (o.id === id || (CONCEPTS.find(x => x.id === id).related || []).includes(o.id)) continue;   // `related` names concepts about the same person or band
      if (html.includes(`"id":"${o.id}"`) || html.includes(o.name)) throw new Error(`owner page for ${id} leaks ${o.id}`);
    }
    if (/"sources"|"teamNote"|"status"/.test(html)) throw new Error(`owner page for ${id} carries team-only fields`);
  }
  return made;
}
if (process.argv[1] && process.argv[1].endsWith('owners.mjs')) console.log('owner pages:', buildOwners().join(' '));
