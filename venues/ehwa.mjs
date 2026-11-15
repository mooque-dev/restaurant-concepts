// EHWA Korean Kitchen & Soju Bar — facts from ehwa.ca (homepage + Uptown menu).
// Photos are EHWA's own menu photos, copied from their menu app and resized (see ehwa/img).
const D = { 'army-soup': [960, 720], 'crispy-boneless-fried-chicken': [720, 960], 'ehwa-jeongsik': [960, 720], 'g-quva-chicken': [768, 960], 'injeolmi-tangsuyuk': [960, 540], 'original-tteokbokki': [960, 720], 'rose-tteokbokki': [960, 540], 'ssagaji-dak': [960, 720], 'yubu-odeng-tang': [960, 720] };
const P = (n, alt, extra = {}) => ({ src: `img/${n}.jpg`, w: D[n][0], h: D[n][1], alt, ...extra });
const night = Array(7).fill([1050, 1620]), kitchen = Array(7).fill([1050, 1530]);
const kRow = { k: { en: 'Kitchen', ko: '주방' }, v: { en: 'Last orders [[h:kitchen]]', ko: '새벽 [[h:kitchen.short]] 라스트 오더' } };

export default {
  id: 'ehwa', langs: ['en', 'ko'], micro: ['nightMeter'],
  title: { en: 'EHWA — Korean Kitchen & Soju Bar, open until [[h:close]]', ko: '이화 EHWA | [[hk:close]]까지 여는 한식 주점' },
  description: 'EHWA Korean Kitchen & Soju Bar: fried chicken, tteokbokki and soju until [[h:close]] at Yonge & Sheppard and downtown on Isabella St, Toronto. Reserve online.',
  schema: { name: 'EHWA Korean Kitchen & Soju Bar', cuisine: ['Korean'], url: 'https://www.ehwa.ca/', menu: 'https://www.ehwa.ca/uptown/menu/index.html' },
  theme: {
    colors: { scheme: 'dark', primary: '#d9b45a', secondary: '#e2675b', tertiary: '#86c79b', neutral: '#16110d' },
    fonts: { brand: "Fraunces,serif", plain: "Inter,'Apple SD Gothic Neo',system-ui,sans-serif", ko: "'Gowun Batang',serif", displayWeight: 600, wordmark: 'Fraunces,serif', brandTracking: '.18em',
      css: ['https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;1,9..144,600&family=Inter:wght@400;500;600;700&display=swap'],
      koCss: 'https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap' },
    shape: [6, 10, 14, 20, 28, 999]
  },
  ribbon: { en: 'Design concept by Mooque Studio, not the official EHWA website. <a href="https://www.ehwa.ca/" target="_blank" rel="noopener">See the current site ↗</a>', ko: 'Mooque Studio의 디자인 시안이며, EHWA 공식 웹사이트가 아닙니다. <a href="https://www.ehwa.ca/" target="_blank" rel="noopener">현재 사이트 보기 ↗</a>' },
  brand: { wordmark: '<img src="img/logo-white.webp" alt="" width="18" height="29" style="display:inline-block;vertical-align:middle;margin:-4px 10px 0 0">EHWA' },
  nav: [{ href: '#menu', label: { en: 'Menu', ko: '메뉴' } }, { href: '#late', label: { en: 'Late night', ko: '심야 영업' } }, { href: '#story', label: { en: 'Our story', ko: '이화 이야기' } }, { href: '#visit', label: { en: 'Locations', ko: '매장 안내' } }],
  primary: { href: '#visit', label: { en: 'Reserve', ko: '예약하기' } },
  bar: [{ icon: 'location_on', href: '#visit', label: { en: 'Locations', ko: '매장' } }, { icon: 'restaurant_menu', href: '#menu', label: { en: 'Menu', ko: '메뉴' } }, { icon: 'event_available', href: '#visit', label: { en: 'Reserve', ko: '예약하기' }, primary: true }],
  locations: [
    { id: 'uptown', name: { en: 'Uptown', ko: '업타운' }, short: { en: 'Uptown', ko: '업타운' }, hours: night, kitchen, tag: { en: 'Uptown', ko: '업타운' }, title: '4866 Yonge St', near: { en: 'North York · near Sheppard–Yonge station', ko: '노스욕 · 쉐퍼드-영 역 인근' }, address: '4866 Yonge St, North York, ON M2N 5N2',
      rows: [kRow, { k: { en: 'Phone', ko: '전화' }, v: '<a href="tel:+14376659995">(437) 665-9995</a>', html: true }, { k: { en: 'Delivery', ko: '배달' }, v: '<a href="https://www.doordash.com/store/ehwa-north-york-40211481/93983346/" target="_blank" rel="noopener">DoorDash</a> · <a href="https://www.ubereats.com/ca/store/ehwa-uptown/44ZHz__IVJaTPeUckFF6Yg" target="_blank" rel="noopener">Uber Eats</a>', html: true }],
      actions: [{ href: 'https://www.ehwa.ca/uptown/reservation/', label: { en: 'Reserve Uptown', ko: '업타운 예약' }, icon: 'event_available' }, { href: 'https://www.ehwa.ca/uptown/menu/index.html', label: { en: 'Menu', ko: '메뉴' } }, { href: 'https://www.google.com/maps/search/?api=1&query=Ehwa+Restaurant+4866+Yonge+St+North+York+ON+M2N+5N2', label: { en: 'Directions', ko: '길찾기' } }] },
    { id: 'downtown', name: { en: 'Downtown', ko: '다운타운' }, short: { en: 'Downtown', ko: '다운타운' }, hours: night, kitchen, tag: { en: 'Downtown', ko: '다운타운' }, title: '16 Isabella St', near: { en: 'Toronto · near Yonge &amp; Bloor', ko: '토론토 · 영 &amp; 블루어 인근' }, address: '16 Isabella St, Toronto, ON M4Y 2A1',
      rows: [kRow, { k: { en: 'Phone', ko: '전화' }, v: '<a href="tel:+14372672266">(437) 267-2266</a>', html: true }, { k: { en: 'Delivery', ko: '배달' }, v: '<a href="https://www.doordash.com/store/ehwa-toronto-40211483/93877348/" target="_blank" rel="noopener">DoorDash</a> · <a href="https://www.ubereats.com/ca/store/ehwa-downtown/2_rjxtHlQXWsv1OBu5rufQ" target="_blank" rel="noopener">Uber Eats</a>', html: true }],
      actions: [{ href: 'https://www.ehwa.ca/downtown/reservation/', label: { en: 'Reserve Downtown', ko: '다운타운 예약' }, icon: 'event_available' }, { href: 'https://www.ehwa.ca/downtown/menu/index.html', label: { en: 'Menu', ko: '메뉴' } }, { href: 'https://www.google.com/maps/search/?api=1&query=Ehwa+Restaurant+16+Isabella+St+Toronto+ON+M4Y+2A1', label: { en: 'Directions', ko: '길찾기' } }] }
  ],
  strings: {
    en: { open: 'Open', openUntil: 'until {t}', closed: 'Closed', opens: 'opens {d} at {t}', today: 'today', tomorrow: 'tomorrow', days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], closedDay: 'Closed', copied: 'Address copied', kitchenUntil: 'kitchen until {t}', kitchenClosed: 'kitchen closed',
      nightLeft: '{d} left tonight', nightBefore: 'Doors open at {t}' },
    ko: { open: '영업 중', openUntil: '{t}까지', closed: '영업 종료', opens: '{d} {t} 오픈', today: '오늘', tomorrow: '내일', days: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'], closedDay: '휴무', copied: '주소를 복사했어요', kitchenUntil: '주방 {t}까지', kitchenClosed: '주방 마감',
      nightLeft: '오늘 영업 {d} 남음', nightBefore: '{t} 오픈' }
  },
  sections: [
    { type: 'hero', eyebrow: { en: 'Korean Kitchen &amp; Soju Bar · Uptown &amp; Downtown', ko: '한식 주점 · 업타운 &amp; 다운타운' },
      title: { en: 'Korean food &amp; soju,<br><i class="accent">until [[h:close]].</i>', ko: '한식과 소주,<br><i class="accent">[[hk:close]]까지.</i>' },
      text: { en: 'Crispy chicken, tteokbokki and hot pots to share, at Yonge &amp; Sheppard and downtown on Isabella. The kitchen takes last orders at [[h:kitchen]].', ko: '바삭한 치킨, 떡볶이, 함께 나눠 먹는 탕까지. 영 &amp; 쉐퍼드와 다운타운 이사벨라 두 곳에서 만나요. 주방 주문은 [[hk:kitchen]]에 마감해요.' },
      ctas: [{ href: '#visit', label: { en: 'Reserve a table', ko: '예약하기' }, icon: 'event_available' }, { href: '#menu', label: { en: 'See what to order', ko: '대표 메뉴 보기' } }],
      image: P('ssagaji-dak', { en: 'Ssagaji Dak, four-flavour chicken', ko: '싸가지 닭' }, { focal: '50% 50%' }) },
    { type: 'facts', items: [{ value: { en: '[[h:close]]', ko: '[[hk:close]]' }, label: { en: 'Close, every night', ko: '매일 영업 종료' } }, { value: { en: '[[h:kitchen]]', ko: '새벽 [[h:kitchen.short]]' }, label: { en: 'Kitchen last orders', ko: '주방 라스트 오더' } }, { value: '2', label: { en: 'Uptown &amp; Downtown', ko: '업타운 · 다운타운' } }, { value: { en: 'Online', ko: '온라인' }, label: { en: 'Reservations &amp; delivery', ko: '예약 · 배달 주문' } }] },
    { type: 'cards', id: 'menu', media: 'photo', ratio: '4/3', cols: 4,
      eyebrow: { en: 'What to order', ko: '대표 메뉴' }, title: { en: 'Start with<br><i class="accent">the favourites.</i>', ko: '처음이라면,<br><i class="accent">인기 메뉴부터.</i>' },
      text: { en: 'Dishes marked Popular on our menu. Prices are from the Uptown menu.', ko: '메뉴판에 ‘인기’로 표시된 메뉴예요. 가격은 업타운점 기준이에요.' },
      items: [
        { image: P('ssagaji-dak', { en: 'Ssagaji Dak, four-flavour chicken', ko: '싸가지 닭' }), kicker: '싸가지 닭', title: { en: 'Ssagaji Dak', ko: '싸가지 닭' }, price: '$29.99', desc: { en: 'Four flavours in one: cheese corn, wasabi mayo, sweet spicy and soy.', ko: '콘치즈, 와사비 마요, 매콤달콤, 간장. 네 가지 맛을 한 번에.' } },
        { image: P('crispy-boneless-fried-chicken', { en: 'Crispy boneless fried chicken', ko: '순살 후라이드 치킨' }, { w: 1086, h: 1448, focal: '50% 55%' }), kicker: '순살 후라이드', title: { en: 'Crispy Boneless Chicken', ko: '순살 후라이드 치킨' }, price: '$24.99', desc: { en: 'With fries, sweet spicy sauce and pickled radish.', ko: '감자튀김, 매콤달콤 소스, 치킨무가 함께 나와요.' } },
        { image: P('original-tteokbokki', { en: 'Original tteokbokki', ko: '오리지날 떡볶이' }), kicker: '오리지날 떡볶이', title: { en: 'Original Tteokbokki', ko: '오리지날 떡볶이' }, price: '$18.99', desc: { en: 'Spicy rice cakes with fried egg and fried fish cake.', ko: '튀긴 달걀과 어묵 튀김을 곁들인 매콤한 떡볶이.' }, tags: [{ en: 'Spicy 2/5', ko: '매운맛 2/5' }] },
        { image: P('rose-tteokbokki', { en: 'Rosé tteokbokki', ko: '로제 떡볶이' }), kicker: '로제 떡볶이', title: { en: 'Rosé Tteokbokki', ko: '로제 떡볶이' }, price: '$20.99', desc: { en: 'Korean-style rosé rice cakes.', ko: '부드러운 로제 소스 떡볶이.' }, tags: [{ en: 'Spicy 2/5', ko: '매운맛 2/5' }] },
        { image: P('g-quva-chicken', { en: 'G-quva chicken', ko: '지꾸바 치킨' }), kicker: '지꾸바 치킨', title: { en: 'G-quva Chicken', ko: '지꾸바 치킨' }, price: '$23.99', desc: { en: 'Grilled spicy chicken with udon and rice cake.', ko: '매콤하게 구운 닭고기에 우동과 떡을 곁들였어요.' }, tags: [{ en: 'Spicy 5/5', ko: '매운맛 5/5' }] },
        { image: P('army-soup', { en: 'Budaejjigae army soup', ko: '부대찌개' }), kicker: '부대찌개', title: { en: 'Budaejjigae', ko: '부대찌개' }, price: '$22.99', desc: { en: 'Spam, sausage, kimchi and ramen in our signature broth.', ko: '스팸, 소시지, 김치, 라면사리를 넣고 이화만의 육수로 끓였어요.' } },
        { image: P('ehwa-jeongsik', { en: 'Ehwa Jeong-sik set', ko: '이화 정식' }), kicker: '이화 정식', title: { en: 'Ehwa Jeong-Sik', ko: '이화 정식' }, price: '$24.99', desc: { en: 'Hamburg steak, fish katsu, tonkatsu and shrimp tempura on one plate.', ko: '함박 스테이크, 생선까스, 돈까스, 새우튀김을 한 접시에.' } },
        { image: P('yubu-odeng-tang', { en: 'Yubu odeng tang fish cake soup', ko: '유부 오뎅탕' }), kicker: '유부 오뎅탕', title: { en: 'Yubu Odeng Tang', ko: '유부 오뎅탕' }, price: '$22.99', desc: { en: 'Fish cake soup with fried tofu. A soju classic.', ko: '유부를 넣은 따뜻한 어묵탕. 소주 안주로 좋아요.' } }
      ],
      ctas: [{ href: 'https://www.ehwa.ca/uptown/menu/index.html', label: { en: 'Uptown menu', ko: '업타운 메뉴' }, style: 'outlined' }, { href: 'https://www.ehwa.ca/downtown/menu/index.html', label: { en: 'Downtown menu', ko: '다운타운 메뉴' }, style: 'outlined' }] },
    { type: 'band', id: 'late', top: '<div class="night"><div class="night__bar" data-night-meter><i></i></div><span class="t-label-l" data-night-label></span></div>',
      title: { en: 'Open late,<br>seven nights a week.', ko: '일주일 내내,<br>[[hk:close]]까지.' },
      text: { en: 'Doors at [[h:open]]. Kitchen until [[h:kitchen]]. Last round at [[h:close]].', ko: '[[hk:open]] 오픈, 주방은 [[hk:kitchen]]까지, 영업은 [[hk:close]]까지예요.' },
      ctas: [{ href: '#visit', label: { en: 'Reserve tonight', ko: '오늘 예약하기' }, style: 'tonal' }] },
    { type: 'story', id: 'story', eyebrow: { en: 'Our story', ko: '이화 이야기' },
      title: { en: 'A hanbok<br><i class="accent">and a smartphone.</i>', ko: '한복과<br><i class="accent">스마트폰.</i>' },
      paras: [{ en: 'The woman in our artwork wears a hanbok and carries a smartphone. The menu works the same way: old-school Korean diner classics like tonkatsu and hamburg steak next to mala rosé tteokbokki and four-flavour chicken.', ko: '이화의 얼굴은 한복을 입고 스마트폰을 든 여인이에요. 메뉴도 마찬가지예요. 옛날 경양식 돈까스와 함박 스테이크 옆에 마라 로제 떡볶이와 네 가지 맛 치킨이 함께 있어요.' },
              { en: 'Uptown or downtown, the soju is cold and the kitchen is open late.', ko: '업타운과 다운타운, 두 곳 모두 늦게까지 열어요.' }],
      images: [P('ehwa-jeongsik', { en: 'Ehwa Jeong-sik set', ko: '이화 정식' }), P('injeolmi-tangsuyuk', { en: 'Injeolmi tangsuyuk', ko: '인절미 탕수육' })],
      extra: `<div style="margin-top:24px"><a class="m-btn m-btn--outlined m-interactive" href="https://www.instagram.com/ehwa_restaurant" target="_blank" rel="noopener">@ehwa_restaurant</a></div>` },
    { type: 'locations', id: 'visit', tint: true, eyebrow: { en: 'Locations', ko: '매장 안내' }, title: { en: 'Pick your<br><i class="accent">EHWA.</i>', ko: '가까운<br><i class="accent">이화</i>를 골라 주세요.' },
      text: { en: 'Both open [[h:open]] to [[h:close]], every day. Reserve, check the menu or order delivery for the location you want.', ko: '두 매장 모두 매일 [[hk:open]]부터 [[hk:close]]까지. 매장별로 예약, 메뉴, 배달 주문을 바로 이용할 수 있어요.' } }
  ],
  footer: `<div><b>EHWA</b><span data-ko="한식 주점 · 매일 오후 [[h:open.short]] – 새벽 [[h:close.short]]:00">Korean Kitchen &amp; Soju Bar · daily [[h:range]]</span></div><div><span data-ko="업타운">Uptown</span> · <a href="tel:+14376659995">(437) 665-9995</a><br><span data-ko="다운타운">Downtown</span> · <a href="tel:+14372672266">(437) 267-2266</a></div><div><a href="https://www.instagram.com/ehwa_restaurant" target="_blank" rel="noopener">Instagram</a></div>`,
  css: `.m-brand{align-items:center}
.night{display:flex;flex-direction:column;align-items:center;gap:10px;margin-bottom:28px}
.night__bar{width:min(420px,80vw);height:10px;border-radius:10px;background:color-mix(in srgb,var(--md-sys-color-on-primary) 18%,transparent);overflow:hidden}
.night__bar i{display:block;height:100%;width:calc(var(--left,1) * 100%);background:var(--md-sys-color-on-primary);border-radius:10px;transition:width var(--md-sys-motion-duration-long) var(--md-sys-motion-easing-emphasized)}`
};
