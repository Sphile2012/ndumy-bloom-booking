# Bloom Skills & Beauty

A booking and course enrolment website for Bloom Skills & Beauty salon, Durban.

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the root:

```
VITE_ADMIN_PASSWORD=your_secure_password
VITE_API_BASE=/api
```

- `VITE_ADMIN_PASSWORD` — password to log in to the `/admin` dashboard (defaults to `admin` if not set — **change this in production**)
- `VITE_API_BASE` — base URL for your backend API (defaults to `/api`)

## Admin Dashboard

Visit `/admin` and enter your admin password to manage bookings and announcements.

## Tech Stack

- React + Vite
- Tailwind CSS + shadcn/ui
- React Router
- Framer Motion
