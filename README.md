# Website concepts: restaurants, cafés, artists and musicians

Static site, no framework. Serve the folder to preview:

    python3 -m http.server 8765

## Pages
- `index.html` — team directory: filter by category, quick index, cards, owner-link buttons, pricing
- `compare.html?c=<id>` — before / after for one concept (`&share=1` is the owner view: no other concepts, sources or pricing)
- `<id>/` — the current page for each concept, built from the template
- `archive/` — older versions of the restaurant pages (`archive/<id>/v1`, `archive/<id>/v2`)

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

To add a concept: copy a file in `venues/` or `artists/`, change the content, add `before-desktop.jpg`,
`before-mobile.jpg` and `thumb.jpg` in `<id>/`, then add an entry to `data/concepts.js`.
