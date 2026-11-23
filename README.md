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

## Chatbot

The bottom-right assistant answers questions from the profile data. It runs in two modes:

- **Basic mode** (default, zero cost): keyword answers computed in the browser from `src/data/content.js`. No key needed.
- **AI mode**: the Netlify Function `netlify/functions/chat.mjs` calls an LLM with the profile as context. Set one of these environment variables on the Netlify site:

| Variable | Provider | Notes |
| --- | --- | --- |
| `GROQ_API_KEY` | Groq (recommended) | Free tier, no card, 14,400 requests/day. Create a key at console.groq.com. |
| `GEMINI_API_KEY` | Google Gemini | Your own key from aistudio.google.com. Free tier is small (tens of requests/day). |
| `USE_NETLIFY_AI_GATEWAY=1` | Netlify AI Gateway | Uses the Gemini key Netlify injects automatically. Billed against Netlify credits, so it is off unless you set this. |

Optional overrides: `GROQ_MODEL`, `GEMINI_MODEL`.

```bash
netlify env:set GROQ_API_KEY gsk_your_key_here
netlify deploy --prod --dir dist
```

The widget automatically drops back to basic mode if the function returns an error or the provider's quota is exhausted.
