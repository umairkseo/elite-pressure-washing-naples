# Elite Pressure Washing Naples

A static-first Astro website foundation for a residential and commercial exterior-cleaning business in Naples, Florida. The pages use reusable Astro components, inline SVG artwork, and native HTML interactions; there is no client-side framework or custom JavaScript.

## Run locally

```sh
npm install
npm run dev
```

Build and preview the static output with:

```sh
npm run build
npm run preview
```

## Update the business details

- Replace the phone, experience, license and insurance, review, and service-area placeholders in [`src/data/site.ts`](src/data/site.ts) before publishing. Set `phoneHref` to a complete `tel:+...` link to activate call links.
- Update the seven service summaries and page starter copy in [`src/data/services.ts`](src/data/services.ts). The `slug` field determines each `/services/<slug>/` route.
- Compose the homepage sections in [`src/pages/index.astro`](src/pages/index.astro). Focused components live in `src/components/` and accept props for their copy and lists.
- Adjust the coastal color palette, type stacks, spacing, and shared buttons in [`src/styles/global.css`](src/styles/global.css).
- Replace [`public/favicon.svg`](public/favicon.svg) with the final business mark when available.

The project generates one service-detail page per item in `src/data/services.ts` using `src/pages/services/[slug].astro` and the reusable `ServicePage.astro` component. Each detail page has prompts for confirmed surfaces, cleaning approach, preparation, and scheduling. Remove or replace these prompts before publishing.

The document layout includes title, description, and Open Graph metadata, a skip link, and semantic landmarks. The mobile menu and FAQs use native `<details>` elements.

## Structure

```text
src/
├── components/   # Shared header, sections, footer, and service-page template
├── data/         # Business details and service-page content
├── layouts/      # Document shell and SEO metadata
├── pages/        # Homepage and generated service routes
└── styles/       # Global design tokens and base styles
public/           # Favicon and static assets
```
