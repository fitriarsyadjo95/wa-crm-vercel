# WA CRM Vercel - Clean Onboarding Form

A simplified Next.js onboarding form application, optimized for Vercel deployment without database complexity.

## 🚀 Live Demo

**Deployed on Vercel:** https://wa-crm-vercel-1qt3ma57r-fitriarsyadj-5444s-projects.vercel.app

## ✨ Features

- **Clean Next.js 14 App** with TypeScript
- **Responsive Form** with validation using React Hook Form + Zod
- **Tailwind CSS** styling
- **API Routes** for form submission
- **Vercel-Ready** deployment
- **No Database Dependencies** (submissions logged to console)

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Forms:** React Hook Form + Zod validation
- **Deployment:** Vercel

## 🏃‍♂️ Getting Started

### Local Development

```bash
# Clone repository
git clone https://github.com/fitriarsyadjo95/wa-crm-vercel.git
cd wa-crm-vercel

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 📁 Project Structure

```
/
├── app/
│   ├── api/onboarding/route.ts    # API endpoint
│   ├── onboarding/page.tsx        # Form page
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Homepage
├── components/
│   └── FormField.tsx              # Form components
├── lib/
│   └── validators.ts              # Zod schemas
└── styles/
    └── globals.css                # Global styles
```

## 🎯 Form Fields

Current simplified form includes:
- Company Name
- Contact Person
- Email
- Project Name
- Primary Goals
- Additional Notes

## 🔄 Adding Database (Optional)

To add database functionality later:

1. Add Prisma dependencies
2. Set up PostgreSQL database
3. Update API routes to save data
4. Add environment variables

## 📝 License

MIT