// Shared structure for artist sketches. Each artist file passes facts only; layout and wording patterns live here.
// Rules: sourced facts only, no borrowed photos (labelled placeholders), no guessed handles, emails or show dates.
const F = (brand, plain, css, extra = {}) => ({ brand, plain, css: [css], accentStyle: 'normal', brandTracking: '.08em', ...extra });
export const THEMES = {
  // Warm paper and a chunky serif, in the spirit of 1919
  paper: { colors: { scheme: 'light', primary: '#161412', secondary: '#9a4a25', tertiary: '#2f5d43', neutral: '#f3ede5' }, shape: [4, 6, 8, 12, 16, 999],
    fonts: F("Calistoga,serif", "'Familjen Grotesk',system-ui,sans-serif", 'https://fonts.googleapis.com/css2?family=Calistoga&family=Familjen+Grotesk:wght@400;500;600;700&display=swap', { tracking: '-.01em' }) },
  ink: { colors: { scheme: 'dark', primary: '#eadfcc', secondary: '#e39a66', tertiary: '#8fc7a4', neutral: '#131211' }, shape: [2, 4, 6, 8, 12, 999],
    fonts: F("Fraunces,serif", "Inter,system-ui,sans-serif", 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap', { displayWeight: 500, accentStyle: 'italic' }) },
  plum: { colors: { scheme: 'dark', primary: '#d3b8ff', secondary: '#f2b880', tertiary: '#8fd3c1', neutral: '#17111d' }, shape: [8, 12, 16, 20, 28, 999],
    fonts: F("'Bricolage Grotesque',sans-serif", "Inter,system-ui,sans-serif", 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700&family=Inter:wght@400;500;600;700&display=swap', { displayWeight: 700, tracking: '-.03em' }) },
  sage: { colors: { scheme: 'light', primary: '#1f3a2c', secondary: '#7a5a1e', tertiary: '#2c5a7a', neutral: '#eef0e8' }, shape: [6, 10, 14, 18, 24, 999],
    fonts: F("'Instrument Serif',serif", "'Familjen Grotesk',system-ui,sans-serif", 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Familjen+Grotesk:wght@400;500;600;700&display=swap', { accentStyle: 'italic' }) },
  blue: { colors: { scheme: 'light', primary: '#14213d', secondary: '#a8501c', tertiary: '#1f6b52', neutral: '#eef1f6' }, shape: [2, 4, 6, 10, 14, 999],
    fonts: F("'DM Serif Display',serif", "Inter,system-ui,sans-serif", 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600;700&display=swap', { accentStyle: 'italic' }) },
  clay: { colors: { scheme: 'light', primary: '#7a2e1d', secondary: '#35503f', tertiary: '#2c4f7a', neutral: '#f6ece4' }, shape: [10, 14, 18, 22, 28, 999],
    fonts: F("Syne,sans-serif", "Inter,system-ui,sans-serif", 'https://fonts.googleapis.com/css2?family=Syne:wght@700&family=Inter:wght@400;500;600;700&display=swap', { displayWeight: 700, tracking: '-.03em' }) }
};

export function artist(a) {
  const listen = (a.links || []).find(l => l.primary) || (a.links || [])[0];
  return {
    id: a.id, langs: ['en'], micro: [],
    title: { en: `${a.name} — ${a.role}, Toronto` },
    description: `${a.name}: ${a.lead}`,
    theme: THEMES[a.theme],
    ribbon: `Sketch by Mooque Studio for ${a.name}. Not an official site. Photos, dates and contact details are placeholders.${a.current ? ` <a href="${a.current}" target="_blank" rel="noopener">Current page ↗</a>` : ''}`,
    brand: { wordmark: a.name.toUpperCase() },
    nav: [{ href: '#about', label: 'About' }, { href: '#work', label: a.workNav || 'Music' }, { href: '#shows', label: 'Shows' }, { href: '#contact', label: 'Contact' }],
    primary: { href: '#contact', label: 'Booking' },
    bar: [{ icon: 'music_note', href: '#work', label: a.workNav || 'Music' }, { icon: 'event', href: '#shows', label: 'Shows' }, { icon: 'mail', href: '#contact', label: 'Booking', primary: true }],
    sections: [
      { type: 'hero', eyebrow: `${a.role} · Toronto`, title: a.headline, text: a.lead,
        ctas: [listen ? { href: listen.href, label: listen.cta || 'Listen', icon: 'play_arrow' } : { href: '#work', label: a.workNav || 'Music', icon: 'music_note' }, { href: '#contact', label: 'Booking &amp; press' }] },
      ...(a.facts ? [{ type: 'facts', items: a.facts.map(([value, label]) => ({ value, label })) }] : []),
      { type: 'prose', id: 'about', eyebrow: 'About', placeholder: 'Press photo', title: a.aboutTitle, paras: a.about, facts: a.aboutFacts && a.aboutFacts.map(([k, v]) => ({ k, v })) },
      { type: 'index', id: 'work', tint: true, eyebrow: a.workEyebrow || 'Music', title: a.workTitle, text: a.workText,
        rows: a.works.map(([title, meta, tag, href]) => ({ title, meta, tag, href })), note: a.workNote },
      { type: 'empty', id: 'shows', eyebrow: 'Shows', title: 'Upcoming<br><i class="accent">dates.</i>', icon: 'event',
        label: 'Dates will appear here.', hint: a.showsHint || 'In the live site, shows are added from a simple editor: date, venue, ticket link. Past dates move to an archive on their own.' },
      ...(a.links && a.links.length ? [{ type: 'links', eyebrow: 'Listen &amp; follow', items: a.links.map(l => ({ href: l.href, kicker: l.kind, title: l.title, text: l.text })) }] : []),
      { type: 'contact', id: 'contact', eyebrow: 'Booking &amp; press', title: a.contactTitle || 'Bookings, press<br>and collaborations.',
        text: 'One place for booking requests, press kits and high-resolution photos, so nobody has to send a DM to ask.',
        todos: ['Booking email (from the artist)', 'Press kit download', 'Newsletter sign-up', ...(a.todos || [])] }
    ],
    footer: `<div><b>${a.name.toUpperCase()}</b>${a.role} · Toronto</div><div>Sketch for discussion. Facts from public sources: ${a.sources.join(', ')}.</div>`,
    css: `.m-brand{font-size:17px}`
  };
}
