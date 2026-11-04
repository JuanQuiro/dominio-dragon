# juanquiro.vercel.app

Personal site of **Juan Quiroz** — technical founder and full-stack engineer.

One page, bilingual (ES/EN), built with Next.js 14 and Tailwind CSS. Typography is Fira Sans; no UI kit, no animation library, no analytics.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Structure

| Path | Purpose |
|---|---|
| `src/content/site.ts` | All copy, Spanish and English |
| `src/components/Portfolio.tsx` | Page layout, language toggle |
| `src/app/layout.tsx` | Metadata, local fonts, JSON-LD |
| `public/cv/` | Downloadable CVs (ES / EN) |

## Deploy

```bash
vercel --prod
```
