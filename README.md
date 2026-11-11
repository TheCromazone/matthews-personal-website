# Matthew Cromaz's portfolio

A single-page portfolio with photography, a personal story, and six interactive canvas demos. Vite serves vanilla HTML, CSS, and JavaScript; GSAP handles entrance and scroll animations.

## Run locally

Use a Node version supported by the installed Vite release: Node 20.19+ within the 20.x line, or Node 22.12 and newer.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. To check the production bundle:

```sh
npm run build
npm run preview
```

The site is static and has no contact-form backend. Email links open the visitor's mail application; they do not send a message automatically.

## Where things live

| Path | Purpose |
| --- | --- |
| `index.html` | Page content, navigation, project cards, and dialog markup |
| `src/style.css` | Shared palette, typography, responsive layouts, and motion preferences |
| `src/main.js` | Navigation, GSAP animations, dialog behavior, and canvas demos |
| `public/images/` | Photographs served at `/images/…` |
| `docs/superpowers/specs/` | Original design intent and content brief |
| `dist/` | Generated production output; do not edit directly |

The GitHub links point to `TheCromazone`. Résumé links currently request a copy by email because this repository does not include a reviewed résumé PDF. Add one to `public/` and update both links if a public download is wanted; avoid copying private application documents into the site.

## Check changes

- Check the hero, navigation, projects, and contact section at 320px, phone, tablet, and desktop widths.
- Open the mobile menu, tab through its links, close it with Escape, and follow a section link.
- Tab to a project’s **Launch Demo** button, press Enter, adjust its labeled controls, and close the dialog with Escape. Focus should return to the launch button.
- Enable the operating system's reduced-motion preference. Content should appear without entrance animations or parallax.
- Check every demo and the browser console, then run `npm run build`.

Some visualizations use pointer gestures directly on a canvas. The dialog and form controls support keyboards, but these demos are illustrative rather than full screen-reader alternatives to the underlying analysis.
