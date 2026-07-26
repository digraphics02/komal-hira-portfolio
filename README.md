# Komal Hira — Portfolio

Artist portfolio built with Next.js (App Router) + TypeScript. Content
(bio, CV, exhibitions, painting titles/mediums/dimensions) is sourced
verbatim from the resume and portfolio PDF in the parent folder — see
`src/lib/profile.ts` and `src/lib/paintings.ts`.

## Before going live

1. **Domain**: `src/lib/site-config.ts` defaults to the placeholder
   `https://komalhira.com`. Set the real domain via the
   `NEXT_PUBLIC_SITE_URL` environment variable (in Vercel project
   settings, or a local `.env.production`) before deploying — this
   drives every canonical URL, the sitemap, and Open Graph tags.
2. Indexing is automatically disabled outside of a Vercel production
   deploy (`VERCEL_ENV !== 'production'`) and outside local production
   builds, so previews stay `noindex`.

## Development

```bash
npm run dev     # start the dev server at http://localhost:3000
npm run build   # production build (static export of all routes)
npm run start   # serve the production build
```

## Structure

- `src/app/` — pages: home, `/gallery/`, `/about/`, `/contact/`.
- `src/lib/paintings.ts` — the 23-painting catalog (title, medium,
  dimensions, year, collection, image).
- `src/lib/profile.ts` — bio, artist statement, education, exhibitions,
  certifications, commissions (from the resume PDF).
- `public/images/gallery/` — painting images, extracted from the
  source portfolio PDF and trimmed to their natural canvas shape with
  a transparent background.
