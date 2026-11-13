/* Restaurant template runtime. Reads venue data from <script id="venue" type="application/json">. */
(function () {
  const V = JSON.parse(document.getElementById('venue').textContent);
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let LANG = 'en';
  const S = k => (V.strings[LANG] && V.strings[LANG][k]) || V.strings.en[k] || '';
  // Light haptic tick on phones, only after a real tap (browsers block it otherwise)
  const buzz = p => { if (still || !navigator.vibrate || !(navigator.userActivation && navigator.userActivation.isActive)) return; try { navigator.vibrate(p); } catch (e) {} };
  const pick = o => (o && typeof o === 'object' ? o[LANG] || o.en : o);

  /* ---------- time ---------- */
  function now() {
    const p = Object.fromEntries(new Intl.DateTimeFormat('en-US', { timeZone: V.tz, weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date()).map(x => [x.type, x.value]));
    return { day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p.weekday), min: (+p.hour % 24) * 60 + +p.minute };
  }
  function fmt(m) {
    m = ((m % 1440) + 1440) % 1440; const h = Math.floor(m / 60), mm = m % 60, pad = mm ? ':' + String(mm).padStart(2, '0') : '';
    if (LANG === 'ko') { if (h === 0 && !mm) return '자정'; const part = h < 6 ? '새벽' : h < 12 ? '오전' : '오후'; return `${part} ${h % 12 || 12}${mm ? ':' + String(mm).padStart(2, '0') : '시'}`; }
    if (h === 0 && !mm) return 'midnight';
    return `${h % 12 || 12}${pad}${h >= 12 ? 'pm' : 'am'}`;
  }
  const dur = m => { const h = Math.floor(m / 60), mm = m % 60; return LANG === 'ko' ? [h && `${h}시간`, (mm || !h) && `${mm}분`].filter(Boolean).join(' ') : [h && `${h}h`, (mm || !h) && `${mm}m`].filter(Boolean).join(' '); };
  /*__HOURS__*/
  function stateText(st, loc, short) {
    if (st.open) {
      const until = S('openUntil').replace('{t}', fmt(st.closesAt));
      if (V.micro.includes('lastCall') && st.closesIn <= 240) return `${S('open')} · ${S('lastCallIn').replace('{d}', dur(st.closesIn))}`;
      return short ? S('open') : `${S('open')} · ${until}`;
    }
    if (st.opensAt == null) return S('closed');
    const day = st.opensDay === 0 ? S('today') : st.opensDay === 1 ? S('tomorrow') : S('days')[(now().day + st.opensDay) % 7];
    return short ? S('closed') : `${S('closed')} · ${S('opens').replace('{d}', day).replace('{t}', fmt(st.opensAt))}`;
  }
  function renderHours() {
    const n = now();
    const items = V.locations.map(l => { const st = hoursState(l.hours, n.day, n.min); return { l, st }; });
    const bar = $('.m-status');
    if (bar) bar.innerHTML = items.map(({ l, st }) => `<span class="m-status__item" data-open="${st.open}"><span class="m-status__dot"></span>${V.locations.length > 1 ? pick(l.name) + ': ' : ''}${stateText(st, l)}${l.kitchen && st.open ? ' · ' + (hoursState(l.kitchen, n.day, n.min).open ? S('kitchenUntil').replace('{t}', fmt(hoursState(l.kitchen, n.day, n.min).closesAt)) : S('kitchenClosed')) : ''}</span>`).join('');
    items.forEach(({ l, st }) => {
      $$(`[data-loc-badge="${l.id}"]`).forEach(b => { b.dataset.open = st.open; b.textContent = stateText(st, l, true); });
      $$(`[data-hours="${l.id}"]`).forEach(t => {
        t.innerHTML = [1, 2, 3, 4, 5, 6, 0].map(d => `<tr${d === n.day ? ' data-today' : ''}><td>${S('days')[d]}${d === n.day ? ' · ' + S('today') : ''}</td><td>${l.hours[d] ? fmt(l.hours[d][0]) + ' – ' + fmt(l.hours[d][1]) : S('closedDay')}</td></tr>`).join('');
      });
    });
    micro.tick && micro.tick(items, n);
  }

  /* ---------- ripple + top bar ---------- */
  document.addEventListener('pointerdown', e => {
    const el = e.target.closest('.m-interactive'); if (!el || still) return;
    const r = el.getBoundingClientRect(), d = Math.max(r.width, r.height) * 2.2, s = document.createElement('span');
    s.className = 'm-ripple'; s.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`;
    el.appendChild(s); setTimeout(() => s.remove(), 600);
  });
  const top = $('.m-topbar'); const onScroll = () => top && (top.dataset.scrolled = scrollY > 8); addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- bottom sheet ---------- */
  const sheetEl = $('.m-sheet'); if (sheetEl) sheetEl.inert = true;
  const openSheet = o => { document.body.dataset.sheet = o ? 'open' : ''; if (sheetEl) sheetEl.inert = !o; const b = $('[data-sheet-open]'); b && b.setAttribute('aria-expanded', o); if (o) { const f = $('.m-sheet a'); f && f.focus(); } };
  $$('[data-sheet-open]').forEach(b => b.addEventListener('click', () => openSheet(true)));
  $$('.m-scrim,[data-sheet-close],.m-sheet a').forEach(b => b.addEventListener('click', () => openSheet(false)));
  addEventListener('keydown', e => e.key === 'Escape' && openSheet(false));

  /* ---------- segmented buttons ---------- */
  function placeInd(seg) {
    const on = $('[aria-pressed="true"]', seg), ind = $('.m-seg__ind', seg); if (!on || !ind) return;
    ind.style.width = on.offsetWidth + 'px'; ind.style.transform = `translateX(${on.offsetLeft}px)`;
  }
  function initSeg(seg) {
    if (!$('.m-seg__ind', seg)) seg.insertAdjacentHTML('afterbegin', '<span class="m-seg__ind" aria-hidden="true"></span>');
    $$('.m-seg__btn', seg).forEach(b => b.addEventListener('click', () => {
      $$('.m-seg__btn', seg).forEach(x => x.setAttribute('aria-pressed', x === b)); placeInd(seg);
      seg.dispatchEvent(new CustomEvent('seg', { detail: b.dataset.value, bubbles: true }));
      buzz(8);
    }));
    requestAnimationFrame(() => placeInd(seg));
  }
  $$('.m-seg').forEach(initSeg);
  addEventListener('resize', () => $$('.m-seg').forEach(placeInd));
  if (document.fonts) document.fonts.ready.then(() => $$('.m-seg').forEach(placeInd));

  /* ---------- tabs + menu search ---------- */
  $$('.m-tabs').forEach(tabs => {
    const btns = $$('[role=tab]', tabs), ind = document.createElement('span'); ind.className = 'm-tabs__ind'; tabs.appendChild(ind);
    const place = () => { const on = btns.find(b => b.getAttribute('aria-selected') === 'true'); if (on) { ind.style.width = on.offsetWidth + 'px'; ind.style.transform = `translateX(${on.offsetLeft}px)`; } };
    const select = b => { btns.forEach(x => { const sel = x === b; x.setAttribute('aria-selected', sel); x.tabIndex = sel ? 0 : -1; $('#' + x.getAttribute('aria-controls')).hidden = !sel; }); place(); b.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: still ? 'auto' : 'smooth' }); };
    btns.forEach((b, i) => { b.addEventListener('click', () => select(b)); b.addEventListener('keydown', e => { const k = { ArrowRight: 1, ArrowLeft: -1 }[e.key]; if (k) { const n = btns[(i + k + btns.length) % btns.length]; n.focus(); select(n); } }); });
    requestAnimationFrame(place); addEventListener('resize', place); document.fonts && document.fonts.ready.then(place);
  });
  $$('[data-search]').forEach(inp => {
    const scope = inp.closest('[data-search-scope]'), tabs = $('.m-tabs', scope), empty = $('[data-search-empty]', scope);
    inp.addEventListener('input', () => {
      const q = inp.value.trim().toLowerCase(); let hits = 0;
      $$('.m-list__row', scope).forEach(r => { const ok = !q || r.textContent.toLowerCase().includes(q); r.hidden = !ok; if (ok && q) hits++; });
      if (q) { $$('.m-panel', scope).forEach(p => p.hidden = !$$('.m-list__row', p).some(r => !r.hidden)); tabs && (tabs.style.visibility = 'hidden'); }
      else { tabs && (tabs.style.visibility = ''); const on = $('[role=tab][aria-selected="true"]', scope); $$('.m-panel', scope).forEach(p => p.hidden = on && p.id !== on.getAttribute('aria-controls')); }
      if (empty) empty.hidden = !(q && !hits);
    });
  });

  /* ---------- location switcher ---------- */
  $$('.m-locs[data-switch]').forEach(w => w.addEventListener('seg', e => $$('.m-loc', w).forEach(l => l.toggleAttribute('data-active', l.dataset.loc === e.detail))));

  /* ---------- variant price picker + temperature toggle ---------- */
  document.addEventListener('seg', e => {
    const card = e.target.closest('.m-card'); if (!card) return;
    const out = $('[data-price-out]', card);
    if (e.target.matches('[data-variant]') && out) { const b = $(`[data-value="${e.detail}"]`, e.target); out.textContent = b.dataset.price; out.classList.remove('m-tick'); void out.offsetWidth; out.classList.add('m-tick'); }
    if (e.target.matches('[data-temp]')) card.dataset.temp = e.detail;
  });

  /* ---------- bottom action bar ---------- */
  const bar = $('.m-bar');
  if (bar && 'IntersectionObserver' in window) {
    const seen = new Set();
    const io = new IntersectionObserver(es => { es.forEach(x => x.isIntersecting ? seen.add(x.target) : seen.delete(x.target)); bar.dataset.away = seen.size > 0; });
    $$('[data-bar-hide]').forEach(el => io.observe(el));
  }

  /* ---------- snackbar + copy ---------- */
  const snack = $('.m-snackbar'); let st;
  const toast = msg => { if (!snack) return; snack.textContent = msg; snack.dataset.show = true; clearTimeout(st); st = setTimeout(() => snack.dataset.show = false, 2400); };
  $$('[data-copy]').forEach(b => b.addEventListener('click', async () => { try { await navigator.clipboard.writeText(b.dataset.copy); toast(S('copied')); } catch (e) { toast(b.dataset.copy); } }));

  /* ---------- quotes carousel ---------- */
  $$('.m-quote[data-quotes]').forEach(box => {
    const Q = JSON.parse(box.dataset.quotes), q = $('blockquote', box), who = $('[data-who]', box), dots = $('.m-dots', box); let i = 0, t, paused = false;
    Q.forEach((_, k) => { const b = document.createElement('button'); b.setAttribute('aria-label', (k + 1) + ' / ' + Q.length); b.onclick = () => show(k); dots.appendChild(b); });
    function show(k) { i = k; q.style.opacity = 0; setTimeout(() => { q.textContent = Q[k].q; who.textContent = Q[k].who + ' · ' + S('reviewSource'); q.style.opacity = 1; }, still ? 0 : 250); $$('button', dots).forEach((b, j) => b.setAttribute('aria-current', j === k)); clearInterval(t); if (!still && !paused) t = setInterval(() => show((i + 1) % Q.length), 5500); }
    ['mouseenter', 'focusin'].forEach(ev => box.addEventListener(ev, () => { paused = true; clearInterval(t); }));
    ['mouseleave', 'focusout'].forEach(ev => box.addEventListener(ev, () => { paused = false; show(i); }));
    box._refresh = () => show(i); show(0);
  });

  /* ---------- stepper ---------- */
  $$('.m-stepper').forEach(sp => {
    const steps = $$('.m-step', sp), bar = $('.m-progress i', sp.parentElement);
    const go = k => { steps.forEach((s, j) => s.setAttribute('aria-current', j === k)); if (bar) bar.style.width = ((k + 1) / steps.length * 100) + '%'; };
    steps.forEach((s, k) => s.addEventListener('click', () => go(k))); go(0);
  });

  /* ---------- venue micro-interactions ---------- */
  const micro = {};
  // Night meter: how much of tonight's service is left (EHWA)
  if (V.micro.includes('nightMeter')) micro.tick = (items, n) => {
    const m = $('[data-night-meter]'); if (!m) return; const { st, l } = items[0];
    const span = (l.hours[n.day] || l.hours[(n.day + 6) % 7]); const total = span ? span[1] - span[0] : 1;
    const left = st.open ? st.closesIn : total; m.style.setProperty('--left', Math.max(0, Math.min(1, left / total)));
    const lbl = $('[data-night-label]'); if (lbl) lbl.textContent = st.open ? S('nightLeft').replace('{d}', dur(st.closesIn)) : S('nightBefore').replace('{t}', fmt(span ? span[0] : 0));
  };
  // Daruma: paint one eye when you make a wish; the other when it comes true (Mikaku)
  if (V.micro.includes('daruma')) $$('[data-daruma]').forEach(d => {
    const key = V.id + '-daruma'; let s = 0; try { s = +localStorage.getItem(key) || 0; } catch (e) {}
    const paint = () => { d.dataset.eyes = s; const l = $('[data-daruma-label]'); if (l) l.textContent = S(['darumaWish', 'darumaOne', 'darumaTwo'][s]); };
    d.addEventListener('click', () => { s = (s + 1) % 3; try { localStorage.setItem(key, s); } catch (e) {} paint(); buzz([10, 40, 10]); });
    paint();
  });
  // Moon phase (Coffee Lunar)
  if (V.micro.includes('moon')) $$('[data-moon]').forEach(el => {
    const syn = 29.530588853, age = (((Date.now() - Date.UTC(2000, 0, 6, 18, 14)) / 864e5) % syn + syn) % syn, k = Math.floor((age / syn) * 8 + .5) % 8;
    const ph = age / syn; el.style.setProperty('--phase', ph.toFixed(3)); el.style.setProperty('--shift', (ph <= .5 ? -ph * 2 : (1 - ph) * 2) * 100 + '%'); const l = $('[data-moon-label]'); if (l) l.textContent = S('moonNames')[k];
  });
  // String lights: tap to switch the lights on and off (Jokbal)
  if (V.micro.includes('lights')) $$('[data-lights]').forEach(el => el.addEventListener('click', () => { el.dataset.on = el.dataset.on === 'false' ? 'true' : 'false'; }));

  /* ---------- language ---------- */
  const koEls = $$('[data-ko]'); koEls.forEach(e => e.dataset.en = e.innerHTML);
  function setLang(l, save) {
    LANG = l; document.documentElement.lang = l;
    if (l === 'ko' && V.koFont && !$('#koFont')) { const k = document.createElement('link'); k.id = 'koFont'; k.rel = 'stylesheet'; k.href = V.koFont; document.head.appendChild(k); }
    koEls.forEach(e => e.innerHTML = l === 'ko' ? e.dataset.ko : e.dataset.en);
    $$('[data-ko-attr]').forEach(e => { const [a, en, ko] = JSON.parse(e.dataset.koAttr); e.setAttribute(a, l === 'ko' ? ko : en); });
    document.title = pick(V.title);
    $$('.m-seg[data-lang] .m-seg__btn').forEach(b => b.setAttribute('aria-pressed', b.dataset.value === l));
    $$('.m-seg').forEach(placeInd);
    renderHours(); $$('.m-quote[data-quotes]').forEach(b => b._refresh && b._refresh());
    $$('[data-daruma]').forEach(d => { const lb = $('[data-daruma-label]'); if (lb) lb.textContent = S(['darumaWish', 'darumaOne', 'darumaTwo'][+d.dataset.eyes || 0]); });
    $$('[data-moon]').forEach(() => { const syn = 29.530588853, age = (((Date.now() - Date.UTC(2000, 0, 6, 18, 14)) / 864e5) % syn + syn) % syn; const lb = $('[data-moon-label]'); if (lb) lb.textContent = S('moonNames')[Math.floor((age / syn) * 8 + .5) % 8]; });
    if (save) { try { localStorage.setItem(V.id + '-lang', l); } catch (e) {} const u = new URL(location.href); l === 'ko' ? u.searchParams.set('lang', 'ko') : u.searchParams.delete('lang'); history.replaceState(null, '', u); }
  }
  document.addEventListener('seg', e => { if (e.target.matches('[data-lang]')) setLang(e.detail, true); });
  let start = new URLSearchParams(location.search).get('lang'); if (!start) { try { start = localStorage.getItem(V.id + '-lang'); } catch (e) {} }
  setLang(V.langs.includes(start) ? start : 'en', false);
  setInterval(renderHours, 30000);
})();
