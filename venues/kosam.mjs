// KoSam Korean Restaurant & Bar — facts from kosam.ca only (homepage + locations page).
// Photos are KoSam's own, copied from kosam.ca (see kosam/img). The site has no HTTPS, so they cannot be linked from a secure page.
const K = 'img/';
const k = (name, ko, price, desc, tag) => ({ name, ko, price, desc, tag });
const MP = 'Market price', VEG = { en: 'Vegetarian', ko: '채식' }, SHEP = { en: 'Sheppard only', ko: '쉐퍼드점' };
const a = [660, 1380], b = [660, 1440];
const TEL_S = 'tel:+14165512826', TEL_L = 'tel:+14164930880';

export default {
  id: 'kosam', langs: ['en', 'ko'], micro: [],
  title: { en: 'KoSam — Korean restaurant & bar, Yonge & Sheppard and Leslie & Cummer', ko: 'KoSam | 노스욕 삼계탕 · 한식당' },
  description: 'KoSam Korean Restaurant & Bar: samgyetang, bibimbap and soondubu from the owners of a 40-year-old restaurant in South Korea. Two North York locations.',
  schema: { name: 'KoSam Korean Restaurant & Bar', cuisine: ['Korean'], url: 'http://kosam.ca/' },
  theme: {
    colors: { scheme: 'light', primary: '#c8262d', secondary: '#4f6f5c', tertiary: '#2f6b4a', neutral: '#f6f0e6' },
    fonts: { brand: "'Gowun Batang',serif", plain: "'IBM Plex Sans KR',system-ui,sans-serif", ko: "'Gowun Batang',serif", displayWeight: 700, tracking: '-.02em', brandTracking: '0', wordmark: "'Gowun Batang',serif", accentStyle: 'normal',
      css: ['https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@400;500;600&display=swap', 'https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap&text={SUBSET}'] },
    shape: [6, 8, 10, 14, 18, 999]
  },
  ribbon: { en: 'Design concept by Mooque Studio, not the official KoSam website. <a href="http://kosam.ca/" target="_blank" rel="noopener">See the current site ↗</a>', ko: 'Mooque Studio의 디자인 시안이며, KoSam 공식 웹사이트가 아닙니다. <a href="http://kosam.ca/" target="_blank" rel="noopener">현재 사이트 보기 ↗</a>' },
  brand: { wordmark: 'Ko<span style="color:var(--md-sys-color-primary-text)">Sam</span>', mark: '고려삼계탕' },
  nav: [{ href: '#dishes', label: { en: 'Dishes', ko: '대표 메뉴' } }, { href: '#menu', label: { en: 'Menu', ko: '메뉴' } }, { href: '#how', label: { en: 'How to eat it', ko: '먹는 법' } }, { href: '#reviews', label: { en: 'Reviews', ko: '후기' } }, { href: '#visit', label: { en: 'Locations', ko: '매장 안내' } }],
  primary: { href: '#visit', label: { en: 'Find a location', ko: '매장 찾기' } },
  bar: [{ icon: 'call', href: TEL_S, label: { en: 'Call', ko: '전화' } }, { icon: 'soup_kitchen', href: '#menu', label: { en: 'Menu', ko: '메뉴' } }, { icon: 'location_on', href: '#visit', label: { en: 'Locations', ko: '매장 찾기' }, primary: true }],
  locations: [
    { id: 'sheppard', name: { en: 'Yonge &amp; Sheppard', ko: '영 &amp; 쉐퍼드' }, short: { en: 'Sheppard', ko: '쉐퍼드점' }, hours: [a, a, a, a, b, b, b], tag: { en: 'KoSam Korean Restaurant &amp; Bar', ko: 'KoSam 한식당 &amp; 바' }, title: '4922 Yonge St', near: { en: 'Toronto · Yonge &amp; Sheppard', ko: '토론토 · 영 &amp; 쉐퍼드' }, address: '4922 Yonge St, Toronto, ON M2N 5N5',
      rows: [{ k: { en: 'Phone', ko: '전화' }, v: '<a href="tel:+14165512826">416-551-2826</a>', html: true }, { k: { en: 'Patio', ko: '테라스' }, v: { en: 'Patio seating (seasonal)', ko: '테라스석 (계절 운영)' } }],
      actions: [{ href: TEL_S, label: { en: 'Call to order', ko: '전화 주문' }, icon: 'call' }, { href: 'https://maps.google.com/?q=4922+Yonge+St+Toronto', label: { en: 'Directions', ko: '길찾기' }, icon: 'directions' }] },
    { id: 'leslie', name: { en: 'Leslie &amp; Cummer', ko: '레슬리 &amp; 커머' }, short: { en: 'Leslie', ko: '레슬리점' }, hours: Array(7).fill([660, 1320]), tag: { en: 'Also known as Koryo Samgyetang', ko: '고려삼계탕' }, title: '5865 Leslie St', near: { en: 'Toronto · Leslie &amp; Cummer', ko: '토론토 · 레슬리 &amp; 커머' }, address: '5865 Leslie St, Toronto, ON M2H 1J8',
      rows: [{ k: { en: 'Phone', ko: '전화' }, v: '<a href="tel:+14164930880">416-493-0880</a>', html: true }],
      actions: [{ href: TEL_L, label: { en: 'Call to order', ko: '전화 주문' }, icon: 'call' }, { href: 'https://maps.google.com/?q=5865+Leslie+St+Toronto', label: { en: 'Directions', ko: '길찾기' }, icon: 'directions' }] }
  ],
  strings: {
    en: { open: 'Open', openUntil: 'until {t}', closed: 'Closed', opens: 'opens {d} at {t}', today: 'today', tomorrow: 'tomorrow', days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], closedDay: 'Closed', copied: 'Address copied', reviewSource: 'Yelp review' },
    ko: { open: '영업 중', openUntil: '{t}까지', closed: '영업 종료', opens: '{d} {t} 오픈', today: '오늘', tomorrow: '내일', days: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'], closedDay: '휴무', copied: '주소를 복사했어요', reviewSource: 'Yelp 리뷰' }
  },
  sections: [
    { type: 'hero', eyebrow: { en: 'Korean restaurant &amp; bar · North York', ko: '한식당 &amp; 바 · 노스욕' },
      title: { en: 'Samgyetang,<br><i class="accent">forty years in the making.</i>', ko: '40년 전통의<br><i class="accent">삼계탕.</i>' },
      text: { en: 'From the owners of a restaurant that ran for more than 40 years in South Korea. Ginseng chicken soup, bibimbap and soft tofu stew at two North York locations.', ko: '한국에서 40년 넘게 사랑받은 식당의 주인이 토론토에 문을 열었어요. 삼계탕, 비빔밥, 순두부를 노스욕 두 곳에서 만나보세요.' },
      ctas: [{ href: '#visit', label: { en: 'Find a location', ko: '매장 찾기' }, icon: 'location_on' }, { href: '#dishes', label: { en: 'See the dishes', ko: '대표 메뉴 보기' } }],
      image: { src: K + 'samgyetang.jpg', w: 1200, h: 900, focal: '50% 45%', alt: { en: 'Samgyetang, whole ginseng chicken soup in a stone pot', ko: '뚝배기에 담긴 삼계탕' } } },
    { type: 'facts', items: [{ value: { en: '40+ yrs', ko: '40년+' }, label: { en: 'Restaurant roots in South Korea', ko: '한국에서 이어온 식당' } }, { value: '2', label: { en: 'North York locations', ko: '노스욕 매장' } }, { value: { en: '[[h:open]]', ko: '[[hk:open]]' }, label: { en: 'Open daily from', ko: '매일 오픈' } }, { value: { en: 'Patio', ko: '테라스' }, label: { en: 'At Yonge &amp; Sheppard', ko: '영 &amp; 쉐퍼드점' } }] },
    { type: 'cards', id: 'dishes', media: 'photo', ratio: '4/3', cols: 3, scroll: false,
      eyebrow: { en: 'Our dishes', ko: '대표 메뉴' }, title: { en: 'Three bowls<br><i class="accent">to know.</i>', ko: 'KoSam의<br><i class="accent">대표 메뉴 세 가지.</i>' },
      text: { en: 'The dishes we’re known for. The full menu is just below.', ko: 'KoSam을 대표하는 메뉴예요. 전체 메뉴는 바로 아래에 있어요.' },
      items: [
        { image: { src: K + 'samgyetang.jpg', alt: { en: 'Samgyetang', ko: '삼계탕' }, focal: '50% 45%' }, kicker: '삼계탕', title: { en: 'Samgyetang', ko: '삼계탕' }, desc: { en: 'Our signature ginseng chicken soup, made to warm you up when the weather turns cold.', ko: 'KoSam의 시그니처. 추운 날 몸을 따뜻하게 녹여 주는 삼계탕이에요.' }, badge: { en: 'Signature', ko: '시그니처' } },
        { image: { src: K + 'bibimbap.jpg', alt: { en: 'Bibimbap', ko: '비빔밥' } }, kicker: '비빔밥', title: { en: 'Bibimbap', ko: '비빔밥' }, desc: { en: 'Steamed rice, sautéed vegetables and a fried egg, mixed together in one bowl.', ko: '밥, 볶은 채소, 달걀 프라이를 한 그릇에 비벼 먹는 메뉴예요.' } },
        { image: { src: K + 'soondobu.jpg', alt: { en: 'Soondubu soft tofu stew', ko: '순두부찌개' } }, kicker: '순두부', title: { en: 'Soondubu', ko: '순두부' }, desc: { en: 'Soft tofu in a hot, spicy broth. Filling and full of flavour.', ko: '부드러운 순두부를 얼큰한 국물에 끓였어요.' } }
      ],
      ctas: [{ href: '#menu', label: { en: 'See the full menu', ko: '전체 메뉴 보기' }, style: 'outlined' }] },
    // Full menu: names, Korean names, prices and notes as printed in the menu PDF on kosam.ca (one PDF for both locations, read 15 Nov 2026).
    { type: 'menu', id: 'menu', eyebrow: { en: 'Menu', ko: '메뉴' }, title: { en: 'The full menu,<br><i class="accent">no download.</i>', ko: '전체 메뉴를<br><i class="accent">바로 확인하세요.</i>' },
      text: { en: 'Both locations share one menu. Items marked Sheppard only are served at Yonge &amp; Sheppard. Prices before tax.', ko: '두 매장의 메뉴는 같아요. ‘쉐퍼드점’ 표시 메뉴는 영 &amp; 쉐퍼드점에서만 주문할 수 있어요. 가격은 세금 별도예요.' },
      search: { en: 'Search the menu, e.g. “bibimbap”', ko: '메뉴 검색, 예: 비빔밥' },
      tabs: [
        { id: 'sam', label: { en: 'Samgyetang', ko: '삼계탕' }, note: { en: 'A whole Cornish hen, sourced from a farm in Orangeville, with sticky rice stuffing in a lightly ginseng-flavoured broth.', ko: '오렌지빌 농장에서 받은 영계 한 마리에 찹쌀을 채워 인삼 향이 은은한 국물에 끓였어요.' }, rows: [
          k('Samgyetang', '고려삼계탕', '$27.99', 'Whole Cornish hen with sticky rice stuffing in ginseng broth.'), k('Green Tea Samgyetang', '녹차 삼계탕', '$28.99', 'With green tea.'), k('Perilla Seed Samgyetang', '들깨 삼계탕', '$29.99', 'With perilla seed for a richer broth.'),
          k('Seafood Samgyetang', '해물 삼계탕', '$31.99', 'With sea cucumber, mussels and shrimp.'), k('Whole Abalone Samgyetang', '전복 삼계탕', MP, 'With a whole abalone.'), k('Organic Pine Mushroom Samgyetang', '자연송이 삼계탕', MP, 'With organic pine mushrooms.'),
          k('Extra Noodles', '소면 추가', '$3.50', 'Two in a bundle.')] },
        { id: 'bib', label: { en: 'Bibimbap &amp; dol sot', ko: '비빔밥 · 돌솥' }, note: { en: 'Comes with a side soup. Dol sot dishes are served in a hot stone bowl.', ko: '국이 함께 나와요. 돌솥 메뉴는 뜨거운 돌솥에 담겨 나옵니다.' }, rows: [
          k('Koryo Bibimbap', '고려비빔밥', '$19.99', 'Assorted vegetables, yolk and ground beef.'), k('Nah Mul Bibimbap', '나물비빔밥', '$19.99', 'Vegetarian version of Koryo Bibimbap.', VEG),
          k('Dol Sot Koryo Bibimbap', '돌솥비빔밥', '$20.99'), k('Dol Sot Nah Mul Bibimbap', '돌솥나물비빔밥', '$20.99', null, VEG), k('Dol Sot Organic Mushroom Bibimbap', '돌솥유기농버섯비빔밥', '$21.99', 'With assorted organic mushrooms.'),
          k('Dol Sot Raw Veal Bibimbap', '돌솥육회비빔밥', '$23.99', 'With marinated raw veal.'), k('Dol Sot Kimchi Fried Rice', '돌솥 김치볶음밥', '$21.99', 'Kimchi, sliced pork and rice topped with a fried egg. Add cheese +$3.'),
          k('Dol Sot Bul Go Gi Dup Bap', '돌솥 불고기 덮밥', '$22.99', 'Beef in Korean sweet soy sauce, on rice.'), k('Dol Sot Dak Go Gi Dup Bap', '돌솥 닭고기 덮밥', '$22.99', 'Chicken in Korean spicy sauce, on rice.'),
          k('Dol Sot Jae Yook Dup Bap', '돌솥 제육 덮밥', '$22.99', 'Soft pork in sweet and spicy sauce, on rice.'), k('Dol Sot O Jing Eo Dup Bap', '돌솥 오징어 덮밥', '$22.99', 'Squid in Korean spicy sauce, on rice.'),
          k('Tteok Galbi Jung Sik', '떡갈비 정식', '$22.99', 'Grilled minced Korean-style short rib marinated in soy sauce.')] },
        { id: 'soup', label: { en: 'Soups &amp; soft tofu', ko: '탕 · 순두부' }, note: { en: 'Includes a bowl of rice unless noted. Soft tofu jjigae comes in different spice levels, including non-spicy.', ko: '따로 표시가 없으면 공기밥이 함께 나와요. 순두부찌개는 맵기를 고를 수 있고, 안 맵게도 가능해요.' }, rows: [
          k('Soft Tofu with Beef', '사골소고기순두부', '$18.99'), k('Soft Tofu with Kimchi &amp; Pork', '사골김치돼지순두부', '$18.99'), k('Soft Tofu with Dumpling', '사골만두순두부', '$18.99'), k('Jjam Ppong (Seafood) Soft Tofu', '사골짬뽕순두부', '$19.99'),
          k('Seol Leong Tang', '곰탕', '$19.99', 'Clear beef bone broth with brisket, knee cartilage and green onions.'), k('Special Seol Leong Tang', '특곰탕', '$23.99', 'A larger Seol Leong Tang.'),
          k('Gom Gug Si', '곰국시 (쌀국수)', '$20.99', 'Beef noodle soup with rice noodle. Rice not included.'), k('Tteok Man Du Guk', '사골떡만두국', '$22.99', 'Rice cake and dumpling soup. Rice not included.'),
          k('Yang Gom Tang', '양곰탕', '$25.99', 'Spicy beef bone soup with brisket, cow intestines, eggs and potato noodles.'), k('Yang Gom Tang Noodle', '양곱창국수', '$25.99', 'With rice noodle. Rice not included.'),
          k('Koryo Guk Bap', '고려양지국밥', '$25.99', 'Spicy brisket rice soup.')] },
        { id: 'share', label: { en: 'To share', ko: '단품 · 철판볶음' }, note: { en: 'Appetizers and iron-plate dishes do not come with side dishes.', ko: '단품과 철판볶음 메뉴에는 반찬이 포함되어 있지 않아요.' }, rows: [
          k('Man Du (8pcs)', '튀김 만두', '$8.99', 'Deep-fried dumplings: beef, pork or vegetable.'), k('Tteokbokki', '떡볶이', '$16.99', 'Spicy rice cake. Add cheese +$3.'), k('Tonkatsu', '돈가스만', '$17.99', 'Breaded and fried pork cutlet with tonkatsu sauce.'),
          k('Kimchi Jeon', '김치치즈전', '$18.99', 'Kimchi pancake with cheese.'), k('Dak Bal', '매운 닭발', '$18.99', 'Spicy chicken feet.'), k('Cheese Tonkatsu', '치즈 돈가스만', '$19.99', 'Pork cutlet stuffed with cheese.', SHEP),
          k('Tteok Galbi', '떡갈비', '$19.99', 'Korean-style short rib patties.'), k('Pa Jeon', '해물파전', '$19.99', 'Seafood and green onion pancake.'), k('Chap Ssal Soon Dae', '찹쌀 순대', '$21.99', 'Korean-style blood sausage.'),
          k('Maak Chaung Boak Um', '철판 막창 볶음', '<em>S</em>$22.99 <em>L</em>$30.99', 'Stir-fried pork intestine in sweet and spicy sauce.'), k('Stir-fried Jae Yook', '철판 제육 볶음', '$26.99', 'Spicy soft pork.'),
          k('Stir-fried Bul Go Gi', '철판 불고기 볶음', '$26.99', 'Sweet soy beef.'), k('Stir-fried O Jing Eo', '철판 오징어 볶음', '$26.99', 'Spicy squid.'), k('Stir-fried Bul Dak', '철판 치즈 불닭 볶음', '$27.99', 'Fire chicken with cheese.'),
          k('White Rice', '백미', '$3')] },
        { id: 'chicken', label: { en: 'Chicken &amp; sets', ko: '치킨 · 정식' }, note: { en: 'Fried chicken is boneless thigh, served with spicy mayo and pickled onions.', ko: '후라이드 치킨은 순살 닭다리살이고, 스파이시 마요와 양파 절임이 함께 나와요.' }, rows: [
          k('KoSam Fried Chicken', '고삼 후라이드 치킨', '$21.99', null, SHEP), k('KoSam Ko Chu Fried Chicken', '고삼 고추 후라이드 치킨', '$23.99', 'With fried Anaheim peppers.', SHEP), k('KoSam Honey Butter Fried Chicken', '고삼 허니버터 치킨', '$23.99', null, SHEP),
          k('KoSam Yang Yum Fried Chicken', '고삼 양념 치킨', '$25.99', 'In sweet and spicy Korean BBQ sauce.', SHEP), k('Tonkatsu Set', '돈가스 정식', '$20.99', 'With rice and a small soup.'), k('Cheese Tonkatsu Set', '치즈 돈가스 정식', '$23.99', 'With rice and a small soup.', SHEP),
          k('Spicy Chicken Bokkeumtang', '닭볶음탕', '<em>For two</em>$54.99 <em>For three</em>$79.99', 'Braised spicy chicken stew. Add kimchi fried rice +$11.')] }
      ] },
    { type: 'steps', id: 'how', tint: true, eyebrow: { en: 'How to eat samgyetang', ko: '삼계탕 먹는 법' }, title: { en: 'New to samgyetang?<br><i class="accent">Start here.</i>', ko: '처음이라면,<br><i class="accent">이렇게 드셔 보세요.</i>' }, text: { en: 'This is how it’s usually eaten. Tap through the steps.', ko: '보통 이렇게 먹어요. 단계별로 눌러 보세요.' },
      steps: [{ title: { en: 'Season the broth', ko: '간 맞추기' }, text: { en: 'The broth comes lightly seasoned. Add salt and pepper to taste.', ko: '국물은 담백하게 나와요. 소금과 후추로 입맛에 맞게 간해요.' } }, { title: { en: 'Open the chicken', ko: '닭 가르기' }, text: { en: 'Pull the chicken apart so the rice inside mixes into the broth.', ko: '닭을 갈라 속에 든 찹쌀이 국물에 풀어지게 해요.' } }, { title: { en: 'Eat with kimchi', ko: '김치와 함께' }, text: { en: 'Dip the meat in salt and pepper, and eat the rice and broth with kimchi.', ko: '살코기는 소금·후추에 찍고, 밥과 국물은 김치와 함께 드세요.' } }] },
    { type: 'quotes', eyebrow: { en: 'From our guests', ko: '손님 후기 (Yelp 원문)' }, items: [{ q: '“This place is a hidden gem in North York!”', who: 'Joe' }, { q: '“The servers take time to list off the side dishes provided and to explain how to eat each entree.”', who: 'Juu' }, { q: '“Overall, love the ambience, great service and wonderful tasting food. Will come back!”', who: 'Sharon' }] },
    { type: 'locations', id: 'visit', eyebrow: { en: 'Locations', ko: '매장 안내' }, title: { en: 'Two homes<br><i class="accent">in North York.</i>', ko: '노스욕<br><i class="accent">두 곳의 KoSam.</i>' },
      text: { en: 'Sheppard stays open until midnight Thursday to Saturday. Leslie is also known as Koryo Samgyetang.', ko: '쉐퍼드점은 목·금·토 자정까지 영업해요. 레슬리점은 고려삼계탕이라는 이름으로도 알려져 있어요.' } }
  ],
  footer: `<div><b>KoSam</b><span data-ko="KoSam 한식당 &amp; 바 · info@kosam.ca">KoSam Korean Restaurant &amp; Bar · info@kosam.ca</span></div><div><span data-ko="쉐퍼드점">Sheppard</span> · <a href="tel:+14165512826">416-551-2826</a><br><span data-ko="레슬리점">Leslie</span> · <a href="tel:+14164930880">416-493-0880</a></div>`,
  css: `.m-brand small{font-size:13px;letter-spacing:0}`
};
