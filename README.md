# VINTAGE × NLE Immersive Experience MVP

## Routes
- `/` landing page
- `/full-experience` virtual-tour framework
- `/scope` client-facing phases and investment
- `/progress` client progress view
- `/dashboard` internal production dashboard

## Run
```bash
npm install
npm run dev
```

## Deploy to Vercel
Import the folder/repository in Vercel. No environment variables or database are required for this first MVP.

## Next production connection
Replace static arrays with Supabase tables for projects, phases, deliverables, approvals, assets, activity, risks, invoices and client access. Protect `/dashboard` with authenticated role-based access.
