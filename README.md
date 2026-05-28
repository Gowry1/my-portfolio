# Your Name — Portfolio

A modern, minimalist portfolio built to showcase frontend craft: clean UI, subtle motion, accessibility, and performance. Inspired by premium product sites (Linear, Stripe, Apple).

**Live demo:** [your-portfolio.vercel.app](https://your-portfolio.vercel.app)  
**Contact:** [you@example.com](mailto:you@example.com) · [LinkedIn](https://www.linkedin.com/in/yourname/) · [GitHub](https://github.com/yourname)

---

## At a glance

| | |
|---|---|
| **Role focus** | Frontend / Full Stack Developer |
| **Stack** | Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion |
| **UI** | shadcn-style components (Radix + CVA) · Dark/light theme |
| **Highlights** | Responsive · SEO metadata · Scroll reveals · Accessible forms & nav |

---

## What’s inside

- **Hero** — Full-screen layout, gradient mesh background, primary CTAs
- **About** — Bio + strength cards
- **Skills** — Frontend / Backend / Tools (pill tags)
- **Projects** — 5 project cards with tech stack, GitHub & live links, hover polish
- **Experience** — Timeline-style journey section
- **Contact** — Validated form + social links
- **Footer** — Minimal branding + icons

---

## Tech stack

**Core:** Next.js · React 19 · TypeScript · Tailwind CSS v4  
**Motion & UX:** Framer Motion · next-themes (dark default)  
**UI:** Radix Slot · class-variance-authority · lucide-react  

---

## Run locally

```bash
git clone https://github.com/yourname/personal-portfolio.git
cd personal-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Production build:**

```bash
npm run build
npm start
```

---

## Project structure

```
src/
├── app/              # Layout, metadata, global styles
├── components/
│   ├── sections/     # Hero, About, Skills, Projects, Journey, Contact
│   ├── ui/           # Button, Card, Input, Textarea
│   └── motion/       # Scroll reveal wrapper
├── data/             # Projects content
└── lib/              # Utilities (cn)
public/images/        # Placeholder assets
```

---

## Customize (2 min)

1. Replace **Your Name**, links, and bio in `src/components/sections/`.
2. Edit projects in `src/data/projects.ts`.
3. Update SEO URL in `src/app/layout.tsx`, `sitemap.ts`, `robots.ts`.
4. Swap placeholders in `public/images/` with real screenshots.

---

## Deploy

Optimized for [Vercel](https://vercel.com): connect the repo and deploy. No env vars required for the static portfolio UI.

---

## License

MIT — free to fork and adapt. Attribution appreciated.

---

*Built with attention to typography, whitespace, and detail — the kind of UI I bring to product teams.*
