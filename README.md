# Ray Angelo Aguilos — Portfolio

A personal portfolio website for Ray Angelo Aguilos, an Information Systems
graduate specializing in Business Analytics, Data Analytics, Machine
Learning, and AI.

## What's included

- **Home** — introduction, focus areas, and calls to action
- **About** — background and career goals
- **Projects** — analytics, machine learning, and database projects
- **Skills** — grouped list of tools and techniques
- **Certifications** — courses and certificates completed
- **Resume** — work experience, education, and a downloadable CV (PDF)
- **Contact** — a working contact form (Netlify Forms) plus GitHub, LinkedIn, and email links

The site is fully static (no backend/database) and responsive on both
desktop and mobile.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router)
- [Content Collections](https://www.content-collections.dev/) for editing
  projects, jobs, education, and certifications as Markdown files
- Tailwind CSS 4 for styling
- Netlify Forms for the contact form
- Deployed on Netlify

## Running locally

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000` by default (or via
`netlify dev` for the full Netlify emulation).

## Editing content

All personal content lives in Markdown files, so you don't need to touch
the page code to update it:

- `content/projects/*.md` — project cards
- `content/jobs/*.md` — work experience shown on the Resume page
- `content/education/*.md` — education shown on the Resume page
- `content/certifications/*.md` — certifications page

Site-wide links (GitHub, LinkedIn, email) live in `src/lib/profile.ts`.

To update the downloadable CV, replace
`public/Ray-Angelo-Aguilos-CV.pdf` with your own PDF (keep the same file
name, or update the path in `src/lib/profile.ts`).

## Build

```bash
npm run build
```

Netlify builds and deploys the site automatically from `netlify.toml`.
