// Jokbal Night Market (족발야시장) — prices read at full size from all eight menu images on jokbalnightmarket.com.
// Menu art copied from jokbalnightmarket.com (see jokbal/img); dish photos are cut from these pages.
const pg = { 1: 'img/pg1.jpg', 2: 'img/pg2.jpg', 3: 'img/pg3.jpg', 4: 'img/pg4.jpg' };
const plate = (p, cx, cy, r) => ({ src: pg[p], cx, cy, r });
const ORDER = 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=4ee9b0f4-fb27-4bc8-81ab-2356f1230795';
const TEL = 'tel:+14165127211', MAP = 'https://maps.google.com/?q=41+Sheppard+Ave+E+North+York+ON';
const spicy = { en: 'Spicy', ko: '매운맛' }, combo = { en: 'Set', ko: '세트' }, nw = { en: 'New', ko: '신메뉴' };
const r = (name, ko, price, desc, tag) => ({ name, ko, price, desc, tag });
const sz = (...p) => p.map(([s, v]) => `<em>${s}</em>${v}`).join('');

export default {
  id: 'jokbal', langs: ['en', 'ko'], micro: [],
  title: { en: 'Jokbal Night Market — Korean jokbal & bossam, Sheppard & Yonge', ko: '족발야시장 | 토론토 노스욕 족발 · 보쌈' },
  description: 'Jokbal Night Market (족발야시장): Korean jokbal and bossam simmered with ten herbal ingredients, plus gamjatang. 41 Sheppard Ave E, North York. Open daily [[h:open]] to [[h:close]].',
  schema: { name: 'Jokbal Night Market', cuisine: ['Korean'], url: 'https://jokbalnightmarket.com/' },
  theme: {
    colors: { scheme: 'dark', primary: '#d42f26', secondary: '#f4b63c', tertiary: '#6fd394', neutral: '#0f1630' },
    fonts: { brand: "'Black Han Sans',sans-serif", plain: "Inter,'Apple SD Gothic Neo',system-ui,sans-serif", ko: "'Black Han Sans',sans-serif", wordmark: "'Black Han Sans',sans-serif", card: "'Black Han Sans',sans-serif", brandTracking: '0', tracking: '0', accentStyle: 'normal',
      css: ['https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', 'https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap&text={SUBSET}'] },
    shape: [6, 10, 14, 18, 24, 999]
  },
  ribbon: { en: 'Design concept by Mooque Studio, not the official Jokbal Night Market website. <a href="https://jokbalnightmarket.com/" target="_blank" rel="noopener">See the current site ↗</a>', ko: 'Mooque Studio의 디자인 시안이며, 족발야시장 공식 웹사이트가 아닙니다. <a href="https://jokbalnightmarket.com/" target="_blank" rel="noopener">현재 사이트 보기 ↗</a>' },
  brand: { wordmark: '족발<span style="color:var(--md-sys-color-primary-text)">야시장</span>' },
  nav: [{ href: '#jokbal', label: { en: 'Jokbal', ko: '족발' } }, { href: '#menu', label: { en: 'Full menu', ko: '전체 메뉴' } }, { href: '#how', label: { en: 'How to eat', ko: '먹는 법' } }, { href: '#visit', label: { en: 'Visit', ko: '오시는 길' } }],
  primary: { href: ORDER, label: { en: 'Order online', ko: '온라인 주문' } },
  bar: [{ icon: 'call', href: TEL, label: { en: 'Call', ko: '전화' } }, { icon: 'restaurant_menu', href: '#menu', label: { en: 'Menu', ko: '메뉴' } }, { icon: 'shopping_bag', href: ORDER, label: { en: 'Order', ko: '주문하기' }, primary: true }],
  locations: [{ id: 'sheppard', name: { en: 'Jokbal Night Market', ko: '족발야시장' }, hours: Array(7).fill([690, 1440]), tag: { en: 'Visit', ko: '오시는 길' }, title: '41 Sheppard Ave E', near: { en: 'North York · a short walk east of Yonge', ko: '노스욕 · 영 스트리트 바로 동쪽' }, address: '41 Sheppard Ave E, North York, ON M2N 2Z8',
    rows: [{ k: { en: 'Phone', ko: '전화' }, v: '<a href="tel:+14165127211">(416) 512-7211</a>', html: true }, { k: 'Instagram', v: '<a href="https://www.instagram.com/jokbal.night.market.toronto/" target="_blank" rel="noopener">@jokbal.night.market.toronto</a>', html: true }],
    actions: [{ href: ORDER, label: { en: 'Order online', ko: '온라인 주문' }, icon: 'shopping_bag' }, { href: MAP, label: { en: 'Directions', ko: '길찾기' }, icon: 'directions' }] }],
  strings: {
    en: { open: 'Open', openUntil: 'until {t}', closed: 'Closed', opens: 'opens {d} at {t}', today: 'today', tomorrow: 'tomorrow', days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], closedDay: 'Closed', copied: 'Address copied' },
    ko: { open: '영업 중', openUntil: '{t}까지', closed: '영업 종료', opens: '{d} {t} 오픈', today: '오늘', tomorrow: '내일', days: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'], closedDay: '휴무', copied: '주소를 복사했어요' }
  },
  sections: [
    { type: 'hero', eyebrow: { en: 'Jokbal &amp; bossam · Sheppard &amp; Yonge', ko: '족발 · 보쌈 · 쉐퍼드 &amp; 영' },
      title: { en: 'Jokbal, simmered<br><i class="accent">with ten herbs.</i>', ko: '열 가지 한약재로<br><i class="accent">삶아낸 족발.</i>' },
      text: { en: 'Pork trotters simmered for hours in our secret soy recipe, served with lettuce and sides for wrapping. Bossam and gamjatang too, every day until midnight.', ko: '비법 간장 육수와 열 가지 한약재로 오래 삶아낸 족발. 보쌈과 감자탕도 있어요. 매일 [[hk:close]]까지 영업해요.' },
      ctas: [{ href: ORDER, label: { en: 'Order for pickup', ko: '픽업 주문하기' }, icon: 'shopping_bag' }, { href: '#menu', label: { en: 'See the menu', ko: '메뉴 보기' } }],
      image: { src: pg[2], w: 555, h: 1323, focal: '50% 66%', alt: { en: 'Jokmahawk and crispy jokbal', ko: '족마호크와 크리스피 족발' } } },
    { type: 'facts', items: [{ value: '10', label: { en: 'Herbal ingredients in the broth', ko: '육수에 들어가는 한약재' } }, { value: 'S · M · L', label: { en: 'Sizes for any table', ko: '인원에 맞는 사이즈' } }, { value: { en: '[[h:open.short]]–[[h:close.short]]', ko: '[[h:open.short]]–24:00' }, label: { en: 'Open daily until [[h:close]]', ko: '매일 [[hk:close]]까지 영업' } }, { value: { en: 'Pickup', ko: '픽업' }, label: { en: 'Order online', ko: '온라인 주문 가능' } }] },
    { type: 'cards', id: 'jokbal', media: 'plate', plateSize: 176, cols: 4,
      eyebrow: { en: 'Jokbal', ko: '족발' }, title: { en: 'Original, spicy<br><i class="accent">or both.</i>', ko: '오리지널, 불족발,<br><i class="accent">아니면 반반.</i>' },
      text: { en: 'Pick a size for your table. The price updates as you choose.', ko: '인원에 맞춰 사이즈를 골라 보세요. 선택하면 가격이 바로 바뀌어요.' },
      items: [
        { plate: plate(3, 165, 525, 118), alt: 'Original jokbal', kicker: '오리지널 족발', title: { en: 'Original Jokbal', ko: '오리지널 족발' }, prices: [{ size: 'S', price: '$39' }, { size: 'M', price: '$45' }, { size: 'L', price: '$53' }], desc: { en: 'Slow-boiled with our secret recipe and ten herbal ingredients.', ko: '비법 간장 육수와 열 가지 한약재로 오래 삶아냈어요.' } },
        { plate: plate(3, 140, 290, 110), alt: 'Jokmahawk', kicker: '족마호크', title: { en: 'Jokmahawk', ko: '족마호크' }, prices: [{ size: 'M', price: '$50' }, { size: 'L', price: '$58' }], desc: { en: 'Roasted trotters in a spicy sauce with sweet corn sauce.', ko: '매콤한 양념을 발라 구운 족발에 스위트콘 소스를 곁들였어요.' }, tags: [nw] },
        { plate: plate(3, 410, 815, 128), alt: 'Spicy BBQ jokbal', kicker: '직화 불족발', title: { en: 'Spicy BBQ Jokbal', ko: '직화 불족발' }, price: '$52', desc: { en: 'Cut small, tossed in spicy sauce and grilled over direct fire.', ko: '한입 크기로 썰어 매운 양념에 버무려 직화로 구웠어요.' }, tags: [{ en: 'Extra spicy', ko: '아주 매워요' }] },
        { plate: plate(3, 150, 1150, 108), alt: 'Half original, half spicy jokbal', kicker: '반반족발', title: { en: 'Half &amp; Half', ko: '반반족발' }, price: '$58', desc: { en: 'Original and spicy jokbal on one plate.', ko: '오리지널과 불족발을 한 접시에.' } }
      ] },
    { type: 'cards', id: 'bossam', media: 'plate', plateSize: 176, cols: 4, tint: true,
      eyebrow: { en: 'Bossam &amp; sets', ko: '보쌈 &amp; 세트' }, title: { en: 'Bossam<br><i class="accent">and combos.</i>', ko: '보쌈과<br><i class="accent">세트 메뉴.</i>' },
      text: { en: 'For a group, a combo covers more of the table.', ko: '여럿이 오셨다면 세트 메뉴로 다양하게 즐겨 보세요.' },
      items: [
        { plate: plate(1, 146, 262, 110), alt: 'Bossam', kicker: '보쌈', title: { en: 'Bossam', ko: '보쌈' }, prices: [{ size: 'M', price: '$38' }, { size: 'L', price: '$43' }], desc: { en: 'Pork belly cooked in our fermented sauce, with pork kimchi.', ko: '비법 소스로 삶은 삼겹살과 보쌈김치.' } },
        { plate: plate(1, 150, 528, 116), alt: 'Jokbal and bossam combo', kicker: '족발보쌈 세트', title: { en: 'Jokbal &amp; Bossam Combo', ko: '족발보쌈 세트' }, price: '$58', desc: { en: 'Original jokbal and bossam on one board.', ko: '오리지널 족발과 보쌈을 함께.' } },
        { plate: plate(1, 410, 810, 110), alt: 'Jokbal with jellyfish salad', kicker: '냉채족발', title: { en: 'Jokbal &amp; Jellyfish Salad', ko: '냉채족발' }, prices: [{ size: 'M', price: '$43' }, { size: 'L', price: '$48' }], desc: { en: 'Chilled jokbal with mustard and garlic dressing.', ko: '차갑게 식힌 족발에 겨자 마늘 소스를 곁들였어요.' } },
        { plate: plate(4, 176, 206, 104), alt: 'Jokbal with jangban makguksu', kicker: '족발 &amp; 쟁반막국수', title: { en: 'Jokbal &amp; Makguksu', ko: '족발 &amp; 쟁반막국수' }, price: '$53', desc: { en: 'Original jokbal with spicy buckwheat noodles.', ko: '오리지널 족발과 매콤한 쟁반막국수.' }, tags: [combo] }
      ] },
    { type: 'menu', id: 'menu', eyebrow: { en: 'Full menu', ko: '전체 메뉴' }, title: { en: 'Every dish,<br><i class="accent">every price.</i>', ko: '모든 메뉴와<br><i class="accent">가격을 한눈에.</i>' },
      text: { en: 'Readable on your phone and easy to search. Prices before tax.', ko: '휴대폰에서도 잘 보이고, 검색도 돼요. 가격은 세금 별도예요.' },
      search: { en: 'Search the menu, e.g. “bossam”', ko: '메뉴 검색, 예: 보쌈' },
      tabs: [
        { id: 'jb', label: { en: 'Jokbal &amp; Bossam', ko: '족발 · 보쌈' }, rows: [r('Original Jokbal', '오리지널 족발', sz(['S', 39], ['M', 45], ['L', 53])), r('Jokmahawk', '족마호크', sz(['M', 50], ['L', 58]), null, nw), r('Spicy BBQ Jokbal', '직화 불족발', '52', null, spicy), r('Half Original &amp; Half Spicy', '반반족발', '58'), r('Bossam', '보쌈', sz(['M', 38], ['L', 43]), { en: 'Extra bossam meat $17', ko: '보쌈고기 추가 $17' }), r('Jokbal Bossam Combo', '족발보쌈 세트', '58', { en: 'Extra bossam kimchi $7', ko: '보쌈김치 추가 $7' }), r('Jokbal with Jellyfish Salad', '냉채족발', sz(['M', 43], ['L', 48])), r('Original Jokbal &amp; Jangban Makguksu', '오리지널 족발 &amp; 쟁반막국수', '53', null, combo)] },
        { id: 'ns', label: { en: 'Noodles &amp; Soups', ko: '면 · 탕' }, rows: [r('Jangban Makguksu', '쟁반막국수', sz(['S', 18], ['L', 25]), null, spicy), r('Jangban Jjolmyeon', '쟁반쫄면', sz(['S', 18], ['L', 25]), null, spicy), r('Chuncheon Mul Makguksu', '춘천물막국수', sz(['S', 18], ['L', 25])), r('Half n Half Makguksu', '반반막국수', '28'), r('Spicy Soft Tofu Stew with Seafood', '해물순두부', '17', null, spicy), r('Hwangtaetang', '황태탕', '21'), r('Fish Cake Stew', '미안한 오뎅탕', '18')] },
        { id: 'pc', label: { en: 'Pancakes &amp; More', ko: '전 · 떡볶이' }, rows: [r('Chive Pancake with Seafood', '해물부추전', '24'), r('Kimchi Pancake with Seafood', '해물김치전', '24'), r('Half n Half Pancake', '반반전', '26'), r('Kimchi Pancake with Cheese n Bacon', '치즈김치전', '27'), r('Gungmul Tteokbokki', '국물 떡볶이', '16', null, spicy), r('Fried Egg Roll', '계란말이', '18.99'), r('Steamed Dumplings (8pcs)', '만두 · 고기 / 김치 / 반반', '12.99')] },
        { id: 'gj', label: { en: 'Gamjatang &amp; Ppyo', ko: '감자탕 · 뼈찜' }, note: { en: 'From 무청감자탕 (Mucheong Gamjatang), served at the same address.', ko: '같은 매장에서 함께 운영하는 무청감자탕 메뉴예요.' }, rows: [r('Gamjatang · Mugeunji (Kimchi)', '감자탕 · 묵은지', '17.99'), r('Gamjatang · Siraegi (Radish leaf)', '감자탕 · 시래기', '17.99'), r('Gamjatang · Soonsal (Boneless)', '감자탕 · 순살', '17.99'), r('Jeongol · Mugeunji (Kimchi)', '전골 · 묵은지', sz(['M', 49.99], ['L', 59.99])), r('Jeongol · Siraegi (Radish leaf)', '전골 · 시래기', sz(['M', 48.99], ['L', 58.99])), r('Volcano Ppyogui', '볼케이노 뼈구이', sz(['M', 55.99], ['L', 65.99]), null, spicy), r('Soy Ppyojjim', '간장뼈찜', sz(['M', 55.99], ['L', 65.99])), r('Rose Ppyojjim', '로제뼈찜', sz(['M', 55.99], ['L', 65.99])), r('Ddukbaegi Bulgogi', '뚝배기불고기', '22.99'), r('Budae Ddukbaegi', '부대찌개', '22.99'), r('Mucheong Special', '전골(소) + 뼈구이 + 볶음밥', '99', null, combo), r('Yasijang Special', '전골(소) + 오리지널족발 + 막국수', '99', null, combo)] },
        { id: 'rd', label: { en: 'Rice &amp; Drinks', ko: '식사 · 주류' }, rows: [r('Rice on the Top Jokbal', '족발덮어밥', '18.99'), r('Rice on the Top Bossam', '보쌈덮어밥', '18.99'), r('Rice with Cheese Spicy Jokbal', '치즈불족덮어밥', '19.99'), r('Old School Bento Box', '옛날도시락', '12'), r('Rice Ball in Seaweed Flakes (2pcs)', '주먹밥', '7'), r('A Bowl of Rice', '공기밥', '3'), r('Soju', '소주', '23'), r('Makgeolli', '막걸리', '23'), r('Sake', '사케', '18'), r('Beer', '맥주', '6'), r('Beverage', '음료', '3')] }
      ],
      note: { en: 'Extras: glass noodle $5 · ramen $3 · siraegi $5 · mugeunji $6 · pork bone $12 · potato sujebi $3 · fried rice $7 · rice cake $4 · potato $3. Prices are subject to change.', ko: '추가: 당면 $5 · 라면사리 $3 · 시래기 $5 · 묵은지 $6 · 뼈 $12 · 감자수제비 $3 · 깍두기볶음밥 $7 · 떡 $4 · 감자 $3. 가격은 변경될 수 있어요.' } },
    { type: 'steps', id: 'how', tint: true, eyebrow: { en: 'How to eat jokbal', ko: '족발 먹는 법' }, title: { en: 'Wrap it,<br><i class="accent">eat it in one bite.</i>', ko: '쌈으로 싸서,<br><i class="accent">한입에.</i>' }, text: { en: 'First time? This is how it’s eaten in Korea. Tap through the steps.', ko: '이렇게 싸 먹으면 더 맛있어요. 단계를 눌러 보세요.' },
      steps: [{ title: { en: 'Start with a leaf', ko: '상추 한 장' }, text: { en: 'Lay a lettuce or perilla leaf flat in your hand.', ko: '손바닥에 상추나 깻잎을 한 장 올려요.' } }, { title: { en: 'Add meat and sides', ko: '고기와 쌈장' }, text: { en: 'A slice of jokbal or bossam, then a little kimchi, garlic and sauce.', ko: '족발이나 보쌈 한 점에 김치, 마늘, 쌈장을 조금씩 올려요.' } }, { title: { en: 'Wrap and eat', ko: '싸서 한입에' }, text: { en: 'Fold it up and eat it in one bite. Bossam means “wrapped”.', ko: '잘 싸서 한입에. 보쌈이라는 이름도 ‘싸다’에서 왔어요.' } }] },
    { type: 'locations', id: 'visit', eyebrow: { en: 'Visit', ko: '오시는 길' }, title: { en: 'Open every day<br><i class="accent">until midnight.</i>', ko: '매일<br><i class="accent">[[hk:close]]까지 영업.</i>' } }
  ],
  footer: `<div><b>족발야시장</b>Jokbal Night Market · 41 Sheppard Ave E</div><div><span data-ko="매일 오전 [[h:open.short]] – [[hk:close]]">Every day [[h:range]]</span><br><a href="tel:+14165127211">(416) 512-7211</a></div>`,
  css: `.m-brand{font-size:26px}
.m-card--plate{background:var(--md-sys-color-surface-container)}
.m-card--plate .m-card__title h3{font-size:22px;font-weight:400}
.m-section--tint .m-card--plate{background:var(--md-sys-color-surface-container-high)}`
};
