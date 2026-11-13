// Coffee Lunar — facts and drink descriptions from coffeelunar.com (English only).
const Q = 'https://images.squarespace-cdn.com/content/v1/5e90adc492be525031fab7ad/';
const C = (path, alt, zoom) => ({ src: `${Q}${path}?format=750w`, alt, zoom, w: 750, h: 750 });
const PH = (path, alt, w = 1000) => ({ src: `${Q}${path}?format=${w}w`, alt });
const ORDER = 'https://order.online/business/coffee-lunar-14611823';
const day = (o, c) => Array(7).fill([o, c]);

export default {
  id: 'lunar', langs: ['en'], micro: ['moon'],
  title: { en: 'Coffee Lunar — specialty drinks & desserts, Rosedale and North York' },
  description: 'Coffee Lunar: signature drops, espresso and desserts at 920 Yonge St (Rosedale) and 6040 Yonge St (North York), Toronto. Order ahead online.',
  theme: {
    colors: { scheme: 'light', primary: '#151515', secondary: '#7a7268', tertiary: '#1f7a47', neutral: '#f4f2ee' },
    fonts: { brand: "Unbounded,sans-serif", plain: "Inter,system-ui,sans-serif", displayWeight: 700, tracking: '-.035em', brandTracking: '.14em', accentStyle: 'normal',
      css: ['https://fonts.googleapis.com/css2?family=Unbounded:wght@500;700&family=Inter:wght@400;500;600;700&display=swap'] },
    shape: [8, 12, 16, 24, 28, 999], cutoutBg: '#ffffff'
  },
  ribbon: 'Design concept by Mooque Studio, not the official Coffee Lunar website. <a href="https://coffeelunar.com/" target="_blank" rel="noopener">See the current site ↗</a>',
  brand: { wordmark: 'COFFEE LUNAR' },
  nav: [{ href: '#drops', label: 'Signature' }, { href: '#menu', label: 'Menu' }, { href: '#space', label: 'Space' }, { href: '#visit', label: 'Locations' }],
  primary: { href: ORDER, label: 'Order ahead' },
  bar: [{ icon: 'local_cafe', href: '#menu', label: 'Menu' }, { icon: 'location_on', href: '#visit', label: 'Cafés' }, { icon: 'shopping_bag', href: ORDER, label: 'Order ahead', primary: true }],
  locations: [
    { id: 'rosedale', name: 'Rosedale', short: 'Rosedale', hours: day(480, 1020), tag: 'Rosedale', title: '920 Yonge St', near: 'Yonge & Davenport, Toronto', address: '920 Yonge St, Toronto, ON',
      rows: [{ k: 'Parking', v: 'Paid underground garage in the condominium. Green P street parking across the building on McMurrich St.' }, { k: 'Only here', v: 'House cold brew' }],
      actions: [{ href: ORDER, label: 'Order ahead', icon: 'shopping_bag' }, { href: 'https://maps.google.com/?q=Coffee+Lunar+920+Yonge+St+Toronto', label: 'Directions', icon: 'directions' }] },
    { id: 'northyork', name: 'North York', short: 'North York', hours: day(540, 1140), tag: 'North York', title: '6040 Yonge St', near: 'Yonge & Finch, North York', address: '6040 Yonge St, Toronto, ON',
      rows: [{ k: 'Parking', v: 'Shared lot behind the plaza. Free street parking out front on weekdays, 10am – 3pm.' }],
      actions: [{ href: ORDER, label: 'Order ahead', icon: 'shopping_bag' }, { href: 'https://maps.google.com/?q=Coffee+Lunar+6040+Yonge+St+Toronto', label: 'Directions', icon: 'directions' }] }
  ],
  strings: { en: { open: 'Open', openUntil: 'until {t}', closed: 'Closed', opens: 'opens {d} at {t}', today: 'today', tomorrow: 'tomorrow', days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], closedDay: 'Closed', copied: 'Address copied',
    moonNames: ['New moon tonight', 'Waxing crescent tonight', 'First quarter tonight', 'Waxing gibbous tonight', 'Full moon tonight', 'Waning gibbous tonight', 'Last quarter tonight', 'Waning crescent tonight'] } },
  sections: [
    { type: 'hero', eyebrow: 'Specialty drinks &amp; desserts · Rosedale · North York', title: 'Minimal space.<br><i class="accent">Creative cups.</i>',
      text: 'Signature drops made with housemade syrups and silky cream, plus carefully made espresso classics. Two cafés on Yonge, open every day.',
      ctas: [{ href: ORDER, label: 'Order ahead', icon: 'shopping_bag' }, { href: '#visit', label: 'Find a café' }],
      visual: `<div class="moonstage" data-moon><div class="moon"><span class="moon__shadow"></span></div><img src="${Q}ac9a7fb4-f8ad-4df2-8dd8-50cc53f2c41e/Cream+Drop.png?format=750w" alt="Cream Drop in a glass" width="750" height="750" fetchpriority="high"><span class="moonchip m-chip"><span class="mini-moon"><span class="moon__shadow"></span></span><span data-moon-label>Tonight's moon</span></span></div>` },
    { type: 'facts', items: [{ value: '2', label: 'Cafés on Yonge' }, { value: '6', label: 'Signature drinks' }, { value: 'Daily', label: 'Open every day' }, { value: 'Online', label: 'Order ahead for pickup' }] },
    { type: 'cards', id: 'drops', media: 'cutout', ratio: '1/1', cols: 3, eyebrow: 'Signature', title: 'Signature<br><i class="accent">drops.</i>',
      text: 'Most are built on a housemade syrup or concentrate. Three come hot or iced; the rest are served cold.',
      items: [
        { image: C('ac9a7fb4-f8ad-4df2-8dd8-50cc53f2c41e/Cream+Drop.png', 'Cream Drop', 1.7), title: 'Cream Drop', desc: 'Double espresso, a hint of housemade brown sugar syrup, silky cream with condensed milk and cacao.', temps: ['hot', 'iced'] },
        { image: C('0715082f-b2a8-413d-8d82-b217aadb89d5/Matcha+Drop+-+adjusted.png', 'Matcha Drop', 1.85), title: 'Matcha Drop', desc: 'Matcha with housemade vanilla bean syrup, silky cream and dried cornflower petals.', temps: ['hot', 'iced'] },
        { image: C('085afc9b-9408-48e6-9292-6fa82ee3b3cf/Vanilla+Drop+Latte.png', 'Vanilla Drop Latte', 1.6), title: 'Vanilla Drop Latte', desc: 'Double espresso over chilled milk with vanilla bean syrup, silky cream and turbinado sugar.', temps: ['iced'] },
        { image: { ...C('aa557da9-291e-4927-8076-c036f321f3f5/Ube+Latte.png', 'Ube Oat Latte', 1.8), w: 723, h: 545 }, title: 'Ube Oat Latte', desc: 'House-blended ube concentrate with oat milk.', temps: ['hot', 'iced'] },
        { image: { ...C('e63e8dc8-681e-4bd4-a3f0-80a05ae4a272/Tomjito.png', 'Tomjiho', 0.72), w: 750, h: 905 }, title: 'Tomjiho', desc: 'Housemade tomato lime syrup with a hint of mint, over sparkling water and ice.', temps: ['iced'] },
        { image: { ...C('1f15a082-585c-4a8e-bdb3-73718808190c/Cascara+Tonic.png', 'Cascara Tonic', 1.3), w: 539, h: 539 }, title: 'Cascara Tonic', desc: 'Housemade cascara (dried coffee cherry skin) syrup over sparkling water, with dried lemon.', temps: ['iced'] }
      ] },
    { type: 'menu', id: 'menu', tint: true, eyebrow: 'Menu', title: 'The classics,<br><i class="accent">done carefully.</i>', text: 'Espresso drinks and non-coffee favourites. Ask in the café for today’s desserts.',
      tabs: [
        { id: 'coffee', label: 'Coffee', rows: [{ name: 'Espresso', price: '', desc: 'Hot or iced' }, { name: 'Americano', price: '', desc: 'Double espresso with water · hot or iced' }, { name: 'Flat White', price: '5 oz', desc: 'Double espresso, thin milk foam · hot or iced' }, { name: 'Cappuccino', price: '8 oz', desc: 'Double espresso, thick milk foam · hot' }, { name: 'Latte', price: '', desc: 'Double espresso with 10 oz milk · hot or iced' }, { name: 'Vanilla Bean Latte', price: '', desc: 'Housemade vanilla bean syrup · hot or iced' }, { name: 'Mocha Latte', price: '', desc: 'Housemade chocolate syrup · hot or iced' }, { name: 'Espresso Tonic', price: '', desc: 'Brown sugar syrup and sparkling water · iced' }, { name: 'Cold Brew', price: '', desc: 'House-brewed · Rosedale only' }] },
        { id: 'noncoffee', label: 'Non-coffee', rows: [{ name: 'Matcha Latte', price: '', desc: 'Spring/summer harvest matcha · hot or iced' }, { name: 'London Fog', price: '', desc: 'Cream of Earl Grey with steamed milk · hot' }, { name: 'Hot Chocolate', price: '', desc: 'Housemade chocolate syrup · hot or iced' }, { name: 'Tea', price: '', desc: 'Various options · hot' }] }
      ] },
    { type: 'gallery', id: 'space', eyebrow: 'The space', title: 'Quiet rooms,<br><i class="accent">good light.</i>', text: 'Minimal and simple, made for staying a while.',
      images: [PH('973bd07f-beef-45de-a95a-72249590157f/6.jpg', 'Coffee Lunar café interior', 1200), PH('3d7f717b-1a7f-433d-8c22-dfd8bc76f8ac/3.jpeg', 'Café counter', 600), PH('461d5262-476b-4de8-af3a-c335c7eb9e01/8.jpg', 'Espresso being poured', 600), PH('23f81d1b-e390-419e-b85e-a670ee418fe3/5.jpg', 'Seating area', 600), PH('a5f61266-d97b-4ac6-80e0-5e0f6f7dc8c1/1.JPEG', 'Espresso machine', 600)] },
    { type: 'locations', id: 'visit', tint: true, eyebrow: 'Locations', title: 'Two cafés<br><i class="accent">on Yonge.</i>', text: 'Open every day. Parking notes included, because that’s always the question.' },
    { type: 'links', eyebrow: 'Also at Lunar', items: [{ href: 'https://coffeelunar.com/foods', kicker: 'Food', title: 'Sandwiches &amp; desserts', text: 'See what’s in the case today.' }, { href: 'https://coffeelunar.com/store/merchandise', kicker: 'Shop', title: 'Merch', text: 'Take a little Lunar home.' }, { href: 'https://www.instagram.com/coffeelunar', kicker: 'Instagram', title: '@coffeelunar', text: 'New drinks and café updates.' }] }
  ],
  footer: `<div><b>COFFEE LUNAR</b>Specialty drinks &amp; desserts</div><div>Rosedale · 920 Yonge St · 8am – 5pm<br>North York · 6040 Yonge St · 9am – 7pm</div>`,
  css: `.moonstage{position:relative;width:min(520px,100%);aspect-ratio:1}
.moon{position:absolute;inset:6%;border-radius:50%;overflow:hidden;background:radial-gradient(circle at 36% 34%,#fff 0%,#e6e1d8 58%,#cfc8bc 100%);box-shadow:inset -24px -24px 60px #0000000f}
.moon__shadow{position:absolute;inset:0;border-radius:50%;background:#2a2a2a;opacity:.08;transform:translateX(var(--shift,0%));transition:transform var(--md-sys-motion-duration-long) var(--md-sys-motion-easing-emphasized)}
.moonstage>img{position:absolute;inset:14%;width:72%;height:72%;object-fit:contain;transform:scale(1.55);filter:drop-shadow(0 30px 24px #0000002a)}
.moonchip{position:absolute;right:4%;bottom:8%;background:var(--md-sys-color-surface-container-lowest);box-shadow:var(--md-sys-elevation-2);border:0;min-height:40px;padding:0 14px;color:var(--md-sys-color-on-surface)}
.mini-moon{position:relative;width:18px;height:18px;border-radius:50%;overflow:hidden;background:#e6e1d8;box-shadow:inset 0 0 0 1px #0002}
.mini-moon .moon__shadow{opacity:.85}
.m-card[data-temp] .m-media::after{content:"";position:absolute;left:50%;top:18%;width:40%;height:30%;transform:translateX(-50%);pointer-events:none;opacity:0;transition:opacity var(--md-sys-motion-duration-medium)}
.m-card[data-temp="hot"] .m-media::after{opacity:.55;background:radial-gradient(ellipse at 40% 80%,#fff 0,#fff0 60%),radial-gradient(ellipse at 62% 60%,#fff 0,#fff0 55%);filter:blur(6px);animation:steam 2.6s ease-in-out infinite}
@keyframes steam{0%{transform:translate(-50%,10%);opacity:0}40%{opacity:.6}100%{transform:translate(-50%,-30%);opacity:0}}
.m-card .m-seg[data-temp] .m-seg__btn{min-width:40px;padding:0 10px}
.m-card .m-seg[data-temp] .icon{font-size:18px;vertical-align:-3px}
@media(max-width:900px){.moonstage{width:min(300px,80vw)}}`
};
