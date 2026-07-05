# Anwesha Bali — Portfolio

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · next-themes

Light mode = financial-print paper. Dark mode = market-terminal ink.
All content lives in one typed file: `lib/data.ts`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Folder structure

```
├── app/                    # App Router: one folder per route
│   ├── layout.tsx          # Root layout: fonts, theme provider, metadata (SEO)
│   ├── globals.css         # Tailwind layers + light/dark CSS variables
│   ├── page.tsx            # Home: hero, ticker, featured projects, skills, CTA
│   ├── about/page.tsx      # Thesis cards + testimonials
│   ├── projects/page.tsx   # All project cards ("Holdings")
│   ├── experience/page.tsx # Timeline ("The Ledger")
│   ├── resume/page.tsx     # Résumé download
│   ├── contact/page.tsx    # Contact form + direct links
│   ├── api/contact/        # POST endpoint stub for the form
│   ├── sitemap.ts          # Auto-generated /sitemap.xml
│   └── robots.ts           # Auto-generated /robots.txt
├── components/
│   ├── ui/                 # Primitives: Container, SectionHeading, Badge
│   ├── Navbar.tsx          # Sticky nav, active link state, mobile menu
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx     # Light/dark switch (next-themes)
│   ├── Hero.tsx            # Animated sparkline hero
│   ├── Ticker.tsx          # Marquee of real stats
│   ├── ProjectCard.tsx
│   ├── Timeline.tsx        # Experience timeline
│   ├── Skills.tsx
│   ├── Testimonials.tsx    # Placeholder quotes — replace in lib/data.ts
│   ├── ContactForm.tsx     # Client component w/ validation + status states
│   ├── SocialLinks.tsx
│   └── Reveal.tsx          # Scroll-reveal animation wrapper (framer-motion)
├── lib/
│   ├── data.ts             # ALL site content — edit this, not the components
│   ├── types.ts            # Shared TypeScript types
│   └── cn.ts               # className joiner
├── tailwind.config.ts      # Theme tokens mapped to CSS variables
└── ...config files
```

## Editing content

Everything — projects, experience, skills, testimonials, socials, ticker
stats — is data in `lib/data.ts`. Components render whatever is there.

## Contact form

`app/api/contact/route.ts` validates and logs submissions but does not
send email yet. Wire it to Resend/SendGrid, or point the form at
Formspree, before launch.

## Deploy

Push to GitHub and import into Vercel (zero config), or Netlify with the
Next.js runtime.
