# Restaurant website concepts

Static site, no build step. Open `index.html` or serve the folder:

    python3 -m http.server 8765

- `index.html`: directory of concepts, how it works, pricing
- `compare.html?c=<id>`: before/after for one concept
- `data/concepts.js`: studio name, contact email, and one entry per concept
- `<id>/`: each concept page with its `img/`, before screenshots and card thumbnail

To add a concept, create a folder with `index.html`, `img/`, `before-desktop.jpg`, `before-mobile.jpg` and `thumb.jpg`, then add an entry to `data/concepts.js`.
