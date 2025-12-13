# Techodite Solutions — Starter Website

This is a starter Next.js project (frontend) with Tailwind CSS styling and a cyber-AI theme.
It includes placeholder pages, components, and generated images for use on your site.

## Quick start

1. Extract the ZIP
2. Install dependencies
   ```bash
   npm install
   ```
3. Run development server
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000

## Deployment

This project is configured for deployment on Vercel:

### Prerequisites
- GitHub account
- Vercel account
- Neon PostgreSQL database (already configured)

### Deploy Steps
1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Set environment variables in Vercel:
   ```
   DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DBNAME?sslmode=require
   NEXTAUTH_SECRET=generate-a-strong-random-string-here
   NEXTAUTH_URL=https://your-vercel-domain.vercel.app
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=secure-password-here
   ```
4. Deploy and enjoy!

### Features
- ✅ Contact form with database storage
- ✅ Admin panel for message management
- ✅ Responsive design with Tailwind CSS
- ✅ Production-ready build
- ✅ Security optimized

Notes:
- Tailwind CSS is fully configured
- Database schema auto-generates on build
- Contact form saves to PostgreSQL (no email sending)
