// Mikaku Izakaya — copy carried over from the approved v1 page (English + Korean).
const D = { 'beef-tartare': [1200, 943], 'beef-tataki': [958, 1200], buta: [1200, 1086], 'cream-cheese-tekbokki': [1200, 800], 'grilled-butter-squid': [1200, 1505], img_1961: [899, 1200], img_1965: [1200, 892], img_1967: [801, 1200], img_1973: [799, 1200], 'maze-udon': [1200, 800], 'mikaku-1535': [1200, 800], 'mikaku-interior': [1200, 900], 'rose-teokbokki': [1200, 911], 'salmon-tataki': [1008, 1200], 'spicy-cream-udon': [1200, 800] };
const P = (n, alt, extra = {}) => ({ src: `img/${n}-1200.webp`, srcset: `img/${n}-640.webp 640w, img/${n}-1200.webp 1200w`, w: D[n][0], h: D[n][1], alt, ...extra });
const S5 = [1050, 1590];                          // 5:30pm – 2:30am
const BOOK = 'https://mikaku.setmore.com/', TEL = 'tel:+16477482340', MAP = 'https://maps.google.com/?q=6180+Yonge+St+North+York+ON';

export default {
  id: 'mikaku', langs: ['en', 'ko'], micro: ['lastCall'],
  title: { en: 'Mikaku Izakaya — Late-night sake bar, Yonge & Finch', ko: '미카쿠 이자카야 | 영 & 핀치 심야 이자카야 · 사케 바' },
  description: 'Mikaku Izakaya: a late-night Japanese izakaya and sake bar at 6180 Yonge St, North York. Open [[h:days]] until [[h:close]]. Book a table.',
  favicon: '味',
  schema: { name: 'Mikaku Izakaya', cuisine: ['Japanese', 'Izakaya'], url: 'https://mikakutoronto.ca/', menu: 'https://mikakutoronto.ca/menu/', reservations: BOOK },
  preload: { href: 'img/grilled-butter-squid-1200.webp', srcset: 'img/grilled-butter-squid-640.webp 640w, img/grilled-butter-squid-1200.webp 1200w' },
  theme: {
    colors: { scheme: 'dark', primary: '#d2352a', secondary: '#d8b56a', tertiary: '#7fae8a', neutral: '#0f0d0c' },
    fonts: {
      brand: "'Instrument Serif',serif", plain: "Inter,'Apple SD Gothic Neo',system-ui,sans-serif", ko: "'Gowun Batang',serif", wordmark: "Inter,sans-serif",
      brandTracking: '.32em', tracking: '-.02em',
      css: ['https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap',
            'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@900&display=swap&text=%E5%91%B3%E8%A6%9A%E9%85%92'],
      koCss: 'https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap'
    },
    shape: [4, 6, 8, 12, 16, 999]
  },
  ribbon: { en: 'Design concept by Mooque Studio, not the official Mikaku Izakaya website. <a href="https://mikakutoronto.ca/" target="_blank" rel="noopener">Visit the real site ↗</a>', ko: 'Mooque Studio의 디자인 시안이며, 미카쿠 이자카야 공식 웹사이트가 아닙니다. <a href="https://mikakutoronto.ca/" target="_blank" rel="noopener">실제 사이트 보기 ↗</a>' },
  brand: { wordmark: 'MIKAKU', mark: '<span class="jp">味覚</span>' },
  nav: [{ href: '#menu', label: { en: 'Menu', ko: '메뉴' } }, { href: '#sake', label: { en: 'Sake', ko: '사케' } }, { href: '#room', label: { en: 'The Room', ko: '공간' } }, { href: '#visit', label: { en: 'Visit', ko: '오시는 길' } }],
  primary: { href: BOOK, label: { en: 'Book a table', ko: '예약하기' } },
  bar: [{ icon: 'call', href: TEL, label: { en: 'Call', ko: '전화' } }, { icon: 'directions', href: MAP, label: { en: 'Directions', ko: '길찾기' } }, { icon: 'event_available', href: BOOK, label: { en: 'Book a table', ko: '예약하기' }, primary: true }],
  locations: [{
    id: 'mikaku', name: { en: 'Mikaku Izakaya', ko: '미카쿠 이자카야' }, hours: [S5, null, S5, S5, S5, S5, S5],
    tag: { en: 'Mikaku Izakaya', ko: '미카쿠 이자카야' }, title: '6180 Yonge St', near: { en: 'North York · just north of Finch', ko: '노스욕 · 핀치 북쪽' },
    address: '6180 Yonge St, North York, ON M2M 3X1',
    rows: [{ k: { en: 'Address', ko: '주소' }, v: '6180 Yonge St, North York, ON M2M 3X1' }, { k: { en: 'Call', ko: '전화' }, v: '<a href="tel:+16477482340">647 748 2340</a>', html: true }, { k: 'Instagram', v: '<a href="https://www.instagram.com/mikaku_toronto/" target="_blank" rel="noopener">@mikaku_toronto</a>', html: true }],
    actions: [{ href: BOOK, label: { en: 'Book a table', ko: '예약하기' }, icon: 'event_available' }, { href: MAP, label: { en: 'Directions', ko: '길찾기' }, icon: 'directions' }]
  }],
  strings: {
    en: { open: 'Open now', openUntil: 'until {t}', lastCallIn: 'last call in {d}', closed: 'Closed', opens: 'opens {d} at {t}', today: 'today', tomorrow: 'tomorrow', days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], closedDay: 'Closed', copied: 'Address copied', reviewSource: 'Google review',
      darumaWish: 'Tap the daruma to make a wish. Tradition says you paint one eye now and the other when it comes true.', darumaOne: 'One eye painted. Your wish is set.', darumaTwo: 'Both eyes painted. Wish granted. Tap to start again.' },
    ko: { open: '영업 중', openUntil: '{t}까지', lastCallIn: '마감까지 {d}', closed: '영업 종료', opens: '{d} {t} 오픈', today: '오늘', tomorrow: '내일', days: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'], closedDay: '휴무', copied: '주소를 복사했어요', reviewSource: 'Google 리뷰',
      darumaWish: '다루마를 눌러 소원을 빌어 보세요. 소원을 빌 때 한쪽 눈을, 이루어지면 나머지 눈을 그리는 전통이 있어요.', darumaOne: '한쪽 눈을 그렸어요. 소원을 빌었어요.', darumaTwo: '두 눈을 모두 그렸어요. 소원 성취. 다시 누르면 처음부터예요.' }
  },
  sections: [
    { type: 'hero', image: P('grilled-butter-squid', { en: 'Grilled butter squid beside daruma dolls and a bottle of sake', ko: '다루마 인형과 사케 옆의 버터 오징어구이' }, { focal: '50% 40%' }),
      eyebrow: { en: 'Izakaya &amp; Sake Bar · Yonge &amp; Finch', ko: '이자카야 &amp; 사케 바 · 영 &amp; 핀치' },
      title: { en: 'Good food,<br><i class="accent">better</i> sake,<br>open ’til [[h:close.short]].', ko: '늦은 밤,<br><i class="accent">한 잔 더</i><br>하고 싶을 때.' },
      text: { en: 'North York’s late-night izakaya. Japanese bar plates with a Korean accent, seven pages of sake, and a shelf of daruma dolls who have seen it all.', ko: '[[hk:close]]까지 문을 여는 노스욕의 작은 이자카야. 한국인 입맛에 맞춘 일본식 안주와 일곱 페이지 분량의 사케를 준비했어요.' },
      ctas: [{ href: BOOK, label: { en: 'Book a table', ko: '예약하기' }, icon: 'event_available' }, { href: '#menu', label: { en: 'See what to order', ko: '대표 메뉴 보기' } }] },
    { type: 'facts', items: [{ value: '[[h:close.short]]', label: { en: 'Last call, a.m.', ko: '새벽 마감' } }, { value: '7', label: { en: 'Pages of sake', ko: '페이지 분량의 사케 리스트' } }, { value: '1', label: { en: 'Heated tatami room', ko: '난방되는 다다미 좌식 룸' } }] },
    { type: 'story', id: 'story',
      eyebrow: { en: '<span class="jp">味覚</span> mi·ka·ku — <i>n.</i> the sense of taste.', ko: '<span class="jp">味覚</span> 미카쿠 — 일본어로 ‘미각’, 맛을 느끼는 감각.' },
      title: { en: 'Miraculously good times.<br><i class="accent">Mikakulously</i> late nights.', ko: '다른 곳이 문을 닫을 때,<br><i class="accent">미카쿠</i>는 이제 시작.' },
      paras: [{ en: 'We’re where you end up after work, after the movie, after everywhere else has closed. Plates come out fast. Sake gets poured generously. The daruma dolls keep watch, and they never judge.', ko: '퇴근 후 한 잔, 영화 끝나고 한 잔, 다른 가게들이 모두 문을 닫은 뒤의 한 잔까지. 안주는 빠르게, 사케는 넉넉하게 준비해 드려요.' },
              { en: 'We cook Japanese bar food the way we like to eat it: smoky, buttery, a little spicy, and made for passing around the table.', ko: '불향 가득한 삼겹살 구이, 버터 향 진한 오징어구이, 은근히 매콤한 크림 우동까지. 여럿이 나눠 먹기 좋은 메뉴로 채웠어요.' }],
      images: [P('mikaku-interior', { en: 'Mikaku dining room at night', ko: '밤의 미카쿠 매장' }), P('beef-tataki', { en: 'Beef tataki', ko: '소고기 타다키' })] },
    { type: 'cards', id: 'menu', media: 'photo', ratio: '4/3', cols: 3,
      eyebrow: { en: 'The Order', ko: '대표 메뉴' }, title: { en: 'Don’t overthink it.<br><i class="accent">Start here.</i>', ko: '처음이라면,<br><i class="accent">이 여섯 가지부터.</i>' },
      text: { en: 'Six plates our regulars keep coming back for. Add a bottle of yuzu sake. Fight over the last bite. Still stuck? Ask your server. Reviewers say their picks were the best part of the night.', ko: '리뷰에서 자주 언급되는 메뉴들이에요. 유자 사케 한 병과 함께 즐겨 보세요. 메뉴가 고민될 땐 직원에게 추천을 부탁하셔도 좋아요.' },
      items: [
        { image: P('beef-tartare', { en: 'Mikaku beef tartare', ko: '미카쿠 육회' }, { focal: '45% 55%' }), kicker: { en: 'House signature', ko: '시그니처' }, title: { en: 'Mikaku Beef Tartare', ko: '미카쿠 육회' }, price: '$21.99', desc: { en: 'One of the best Korean beef tartare in Toronto.', ko: '토론토에서 손꼽히는 한국식 육회' } },
        { image: P('spicy-cream-udon', { en: 'Spicy cream udon', ko: '스파이시 크림 우동' }), kicker: { en: 'Reviewer favourite', ko: '리뷰 인기 메뉴' }, title: { en: 'Spicy Cream Udon', ko: '스파이시 크림 우동' }, price: '$21.99', desc: { en: 'Creamy and slightly sweet, a must-get.', ko: '크리미하고 은은하게 달콤한, 꼭 시켜야 할 메뉴' } },
        { image: P('grilled-butter-squid', { en: 'Grilled butter squid', ko: '버터 오징어구이' }, { focal: '78% 90%', zoom: 1.9 }), kicker: { en: 'Reviewer favourite', ko: '리뷰 인기 메뉴' }, title: { en: 'Grilled Butter Squid', ko: '버터 오징어구이' }, prices: [{ size: 'M', price: '$20.99' }, { size: 'L', price: '$22.99' }], desc: { en: 'Grilled squid with caramelized butter sauce, mayo on the side.', ko: '캐러멜라이즈한 버터 소스로 구운 오징어, 마요네즈를 곁들여요.' } },
        { image: P('buta', { en: 'Buta grilled pork belly', ko: '부타 삼겹살 구이' }), title: { en: 'Buta', ko: '부타 (삼겹살 구이)' }, price: '$17.99', desc: { en: 'Salty and smokey.', ko: '짭짤하고 불향 가득' } },
        { image: P('cream-cheese-tekbokki', { en: 'Cream cheese rice cake in a bread bowl', ko: '빵 그릇에 담은 크림치즈 떡볶이' }), title: { en: 'Cream Cheese Rice Cake', ko: '크림치즈 떡볶이' }, price: '$21.99', desc: { en: 'Really unique and filling.', ko: '바삭한 빵 그릇에 담아내는 든든한 한 그릇' } },
        { image: P('rose-teokbokki', { en: 'Rosé tteokbokki', ko: '로제 떡볶이' }), title: { en: 'Rosé Tteokbokki', ko: '로제 떡볶이' }, price: '$21.99', desc: { en: 'Rice cakes &amp; potato noodles in spicy rosé cream', ko: '매콤한 로제 크림 소스에 떡과 감자면' } }
      ],
      ctas: [{ href: 'https://mikakutoronto.ca/menu/', label: { en: 'Full food menu', ko: '전체 메뉴 보기' }, style: 'outlined' }] },
    { type: 'list', id: 'sake', tint: true, image: P('img_1965', { en: 'Sake bottles at the bar', ko: '바에 놓인 사케' }),
      eyebrow: { en: 'Sake Bar', ko: '사케 바' }, title: { en: 'Seven pages of sake.<br><i class="accent">Zero homework.</i>', ko: '사케가 처음이어도<br><i class="accent">괜찮아요.</i>' },
      text: { en: 'You don’t need to know junmai from daiginjo. Tell us what you like and we’ll pour. Or pick a mood:', ko: '일곱 페이지 분량의 사케 리스트가 어렵게 느껴지신다면, 직원에게 취향만 알려 주세요. 그날의 기분에 따라 골라 보셔도 좋아요.' },
      rows: [
        { title: { en: 'Fruity &amp; easy', ko: '산뜻하고 달콤하게' }, serve: { en: 'Bottle', ko: '병' }, desc: { en: 'Yuzu, peach and pear sake, made for sharing', ko: '유자·복숭아·배 사케. 병으로 나눠 마시기 좋아요' } },
        { title: { en: 'Crisp &amp; dry', ko: '깔끔하고 드라이하게' }, serve: { en: 'Glass', ko: '잔' }, desc: { en: 'Clean junmai to cut through anything fried', ko: '튀김 안주와 잘 어울리는 준마이' } },
        { title: { en: 'Rich &amp; warm', ko: '따뜻하게' }, serve: { en: 'Tokkuri', ko: '도쿠리' }, desc: { en: 'Served hot, best with a nabe on a cold night', ko: '데워 마시는 사케. 추운 날 나베와 함께' } },
        { title: { en: 'Just a beer', ko: '맥주 한 잔' }, serve: { en: 'Can', ko: '캔' }, desc: { en: 'The giant can of Asahi. No judgement.', ko: '아사히 대용량 캔도 있어요' } }
      ] },
    { type: 'quotes', eyebrow: { en: 'Overheard on the way out', ko: '손님 리뷰 (Google 원문)' },
      items: [{ q: '“Be prepared to wait… but MAN is it worth the wait.”', who: 'Charis W.' }, { q: '“Makes beer and wings feel like a waste of time.”', who: 'Ben C.' }, { q: '“Would give this place 10/5 if I could.”', who: 'Guest' }, { q: '“Their grilled butter squid is one of the best I’ve ever had.”', who: 'A.Y.' }, { q: '“Definitely worth coming for a good time and good food.”', who: 'Lucy C.' }] },
    { type: 'gallery', id: 'room',
      eyebrow: { en: 'The Room', ko: '공간' }, title: { en: 'Small room.<br><i class="accent">Big night.</i>', ko: '작은 가게,<br><i class="accent">오래 머무는 밤.</i>' },
      text: { en: 'We’re cozy, so weekends fill up fast. Book ahead, or grab a bar seat. The bar has no time limit.', ko: '좌석이 많지 않아 주말에는 웨이팅이 생길 수 있어요. 미리 예약하시거나, 이용 시간 제한이 없는 바 좌석을 이용해 주세요.' },
      images: [P('img_1973', { en: 'Mikaku bar', ko: '미카쿠 바' }, { caption: { en: 'The bar', ko: '바' } }), P('mikaku-1535', { en: 'Shared plates', ko: '여러 안주' }, { caption: { en: 'The spread', ko: '다양한 안주' } }), P('img_1967', { en: 'Interior detail', ko: '매장 내부' }, { caption: { en: 'Late night', ko: '늦은 밤' } }), P('salmon-tataki', { en: 'Salmon tataki', ko: '연어 타다키' }, { caption: { en: 'Salmon tataki', ko: '연어 타다키' } }), P('maze-udon', { en: 'Maze udon', ko: '마제 우동' }, { caption: { en: 'Maze udon', ko: '마제 우동' } })],
      perks: [{ title: { en: 'Heated tatami', ko: '다다미 좌식 룸' }, text: { en: 'Shoes off, sit low, stay late. Ask for it when you book a group.', ko: '신발을 벗고 편하게 앉는 난방 좌식 공간이에요. 단체 예약 시 요청해 주세요.' } },
              { title: { en: 'Bar seats', ko: '바 좌석' }, text: { en: 'No time limit at the bar, unlike the tables. Regulars know.', ko: '테이블과 달리 이용 시간 제한이 없어요.' } },
              { title: { en: 'Late nights', ko: '새벽까지 영업' }, text: { en: 'Open until [[h:close]], [[h:days]]. Yes, really.', ko: '[[hk:days]], [[hk:close]]까지 열어요.' } },
              { title: { en: 'Parking', ko: '주차' }, text: { en: 'Small lot out front. Blink and you’ll miss it. Street parking nearby.', ko: '가게 앞에 작은 주차장이 있어요. 입구를 지나치기 쉬우니 천천히 진입해 주세요. 인근 노상 주차도 가능해요.' } }] },
    { type: 'locations', id: 'visit', tint: true, eyebrow: { en: 'Visit', ko: '오시는 길' }, title: { en: 'See you<br><i class="accent">tonight?</i>', ko: '오늘 밤,<br><i class="accent">미카쿠에서.</i>' },
      image: P('img_1961', { en: 'Mikaku storefront and patio on Yonge St', ko: '영 스트리트의 미카쿠 매장 입구' }, { focal: '50% 60%' }), imageCaption: { en: 'Look for the black awning.', ko: '검은 차양이 보이면 도착.' } },
    { type: 'links', eyebrow: { en: 'The Mikaku family', ko: '미카쿠의 다른 매장' }, items: [
      { href: '#visit', kicker: { en: 'Izakaya · You are here', ko: '이자카야 · 현재 매장' }, title: { en: 'Mikaku Izakaya', ko: '미카쿠 이자카야' }, text: { en: '6180 Yonge St · [[h:days]] [[h:range]]', ko: '6180 Yonge St · [[hk:days]] [[hk:range]]' } },
      { href: 'https://maps.google.com/?q=229+Carlton+St+Toronto', kicker: { en: 'Udon Bar', ko: '우동 바' }, title: { en: 'Carlton', ko: '칼튼' }, text: { en: '229 Carlton St · Lunch &amp; dinner, Tue–Sun', ko: '229 Carlton St · 화–일 점심 &amp; 저녁' } },
      { href: 'https://maps.google.com/?q=360+Hwy+7+Unit+10+Richmond+Hill', kicker: { en: 'Udon Bar', ko: '우동 바' }, title: { en: 'Richmond Hill', ko: '리치먼드 힐' }, text: { en: '360 Hwy 7, Unit 10 · Lunch &amp; dinner, Tue–Sun', ko: '360 Hwy 7, Unit 10 · 화–일 점심 &amp; 저녁' } }] }
  ],
  footer: `<div><b>MIKAKU</b><span data-ko="© 미카쿠 이자카야 · 6180 Yonge St, 토론토">© Mikaku Izakaya · 6180 Yonge St, Toronto</span></div><div><a href="https://www.instagram.com/mikaku_toronto/" target="_blank" rel="noopener">Instagram</a> · <a href="tel:+16477482340">647 748 2340</a></div>`,
  css: `.jp{font-family:'Noto Serif JP',serif;font-weight:900}
.m-brand small{color:var(--md-sys-color-primary-text)}
.story__text .eyebrow{text-transform:none;letter-spacing:0;font:400 20px/1.4 var(--md-ref-typeface-brand);color:var(--md-sys-color-on-surface-variant)}
.story__text .eyebrow .jp{color:var(--md-sys-color-primary-text);font-size:22px;margin-right:8px}
.m-quote blockquote{max-width:22ch}`
};
