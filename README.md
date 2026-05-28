# The Mix Website

Baseline Next.js + React + TypeScript framework for **The Mix**, a music networking/business organization at Harvard University.

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- ESLint

## Quick start

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Supabase mailing list

The mailing list form posts to `src/app/api/mailing-list/route.ts`, which writes to Supabase from the server.

1. Create a Supabase project.
2. Run `supabase/migrations/001_create_mailing_list_submissions.sql` in the Supabase SQL editor.
3. Copy `.env.example` to `.env.local`.
4. Set `SUPABASE_URL` to your project URL.
5. Set `SUPABASE_SERVICE_ROLE_KEY` to your project service role key. Do not expose this key in client-side code or prefix it with `NEXT_PUBLIC_`.
6. Restart `npm run dev`.

## Project structure

```text
src/
  app/
    about/
    contact/
    programs/
    globals.css
    layout.tsx
    page.tsx
  components/
    Footer.tsx
    NavBar.tsx
    SectionCard.tsx
  lib/
    site.ts
```

## Next steps

- Replace placeholder content in `src/lib/site.ts`
- Add real event and membership data
- Connect contact form/email workflow
- Add CMS or database if you need non-developer updates
