# Tseng KweiMing Portfolio

A focused portfolio and CV site for a graphics engineer / creative technologist working across realtime rendering, shaders, distributed visual systems, and immersive installations.

The site is intentionally treated as part of the portfolio: minimal, cinematic, responsive, accessible, and performance-minded.

## Highlights

- Dark, CV-oriented portfolio surface built for quick technical review.
- Featured immersive projects with visual media, project context, and engineering challenges.
- Graphics focus areas covering realtime rendering, distributed visual systems, and spatial computing.
- Technical notes section for renderer-minded engineering principles.
- SEO metadata and optional PWA support wired through the Vite build.
- Print styles for a cleaner CV output.
- Reduced-motion support and keyboard-visible focus states.

## Tech Stack

- React 19
- TypeScript strict mode
- Vite 7
- Tailwind CSS 4
- daisyUI
- React Icons
- GitHub Pages deployment via GitHub Actions

## Getting Started

Use Node.js 20 or newer.

```sh
npm ci
npm run dev
```

The local development server defaults to:

```txt
http://localhost:5173/portfolio/
```

The `/portfolio/` path comes from `portfolio.config.ts`, matching the GitHub Pages repository deployment path.

## Scripts

```sh
npm run dev
```

Start the Vite development server.

```sh
npm run build
```

Type-check and build the production bundle into `dist/`.

```sh
npm run preview
```

Preview the production build locally.

```sh
npm run lint
npm run lint:fix
```

Run ESLint, optionally applying safe fixes.

```sh
npm run prettier
npm run prettier:fix
```

Check or apply Prettier formatting.

## Project Structure

```txt
.
|-- public/                    Static icons, robots.txt, and PWA assets
|-- src/
|   |-- assets/index.css        Tailwind entry, theme setup, portfolio CSS
|   |-- components/
|   |   `-- cv-portfolio.tsx    Main portfolio experience
|   |-- data/
|   |   `-- cv.ts               CV data shaping and project enrichment
|   `-- main.tsx                React entry point
|-- portfolio.config.ts         Profile, SEO, project, and deployment config
|-- vite.config.ts              Vite, HTML metadata, and PWA configuration
`-- .github/workflows/          GitHub Pages build and deployment workflows
```

## Configuration

Most portfolio content starts in `portfolio.config.ts`:

- `bio` controls the profile summary.
- `github.username` controls the GitHub profile link and automatic GitHub project lookup.
- `base` controls the deployed subpath.
- `projects.external.projects` contains selected portfolio work and visuals.
- `seo` controls document metadata and Open Graph fields.
- `skills`, `experiences`, and `educations` power the CV sections.
- `resume.fileUrl` controls the CV PDF link.

`src/data/cv.ts` enriches the configuration into the final CV model used by the UI. Add project-specific technical descriptions, challenges, and stack tags there when the public project metadata needs more engineering context.

## Deployment

The repository includes GitHub Actions workflows for GitHub Pages:

- Pull requests run lint, Prettier, and build checks.
- Pushes to `main` build the site and deploy `dist/` to Pages.

For the current repository path deployment, keep:

```ts
base: '/portfolio/',
```

If deploying at a root domain such as `https://example.com`, change the base to:

```ts
base: '/',
```

## Quality Notes

When adding to the site, keep the portfolio standards high:

- Prefer small, typed React components.
- Keep animation GPU-friendly and respectful of reduced-motion preferences.
- Avoid heavy runtime dependencies unless they clearly improve the graphics experience.
- Optimize image and media payloads before adding them.
- Preserve semantic HTML, readable contrast, keyboard navigation, and responsive layout.
- Treat shader, WebGL, or realtime rendering code as production portfolio material.

## License

MIT
