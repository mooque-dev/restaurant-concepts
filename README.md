# Website concepts: restaurants, cafés, artists and musicians

Static site, no framework. Serve the folder to preview:

    python3 -m http.server 8765

## Pages
- `index.html` — team directory: filter by category, quick index, cards, owner-link buttons. Pricing lives in `local/pricing.html`, which is git-ignored and shows only on this machine
- `compare.html?c=<id>` — before / after for one concept (`&share=1` is the owner view: no other concepts or sources)
- `<id>/` — the current page for each concept, built from the template
- `archive/` — older versions of the restaurant pages (`archive/<id>/v1`, `archive/<id>/v2`) and earlier artist sketches

## Template
- `ds/m3.css`, `ds/m3.js` — the design system: Material 3–style tokens and components
  (one standard hero, cards with fixed image ratios, tabs, menu search, location switcher, live hours,
  bottom action bar, bottom sheet, snackbar, stepper, editorial prose and index lists, sketch placeholders).
- `venues/<id>.mjs` — one content file per restaurant or café: theme seeds, fonts, copy (English + Korean),
  menu, hours, locations.
- `artists/<id>.mjs` — one content file per artist, facts only. `artists/_base.mjs` holds the shared page
  structure and theme presets. Rules: sourced facts, no borrowed photos, no guessed handles, emails or dates.
- `build/build.mjs` — renders every content file into `<id>/index.html` as a single self-contained file,
  generates colour roles from the seeds, fails if any text/background pair is under 4.5:1, and trims
  Korean and icon fonts to the characters used.
- `build/test-hours.mjs` — edge-case tests for the hours engine.
- `data/concepts.js` — directory data: category, pitch, evidence, before/after rows, sources.

    node build/test-hours.mjs
    node build/build.mjs            # everything
    node build/build.mjs jokbal     # one page

## Hours are written once
Opening hours live only in `locations[].hours` in each venue file. Copy uses tokens, and the build fills
them in, so one edit updates the headline, facts, footer, meta description, status bar, hours table and schema:

    [[h:open]] [[h:close]] [[h:range]] [[h:days]] [[h:kitchen]]      English: 5:30pm, 2:30am, 5:30pm – 2:30am, Tue–Sun
    [[hk:open]] [[hk:close]] [[hk:range]] [[hk:days]] [[hk:kitchen]] Korean: 오후 5시 30분, 새벽 2시 30분, 화–일
    [[h:close.short]]  a bare clock (2:30)      [[h:range@northyork]]  another location

If the open days disagree on a value, the build stops instead of printing one day's time for all of them.

## Published copy
The collection is served by GitHub Pages from this repo's `main` branch:
https://mooque-dev.github.io/restaurant-concepts/ . Every page carries `noindex`. Owner links are
`compare.html?c=<id>&share=1`. The owner view hides navigation only; it is not private, so everything in
`data/concepts.js` should read acceptably to the person it is about.

- `group: 'history'` in `data/concepts.js` keeps an earlier sketch on the archive page and out of the directory.
- `confirm: [...]` lists what the owner should check; it shows as "Please confirm" on the before/after page.
- Photos are stored in `<id>/img/` (copied from each business's own site), never hot-linked.

To add a concept: copy a file in `venues/` or `artists/`, change the content, add `before-desktop.jpg`,
`before-mobile.jpg` and `thumb.jpg` in `<id>/`, then add an entry to `data/concepts.js`.
