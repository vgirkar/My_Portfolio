# Vinit Girkar | Portfolio

Personal portfolio of Vinit Girkar, AI engineer and full-stack developer.

## Stack

- React 19 + Vite 8
- Motion (Framer Motion successor) for scroll reveals, hero word animation, timeline progress, nav indicator and theme toggle
- Handwritten CSS design system (dark and light themes, bento grid, marquee, spotlight cards)
- lucide-react and react-icons for icons
- EmailJS for the contact form

## Develop

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
npm run preview   # serves the production build
```

## Content

All copy, links, experience, projects and education live in `src/data/profile.js`. Edit that file to update the site; no component changes needed.

## Deploy

Hosted on Netlify. `netlify.toml` sets the build command (`npm run build`) and publish directory (`dist`), so connecting the GitHub repository in Netlify is enough for continuous deploys. A manual deploy from a local build works too:

```bash
npm run build
netlify deploy --prod --dir dist
```
