<div align="center">

# Smriti Ranjan — 3D Portfolio

**Personal portfolio** built with Next.js, React, TypeScript, Three.js, Motion and Tailwind CSS.

</div>

## About

This portfolio presents the education, technical skills and projects listed in Smriti Ranjan's resume. The original repository's 3D hero, animated globe, visual styling, responsive layouts and project interactions are retained.

## Resume content

- **Name:** Smriti Ranjan
- **Location:** Patna, Bihar
- **Email:** smriti.ranjan164@gmail.com
- **Phone:** 9507983257
- **GitHub:** https://github.com/hii-dims

Education, skills and project descriptions are maintained in `constants/`.

## Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Requires Node.js 20.9 or later.

## Personal content

- `constants/hero-constants.ts` — name, role, location and introduction
- `constants/experience-constants.ts` — education
- `constants/projects-constants.ts` — resume projects
- `constants/skills-constants.ts` — technical skills
- `constants/social-constants.ts` — email and GitHub

The resume does not list employment history, testimonials, service offerings, project URLs or LinkedIn details, so those have not been invented or displayed.

## Environment variables

- `NEXT_PUBLIC_SITE_URL` — set this to the portfolio's deployed domain.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — optional Search Console verification token.
- `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` — optional contact-form/admin backend configuration.

## Design and implementation

The original component styling, Tailwind classes, fonts, spacing, 3D assets, animations and responsive behavior are retained. Content-specific constants and the displayed sections were adapted to the resume.
