// node build/test-hours.mjs — checks the hours engine (build copy and the copy inlined into pages) at edge times.
import { hoursState, HOURS_JS } from './lib.mjs';
const inPage = new Function(HOURS_JS + '; return hoursState;')();
const W = (sun, mon, tue, wed, thu, fri, sat) => [sun, mon, tue, wed, thu, fri, sat];
const SUN = 0, MON = 1, TUE = 2, THU = 4, SAT = 6;
const t = (h, m = 0) => h * 60 + m;

const mik = [1050, 1590];                       // Mikaku 5:30pm–2:30am, closed Monday
const MIKAKU = W(mik, null, mik, mik, mik, mik, mik);
const eh = [1050, 1620];                        // EHWA 5:30pm–3:00am daily
const EHWA = W(eh, eh, eh, eh, eh, eh, eh);
const EHWA_KITCHEN = W(...Array(7).fill([1050, 1530]));
const a = [660, 1380], b = [660, 1440];          // KoSam Sheppard: Sun–Wed 11–11, Thu–Sat 11–12
const KOSAM_SHEP = W(a, a, a, a, b, b, b);
const jb = [690, 1440];                         // Jokbal 11:30am–midnight daily
const JOKBAL = W(...Array(7).fill(jb));
const LUNAR_ROSE = W(...Array(7).fill([480, 1020]));

const cases = [
  ['Mikaku Mon 01:00 (Sunday shift)', MIKAKU, MON, t(1), { open: true, closesAt: 150 }],
  ['Mikaku Mon 02:30 (closed)', MIKAKU, MON, t(2, 30), { open: false, opensDay: 1 }],
  ['Mikaku Tue 01:00 (Monday closed)', MIKAKU, TUE, t(1), { open: false, opensDay: 0, opensAt: 1050 }],
  ['Mikaku Sat 23:00', MIKAKU, SAT, t(23), { open: true, closesAt: 1590 }],
  ['EHWA 00:30', EHWA, THU, t(0, 30), { open: true }],
  ['EHWA 03:01', EHWA, THU, t(3, 1), { open: false, opensAt: 1050 }],
  ['EHWA kitchen 01:40', EHWA_KITCHEN, THU, t(1, 40), { open: false }],
  ['EHWA kitchen 00:30', EHWA_KITCHEN, THU, t(0, 30), { open: true }],
  ['KoSam Sat 23:59', KOSAM_SHEP, SAT, t(23, 59), { open: true }],
  ['KoSam Sun 00:00 (Sat closed at midnight)', KOSAM_SHEP, SUN, t(0), { open: false, opensAt: 660 }],
  ['KoSam Wed 23:00', KOSAM_SHEP, 3, t(23), { open: false }],
  ['Jokbal 23:59', JOKBAL, TUE, t(23, 59), { open: true, closesIn: 1 }],
  ['Jokbal 00:00', JOKBAL, TUE, t(0), { open: false, opensAt: 690, opensDay: 0 }],
  ['Lunar Rosedale 16:59', LUNAR_ROSE, SUN, t(16, 59), { open: true }],
  ['Lunar Rosedale 17:00', LUNAR_ROSE, SUN, t(17), { open: false, opensDay: 1 }],
];
let fail = 0;
for (const [name, week, day, min, want] of cases) {
  for (const [impl, fn] of [['build', hoursState], ['page', inPage]]) {
    const got = fn(week, day, min);
    const ok = Object.entries(want).every(([k, v]) => got[k] === v);
    if (!ok) { fail++; console.log('FAIL', impl, name, JSON.stringify(got)); }
  }
}
console.log(fail ? `${fail} failures` : `all ${cases.length * 2} checks pass`);
if (fail) process.exitCode = 1;

// ---------- hours as words ----------
import { clock, openDays, hoursWords, fillHours, openingSpec } from './lib.mjs';
const eq = (name, got, want) => { const ok = JSON.stringify(got) === JSON.stringify(want); if (!ok) { console.error(`FAIL ${name}: got ${JSON.stringify(got)}, want ${JSON.stringify(want)}`); process.exitCode = 1; } return ok; };
const words = [
  ['clock 2:30am', clock(1590), '2:30am'], ['clock 3am', clock(1620), '3am'], ['clock midnight', clock(1440), 'midnight'], ['clock 5:30pm', clock(1050), '5:30pm'],
  ['clock short', clock(1590, 'en', true), '2:30'], ['clock ko dawn', clock(1590, 'ko'), '새벽 2시 30분'], ['clock ko 3', clock(1620, 'ko'), '새벽 3시'],
  ['clock ko pm', clock(1050, 'ko'), '오후 5시 30분'], ['clock ko am', clock(690, 'ko'), '오전 11시 30분'], ['clock ko midnight', clock(1440, 'ko'), '자정'],
  ['days Mikaku', openDays(MIKAKU), 'Tue–Sun'], ['days Mikaku ko', openDays(MIKAKU, 'ko'), '화–일'], ['days daily', openDays(EHWA), 'every day'], ['days daily ko', openDays(EHWA, 'ko'), '매일'],
  ['range Mikaku', hoursWords({ hours: MIKAKU }, 'range'), '5:30pm – 2:30am'],
  ['fill', fillHours('open [[h:days]] until [[h:close]] / [[hk:close]]까지 / [[h:close@b]]', [{ id: 'a', hours: MIKAKU }, { id: 'b', hours: JOKBAL }]), 'open Tue–Sun until 2:30am / 새벽 2시 30분까지 / midnight'],
  ['spec', openingSpec(MIKAKU)[0], { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '17:30', closes: '02:30' }]
];
let wordsOk = words.filter(([n, g, w]) => eq(n, g, w)).length;
let threw = false; try { hoursWords({ hours: KOSAM_SHEP }, 'close'); } catch (e) { threw = true; }
if (!threw) { console.error('FAIL ambiguous close should throw'); process.exitCode = 1; } else wordsOk++;
console.log(`hours-as-words: ${wordsOk}/${words.length + 1} pass`);
