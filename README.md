# Restaurant website concepts

Static site, no framework. Serve the folder to preview:

    python3 -m http.server 8765

## Pages
- `index.html` — team directory: quick index, concept cards, owner-link buttons, pricing
- `compare.html?c=<id>` — before / after for one venue (`&v=v1` shows the first draft, `&share=1` is the owner view)
- `<id>/v2/` — the current concept, built from the template
- `<id>/` — the first hand-made draft (kept for reference)

## Template (v2)
- `ds/m3.css`, `ds/m3.js` — the design system: Material 3–style tokens and components
  (buttons, chips, segmented buttons, cards with fixed image ratios, tabs, menu search, location switcher,
  live hours, bottom action bar, bottom sheet, snackbar, stepper, quotes) plus the venue micro-interactions.
- `venues/<id>.mjs` — one content file per venue: theme seeds, fonts, shape scale, copy (English + Korean),
  menu, hours, locations and which interactions to switch on.
- `build/build.mjs` — renders each venue into `<id>/v2/index.html` as a single self-contained file
  (CSS and JS inlined), generates colour roles from the seeds, fails the build if any text/background pair
  is under 4.5:1, and trims Korean and icon fonts to the characters actually used.
- `build/test-hours.mjs` — edge-case tests for the hours engine (after-midnight closes, closed days).

    node build/test-hours.mjs
    node build/build.mjs            # all venues
    node build/build.mjs jokbal     # one venue

To add a venue: copy a file in `venues/`, change the content, add `before-desktop.jpg`, `before-mobile.jpg`
and `thumb.jpg` in `<id>/`, then add an entry to `data/concepts.js` with `v2: true`.
