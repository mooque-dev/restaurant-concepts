import { artist } from './_base.mjs';

export default artist({
  id: 'ibrahim', name: 'Zaki Ibrahim', role: 'Singer-songwriter', theme: 'plum', current: 'https://zakiibrahim.bandcamp.com/',
  headline: 'Zaki<br><i class="accent">Ibrahim</i>',
  lead: 'South African-Canadian singer-songwriter blending R&amp;B, soul and jazz. Her album Every Opposite was shortlisted for the 2013 Polaris Music Prize.',
  facts: [['2006', 'First EP, Shö (Iqra in Orange)'], ['Polaris', 'Music Prize short list, 2013'], ['2018', 'The Secret Life of Planets']],
  aboutTitle: 'Between Toronto and Cape Town.',
  about: ['Zaki Ibrahim is a South African-Canadian singer-songwriter whose music blends R&amp;B, soul and jazz. She moved to Toronto in the mid-2000s and became a regular on the city’s live music scene.', 'Every Opposite (2012) was named to the Polaris Music Prize short list in 2013. The Secret Life of Planets followed in 2018.'],
  aboutFacts: [['Based in', 'Toronto, Ontario'], ['Genre', 'R&amp;B, soul, jazz']],
  workTitle: 'Selected releases', workText: 'Newest first.',
  works: [['The Secret Life of Planets', '2018', 'Album'], ['Every Opposite', '2012', 'Polaris short list'], ['Eclectica (Episodes in Purple)', '2008'], ['Shö (Iqra in Orange)', '2006']],
  links: [{ kind: 'Bandcamp', title: 'Listen &amp; buy', text: 'zakiibrahim.bandcamp.com', href: 'https://zakiibrahim.bandcamp.com/', primary: true }],
  sources: ['Wikipedia', 'Bandcamp']
});
