# Niccolò Di Mauro — Portfolio

Personal portfolio site: a single static page (HTML, CSS, vanilla JS), no build step.

- `index.html` — content (English)
- `assets/main.js` — interactions and the Italian translations (`it` dictionary)
- `assets/styles.css` — styles
- `img/niccolo.jpg` — portrait (800x1000; a monogram is shown if it is missing)

## Run locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy on Vercel

Import the repository in Vercel, framework preset "Other", no build command, output directory `.`.
