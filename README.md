# LaundryFlow

A premium on-demand laundry and dry cleaning platform built with Next.js 16 — featuring live order tracking, interactive maps, and a complete booking flow.

**Live demo → [laundryflow-six.vercel.app](https://laundryflow-six.vercel.app)**

---

## Overview

LaundryFlow is a full marketing and booking experience for a premium laundry service in Delhi NCR. It was built to explore modern Next.js patterns — App Router, server components, scroll-driven animation, and third-party map integration — while holding a high visual bar throughout.

## Features

- **Animated marketing site** — 10-section homepage with scroll-linked animations, sticky-scroll storytelling, and an interactive stats band
- **Live order tracking** — an animated delivery truck advances through five order stages while a rider marker moves along a route on a real map
- **Interactive coverage map** — Leaflet + OpenStreetMap integration; hovering an area chip highlights its pin
- **Booking flow** — full form with service selection, slot picking, live price estimation, and schema-based validation
- **Pricing** — billing toggle (per-order vs. monthly), responsive plan carousel on mobile, and a tabbed per-item price table
- **Type-safe forms** — React Hook Form + Zod across contact, auth, and booking
- **Auth pages** — split-screen login and signup (UI complete; backend not connected)
- **Fully responsive** — purpose-built layouts for mobile, tablet, and desktop

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (Base UI) |
| Animation | Framer Motion |
| Forms | React Hook Form + Zod |
| Maps | Leaflet + OpenStreetMap |
| Deployment | Vercel |

## Architecture Notes

- **Route groups** separate concerns: `(marketing)` pages share a navbar/footer layout, while `(auth)` pages render a clean, chrome-free split screen.
- **Server components by default.** Client components are used only where interactivity demands it — animation, form state, map rendering — keeping the JS bundle lean and pages statically prerendered.
- **Content is decoupled from UI.** Services, pricing, reviews, FAQs, and coverage areas live in typed data files under `constants/`, so pages stay presentational and content is trivially editable.
- **Maps are dynamically imported** with `ssr: false`, since Leaflet requires `window`.
- **Scroll performance:** the services rail progress bar bypasses React state and writes directly to the DOM via a ref inside `requestAnimationFrame`, avoiding per-frame re-renders.

## Running Locally

```bash
git clone https://github.com/Nik8378/laundryflow.git
cd laundryflow
npm install
npm run dev
```

Open http://localhost:3000

## Project Structure
app/
(marketing)/     # public pages - home, services, pricing, book, track, about, contact, legal
(auth)/          # login and signup - separate layout, no site chrome
components/
home/            # homepage sections
ui/              # shadcn primitives
track/           # tracking widget, map, animated progress
book/  contact/  pricing/  auth/  services/
constants/         # typed content: services, pricing, reviews, faqs, areas, tracking
config/            # site config - nav links, contact details

## Status

The frontend is complete and deployed. Authentication and order persistence are next — the auth and booking forms are validated and wired, awaiting a Supabase backend.
