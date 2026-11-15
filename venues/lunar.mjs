// Coffee Lunar — facts and drink descriptions from coffeelunar.com (English only).
// Photos are Coffee Lunar's own, copied from coffeelunar.com (see lunar/img).
const C = (name, alt, zoom) => ({ src: `img/${name}.webp`, alt, zoom, w: 750, h: 750 });
const PH = (name, alt) => ({ src: `img/${name}.webp`, alt });
const ORDER = 'https://order.online/business/coffee-lunar-14611823';
const day = (o, c) => Array(7).fill([o, c]);

export default {
  id: 'lunar', langs: ['en'], micro: [],
  title: { en: 'Coffee Lunar — specialty drinks & desserts, Rosedale and North York' },
  description: 'Coffee Lunar: signature drops, espresso and desserts at 920 Yonge St (Rosedale) and 6040 Yonge St (North York), Toronto. Order ahead online.',
  schema: { type: 'CafeOrCoffeeShop', name: 'Coffee Lunar', cuisine: ['Coffee', 'Desserts'], url: 'https://coffeelunar.com/' },
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
  strings: { en: { open: 'Open', openUntil: 'until {t}', closed: 'Closed', opens: 'opens {d} at {t}', today: 'today', tomorrow: 'tomorrow', days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], closedDay: 'Closed', copied: 'Address copied' } },
  sections: [
    { type: 'hero', eyebrow: 'Specialty drinks &amp; desserts · Rosedale · North York', title: 'Minimal space.<br><i class="accent">Creative cups.</i>',
      text: 'Signature drops made with housemade syrups and silky cream, plus carefully made espresso classics. Two cafés on Yonge, open [[h:days]].',
      ctas: [{ href: ORDER, label: 'Order ahead', icon: 'shopping_bag' }, { href: '#visit', label: 'Find a café' }],
      cutout: true, image: C('cream-drop', 'Cream Drop in a glass', 1.45) },
    { type: 'facts', items: [{ value: '2', label: 'Cafés on Yonge' }, { value: '6', label: 'Signature drinks' }, { value: 'Daily', label: 'Open [[h:days]]' }, { value: 'Online', label: 'Order ahead for pickup' }] },
    { type: 'cards', id: 'drops', media: 'cutout', ratio: '1/1', cols: 3, eyebrow: 'Signature', title: 'Signature<br><i class="accent">drops.</i>',
      text: 'Most are built on a housemade syrup or concentrate. Three come hot or iced; the rest are served cold.',
      items: [
        { image: C('cream-drop', 'Cream Drop', 1.7), title: 'Cream Drop', desc: 'Double espresso, a hint of housemade brown sugar syrup, silky cream with condensed milk and cacao.', tags: ['Hot or iced'] },
        { image: C('matcha-drop', 'Matcha Drop', 1.85), title: 'Matcha Drop', desc: 'Matcha with housemade vanilla bean syrup, silky cream and dried cornflower petals.', tags: ['Hot or iced'] },
        { image: C('vanilla-drop-latte', 'Vanilla Drop Latte', 1.6), title: 'Vanilla Drop Latte', desc: 'Double espresso over chilled milk with vanilla bean syrup, silky cream and turbinado sugar.', tags: ['Iced'] },
        { image: { ...C('ube-latte', 'Ube Oat Latte', 1.8), w: 750, h: 565 }, title: 'Ube Oat Latte', desc: 'House-blended ube concentrate with oat milk.', tags: ['Hot or iced'] },
        { image: { ...C('tomjiho', 'Tomjiho', 0.72), w: 750, h: 906 }, title: 'Tomjiho', desc: 'Housemade tomato lime syrup with a hint of mint, over sparkling water and ice.', tags: ['Iced'] },
        { image: { ...C('cascara-tonic', 'Cascara Tonic', 1.3), w: 750, h: 750 }, title: 'Cascara Tonic', desc: 'Housemade cascara (dried coffee cherry skin) syrup over sparkling water, with dried lemon.', tags: ['Iced'] }
      ] },
    { type: 'menu', id: 'menu', tint: true, eyebrow: 'Menu', title: 'The classics,<br><i class="accent">done carefully.</i>', text: 'Espresso drinks and non-coffee favourites. Ask in the café for today’s desserts.',
      tabs: [
        { id: 'coffee', label: 'Coffee', rows: [{ name: 'Espresso', price: '', desc: 'Hot or iced' }, { name: 'Americano', price: '', desc: 'Double espresso with water · hot or iced' }, { name: 'Flat White', price: '5 oz', desc: 'Double espresso, thin milk foam · hot or iced' }, { name: 'Cappuccino', price: '8 oz', desc: 'Double espresso, thick milk foam · hot' }, { name: 'Latte', price: '', desc: 'Double espresso with 10 oz milk · hot or iced' }, { name: 'Vanilla Bean Latte', price: '', desc: 'Housemade vanilla bean syrup · hot or iced' }, { name: 'Mocha Latte', price: '', desc: 'Housemade chocolate syrup · hot or iced' }, { name: 'Espresso Tonic', price: '', desc: 'Brown sugar syrup and sparkling water · iced' }, { name: 'Cold Brew', price: '', desc: 'House-brewed · Rosedale only' }] },
        { id: 'noncoffee', label: 'Non-coffee', rows: [{ name: 'Matcha Latte', price: '', desc: 'Spring/summer harvest matcha · hot or iced' }, { name: 'London Fog', price: '', desc: 'Cream of Earl Grey with steamed milk · hot' }, { name: 'Hot Chocolate', price: '', desc: 'Housemade chocolate syrup · hot or iced' }, { name: 'Tea', price: '', desc: 'Various options · hot' }] }
      ] },
    { type: 'gallery', id: 'space', eyebrow: 'The space', title: 'Quiet rooms,<br><i class="accent">good light.</i>', text: 'Minimal and simple, made for staying a while.',
      images: [PH('space-1', 'Coffee Lunar café interior'), PH('space-2', 'Café counter'), PH('space-3', 'Espresso being poured'), PH('space-4', 'Seating area'), PH('space-5', 'Espresso machine')] },
    { type: 'locations', id: 'visit', tint: true, eyebrow: 'Locations', title: 'Two cafés<br><i class="accent">on Yonge.</i>', text: 'Open [[h:days]]. Parking notes included, because that’s always the question.' },
    { type: 'links', eyebrow: 'Also at Lunar', items: [{ href: 'https://coffeelunar.com/foods', kicker: 'Food', title: 'Sandwiches &amp; desserts', text: 'See what’s in the case today.' }, { href: 'https://coffeelunar.com/store/merchandise', kicker: 'Shop', title: 'Merch', text: 'Take a little Lunar home.' }, { href: 'https://www.instagram.com/coffeelunar', kicker: 'Instagram', title: '@coffeelunar', text: 'New drinks and café updates.' }] }
  ],
  footer: `<div><b>COFFEE LUNAR</b>Specialty drinks &amp; desserts</div><div>Rosedale · 920 Yonge St · [[h:range]]<br>North York · 6040 Yonge St · [[h:range@northyork]]</div>`,
  css: ''
};
