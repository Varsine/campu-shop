CampuShop — Full Teaching Package

Short: Full Next.js App Router + Redux Toolkit mini-course package you can use across 3–5 lessons. Includes starter code, file skeleton, lesson plans, detailed student tasks, teacher solutions, Gamma slide prompt, and NotebookLM walkthrough prompt.

Quick overview

Project name: CampuShop — a student community marketplace (buy/sell used campus gear). Built with Next.js App Router, Tailwind CSS, Redux Toolkit, and simple API routes (mocked for class). Designed to teach routing, server/client components, data fetching, dynamic routes, forms, API routes, Redux, and basic persistence.

Course length: 3–5 lessons (flexible). Suggested split: 5 lessons — Setup & UI, Data + Details, Create Product & API, Redux (favorites + search), Profile + polish.

Learning goals:

Understand Next.js App Router basics (layout, page, dynamic routes)

Build server and client components

Implement server-side fetching and API routes

Create forms and POST to API

Use Redux Toolkit for app state, persist to localStorage

Create reusable components and style with Tailwind

Prepare a portfolio-ready project

Repo skeleton (files & folders)

```bash
campushop/
├─ app/
│  ├─ layout.tsx
│  ├─ globals.css
│  ├─ page.tsx
│  ├─ loading.tsx
│  ├─ error.tsx
│  ├─ products/
│  │   ├─ page.tsx
│  │   ├─ create/
│  │   │   └─ page.tsx
│  │   └─ [id]/
│  │       └─ page.tsx
│  ├─ profile/
│  │   └─ page.tsx
│  └─ api/
│      └─ products/
│          ├─ route.ts
│          └─ [id]/
│              └─ route.ts
├─ src/
│  ├─ components/
│  │   ├─ Navbar.tsx
│  │   ├─ ProductCard.tsx
│  │   ├─ Button.tsx
│  │   ├─ Input.tsx
│  │   └─ ProductForm.tsx
│  ├─ store/
│  │   ├─ index.ts
│  │   └─ favoritesSlice.ts
│  └─ utils/
│      └─ api.ts
├─ package.json
├─ tailwind.config.js
└─ README.md
Quick start (teacher copy)

Create project:

npx create-next-app@latest campushop --experimental-app
cd campushop

Install deps:

npm install @reduxjs/toolkit react-redux tailwindcss postcss autoprefixer axios
npx tailwindcss init -p

Tailwind setup: add to globals.css and tailwind.config.js content paths.

Start dev:

npm run dev
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
