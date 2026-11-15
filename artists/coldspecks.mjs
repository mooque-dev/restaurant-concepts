import { artist } from './_base.mjs';

// Facts from Wikipedia and her Bandcamp page. Albums and prizes only.
export default artist({
  id: 'coldspecks', name: 'Cold Specks', role: 'Singer-songwriter', theme: 'ink', current: 'https://coldspecks.bandcamp.com/',
  headline: 'Cold<br><i class="accent">Specks</i>',
  lead: 'The stage name of Somali Canadian singer-songwriter Ladan Hussein. Four albums since 2012; the latest, Light for the Midnight, was long-listed for the 2025 Polaris Music Prize.',
  facts: [['4', 'Albums since 2012'], ['Polaris', 'Short list 2012, long lists 2015 and 2025'], ['2025', 'Light for the Midnight']],
  aboutTitle: 'Doom-soul, in her own words.',
  about: ['Cold Specks is the stage name of Somali Canadian singer-songwriter Ladan Hussein. Her music has been described as doom-soul. Her debut, I Predict a Graceful Expulsion, came out in 2012 on Mute and Arts &amp; Crafts and was shortlisted for the Polaris Music Prize.', 'Neuroplasticity followed in 2014 and Fool’s Paradise in 2017. Light for the Midnight, released in April 2025, was long-listed for the 2025 Polaris Music Prize.'],
  aboutFacts: [['Based in', 'Toronto, Ontario'], ['Genre', 'Soul']],
  workTitle: 'Albums', workText: 'Newest first.',
  works: [['Light for the Midnight', '2025 · Polaris long list', 'Album'], ['Fool’s Paradise', '2017', 'Album'], ['Neuroplasticity', '2014 · Polaris long list', 'Album'], ['I Predict a Graceful Expulsion', '2012 · Polaris short list', 'Album']],
  links: [{ kind: 'Bandcamp', title: 'Listen &amp; buy', text: 'coldspecks.bandcamp.com', href: 'https://coldspecks.bandcamp.com/', primary: true }, { kind: 'Instagram', title: '@coldspecks', text: 'News and new music', href: 'https://www.instagram.com/coldspecks' }],
  sources: ['Wikipedia', 'Bandcamp', 'archived coldspecks.com (Apr 2017)']
});
