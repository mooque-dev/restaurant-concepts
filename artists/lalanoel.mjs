import { artist } from './_base.mjs';

// Lala Noel released her debut under her given name, Kyla Charter. Facts from lalanoel.com (About, Home, Music).
export default artist({
  id: 'lalanoel', name: 'Lala Noel', role: 'Singer-songwriter', theme: 'clay', current: 'https://lalanoel.com/',
  headline: 'Lala<br><i class="accent">Noel</i>',
  lead: 'Toronto singer, songwriter and rhythm guitarist. Her debut album, Edible Flowers, came out in 2022 under her given name, Kyla Charter.',
  facts: [['2022', 'Debut album, Edible Flowers'], ['JAZZ.FM91', 'Live session, Discover Women in Jazz'], ['History', 'Opened for Hiatus Kaiyote']],
  aboutTitle: 'A new bud on a familiar branch.',
  about: ['Lala Noel has lent her voice and rhythm guitar to Aysanabee, Patrick Watson, Alessia Cara, July Talk, Zaki Ibrahim, Rich Aucoin and The Queer Songbook Orchestra. Her debut solo album, Edible Flowers, was released in spring 2022 under her given name, Kyla Charter.', 'She has played the Toronto International Jazz Festival, Mariposa Folk Festival and Hillside Festival. The name Lala Noel came out of a project about the lives of her grandmothers.'],
  aboutFacts: [['Based in', 'Toronto, Ontario'], ['Also known as', 'Kyla Charter']],
  workEyebrow: 'Music &amp; video', workTitle: 'Listen<br>and watch.', workText: 'From her current site.',
  works: [['Live at JAZZ.FM91', 'Discover Women in Jazz · live-to-radio studio session', 'Video'], ['Live at History', 'Toronto International Jazz Festival · opening for Hiatus Kaiyote', 'Video'], ['Edible Flowers', '2022 · released as Kyla Charter', 'Album']],
  links: [{ kind: 'Bandcamp', title: 'Edible Flowers', text: 'kycharter.bandcamp.com', href: 'https://kycharter.bandcamp.com/album/edible-flowers-2', primary: true }],
  sources: ['lalanoel.com', 'Bandcamp']
});
