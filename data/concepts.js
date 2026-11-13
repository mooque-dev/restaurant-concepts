// One entry per business. The directory (index.html) and the before/after page (compare.html?c=<id>) both read this file.
// To add a business: make a folder <id>/ with index.html, before-desktop.jpg, before-mobile.jpg, thumb.jpg, then add an entry here.
// group: 'active' shows in the main list; 'earlier' shows under "Earlier drafts" on the team hub.
// Owner link for any concept: compare.html?c=<id>&share=1 (hides the other concepts and pricing).
window.STUDIO = {
  name: 'Mooque Studio',               // placeholder: change to your studio name
  email: '',                           // add a contact email to show the "Get in touch" button
  city: 'Toronto'
};

window.CONCEPTS = [
  {
    id: 'mikaku',
    short: 'Mikaku',
    name: 'Mikaku Izakaya',
    area: 'Yonge & Finch, North York',
    kind: 'Izakaya & sake bar',
    work: 'Full homepage redesign, bilingual',
    status: 'Free concept',
    group: 'active',
    live: 'https://mikakutoronto.ca/',
    accent: '#d2352a',
    pitch: 'Built around the one thing no other izakaya nearby can say: open until 2:30am, six nights a week.',
    highlights: ['Live "open now" bar in Toronto time', 'English / 한국어 toggle with Korean-native copy', 'Fast on phones: WebP photos, smart booking bar'],
    changes: [
      ['First screen', 'A pun headline in heavy condensed type over a busy food photo. No hours or location on the first screen; booking is a small nav link.', 'Their best photo with an "open \'til 2:30" headline, and booking buttons in the nav and hero.'],
      ['Hours', 'On a separate page, not on the homepage.', 'Live open / closed bar at the top, hours table with today highlighted.'],
      ['Food', 'A "M E N U" banner and one button.', 'Five reviewer-favourite dishes as photo cards with prices.'],
      ['Sake', 'Only in the page title.', 'A four-mood guide that makes a seven-page list approachable.'],
      ['Reviews', 'Long review cards in a carousel.', 'One big rotating pull quote.'],
      ['Language', 'English only.', 'One-tap Korean version, written for Korean readers.'],
      ['Mobile', 'Booking sits inside the menu.', 'A floating Call / Directions / Book bar that steps aside at the hero and footer.']
    ],
    next: [
      ['Launch', 'Move the concept to mikakutoronto.ca with self-hosted, compressed photos.'],
      ['Add-on', 'Night photo shoot of the bar, a sake pour and the daruma dolls for a sharper hero.'],
      ['Add-on', 'Pages for the two Mikaku Udon Bars (Carlton and Richmond Hill) on the same template.'],
      ['Add-on', 'Swap Setmore for Resy or OpenTable to add a waitlist and discovery.'],
      ['Care', 'Monthly menu, price and hours updates.']
    ]
  },
  {
    id: 'ehwa',
    short: 'EHWA',
    name: 'EHWA Korean Kitchen & Soju Bar',
    area: 'Uptown (4866 Yonge) · Downtown (16 Isabella)',
    kind: 'Korean pocha & soju bar',
    work: 'Homepage upgrade, bilingual',
    status: 'Concept',
    group: 'active',
    live: 'https://www.ehwa.ca/index.html',
    accent: '#d9b45a',
    pitch: 'Their reservations, menu and ordering already work. This turns the landing page into a reason to come: the food, the 3am hours and two easy location paths.',
    highlights: ['Real dish photos from their own menu, up front', 'Live open status that handles the 3am close and 1:30 kitchen', 'English / 한국어 toggle'],
    changes: [
      ['First screen', 'The illustrated host and "Korean Kitchen & Soju Bar", with no food shown.', 'The host stays, joined by their own dish photos and the 3am headline.'],
      ['Food', 'No dishes on the homepage; photos live only inside the menu app.', 'Eight Popular dishes with photos and prices, linking into the existing menu.'],
      ['Hours', 'Written in each location card.', 'Live "open now · kitchen until 1:30" status for both locations.'],
      ['Locations', 'Two text cards with links.', 'Two clear paths: reserve, menu, delivery, call and directions per location.'],
      ['Search', 'Page title is "EHWA | Main Landing" with no search description.', 'A descriptive title and description for Google and link previews.'],
      ['Language', 'English homepage; Korean names only inside the menu.', 'One-tap Korean version of the whole page.']
    ],
    next: [
      ['Launch', 'Replace the landing page and keep the existing reservation and menu system.'],
      ['Add-on', 'Group and party booking form for large tables.'],
      ['Add-on', 'Downtown-specific dishes and prices if they differ from Uptown.'],
      ['Care', 'Seasonal specials on the homepage, updated monthly.']
    ]
  },
  {
    id: 'jokbal',
    short: 'Jokbal',
    name: 'Jokbal Night Market (족발야시장)',
    area: '41 Sheppard Ave E, North York',
    kind: 'Korean jokbal & bossam',
    work: 'Full redesign, bilingual, web menu',
    status: 'Concept',
    group: 'active',
    live: 'https://jokbalnightmarket.com/',
    accent: '#e0352b',
    pitch: 'Turns six menu pictures into a real, readable menu and puts their own dishes at the centre of a night-market look.',
    highlights: ['The full menu as text: searchable, readable on a phone', 'Their own dishes, cut from the menu art', '"How to eat jokbal" for first-timers, in English and Korean'],
    changes: [
      ['First screen', 'A notice about the Toronto location and online orders is the first thing visitors read.', 'The name, the herbal-simmered jokbal and an order button.'],
      ['Photos', 'Homepage dish photos appear to be generic stock images, not their own food.', 'Their own dishes, taken from their menu designs.'],
      ['Menu', 'Eight images: six for jokbal and two for the 무청감자탕 gamjatang menu. Not searchable, hard to read on a phone, invisible to Google.', 'A tabbed text menu with every price and size, gamjatang included.'],
      ['Signature', 'Jokbal is explained in a paragraph of text.', 'Four ways to jokbal, plus bossam and combos, with S / M / L prices.'],
      ['Language', 'English text under a Korean logo.', 'One-tap Korean version.'],
      ['Hours', 'At the bottom of the page.', 'Live open status at the top.']
    ],
    next: [
      ['Launch', 'New site on jokbalnightmarket.com with the menu as text.'],
      ['Add-on', 'Photo shoot: the only dish photos today are small images inside the menu art.'],
      ['Add-on', 'Google Business Profile menu and photos to match the new site.'],
      ['Care', 'Price and menu updates without redesigning image menus.']
    ]
  },
  {
    id: 'lunar',
    short: 'Lunar',
    name: 'Coffee Lunar',
    area: 'Rosedale (920 Yonge) · North York (6040 Yonge)',
    kind: 'Specialty coffee & desserts',
    work: 'Homepage refresh',
    status: 'Concept',
    group: 'active',
    live: 'https://coffeelunar.com/',
    accent: '#121212',
    pitch: 'Keeps their minimal style and puts the signature drops, live hours and parking notes where people look first.',
    highlights: ['Signature drops front and centre', 'Live hours for both cafés, with parking notes', 'Tonight\'s moon phase, a small nod to the name'],
    changes: [
      ['First screen', 'A full-width slideshow of interior photos with arrows; no headline or menu until you scroll.', 'What they make in one line, the Cream Drop, and Order ahead.'],
      ['Signature drinks', 'On a separate Drinks page.', 'Six signature drops on the homepage with descriptions.'],
      ['Hours', 'Written per location.', 'Live open / closed status for both cafés.'],
      ['Menu', 'Split across Drinks, Foods and Merch pages.', 'Signatures plus a compact classics list on one page.'],
      ['Mobile', 'Order is a small nav link.', 'A floating Menu / Cafés / Order ahead bar.']
    ],
    next: [
      ['Launch', 'Refresh the Squarespace homepage or move to a faster static site.'],
      ['Add-on', 'Seasonal drink drops with their own landing section.'],
      ['Care', 'Monthly menu and photo updates.']
    ]
  },
  {
    id: 'kosam',
    short: 'KoSam',
    name: 'KoSam Korean Restaurant & Bar',
    area: 'Yonge & Sheppard · Leslie & Cummer',
    kind: 'Korean, samgyetang',
    work: 'Full homepage redesign, bilingual',
    status: 'Earlier draft',
    group: 'earlier',
    live: 'http://kosam.ca/',
    accent: '#c8262d',
    pitch: 'Turns a one-photo page into a guide to both restaurants, in English and Korean.',
    highlights: ['Live hours for both locations', 'One-tap English / 한국어 toggle', '"How to eat samgyetang" guide'],
    changes: [
      ['First screen', 'One large soup photo with "Premium Korean Restaurant" in spaced letters. Hours and locations are on another page.', 'Story, photo and two clear buttons: find a location, see the menu.'],
      ['Security', 'No HTTPS, so Chrome labels the site "Not secure".', 'HTTPS by default on modern hosting.'],
      ['Menu', 'Five separate PDF and PNG files that download to the phone.', 'Signature dishes on the page with Korean names. A full web menu comes with Launch.'],
      ['Locations', 'Separate page with plain-text hours.', 'Side-by-side cards with live open / closed status, today highlighted, call and directions.'],
      ['Language', 'English only.', 'One-tap Korean toggle for headings, hours and key copy.'],
      ['Brand', 'KoSam and Koryo Samgyetang names, two Instagram handles, never explained.', 'Explains it: Leslie is the original Koryo Samgyetang, Sheppard is KoSam with a bar and patio.'],
      ['Reviews', 'Yelp quotes from 2021, labelled "Yelp Reviewer #1".', 'The same quotes, presented cleanly. Current Google reviews can come next.']
    ],
    next: [
      ['Launch', 'Put the new site on kosam.ca with HTTPS and both menus as web pages.'],
      ['Add-on', 'Photo shoot: only three dish photos are online, and two are 412 pixels wide.'],
      ['Add-on', 'Google Business Profile clean-up for both locations, with matching names and hours.'],
      ['Care', 'Menu and price updates for two locations.']
    ]
  },
  {
    id: 'demello',
    short: 'De Mello',
    name: 'De Mello Coffee',
    area: 'Toronto cafés · Concord roastery · Seoul',
    kind: 'Specialty coffee roaster',
    work: 'Café finder add-on',
    status: 'Earlier draft',
    group: 'earlier',
    live: 'https://hellodemello.com/pages/location',
    accent: '#1d3a9e',
    pitch: 'Their online store is already strong. This adds what café visitors need: who is open now and which one is closest.',
    highlights: ['"3 of 4 cafés open now" in real time', 'Sort by distance from your location', 'Café visits feed subscriptions and wholesale'],
    changes: [
      ['Status', 'Static list of hours.', 'Live open / closed badges and an "open right now" count. Seoul runs on Korea time.'],
      ['Nearest café', 'Visitors work it out from addresses.', '"Use my location" sorts cafés by distance.'],
      ['First visit', 'A seasonal sale popup can cover the page on a first visit.', 'No popup on a page people open to find a café.'],
      ['Filters', 'None.', 'Open now and open weekends.'],
      ['Cross-sell', 'The locations page is a dead end.', 'Beans on bar this month, subscription, wholesale and events on the same page.']
    ],
    next: [
      ['Project', 'One landing page per café for local search, such as "coffee Yonge and Eglinton".'],
      ['Project', 'Café drink and pastry menu online; there isn\'t one today.'],
      ['Add-on', 'Korean-language page for the Seoul café.'],
      ['Care', 'Keep hours consistent across the site and five Google profiles.']
    ]
  }
];
