import { artist } from './_base.mjs';

export default artist({
  id: 'witchprophet', name: 'Witch Prophet', role: 'Musician', theme: 'ink', current: 'https://witchprophet.bandcamp.com/',
  headline: 'Witch<br><i class="accent">Prophet</i>',
  lead: 'Toronto musician with three albums. DNA Activation was shortlisted for the 2020 Polaris Music Prize.',
  facts: [['3', 'Albums as Witch Prophet'], ['Polaris', 'Music Prize short list, 2020'], ['2023', 'Gateway Experience']],
  aboutTitle: 'Artist, label co-founder, documentary subject.',
  about: ['Witch Prophet is the stage name of Ayo Leilani, an Ethiopian/Eritrean musician based in Toronto. She has released three albums: The Golden Octave, DNA Activation and Gateway Experience.', 'She co-founded the Toronto collective 88 Days of Fortune, now Heart Lake Records, and is the subject of the 2023 documentary Leilani’s Fortune.'],
  aboutFacts: [['Based in', 'Toronto, Ontario'], ['Label', 'Heart Lake Records']],
  workTitle: 'Albums', workText: 'Newest first.',
  works: [['Gateway Experience', '2023', 'Album'], ['DNA Activation', '2020', 'Polaris short list'], ['The Golden Octave', '2018', 'Album']],
  links: [{ kind: 'Bandcamp', title: 'Listen &amp; buy', text: 'witchprophet.bandcamp.com', href: 'https://witchprophet.bandcamp.com/', primary: true }],
  sources: ['Wikipedia', 'Bandcamp']
});
