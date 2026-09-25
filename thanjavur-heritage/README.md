# Thanjavur — Living Heritage

A small multi-page website about Thanjavur (Tamil Nadu) — history, attractions, and living art forms like Thanjavur painting, Bharatanatyam, and the Thanjavur veena.

## Structure

```
thanjavur-heritage/
├── index.html          Home
├── about.html           History / timeline
├── attractions.html     Places to visit
├── culture.html         Art forms and crafts
├── contact.html         Contact form (client-side validation only)
├── css/
│   └── style.css        All styling
└── js/
    └── script.js        Nav toggle, active-link highlighting, scroll reveal, form validation
```

Every page is a separate HTML file; all of them link to the same `css/style.css` and `js/script.js`, so the whole site shares one design system and one script.

## Tech

- Plain HTML5, CSS3, vanilla JavaScript — no frameworks, no build step.
- Google Fonts (Cormorant Garamond + Karla) loaded via `<link>`.
- Responsive layout (mobile nav, fluid grid) and a small set of interactions: mobile menu, active-page highlighting, one hero reveal animation, scroll-reveal on section headings, and a validated contact form.

## Run it

No build step needed — just open `index.html` in a browser, or serve the folder with any static server:

```bash
npx serve .
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Thanjavur living heritage — multi-page site"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
