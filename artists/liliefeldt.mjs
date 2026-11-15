import { artist } from './_base.mjs';

// Facts from Wikipedia, FADO Performance Art Centre, Vtape and MAI (Montréal, arts interculturels).
export default artist({
  id: 'liliefeldt', name: 'Louise Liliefeldt', role: 'Performance artist &amp; painter', theme: 'paper',
  headline: 'Louise<br><i class="accent">Liliefeldt</i>',
  lead: 'Toronto-based artist working in performance and painting. A co-founder of the collective behind the 7a*11d International Festival of Performance Art.',
  facts: [['1996', 'Co-founded the Toronto Performance Art Collective'], ['AGO', 'Commissioned performance, 2016'], ['OCA', 'Ontario College of Art, 1987–1992']],
  aboutTitle: 'Performance and painting, drawn from lived experience.',
  about: ['Louise Liliefeldt was born in Cape Town, South Africa, and came to Canada at the age of six. She lives and works in Toronto, and studied at the Ontario College of Art from 1987 to 1992.', 'She is a co-founding member of the Toronto Performance Art Collective, which presents the 7a*11d International Festival of Performance Art. Her work has been presented by the Art Gallery of Ontario, the Art Gallery of York University, FADO Performance Art Centre, Images Festival, Mercer Union and the Western Front.'],
  aboutFacts: [['Based in', 'Toronto, Ontario'], ['Practice', 'Performance, painting']],
  workNav: 'Work', workIcon: 'palette', workEyebrow: 'Selected work', workTitle: 'Performances', workText: 'A short selection. The live site would also hold the paintings, with images she supplies.',
  works: [['Seen and Heard', 'MAI, Montréal · solo performance · date to confirm', 'Performance'], ['Land of the Living', 'Rhubarb Festival · 2022', 'Performance'], ['What Does It Mean To Forget', 'Art Gallery of Ontario · 2016 · commissioned by Wanda Nanibush', 'Performance'], ['Egalitarian', 'FADO Performance Art Centre · 2005', 'Performance']],
  workNote: 'Visual art, press and publications to be added with the artist.',
  showsNav: 'Exhibitions', showsHint: 'In the live site, performances and exhibitions are added from a simple editor: date, venue, link. Past dates move to an archive on their own.',
  linksEyebrow: 'Elsewhere', todos: ['Image gallery', 'CV download'],
  links: [{ kind: 'FADO', title: 'Artist page', text: 'performanceart.ca', href: 'https://performanceart.ca/artist/louise-lilifeldt/' }, { kind: 'Vtape', title: 'Artist page', text: 'vtape.org', href: 'https://www.vtape.org/artist?ai=829' }],
  sources: ['Wikipedia', 'FADO Performance Art Centre', 'Vtape', 'MAI']
});
