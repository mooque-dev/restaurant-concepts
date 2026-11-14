// One entry per concept. The directory (index.html) and the before/after page (compare.html?c=<id>) both read this file.
// category: 'food' (restaurants & cafés) or 'artist' (artists & musicians).
// group: 'active' shows in the directory; 'hidden' is left out everywhere.
// Pages are built from venues/<id>.mjs or artists/<id>.mjs with `node build/build.mjs` into <id>/index.html.
// Older versions live under archive/<id>/v1 and archive/<id>/v2 (see archive/index.html).
// Owner link for any concept: compare.html?c=<id>&share=1 (hides the other concepts, sources and pricing).
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
    category: 'food', beforeDate: '13 Nov 2026',
    group: 'active',
    interactions: [['Last-call countdown', 'The status bar switches from "Open until 2:30am" to "last call in 1h 20m" in the final hours.'], ['Size picker', 'Grilled Butter Squid switches between M and L prices.'], ['Bilingual', 'One tap between English and Korean; the choice is remembered.'], ['Copy address', 'One tap copies the address, with a short confirmation.']],
    live: 'https://mikakutoronto.ca/',
    accent: '#d2352a',
    pitch: 'Built around the one thing no other izakaya nearby can say: open until 2:30am, six nights a week.',
    highlights: ['Live "open now" bar in Toronto time', 'English / 한국어 toggle with Korean-native copy', 'Fast on phones: WebP photos, smart booking bar'],
    changes: [
      ['First screen', 'A pun headline in heavy condensed type over a busy food photo. No hours or location on the first screen; booking is a small nav link.', 'Their best photo with an "open \'til 2:30" headline, and booking buttons in the nav and hero.'],
      ['Hours', 'On a separate page, not on the homepage.', 'Live open / closed bar at the top, hours table with today highlighted.'],
      ['Food', 'A "M E N U" banner and one button.', 'Six reviewer-favourite dishes as photo cards with prices, including an M / L size picker.'],
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
    category: 'food', beforeDate: '13 Nov 2026',
    group: 'active',
    interactions: [['Night meter', 'A bar shows how much of tonight\'s service is left before the 3am close.'], ['Location switcher', 'Uptown and Downtown share one card: hours, reserve, menu and delivery update together.'], ['Kitchen status', 'The status bar adds "kitchen until 1:30am" or "kitchen closed" after midnight.'], ['Bilingual', 'One tap between English and Korean.']],
    live: 'https://www.ehwa.ca/index.html',
    accent: '#d9b45a',
    pitch: 'Their reservations, menu and ordering already work. This turns the landing page into a reason to come: the food, the 3am hours and two easy location paths.',
    highlights: ['Real dish photos from their own menu, up front', 'Live open status that handles the 3am close and 1:30 kitchen', 'English / 한국어 toggle'],
    changes: [
      ['First screen', 'The illustrated host and "Korean Kitchen & Soju Bar", with no food shown.', 'Their logo stays in the header, next to one of their own dish photos and the 3am headline.'],
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
    category: 'food', beforeDate: '13 Nov 2026',
    group: 'active',
    interactions: [['Size picker', 'S, M and L on each dish update the price as you tap, using the real menu prices.'], ['Menu search', 'Type "bossam" or "막국수" and the menu filters across every tab.'], ['How-to-eat stepper', 'Three tappable steps with a progress bar for first-timers.'], ['Bilingual', 'One tap between English and Korean.']],
    live: 'https://jokbalnightmarket.com/',
    accent: '#e0352b',
    pitch: 'Turns six menu pictures into a real, readable menu and puts their own dishes at the centre of a night-market look.',
    highlights: ['The full menu as text: searchable, readable on a phone', 'Their own dishes, cut from the menu art', '"How to eat jokbal" for first-timers, in English and Korean'],
    changes: [
      ['First screen', 'A notice about the Toronto location and online orders is the first thing visitors read.', 'The name, the herbal-simmered jokbal and an order button.'],
      ['Photos', 'Homepage dish photos appear to be generic stock images, not their own food.', 'Their own dishes, taken from their menu designs.'],
      ['Menu', 'Eight images: six for jokbal and two for the 무청감자탕 gamjatang menu. Not searchable, hard to read on a phone, invisible to Google.', 'A tabbed text menu with every price and size, gamjatang included.'],
      ['Signature', 'Jokbal is explained in a paragraph of text.', 'Original, spicy and half-and-half jokbal plus bossam and combos, each with a tappable S / M / L price.'],
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
    category: 'food', beforeDate: '13 Nov 2026',
    group: 'active',
    interactions: [['Café switcher', 'Rosedale and North York share one card with live hours and parking notes.'], ['Live hours', 'Both cafés show open or closed in the status bar.'], ['Copy address', 'One tap copies the address.']],
    live: 'https://coffeelunar.com/',
    accent: '#121212',
    pitch: 'Keeps their minimal style and puts the signature drops, live hours and parking notes where people look first.',
    highlights: ['Signature drops front and centre', 'Live hours for both cafés, with parking notes', 'Order ahead one tap away on every screen'],
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
    status: 'Concept',
    category: 'food', beforeDate: '13 Nov 2026',
    group: 'active',
    interactions: [['How-to-eat stepper', 'Three tappable steps for first-timers.'], ['Location switcher', 'Sheppard and Leslie share one card with live hours.'], ['Bilingual', 'One tap between English and Korean.']],
    live: 'http://kosam.ca/',
    accent: '#c8262d',
    pitch: 'Turns a one-photo page into a guide to both restaurants, in English and Korean.',
    highlights: ['Live hours for both locations', 'One-tap English / 한국어 toggle', 'Built only from facts on kosam.ca'],
    changes: [
      ['First screen', 'One large soup photo with "Premium Korean Restaurant" in spaced letters. Hours and locations are on another page.', 'Story, photo and two clear buttons: find a location, see the menu.'],
      ['Security', 'No HTTPS, so Chrome labels the site "Not secure".', 'HTTPS by default on modern hosting.'],
      ['Menu', 'Five separate PDF and PNG files that download to the phone.', 'Signature dishes on the page with Korean names. A full web menu comes with Launch.'],
      ['Locations', 'Separate page with plain-text hours.', 'Side-by-side cards with live open / closed status, today highlighted, call and directions.'],
      ['Language', 'English only.', 'One-tap Korean toggle for headings, hours and key copy.'],
      ['Brand', 'KoSam and Koryo Samgyetang names, two Instagram handles, never explained.', 'Explains it: Leslie is also known as Koryo Samgyetang; Sheppard is KoSam, with a bar and a seasonal patio.'],
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
    category: 'food', beforeDate: '13 Nov 2026',
    group: 'hidden',
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
  },
  {
    id: 'kain', short: 'Adria Kain', name: 'Adria Kain', kind: 'R&B singer-songwriter', area: 'Toronto',
    category: 'artist', group: 'active', beforeDate: '13 Nov 2026',
    work: 'Website + domain recovery', status: 'Strong case', live: 'https://adriakain.com/', liveUnsafe: 'now a casino page', accent: '#9a4a25',
    pitch: 'A JUNO-nominated artist whose old address now sends fans to a casino page. One clean page puts the music, the story and booking back under her name.',
    evidence: 'adriakain.com was her official site in Feb 2022 (Wayback Machine). On 13 Nov 2026 the same address showed a casino page. Her Bandcamp page lists no releases. She is on Instagram as @adriakain.',
    
    highlights: ['A site under her own name again, or a new address if the old one cannot be recovered.', 'All four releases in one list, newest first.', 'Polaris long list and JUNO nomination up front.'],
    changes: [['Her address', 'adriakain.com showed an online-casino page on 13 Nov 2026.', 'A site under her own name again, or a new address if the old one cannot be recovered.'], ['Music', 'Her Bandcamp page lists no releases.', 'All four releases in one list, newest first. Listen links are added with her.'], ['Recognition', 'We found it only on Wikipedia and the JUNO site.', 'Polaris long list and JUNO nomination up front.'], ['Booking', 'We found no booking contact.', 'A booking and press section with a press kit.']],
    next: [['Launch', "A one-page site on the artist's own domain, with HTTPS and a press kit."], ['CMS', 'A simple editor for shows, releases and news, so updates take a minute.'], ['Add-on', 'Press photos and a short bio written with the artist.'], ['Care', 'Domain renewal reminders and monthly updates.']],
    sources: ['Wikipedia: Adria Kain', 'junoawards.ca (2026 nominee, Contemporary R&B Recording of the Year, "Set Me Free")', 'web.archive.org snapshot of adriakain.com, 11 Feb 2022', 'adriakain.bandcamp.com']
  },
  {
    id: 'persaud', short: 'Lydia Persaud', name: 'Lydia Persaud', kind: 'Soul singer-songwriter', area: 'Toronto',
    category: 'artist', group: 'active', beforeDate: '13 Nov 2026',
    work: 'Website', status: 'Strong case', live: 'https://www.lydiapersaud.com/', accent: '#1f3a2c',
    pitch: 'Her official address shows "Website Expired". A light one-page site brings back the two albums and a way to book her.',
    evidence: 'lydiapersaud.com was her site in 2019 and 2022 (Wayback Machine). On 13 Nov 2026 it showed Squarespace\'s "Website Expired" page. Her Bandcamp page works and still links to the expired address.',
    
    highlights: ['A working one-page site.', 'Moody31 and Let Me Show You listed with a Listen button.', 'Booking and press section.'],
    changes: [['Her address', 'Shows "Website Expired".', 'A working one-page site.'], ['Albums', 'On Bandcamp, which links back to the expired address.', 'Moody31 and Let Me Show You listed with a Listen button.'], ['Booking', 'We found only Bandcamp\'s contact form.', 'Booking and press section.']],
    next: [['Launch', "A one-page site on the artist's own domain, with HTTPS and a press kit."], ['CMS', 'A simple editor for shows, releases and news, so updates take a minute.'], ['Add-on', 'Press photos and a short bio written with the artist.'], ['Care', 'Domain renewal reminders and monthly updates.']],
    sources: ['NOW Toronto', 'Killbeat Music press releases', 'web.archive.org snapshots of lydiapersaud.com', 'lydiapersaud.bandcamp.com']
  },
  {
    id: 'ibrahim', short: 'Zaki Ibrahim', name: 'Zaki Ibrahim', kind: 'Singer-songwriter', area: 'Toronto',
    category: 'artist', group: 'active', beforeDate: '13 Nov 2026',
    work: 'Website', status: 'Strong case', live: 'https://www.zakiibrahim.com/', accent: '#8b6fd1',
    pitch: 'A Polaris-shortlisted artist whose site has expired. The sketch gives her releases a permanent home.',
    evidence: 'zakiibrahim.com was her site from 2019 to 2024 (Wayback Machine). On 13 Nov 2026 it showed Squarespace\'s "Website Expired" page. A second address listed on the Pirates Blend label page, zakiibrahim.co.za, showed a parked page the same day. Her Bandcamp page works.',
    
    highlights: ['A working one-page site.', 'Selected releases, newest first, with the Polaris short list noted.', 'Booking and press section.'],
    changes: [['Her address', 'Shows "Website Expired".', 'A working one-page site.'], ['Releases', 'On Bandcamp.', 'Selected releases, newest first, with the Polaris short list noted and a Listen button.'], ['Booking', 'We found only Bandcamp\'s contact form.', 'Booking and press section.']],
    next: [['Launch', "A one-page site on the artist's own domain, with HTTPS and a press kit."], ['CMS', 'A simple editor for shows, releases and news, so updates take a minute.'], ['Add-on', 'Press photos and a short bio written with the artist.'], ['Care', 'Domain renewal reminders and monthly updates.']],
    sources: ['Wikipedia: Zaki Ibrahim', 'web.archive.org snapshots of zakiibrahim.com', 'zakiibrahim.bandcamp.com', 'piratesblend.com/artists/zaki-ibrahim (lists zakiibrahim.co.za)']
  },
  {
    id: 'witchprophet', short: 'Witch Prophet', name: 'Witch Prophet', kind: 'Musician', area: 'Toronto',
    category: 'artist', group: 'active', beforeDate: '13 Nov 2026',
    work: 'Website + domain recovery', status: 'Strong case', live: 'https://witchprophet.com/', liveUnsafe: 'now a parked ad page', accent: '#e39a66',
    pitch: 'Three albums and a Polaris short list, but both of her addresses are down: the .com is a parked ad page and the .ca has expired.',
    evidence: 'witchprophet.com was her site in 2019 and 2021 (Wayback Machine). On 13 Nov 2026 it redirected to a parked "lander" page with ads. Her Bandcamp page works and links to witchprophet.ca, which showed Squarespace\'s "Website Expired" page the same day.',
    
    highlights: ['A site under her name, or a new address if the old one cannot be recovered.', 'Three albums in one list with a Listen button.', 'A short About with the label and documentary noted.'],
    changes: [['Her addresses', 'The .com redirects to a parked ad page. The .ca shows "Website Expired".', 'A site under her name, or a new address if the old one cannot be recovered.'], ['Albums', 'On Bandcamp and streaming.', 'Three albums in one list with a Listen button.'], ['Story', 'Told by press and a documentary.', 'A short About with the label and documentary noted.']],
    next: [['Launch', "A one-page site on the artist's own domain, with HTTPS and a press kit."], ['CMS', 'A simple editor for shows, releases and news, so updates take a minute.'], ['Add-on', 'Press photos and a short bio written with the artist.'], ['Care', 'Domain renewal reminders and monthly updates.']],
    sources: ['Wikipedia: Witch Prophet', 'web.archive.org snapshots of witchprophet.com', 'witchprophet.bandcamp.com (links to witchprophet.ca)']
  },
  {
    id: 'charter', short: 'Kyla Charter', name: 'Kyla Charter', kind: 'Singer-songwriter', area: 'Toronto',
    category: 'artist', group: 'active', beforeDate: '13 Nov 2026',
    work: 'Website', status: 'Strong case', live: 'https://kylacharter.com/', accent: '#7a2e1d',
    pitch: 'Her site says "under construction". This sketch is what it could open with: the debut album, track by track.',
    evidence: 'kylacharter.com had a full site in 2020 and 2022 (Wayback Machine). On 13 Nov 2026 it showed "We\'re under construction. Please check back for an update soon."',
    
    highlights: ['A finished one-page site.', 'Edible Flowers listed track by track with a Listen button.', 'Booking and press section.'],
    changes: [['Her address', 'An "under construction" notice.', 'A finished one-page site.'], ['Album', 'On Bandcamp.', 'Edible Flowers listed track by track with a Listen button.'], ['Booking', 'We found only Bandcamp\'s contact form.', 'Booking and press section.']],
    next: [['Launch', "A one-page site on the artist's own domain, with HTTPS and a press kit."], ['CMS', 'A simple editor for shows, releases and news, so updates take a minute.'], ['Add-on', 'Press photos and a short bio written with the artist.'], ['Care', 'Domain renewal reminders and monthly updates.']],
    sources: ['Exclaim!', 'Killbeat Music press releases', 'web.archive.org snapshots of kylacharter.com', 'kycharter.bandcamp.com']
  },
  {
    id: 'botos', short: 'Robi Botos', name: 'Robi Botos', kind: 'Jazz pianist', area: 'Toronto',
    category: 'artist', group: 'active', beforeDate: '13 Nov 2026',
    work: 'Website', status: 'Strong case', live: 'https://robibotos.com/', accent: '#14213d',
    pitch: "A JUNO-winning pianist whose address shows a domain registrar's placeholder. Wikipedia still links to it.",
    evidence: "robibotos.com was his site in 2019 and 2022 (Wayback Machine) and is the website listed on Wikipedia. On 13 Nov 2026 it showed a Dutch registrar's placeholder page.",
    
    highlights: ['A working one-page site.', 'Selected recordings with labels and years.', 'JUNO and TD Grand Jazz Award up front.'],
    changes: [['His address', 'A registrar placeholder in Dutch.', 'A working one-page site.'], ['Recordings', 'Listed on Wikipedia. His Bandcamp page lists no releases.', 'Selected recordings with labels and years.'], ['Awards', 'We found them only on other sites.', 'JUNO and TD Grand Jazz Award up front.']],
    next: [['Launch', "A one-page site on the artist's own domain, with HTTPS and a press kit."], ['CMS', 'A simple editor for shows, releases and news, so updates take a minute.'], ['Add-on', 'Press photos and a short bio written with the artist.'], ['Care', 'Domain renewal reminders and monthly updates.']],
    sources: ['Wikipedia: Robi Botos', 'junoawards.ca', 'web.archive.org snapshots of robibotos.com', 'robibotos.bandcamp.com (no releases listed)']
  },
  {
    id: 'bacchus', short: 'Justin Bacchus', name: 'Justin Bacchus', kind: 'Vocalist', area: 'Toronto',
    category: 'artist', group: 'active', beforeDate: '13 Nov 2026',
    work: 'Website + CMS', status: 'Strong case', live: 'http://www.justinbacchus.com/', accent: '#e39a66',
    pitch: 'His site runs on a retired builder with no HTTPS, and the bio stops in 2014. The sketch keeps his story and makes room for what came after.',
    evidence: "justinbacchus.com is built on GoDaddy Website Builder 7, has no HTTPS, and its homepage slideshow rendered as an empty box in our tests on 13 Nov 2026. The bio's latest release is from October 2014; the homepage note is signed 2020.",
    
    highlights: ['A fast, secure one-page site.', 'Name, role and a clear Booking button.', 'A short About with room for newer work.'],
    changes: [['Platform', 'GoDaddy Website Builder 7, no HTTPS.', 'A fast, secure one-page site.'], ['Homepage', 'An empty slideshow box and a short note from 2020.', 'Name, role and a clear Booking button.'], ['Bio', 'Stops at the 2014 album.', 'A short About with room for newer work.'], ['Shows', 'Not listed.', 'A dates section he can update himself.']],
    next: [['Launch', "A one-page site on the artist's own domain, with HTTPS and a press kit."], ['CMS', 'A simple editor for shows, releases and news, so updates take a minute.'], ['Add-on', 'Press photos and a short bio written with the artist.'], ['Care', 'Domain renewal reminders and monthly updates.']],
    sources: ['justinbacchus.com (The Artist, Contact, Home pages)']
  },
  {
    id: 'manhertz', short: 'Marc Manhertz', name: 'Marc Manhertz', kind: 'Bassist', area: 'Toronto',
    category: 'artist', group: 'active', beforeDate: '13 Nov 2026',
    work: 'One-page site + identity', status: 'No site yet', live: null, accent: '#9a4a25',
    pitch: 'A working bassist with a 1919 feature and no page of his own. A one-page player site gives bookers somewhere to land.',
    evidence: 'A web search for his name on 13 Nov 2026 returned no page about him. The 1919 Magazine essay is the only profile we found.',
    teamNote: 'The name is spelled Manhertz (1919 Magazine). No site was found, so there is nothing to compare against; treat this as a cold introduction.',
    noBefore: ['A web search for his name returned no page about him.', 'The 1919 Magazine essay is the only profile we found.', 'We found no official site, link page or booking contact.'],
    highlights: ['A one-page player site: bio, credits, booking.', 'Selected work he can add to.', 'Booking section with a placeholder for his email.'],
    changes: [['Website', 'None found.', 'A one-page player site: bio, credits, booking.'], ['Credits', 'Mentioned in press only.', 'Selected work he can add to.'], ['Booking', 'We found no public booking contact.', 'Booking section with a placeholder for his email.']],
    next: [['Launch', 'One page on his own domain.'], ['Identity', 'A simple wordmark and colour palette for posters and socials.'], ['Add-on', 'Live video and photos from a Listening Room night, with permission.'], ['Care', 'Updates as credits grow.']],
    sources: ['1919 Magazine, "Listening to Artists" (22 Jan 2026)']
  },
  {
    id: 'watson', short: 'Jelani Watson', name: 'Jelani Watson', kind: 'Saxophonist & pianist', area: 'Toronto',
    category: 'artist', group: 'active', beforeDate: '13 Nov 2026',
    work: 'Refresh + CMS', status: 'Modest case', live: 'https://jelaniwatson.ca/', accent: '#14213d',
    pitch: 'His site works and has his singles and videos. The opportunity is a sharper first screen: what he plays, his radio show and how to book him.',
    evidence: 'jelaniwatson.ca is a working WordPress.com site with three singles, performance videos, a newsletter sign-up and an enquiry form on the About page. The newest post is from December 2024, and the pages we read do not mention the Listening Room band. This is a modest case.',
    teamNote: 'Our first pass listed him as having no site. A name search on 13 Nov 2026 found jelaniwatson.ca, so the case was downgraded to a refresh.',
    highlights: ['Name, instruments and a Listen button first.', 'Radio show and house band listed with the singles.', 'A Booking button on every screen.'],
    changes: [['First screen', 'A welcome message over a photo. What he plays is in small text above the menu.', 'Name, instruments and a Listen button first.'], ['Radio and band', 'The JAZZ.FM91 show is in a 2024 post. The Listening Room is not mentioned on the pages we read.', 'Both listed with the singles, newest first.'], ['Updates', 'Newest post is from December 2024.', 'Shows, releases and news from a simple editor.'], ['Booking', 'An enquiry form at the bottom of the About page.', 'A Booking button on every screen.']],
    next: [['Refresh', 'Restyle the existing content on a faster template, on the same address.'], ['CMS', 'Keep his posts and videos, managed from a simple editor.'], ['Identity', 'A simple wordmark and colour palette.'], ['Care', 'Updates as credits grow.']],
    sources: ['jelaniwatson.ca (Home, Projects, Media, Keep Up With Me, About)', 'jelaniwatson.bandcamp.com', '1919 Magazine, "Listening to Artists" (22 Jan 2026)']
  },
  {
    id: 'evangeline', short: 'Selena E.', name: 'Selena Evangeline', kind: 'Singer & songwriter', area: 'Toronto',
    category: 'artist', group: 'active', beforeDate: '13 Nov 2026',
    work: 'Refresh + CMS', status: 'Modest case', live: 'https://www.selenaevangeline.com/', accent: '#1f3a2c',
    pitch: 'Her site works and is kept up to date. The opportunity is a lighter, faster refresh, not a rescue.',
    evidence: 'selenaevangeline.com is an active Wix site with recent news and gigs. The footer copyright reads 2017 and the homepage HTML alone is about 1.2 MB. This is a modest case.',
    
    highlights: ['Name, one line and a Watch button first.', 'A page under 60 KB before fonts.', 'Key recordings on the homepage.'],
    changes: [['Design', 'A 2017-era layout with a long biography first.', 'Name, one line and a Watch button first.'], ['Weight', 'About 1.2 MB of HTML before images.', 'A page under 60 KB before fonts.'], ['Recordings', 'On a separate discography page.', 'Key recordings on the homepage.']],
    next: [['Refresh', 'Restyle the existing content on a faster template.'], ['CMS', 'Keep her gig list and news, managed from a simple editor.'], ['Care', 'Monthly updates.']],
    sources: ['selenaevangeline.com']
  }
];
