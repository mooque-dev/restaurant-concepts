// One entry per business. The directory (index.html) and the before/after page (compare.html?c=<id>) both read this file.
// To add a business: make a folder <id>/ with index.html, before-desktop.jpg, before-mobile.jpg, thumb.jpg, then add an entry here.
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
    work: 'Full homepage redesign',
    status: 'Free concept',
    live: 'https://mikakutoronto.ca/',
    accent: '#d2352a',
    pitch: 'Built around the one thing no other izakaya nearby can say: open until 2:30am, six nights a week.',
    highlights: ['Live "open now" bar in Toronto time', 'Signature dishes with prices, from their menu', 'Call / Directions / Book dock on mobile'],
    changes: [
      ['First screen', 'Stock wood photo and a pun headline. No hours, location or booking button.', 'Their best photo full-screen, "open \'til 2:30" headline, booking in the nav and hero.'],
      ['Hours', 'On a separate page, never on the homepage.', 'Live open / closed bar at the top, hours table with today highlighted.'],
      ['Food', '"M E N U" and one button.', 'Five reviewer-favourite dishes as photo cards with prices.'],
      ['Sake', 'Only in the page title.', 'A four-mood guide that makes a seven-page list approachable.'],
      ['Reviews', 'Eight long reviews, some duplicated.', 'One big rotating pull quote.'],
      ['Mobile', 'Booking hidden in the menu.', 'A floating Call / Directions / Book dock.']
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
    id: 'kosam',
    short: 'KoSam',
    name: 'KoSam Korean Restaurant & Bar',
    area: 'Yonge & Sheppard · Leslie & Cummer',
    kind: 'Korean, samgyetang',
    work: 'Full homepage redesign, bilingual',
    status: 'Concept',
    live: 'http://kosam.ca/',
    accent: '#c8262d',
    pitch: 'Turns a one-photo page into a guide to both restaurants, in English and Korean.',
    highlights: ['Live hours for both locations', 'One-tap English / 한국어 toggle', '"How to eat samgyetang" guide'],
    changes: [
      ['First screen', 'One full-screen soup photo. On a phone, nothing else is visible: no hours, menu or address.', 'Story, photo and two clear buttons: find a location, see the menu.'],
      ['Security', 'No HTTPS, so Chrome labels the site "Not secure".', 'HTTPS by default on modern hosting.'],
      ['Menu', 'Five separate PDF and PNG files that download to the phone.', 'Signature dishes on the page with Korean names. A full web menu comes with Launch.'],
      ['Locations', 'Separate page with plain-text hours.', 'Side-by-side cards with live open / closed status, today highlighted, call and directions.'],
      ['Language', 'English only.', 'One-tap Korean toggle for headings, hours and key copy.'],
      ['Brand', 'KoSam and Koryo Samgyetang names, two Instagram handles, never explained.', 'Explains it: Leslie is the original Koryo Samgyetang, Sheppard is KoSam with a bar and patio.'],
      ['Reviews', 'Three 2021 Yelp quotes labelled "Yelp Reviewer #1".', 'The same quotes, presented cleanly. Current Google reviews can come next.']
    ],
    next: [
      ['Launch', 'Put the new site on kosam.ca with HTTPS and both menus as web pages.'],
      ['Add-on', 'Photo shoot: only three dish photos are online, and two are 412 pixels wide.'],
      ['Add-on', 'Google Business Profile clean-up for both locations, with matching names and hours.'],
      ['Add-on', 'Patio-season and winter-soup promos on the homepage.'],
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
    status: 'Concept',
    live: 'https://hellodemello.com/pages/location',
    accent: '#1d3a9e',
    pitch: 'Their online store is already strong. This adds what café visitors need: who is open now and which one is closest.',
    highlights: ['"3 of 4 cafés open now" in real time', 'Sort by distance from your location', 'Café visits feed subscriptions and wholesale'],
    changes: [
      ['Status', 'Static list of hours.', 'Live open / closed badges and an "open right now" count. Seoul runs on Korea time.'],
      ['Nearest café', 'Visitors work it out from addresses.', '"Use my location" sorts cafés by distance.'],
      ['First visit', 'A sale popup covers the locations on arrival.', 'No popup on a page people open to find a café.'],
      ['Filters', 'None.', 'Open now and open weekends.'],
      ['Cross-sell', 'The locations page is a dead end.', 'Beans on bar this month, subscription, wholesale and events on the same page.']
    ],
    next: [
      ['Project', 'One landing page per café for local search, such as "coffee Yonge and Eglinton".'],
      ['Project', 'Café drink and pastry menu online; there isn\'t one today.'],
      ['Add-on', 'Korean-language page for the Seoul café.'],
      ['Add-on', 'Events calendar pulled from their Eventbrite.'],
      ['Care', 'Keep hours consistent across the site and five Google profiles.']
    ]
  }
];
