// One entry per concept. The directory (index.html) and the before/after page (compare.html?c=<id>) both read this file.
// category: 'food' (restaurants & cafés) or 'artist' (artists & musicians).
// group: 'active' shows in the directory; 'history' is an earlier sketch kept on the archive page; 'hidden' is left out everywhere.
// level (artists): 'down' | 'dated' | 'none' | 'ok' colours the status tag. status is shown publicly, so it describes the website, not the sales case.
// confirm: things the owner should check before anything goes live (shown on the before/after page).
// Pages are built from venues/<id>.mjs or artists/<id>.mjs with `node build/build.mjs` into <id>/index.html.
// Older versions live under archive/<id>/v1 and archive/<id>/v2 (see archive/index.html).
// Owner link for any concept: for/<id>/ (built by build/owners.mjs with only that concept's data). compare.html?c=<id>&share=1 still works.
// The team list is directory.html. Unpublished files (pricing, review notes) live in local/, which is git-ignored.
window.STUDIO = {
  name: 'Mooque Studio',
  email: 'allensmkang@gmail.com',
  city: 'Toronto'
};

window.CONCEPTS = [
  {
    confirm: ['Hours: Tue–Sun, 5:30pm to 2:30am. Is last call the same as closing?', 'Menu prices, copied from your menu page on 15 Nov 2026.', 'The sake list: send the current list so the guide can become a full, searchable list.', 'Tatami room and bar seating: any time limits or booking rules we should state?', 'Booking: keep Setmore, or move to a service with a waitlist?', 'A Google rating to show, if you want one on the page.'],
    id: 'mikaku',
    short: 'Mikaku',
    name: 'Mikaku Izakaya',
    area: 'Yonge & Finch, North York',
    kind: 'Izakaya & sake bar',
    work: 'Full homepage redesign, bilingual',
    status: 'Free concept',
    category: 'food', beforeDate: '13 Nov 2026',
    group: 'active',
    interactions: [['Last-call countdown', 'The status bar switches from "Open until 2:30am" to "last call in 1h 20m" in the final hours.'], ['Size picker', 'Grilled Butter Squid switches between M and L prices.'], ['Menu search', 'Type "udon" and the full menu filters across every tab.'], ['Bilingual', 'One tap between English and Korean; the choice is remembered.'], ['Copy address', 'One tap copies the address, with a short confirmation.']],
    live: 'https://mikakutoronto.ca/',
    accent: '#d2352a',
    pitch: 'Built around the one thing no other izakaya nearby can say: open until 2:30am, six nights a week.',
    highlights: ['Live "open now" bar in Toronto time', 'English / 한국어 toggle with Korean-native copy', 'Fast on phones: WebP photos, smart booking bar'],
    changes: [
      ['First screen', 'A pun headline in heavy condensed type over a busy food photo. No hours or location on the first screen; booking is a small nav link.', 'Their best photo with an "open \'til 2:30" headline, and booking buttons in the nav and hero.'],
      ['Hours', 'On a separate page, not on the homepage.', 'Live open / closed bar at the top, hours table with today highlighted.'],
      ['Food', 'A "M E N U" banner and one button.', 'Six reviewer-favourite dishes as photo cards with prices, including an M / L size picker.'],
      ['Full menu', 'On a separate page.', 'All 40 dishes on the homepage in a tabbed menu you can search.'],
      ['Sake', 'Only in the page title.', 'A four-mood guide that makes a seven-page list approachable.'],
      ['Reviews', 'Long review cards in a carousel.', 'One big rotating pull quote.'],
      ['Language', 'English only.', 'One-tap Korean version, written for Korean readers.'],
      ['Mobile', 'Booking sits inside the menu.', 'A floating Call / Directions / Book bar that steps aside at the hero and footer.']
    ],
    next: [
      ['Launch', 'Move the concept to mikakutoronto.ca.'],
      ['Add-on', 'The full sake list as a searchable page, once we have the current list.'],
      ['Add-on', 'Night photo shoot of the bar, a sake pour and the daruma dolls for a sharper hero.'],
      ['Add-on', 'Pages for the two Mikaku Udon Bars (Carlton and Richmond Hill) on the same template.'],
      ['Add-on', 'Swap Setmore for Resy or OpenTable to add a waitlist and discovery.'],
      ['Care', 'Monthly menu, price and hours updates.']
    ]
  },
  {
    confirm: ['Hours: 5:30pm to 3am every day, kitchen last orders 1:30am, at both locations.', 'The eight dishes and prices shown, taken from the Uptown menu.', 'Whether Downtown has different dishes or prices.', 'That we may use the dish photos from your menu app.'],
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
      ['First screen', 'The illustrated host and "Korean Kitchen & Soju Bar", with no food shown.', 'Their logo, one of their own dish photos and the 3am headline. The host illustration is not in this version; it can return in the story section.'],
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
    confirm: ['Every price in the menu. They were read from your menu images on 13 Nov 2026.', 'Hours: 11:30am to midnight, every day.', 'That the gamjatang menu (무청감자탕) is served at the same address.', 'That we may use the dish photos cut from your menu designs.'],
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
    confirm: ['Hours: Rosedale 8am to 5pm, North York 9am to 7pm, every day.', 'The parking notes for each café.', 'The six signature drinks and which come hot or iced.', 'That cold brew is Rosedale only.'],
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
    confirm: ['Menu prices, copied from your menu PDF on 15 Nov 2026.', 'Which items are Sheppard only: fried chicken and cheese tonkatsu.', 'Hours for each location.', 'How you want the two names explained: KoSam and Koryo Samgyetang.', 'The review quotes: they are Yelp quotes from 2021. Newer ones would be better.'],
    id: 'kosam',
    short: 'KoSam',
    name: 'KoSam Korean Restaurant & Bar',
    area: 'Yonge & Sheppard · Leslie & Cummer',
    kind: 'Korean, samgyetang',
    work: 'Full homepage redesign, bilingual',
    status: 'Concept',
    category: 'food', beforeDate: '13 Nov 2026',
    group: 'active',
    interactions: [['Menu search', 'Type "비빔밥" or "tofu" and the menu filters across every tab.'], ['How-to-eat stepper', 'Three tappable steps for first-timers.'], ['Location switcher', 'Sheppard and Leslie share one card with live hours.'], ['Bilingual', 'One tap between English and Korean.']],
    live: 'http://kosam.ca/',
    accent: '#c8262d',
    pitch: 'Turns a one-photo page into a guide to both restaurants, in English and Korean.',
    highlights: ['The full menu as text, with Korean names', 'Live hours for both locations', 'One-tap English / 한국어 toggle'],
    changes: [
      ['First screen', 'One large soup photo with "Premium Korean Restaurant" in spaced letters. Hours and locations are on another page.', 'Story, photo and two clear buttons: find a location, see the menu.'],
      ['Security', 'No HTTPS, so Chrome labels the site "Not secure".', 'HTTPS by default on modern hosting.'],
      ['Menu', 'Five separate PDF and PNG files that download to the phone.', 'The full menu on the page: 52 items in five tabs, with Korean names and a search box. Nothing to download.'],
      ['Locations', 'Separate page with plain-text hours.', 'Side-by-side cards with live open / closed status, today highlighted, call and directions.'],
      ['Language', 'English only.', 'One-tap Korean toggle for headings, hours and key copy.'],
      ['Brand', 'KoSam and Koryo Samgyetang names, two Instagram handles, never explained.', 'Explains it: Leslie is also known as Koryo Samgyetang; Sheppard is KoSam, with a bar and a seasonal patio.'],
      ['Reviews', 'Yelp quotes from 2021, labelled "Yelp Reviewer #1".', 'The same quotes, presented cleanly. Current Google reviews can come next.']
    ],
    next: [
      ['Launch', 'Put the new site on kosam.ca with HTTPS.'],
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
    work: 'Website + domain recovery', status: 'Address taken over', level: 'down', live: 'https://adriakain.com/', liveUnsafe: 'now a casino page', accent: '#9a4a25',
    pitch: 'A JUNO-nominated artist whose old address now sends fans to a casino page. One clean page puts the music, the story and booking back under her name.',
    evidence: 'adriakain.com was her official site in Feb 2022 (Wayback Machine). On 13 Nov 2026 the same address showed a casino page. Her Linktree links to streaming, videos and a newer album, This Feels Like Home, but not to a site. Her Bandcamp page lists no releases.',
    
    highlights: ['A site under her own name again, or a new address if the old one cannot be recovered.', 'Album and EPs in one list, newest first, with a Listen button.', 'Polaris long list and JUNO nomination up front.'],
    changes: [['Her address', 'adriakain.com showed an online-casino page on 13 Nov 2026.', 'A site under her own name again, or a new address if the old one cannot be recovered.'], ['Music', 'A Linktree of streaming and video links.', 'Albums and EPs in one list, newest first, with a Listen button.'], ['Recognition', 'On Wikipedia and the JUNO site, not on a page of her own.', 'Polaris long list and JUNO nomination up front.'], ['Booking', 'Not on a page of her own.', 'A booking and press section with a press kit.']],
    next: [['Launch', "A one-page site on the artist's own domain, with HTTPS and a press kit."], ['CMS', 'A simple editor for shows, releases and news, so updates take a minute.'], ['Add-on', 'Press photos and a short bio written with the artist.'], ['Care', 'Domain renewal reminders and monthly updates.']],
    sources: ['Wikipedia: Adria Kain', 'junoawards.ca (2026 nominee, Contemporary R&B Recording of the Year, "Set Me Free")', 'web.archive.org snapshot of adriakain.com, 11 Feb 2022', 'linktr.ee/adriakain', 'adriakain.bandcamp.com (no releases listed)']
  },
  {
    id: 'persaud', short: 'Lydia Persaud', name: 'Lydia Persaud', kind: 'Soul singer-songwriter', area: 'Toronto',
    category: 'artist', group: 'active', beforeDate: '13 Nov 2026',
    work: 'Website', status: 'Site expired', level: 'down', live: 'https://www.lydiapersaud.com/', accent: '#1f3a2c',
    pitch: 'Her official address shows "Website Expired". A light one-page site brings back her records and a way to book her.',
    evidence: 'lydiapersaud.com was her site in 2019 and 2022 (Wayback Machine). On 13 Nov 2026 it showed Squarespace\'s "Website Expired" page. Her Bandcamp page works and still links to the expired address. Her Linktree is active and lists a 2025 release, but no site.',
    
    highlights: ['A working one-page site.', 'Her records in one list with a Listen button.', 'Booking and press section.'],
    changes: [['Her address', 'Shows "Website Expired".', 'A working one-page site.'], ['Albums', 'On Bandcamp, which links back to the expired address.', 'Her records in one list, newest first, with a Listen button.'], ['Booking', 'Not on a page of her own.', 'Booking and press section.']],
    next: [['Launch', "A one-page site on the artist's own domain, with HTTPS and a press kit."], ['CMS', 'A simple editor for shows, releases and news, so updates take a minute.'], ['Add-on', 'Press photos and a short bio written with the artist.'], ['Care', 'Domain renewal reminders and monthly updates.']],
    sources: ['NOW Toronto', 'Killbeat Music press releases', 'web.archive.org snapshots of lydiapersaud.com', 'lydiapersaud.bandcamp.com', 'linktr.ee/lydiapersaud']
  },
  {
    id: 'ibrahim', short: 'Zaki Ibrahim', name: 'Zaki Ibrahim', kind: 'Singer-songwriter', area: 'Toronto',
    category: 'artist', group: 'active', beforeDate: '13 Nov 2026',
    work: 'Website', status: 'Site expired', level: 'down', live: 'https://www.zakiibrahim.com/', accent: '#8b6fd1',
    pitch: 'A Polaris-shortlisted artist whose site has expired. The sketch gives her releases a permanent home.',
    evidence: 'zakiibrahim.com was her site from 2019 to 2024 (Wayback Machine). On 13 Nov 2026 it showed Squarespace\'s "Website Expired" page. A second address listed on the Pirates Blend label page, zakiibrahim.co.za, showed a parked page the same day. Her Linktree (@zatakiwon) still sends its Website and Tip Jar buttons to the expired address. Her Bandcamp page works.',
    
    highlights: ['A working one-page site.', 'Selected releases, newest first, with the Polaris short list noted.', 'Booking and press section.'],
    changes: [['Her address', 'Shows "Website Expired".', 'A working one-page site.'], ['Releases', 'On Bandcamp.', 'Selected releases, newest first, with the Polaris short list noted and a Listen button.'], ['Booking', 'Not on a page of her own.', 'Booking and press section.']],
    next: [['Launch', "A one-page site on the artist's own domain, with HTTPS and a press kit."], ['CMS', 'A simple editor for shows, releases and news, so updates take a minute.'], ['Add-on', 'Press photos and a short bio written with the artist.'], ['Care', 'Domain renewal reminders and monthly updates.']],
    sources: ['Wikipedia: Zaki Ibrahim', 'web.archive.org snapshots of zakiibrahim.com', 'zakiibrahim.bandcamp.com', 'piratesblend.com/artists/zaki-ibrahim (lists zakiibrahim.co.za)', 'linktr.ee/zatakiwon']
  },
  {
    id: 'witchprophet', short: 'Witch Prophet', name: 'Witch Prophet', kind: 'Musician', area: 'Toronto',
    category: 'artist', group: 'active', beforeDate: '13 Nov 2026',
    work: 'Website + domain recovery', status: 'Both addresses down', level: 'down', live: 'https://witchprophet.com/', liveUnsafe: 'now a parked ad page', accent: '#e39a66',
    pitch: 'Four albums and a Polaris short list, but both of her addresses are down: the .com is a parked ad page and the .ca has expired.',
    evidence: 'witchprophet.com was her site in 2019 and 2021 (Wayback Machine). On 13 Nov 2026 it redirected to a parked "lander" page with ads. Her Bandcamp page works and links to witchprophet.ca, which showed Squarespace\'s "Website Expired" page the same day. The Website button on her Linktree points to the same expired address.',
    
    highlights: ['A site under her name, or a new address if the old one cannot be recovered.', 'Four albums in one list with a Listen button.', 'A short About with the label and documentary noted.'],
    changes: [['Her addresses', 'The .com redirects to a parked ad page. The .ca shows "Website Expired".', 'A site under her name, or a new address if the old one cannot be recovered.'], ['Albums', 'On Bandcamp.', 'Four albums in one list with a Listen button.'], ['Story', 'Told by press and a documentary.', 'A short About with the label and documentary noted.']],
    next: [['Launch', "A one-page site on the artist's own domain, with HTTPS and a press kit."], ['CMS', 'A simple editor for shows, releases and news, so updates take a minute.'], ['Add-on', 'Press photos and a short bio written with the artist.'], ['Care', 'Domain renewal reminders and monthly updates.']],
    sources: ['Wikipedia: Witch Prophet', 'web.archive.org snapshots of witchprophet.com', 'witchprophet.bandcamp.com (links to witchprophet.ca)', 'linktr.ee/witchprophet']
  },
  {
    id: 'lalanoel', short: 'Lala Noel', name: 'Lala Noel', kind: 'Singer-songwriter (Kyla Charter)', area: 'Toronto',
    category: 'artist', group: 'history', beforeDate: '13 Nov 2026',
    work: 'Tidy-up + old address', status: 'Site works', level: 'ok', live: 'https://lalanoel.com/', accent: '#7a2e1d',
    pitch: 'She now performs as Lala Noel and her new site works. The small wins are pointing her old address at it and putting what she does on the first screen.',
    evidence: 'Kyla Charter now performs as Lala Noel. lalanoel.com is a working Squarespace site with About, Press, Photo Gallery, Music, Watch and Booking pages. kylacharter.com, the address under her given name, showed "We\'re under construction" on 13 Nov 2026 and does not lead to the new site. On lalanoel.com the Music page sits at /shows and Booking at /new-page.',
    teamNote: 'Kept as an earlier sketch: her own site works, so this is a tidy-up idea only.',
    highlights: ['Name, one line about her and a Listen button first.', 'Old address pointed at the new site.', 'A Booking button on every screen.'],
    changes: [['Old address', 'kylacharter.com shows an "under construction" notice.', 'Redirects to the Lala Noel site.'], ['First screen', 'A full-width photo, then two videos. What she does is on the About page.', 'Name, one line about her and a Listen button first.'], ['Page addresses', 'Music is at /shows and Booking at /new-page.', 'Plain addresses, such as /music and /booking.'], ['Booking', 'On its own page.', 'A Booking button on every screen.']],
    next: [['Tidy-up', 'Redirect kylacharter.com and fix the page addresses on the current site.'], ['Refresh', 'Move the content to a faster one-page template, if she wants a change.'], ['Care', 'Updates as shows and releases come.']],
    sources: ['lalanoel.com (Home, About, Music, Booking)', 'linktr.ee/kylacharter', 'kycharter.bandcamp.com', 'web.archive.org snapshots of kylacharter.com']
  },
  {
    id: 'botos', short: 'Robi Botos', name: 'Robi Botos', kind: 'Jazz pianist', area: 'Toronto',
    category: 'artist', group: 'active', beforeDate: '13 Nov 2026',
    work: 'Website', status: 'Placeholder page', level: 'down', live: 'https://robibotos.com/', accent: '#14213d',
    pitch: "A JUNO-winning pianist whose address shows a domain registrar's placeholder. Wikipedia still links to it.",
    evidence: "robibotos.com was his site in 2019 and 2022 (Wayback Machine) and is the website listed on Wikipedia. On 13 Nov 2026 it showed a Dutch registrar's placeholder page. The Website button on his Linktree points to the same address.",
    
    highlights: ['A working one-page site.', 'Selected recordings with labels and years.', 'JUNO and TD Grand Jazz Award up front.'],
    changes: [['His address', 'A registrar placeholder in Dutch.', 'A working one-page site.'], ['Recordings', 'Listed on Wikipedia. Two releases on Bandcamp.', 'Selected recordings with labels and years, and a Listen button.'], ['Awards', 'We found them only on other sites.', 'JUNO and TD Grand Jazz Award up front.']],
    next: [['Launch', "A one-page site on the artist's own domain, with HTTPS and a press kit."], ['CMS', 'A simple editor for shows, releases and news, so updates take a minute.'], ['Add-on', 'Press photos and a short bio written with the artist.'], ['Care', 'Domain renewal reminders and monthly updates.']],
    sources: ['Wikipedia: Robi Botos', 'junoawards.ca', 'web.archive.org snapshots of robibotos.com', 'robi-botos.bandcamp.com', 'linktr.ee/robibotos']
  },
  {
    id: 'bacchus', short: 'Justin Bacchus', name: 'Justin Bacchus', kind: 'Vocalist', area: 'Toronto',
    category: 'artist', group: 'active', beforeDate: '13 Nov 2026',
    work: 'Website + CMS', status: 'Dated site', level: 'dated', live: 'http://www.justinbacchus.com/', accent: '#e39a66',
    pitch: 'His site runs on a retired builder with no HTTPS, and the bio stops in 2014. The sketch keeps his story and makes room for what came after.',
    evidence: "justinbacchus.com is built on GoDaddy Website Builder 7, has no HTTPS, and its homepage slideshow rendered as an empty box in our tests on 13 Nov 2026. The bio's latest release is from October 2014; the homepage note is signed 2020. He is still performing: Visit Oakville lists a show at the Oakville Centre for the Performing Arts on 17 Apr 2025.",
    
    highlights: ['A fast, secure one-page site.', 'Name, role and a clear Booking button.', 'A short About with room for newer work.'],
    changes: [['Platform', 'GoDaddy Website Builder 7, no HTTPS.', 'A fast, secure one-page site.'], ['Homepage', 'An empty slideshow box and a short note from 2020.', 'Name, role and a clear Booking button.'], ['Bio', 'Stops at the 2014 album.', 'A short About with room for newer work.'], ['Shows', 'Not listed.', 'A dates section he can update himself.']],
    next: [['Launch', "A one-page site on the artist's own domain, with HTTPS and a press kit."], ['CMS', 'A simple editor for shows, releases and news, so updates take a minute.'], ['Add-on', 'Press photos and a short bio written with the artist.'], ['Care', 'Domain renewal reminders and monthly updates.']],
    sources: ['justinbacchus.com (The Artist, Contact, Home pages)', 'visitoakville.com/events/justin-bacchus']
  },
  {
    id: 'collective', short: 'JB Collective', name: 'The Justin Bacchus Collective', kind: 'Band', area: 'Toronto',
    related: ['bacchus'],
    category: 'artist', group: 'active', beforeDate: '15 Nov 2026',
    work: 'Band page + booking', status: 'No page of its own', level: 'none', live: 'http://www.justinbacchus.com/the-artist.html', accent: '#7a2e1d',
    pitch: 'The band has an album and a regular stage, but no page of its own: it lives in two sentences of the bio. A band page gives bookers the line-up, the record and a way to book.',
    evidence: 'On 15 Nov 2026 the band appeared only in the bio on justinbacchus.com, which names The Rex and the 2014 album Time of Your Life. We checked justinbacchuscollective.com, thejustinbacchuscollective.com, Bandcamp and Linktree under the band\'s name and found nothing. A web search for the band\'s name returned no page about it.',
    teamNote: 'Justin Bacchus has his own entry. This could be a second page on his site rather than a separate site. Everything here comes from one paragraph of his bio, and nothing in it about the band is dated after 2014.',
    confirm: ['That the band is still active, and where it plays.', 'The line-up.', 'Where Time of Your Life can be heard or bought.', 'A booking contact for the band.', 'Photos and live video we may use. The sketch uses none.'],
    noBefore: ['The band has no page of its own.', 'It appears in two sentences of the bio on justinbacchus.com.', 'We found no site, Bandcamp page or link page under the band\'s name.'],
    highlights: ['A page for the band: who plays and how to book.', 'Time of Your Life with a Listen link.', 'Dates at The Rex and elsewhere.'],
    changes: [['Band page', 'None. Two sentences in the bio.', 'A page for the band: who plays, what it sounds like and how to book.'], ['Album', 'Named in the bio, with no way to hear it.', 'Time of Your Life, with a Listen link once the band supplies one.'], ['Booking', 'Through the contact page on justinbacchus.com.', 'A booking section for the band.']],
    next: [['Launch', 'A band page alongside the singer\'s own site, on the same address.'], ['CMS', 'Dates at The Rex and elsewhere from a simple editor.'], ['Add-on', 'Live video and band photos.'], ['Care', 'Updates as the line-up and dates change.']],
    sources: ['justinbacchus.com (The Artist, Contact)']
  },
  {
    id: 'dijahsb', short: 'DijahSB', name: 'DijahSB', kind: 'Rapper', area: 'Toronto',
    category: 'artist', group: 'active', beforeDate: '15 Nov 2026',
    work: 'Website + domain recovery', status: 'Address taken over', level: 'down', live: 'https://dijahsb.com/', liveUnsafe: 'now leads to a gambling site', accent: '#8b6fd1',
    pitch: 'A new album came out in November 2026, and the address on their Bandcamp page now leads to a security warning and a gambling site.',
    evidence: 'dijahsb.com was their site and shop in Nov 2023 (Wayback Machine). On 15 Nov 2026 it redirected to an unrelated server: browsers showed a security warning, and past it a gambling site. Their Bandcamp page still links to the address. Their Linktree lists releases and socials but no site.',
    highlights: ['A site under their own name again, or a new address if the old one cannot be recovered.', 'Seven albums and EPs in one list, newest first, with a Listen button.', 'The new album and both Polaris nods up front.'],
    changes: [['Their address', 'A browser security warning, then a gambling site.', 'A site under their own name again, or a new address if the old one cannot be recovered.'], ['Music', 'On Bandcamp, which still links to the lost address.', 'Seven albums and EPs in one list, newest first, with a Listen button.'], ['New album', 'Announced through Linktree and socials.', 'Why Die When You Can Dance? at the top of the page.'], ['Booking', 'Not on a page of their own.', 'A booking and press section with a press kit.']],
    next: [['Launch', "A one-page site on the artist's own domain, with HTTPS and a press kit."], ['CMS', 'A simple editor for shows, releases and news, so updates take a minute.'], ['Add-on', 'Press photos and a short bio written with the artist.'], ['Care', 'Domain renewal reminders and monthly updates.']],
    sources: ['Wikipedia: DijahSB', 'dijahsb.bandcamp.com', 'linktr.ee/dijahsb', 'web.archive.org snapshot of dijahsb.com, 30 Nov 2023']
  },
  {
    id: 'coldspecks', short: 'Cold Specks', name: 'Cold Specks', kind: 'Singer-songwriter', area: 'Toronto',
    category: 'artist', group: 'active', beforeDate: '15 Nov 2026',
    work: 'Website + domain recovery', status: 'Address taken over', level: 'down', live: 'https://coldspecks.com/', liveUnsafe: 'now a gambling site', accent: '#e39a66',
    pitch: 'Four albums and three Polaris nods, and the address that carried her name now opens a gambling site.',
    evidence: 'coldspecks.com was her official site in Apr 2017 (Wayback Machine). On 15 Nov 2026 it redirected to a gambling site. Her Bandcamp page works and links to a Linktree, which lists Instagram, Bandcamp and a management email but no site.',
    highlights: ['A site under her own name again, or a new address if the old one cannot be recovered.', 'Four albums in one list with a Listen button.', 'Light for the Midnight and the Polaris lists up front.'],
    changes: [['Her address', 'Redirects to a gambling site.', 'A site under her own name again, or a new address if the old one cannot be recovered.'], ['Albums', 'On Bandcamp.', 'Four albums in one list with a Listen button.'], ['Recognition', 'On Wikipedia, not on a page of her own.', 'Polaris short list and long lists up front.'], ['Booking', 'A management email on her Linktree.', 'A booking and press section with a press kit.']],
    next: [['Launch', "A one-page site on the artist's own domain, with HTTPS and a press kit."], ['CMS', 'A simple editor for shows, releases and news, so updates take a minute.'], ['Add-on', 'Press photos and a short bio written with the artist.'], ['Care', 'Domain renewal reminders and monthly updates.']],
    sources: ['Wikipedia: Cold Specks', 'coldspecks.bandcamp.com', 'linktr.ee/coldspecks', 'web.archive.org snapshot of coldspecks.com, 20 Apr 2017']
  },
  {
    id: 'liliefeldt', short: 'L. Liliefeldt', name: 'Louise Liliefeldt', kind: 'Performance artist & painter', area: 'Toronto',
    category: 'artist', group: 'active', beforeDate: '15 Nov 2026',
    work: 'Website', status: 'Site expired', level: 'down', live: 'https://www.louiseliliefeldt.com/', accent: '#9a4a25',
    pitch: 'Three arts organizations link to her site, and it now shows "Website Expired". A light one-page site brings back her performances and a way to reach her.',
    evidence: 'louiseliliefeldt.com was her site in Jan 2024 (Wayback Machine), with Performance, Visual Art, Press and Contact pages. On 15 Nov 2026 it showed Squarespace\'s "Website Expired" page. Wikipedia, FADO Performance Art Centre and Vtape all still link to it.',
    teamNote: 'The Wayback Machine has a working capture from 25 Nov 2025, so this may be a lapsed renewal. Check the address again before writing to her.',
    confirm: ['The short bio and the facts in it.', 'The selection of performances, with venues and years. The date of Seen and Heard at MAI is left open.', 'Images of paintings and performances we may use. The sketch uses none.', 'A contact email for curators and press.', 'Upcoming performances or exhibitions, or that the section should stay empty for now.', 'The address the site should live on.'],
    highlights: ['A working one-page site.', 'Selected performances with venues and years.', 'Room for paintings, press and a CV.'],
    changes: [['Her address', 'Shows "Website Expired".', 'A working one-page site.'], ['Work', 'Described on FADO, Vtape and Wikipedia.', 'Selected performances with venues and years, and room for the paintings.'], ['Contact', 'Not on a page of her own.', 'A contact section for curators and press.']],
    next: [['Launch', "A one-page site on the artist's own domain, with HTTPS."], ['CMS', 'A simple editor for performances, exhibitions and images.'], ['Add-on', 'An image gallery for the paintings and performance documentation.'], ['Care', 'Domain renewal reminders and monthly updates.']],
    sources: ['Wikipedia: Louise Liliefeldt', 'performanceart.ca/artist/louise-lilifeldt', 'vtape.org artist page', 'm-a-i.qc.ca/en/event/seen-and-heard', 'web.archive.org snapshot of louiseliliefeldt.com, 11 Jan 2024']
  },
  {
    id: 'manhertz', short: 'Marc Manhertz', name: 'Marc Manhertz', kind: 'Bassist', area: 'Toronto',
    category: 'artist', group: 'active', beforeDate: '13 Nov 2026',
    work: 'One-page site + identity', status: 'No site found', level: 'none', live: null, accent: '#9a4a25',
    pitch: 'A working bassist with a 1919 feature and no page of his own. A one-page player site gives bookers somewhere to land.',
    evidence: 'On 13 Nov 2026 we searched for his name alone, with "bass Toronto" and with "Listening Room", and checked marcmanhertz.com, marcmanhertz.ca, Bandcamp and Linktree. None returned a page of his. The 1919 Magazine essay is the only profile we found.',
    teamNote: 'The name is spelled Manhertz (1919 Magazine). No site was found, so there is no before screenshot.',
    noBefore: ['Three web searches for his name returned no page about him.', 'The 1919 Magazine essay is the only profile we found.', 'We found no official site, link page or booking contact.'],
    highlights: ['A one-page player site: bio, credits, booking.', 'Selected work he can add to.', 'Booking section with a placeholder for his email.'],
    changes: [['Website', 'None found.', 'A one-page player site: bio, credits, booking.'], ['Credits', 'Mentioned in press only.', 'Selected work he can add to.'], ['Booking', 'We found no public booking contact.', 'Booking section with a placeholder for his email.']],
    next: [['Launch', 'One page on his own domain.'], ['Identity', 'A simple wordmark and colour palette for posters and socials.'], ['Add-on', 'Live video and photos from a Listening Room night, with permission.'], ['Care', 'Updates as credits grow.']],
    sources: ['1919 Magazine, "Listening to Artists" (22 Jan 2026)']
  },
  {
    id: 'watson', short: 'Jelani Watson', name: 'Jelani Watson', kind: 'Saxophonist & pianist', area: 'Toronto',
    category: 'artist', group: 'history', beforeDate: '13 Nov 2026',
    work: 'Refresh + CMS', status: 'Site works', level: 'ok', live: 'https://jelaniwatson.ca/', accent: '#14213d',
    pitch: 'His site works and has his singles and videos. The opportunity is a sharper first screen: what he plays, his radio show and how to book him.',
    evidence: 'jelaniwatson.ca is a working WordPress.com site with three singles, performance videos, a newsletter sign-up and an enquiry form on the About page. The newest post is from December 2024, and the pages we read do not mention the Listening Room band.',
    teamNote: 'Kept as an earlier sketch: his own site works, so this is a refresh idea only.',
    highlights: ['Name, instruments and a Listen button first.', 'Radio show and house band listed with the singles.', 'A Booking button on every screen.'],
    changes: [['First screen', 'A welcome message over a photo. What he plays is in small text above the menu.', 'Name, instruments and a Listen button first.'], ['Radio and band', 'The JAZZ.FM91 show is in a 2024 post. The Listening Room is not mentioned on the pages we read.', 'Both listed with the singles, newest first.'], ['Updates', 'Newest post is from December 2024.', 'Shows, releases and news from a simple editor.'], ['Booking', 'An enquiry form at the bottom of the About page.', 'A Booking button on every screen.']],
    next: [['Refresh', 'Restyle the existing content on a faster template, on the same address.'], ['CMS', 'Keep his posts and videos, managed from a simple editor.'], ['Identity', 'A simple wordmark and colour palette.'], ['Care', 'Updates as credits grow.']],
    sources: ['jelaniwatson.ca (Home, Projects, Media, Keep Up With Me, About)', 'jelaniwatson.bandcamp.com', '1919 Magazine, "Listening to Artists" (22 Jan 2026)']
  },
  {
    id: 'evangeline', short: 'Selena E.', name: 'Selena Evangeline', kind: 'Singer & songwriter', area: 'Toronto',
    category: 'artist', group: 'history', beforeDate: '13 Nov 2026',
    work: 'Refresh + CMS', status: 'Site works', level: 'ok', live: 'https://www.selenaevangeline.com/', accent: '#1f3a2c',
    pitch: 'Her site works and is kept up to date. The opportunity is a lighter, faster refresh, not a rescue.',
    evidence: 'selenaevangeline.com is an active Wix site with recent news and gigs. The footer copyright reads 2017 and the homepage HTML alone is about 1.2 MB.',
    
    highlights: ['Name, one line and a Watch button first.', 'A page under 60 KB before fonts.', 'Key recordings on the homepage.'],
    changes: [['Design', 'A 2017-era layout with a long biography first.', 'Name, one line and a Watch button first.'], ['Weight', 'About 1.2 MB of HTML before images.', 'A page under 60 KB before fonts.'], ['Recordings', 'On a separate discography page.', 'Key recordings on the homepage.']],
    next: [['Refresh', 'Restyle the existing content on a faster template.'], ['CMS', 'Keep her gig list and news, managed from a simple editor.'], ['Care', 'Monthly updates.']],
    sources: ['selenaevangeline.com']
  }
];
