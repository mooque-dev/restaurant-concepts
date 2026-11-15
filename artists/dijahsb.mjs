import { artist } from './_base.mjs';

// DijahSB uses they/them. Facts from Wikipedia and their Bandcamp page (release dates as shown on Bandcamp).
export default artist({
  id: 'dijahsb', name: 'DijahSB', role: 'Rapper', theme: 'plum', current: 'https://dijahsb.bandcamp.com/',
  headline: 'Dijah<i class="accent">SB</i>',
  lead: 'Toronto rapper. Head Above the Waters was shortlisted for the 2021 Polaris Music Prize, and a new album, Why Die When You Can Dance?, came out in November 2026.',
  facts: [['2026', 'Why Die When You Can Dance?'], ['Polaris', 'Short list 2021, long list 2024'], ['2011', 'Rapping since']],
  aboutTitle: 'A decade and a half of Toronto rap.',
  about: ['DijahSB is a rapper based in Toronto who has been making music since 2011. Their debut, 2020 the Album, was followed in 2021 by Head Above the Waters, which was shortlisted for the Polaris Music Prize. The single “Frontin’ Like Pharrell” was a SOCAN Songwriting Prize nominee the same year.', 'The Flower That Knew was long-listed for the 2024 Polaris Music Prize. Why Die When You Can Dance? was released on November 6, 2026.'],
  aboutFacts: [['Based in', 'Toronto, Ontario'], ['Genre', 'Hip-hop']],
  workTitle: 'Albums and EPs', workText: 'Newest first.',
  works: [['Why Die When You Can Dance?', '2026', 'Album'], ['The Flower That Knew', '2023 · Polaris long list', 'Album'], ['Tasty Raps Vol. 2', '2023', 'EP'], ['2022 the EP', '2022', 'EP'], ['Head Above the Waters', '2021 · Polaris short list', 'Album'], ['Tasty Raps, Vol. 1', '2021', 'EP'], ['2020 the Album', '2020', 'Album']],
  todos: ['Merch shop link'],
  links: [{ kind: 'Bandcamp', title: 'Listen &amp; buy', text: 'dijahsb.bandcamp.com', href: 'https://dijahsb.bandcamp.com/', primary: true }, { kind: 'Instagram', title: '@DijahSB', text: 'News and new music', href: 'https://instagram.com/DijahSB' }],
  sources: ['Wikipedia', 'Bandcamp', 'archived dijahsb.com (Nov 2023)']
});
