# Ishika Shrivastav — design portfolio

A responsive UI/UX and graphic design portfolio inspired by the supplied `Inspiration_2` screenshots: warm cream, periwinkle, compressed display type, star accents, and editorial project spreads. Built with Vite, plain JavaScript, CSS, and locally hosted fonts.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://127.0.0.1:5173).

```sh
npm run build
npm run preview
npm test
```

The production website is generated in `dist/`. It can be hosted on any static web host. The browser tests use an installed Google Chrome browser. On a machine without Chrome, install Playwright Chromium and remove `channel: 'chrome'` from `playwright.config.js`.

## Included

- Editorial hero, responsive navigation, selected work, background and experience, design process, and contact sections.
- Four supplied project collections: **CareConnect** mobile UI, **No Cheat Progelato** packaging, **Eunoia Designtech** graphics, and the **ProPeri** social carousel. Their galleries show the artwork from `Projects/`. CareConnect includes all ten screens and a link to the supplied interactive prototype.
- Eleven original concept projects: **Roam** (travel app), **Aara** (tea brand), **Folio** (reading web app), **Rang** (arts festival campaign), **Logo Folio** (six logo directions), **Morrow Coffee**, **Stillform**, and **Fieldnote** (visual identities), plus **The Good Hour**, **After Hours**, and **Fresh Cut** (three-post social series).
- Category filters and keyboard-accessible case-study dialogs with shareable `#project/<id>` links.
- Roam prototype: destination filters, expandable itineraries, and a saved list.
- Folio prototype: bookshelf filters, reading progress, automatic completion, and reset.
- Downloadable updated résumé, email and telephone links, LinkedIn, and email copying.
- Local artwork, local fonts, reduced-motion support, and mobile layouts.

## Edit the content

- `src/main.js`: portfolio text, background, contact information, and interactive demos.
- `src/projects.js`: project descriptions, case studies, and editable HTML/SVG presentation artwork.
- `src/style.css`: styles, layout, and responsive breakpoints.
- `public/assets/`: website images, including smaller copies of the supplied project artwork in `public/assets/projects/`.
- `Ishika_Shrivastav_CV.pdf`: current résumé supplied by Ishika.
- `public/Ishika_Shrivastav_CV.pdf`: matching copy served by the portfolio download link.
- `documentation/ASSETS.md`: artwork provenance and generation prompts.

The CV supplied the name, biography, roles, employment dates, education, tools, and contact details. Logo Folio and the visual identity concepts lead the work section, followed by the four projects supplied in `Projects/` and the remaining self-initiated concepts. CareConnect screen previews and prototype came from `CareConnect_Mobile_UI_Package`; Progelato and Eunoia artwork came from their named folders; and the ProPeri slides came from `Properi-Carousel`. The original source files remain in `Projects/`. The concept interfaces, book covers, identities, and social campaigns are original editable code. The Aara presentation mockup was created with image generation. No real user studies, client testimonials, or measured impact have been invented.

Prototype state lasts for the open case study; it resets when reopened. There is no booking, purchase, account, email backend, or analytics service. Contact links use the visitor’s own email/phone application. The site is ready to preview locally and build for deployment; it has not been published.
