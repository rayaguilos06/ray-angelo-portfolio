# AGENTS.md

Overview of this project for developers and AI agents.

## Project Overview

A static personal portfolio site for Ray Angelo Aguilos (Information
Systems graduate — Business Analytics, Data Analytics, Machine Learning,
AI). Built with TanStack Start and deployed on Netlify. No backend or
database is used; the contact form is handled by Netlify Forms.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI + custom components |
| Content | Content Collections (type-safe markdown) |
| Forms | Netlify Forms |
| Language | TypeScript 5 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── content
│   ├── certifications/   # One file per certification (title, issuer, date)
│   ├── education/        # One file per school/program
│   ├── jobs/              # One file per work experience entry
│   └── projects/          # One file per project card
├── public
│   ├── contact.html                    # Static mirror of the contact form (required by Netlify Forms detection)
│   ├── headshot-on-white.jpg           # Profile photo used on Home and Resume
│   └── Ray-Angelo-Aguilos-CV.pdf       # Downloadable CV, linked from Home and Resume
├── src
│   ├── components
│   │   ├── ui/            # Small Radix-based UI primitives (Card, Badge, etc.)
│   │   ├── Nav.tsx         # Top navigation, responsive with a mobile menu
│   │   └── Footer.tsx      # Footer with social links
│   ├── lib
│   │   ├── profile.ts      # Central place for GitHub/LinkedIn/email links and CV path
│   │   └── utils.ts        # cn() class-merging helper
│   ├── routes
│   │   ├── __root.tsx       # Root layout: wraps every page with Nav + Footer
│   │   ├── index.tsx        # Home page
│   │   ├── about.tsx        # About page
│   │   ├── projects.tsx     # Projects page (reads content/projects)
│   │   ├── skills.tsx       # Skills page (static data in the file)
│   │   ├── certifications.tsx # Certifications page (reads content/certifications)
│   │   ├── resume.tsx       # Resume page (reads content/jobs and content/education)
│   │   └── contact.tsx      # Contact page with Netlify Forms contact form
│   ├── router.tsx
│   └── styles.css
├── content-collections.ts  # Zod schemas for jobs, education, projects, certifications
├── netlify.toml
└── vite.config.ts
```

## Key Concepts

### File-based routing

Routes are files under `src/routes/`. `__root.tsx` wraps every page with the
`Nav` and `Footer` components, so individual page files only need their own
content.

### Editing site content

Most content is Markdown with frontmatter, validated by the schemas in
`content-collections.ts`. To add a project, certification, job, or
education entry, add a new `.md` file to the matching `content/*` folder —
no code changes needed.

### Site-wide profile data

`src/lib/profile.ts` holds the GitHub URL, LinkedIn URL, email address, and
the path to the downloadable CV PDF. Update these in one place to change
them everywhere (Home, Footer, Contact, Resume).

### Contact form

The contact form on `/contact` uses Netlify Forms (`data-netlify="true"`).
`public/contact.html` is a hidden static copy of the same form fields,
required so Netlify's build-time form parser can detect the form (the real
form is rendered client-side by React and wouldn't otherwise be visible in
the static HTML).

## Conventions

- Components: PascalCase
- Utilities/hooks: camelCase
- Routes: kebab-case files
- Tailwind CSS utility classes for styling; `cn()` helper for conditional classes
- TypeScript strict mode; `@/` path alias for `src/*`

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
```
