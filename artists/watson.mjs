import { artist } from './_base.mjs';

// Facts from his own site (jelaniwatson.ca) and the 1919 Magazine essay. Dates are the post dates on his site.
export default artist({
  id: 'watson', name: 'Jelani Watson', role: 'Saxophonist &amp; pianist', theme: 'blue', current: 'https://jelaniwatson.ca/',
  headline: 'Jelani<br><i class="accent">Watson</i>',
  lead: 'Toronto saxophonist and pianist, rooted in jazz and gospel. Host of Take Me to the Water on JAZZ.FM91 and a member of the Listening Room house band.',
  facts: [['3', 'Singles since 2021'], ['JAZZ.FM91', 'Host, Take Me to the Water'], ['Listening Room', 'House band']],
  aboutTitle: 'Jazz and gospel, learned by ear.',
  about: ['Jelani Watson is a Toronto saxophonist and pianist whose work is driven by jazz and gospel. He grew up playing in church, moving between keys and sax as the band needed.', 'His first single, What a Friend, is his arrangement of the hymn “What a Friend We Have in Jesus”. In December 2024 he began hosting Take Me to the Water on JAZZ.FM91, a Sunday-morning show on the links between gospel, jazz and blues.'],
  aboutFacts: [['Based in', 'Toronto, Ontario'], ['Instruments', 'Saxophone, piano']],
  workNav: 'Music', workEyebrow: 'Music &amp; credits', workTitle: 'Singles, radio<br>and the band.', workText: 'Newest first.',
  works: [['Take Me to the Water', 'JAZZ.FM91 · Sunday mornings · host', 'Radio'], ['The Listening Room', 'House band · saxophone', 'Live'], ['Be Happy (feat. Idris Lawal)', '2022', 'Single'], ['Reflection', '2021', 'Single'], ['What a Friend', '2021', 'Single']],
  workNote: 'Performance videos and further credits to be added with the artist.',
  todos: ['Live video'],
  links: [{ kind: 'Bandcamp', title: 'Listen &amp; buy', text: 'jelaniwatson.bandcamp.com', href: 'https://jelaniwatson.bandcamp.com/', primary: true }, { kind: 'Instagram', title: '@jelaniwatson', text: 'News and clips', href: 'https://www.instagram.com/jelaniwatson/' }],
  sources: ['jelaniwatson.ca', '1919 Magazine, “Listening to Artists” (Jan 2026)']
});
