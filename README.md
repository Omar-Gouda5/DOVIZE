# Financial Markets Dashboard

A multi-page financial dashboard prototype built with HTML, CSS, JavaScript and Chart.js. Created by Omar Gouda as a web development project.

## Features

- Pages for foreign exchange, gold, cryptocurrency, interest rates and news.
- Interactive charts, a news carousel and responsive navigation.
- A browser-based login interface for demonstration.

## Run locally

Clone this repository, then serve its root directory:

```bash
python -m http.server 8000
```

Open http://localhost:8000/index.html. Internet access is needed for externally hosted dependencies.

## Project structure

- `index.html`: dashboard landing page
- `doviz.html`, `altin.html`, `kripto.html`, `faizler.html`: market pages
- `haberler.html`, `news-*.html`: news views
- `script.js`: dashboard interactions
- `pages.js`: shared page interactions
- `styles.css`: presentation and responsive styles

## Scope and limitations

Market figures and news are demonstration content, not a live market feed. The login state uses browser storage; it is a UI prototype, not secure server-side authentication. Search currently displays a placeholder message. No backend or persistent database is included.

This frontend project is separate from [the Laravel currency application](https://github.com/nanafi23/doviz-takibi).
