# LearnOS — Student Dashboard

> Next.js 15 · Supabase · Tailwind CSS · Framer Motion · TypeScript

---

## Quick Start

```bash
# 1. Install
npm install

# 2. Add env (see Supabase Setup below)
cp .env.example .env.local
# Edit .env.local with your values

# 3. Run
npm run dev
# → http://localhost:3000
```

---

## Supabase Setup (New Publishable Keys)

Supabase now uses **publishable keys** (starting with `sb_publishable_`) instead of the old `anon` JWT keys. These keys **require Row Level Security (RLS) to be configured**.

### Step 1 — Create table + seed data

In your Supabase project → **SQL Editor** → run:

```sql
-- Create table
CREATE TABLE courses (
  id         UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  title      TEXT        NOT NULL,
  progress   INTEGER     NOT NULL DEFAULT 0,
  icon_name  TEXT        NOT NULL DEFAULT 'BookOpen',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (REQUIRED for publishable keys)
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon) to read courses
CREATE POLICY "Public read"
  ON courses
  FOR SELECT
  TO anon
  USING (true);

-- Seed data
INSERT INTO courses (title, progress, icon_name) VALUES
  ('Advanced React Patterns',           75, 'Code2'),
  ('TypeScript Mastery',                48, 'Layers'),
  ('Database Design with PostgreSQL',   32, 'Database'),
  ('System Design Fundamentals',        60, 'Cpu');
```

### Step 2 — Get your keys

Go to **Settings → API Keys**:

| Key | Where to find | Use as |
|---|---|---|
| Project URL | Settings → General → Project URL | `NEXT_PUBLIC_SUPABASE_URL` |
| Publishable key | Settings → API Keys → Publishable key | `NEXT_PUBLIC_SUPABASE_ANON_KEY` |

### Step 3 — Configure .env.local

```env
NEXT_PUBLIC_SUPABASE_URL=https://ndaufyndbmpwmtqqynjb.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_yxMvhyIglhJC-eRh1DeQzA_t1Xbv1hV
```

Then restart: `npm run dev`

---

## Deploy to Vercel

```bash
# Push to GitHub, then:
npx vercel

# In Vercel dashboard → Settings → Environment Variables, add:
# NEXT_PUBLIC_SUPABASE_URL
# NEXT_PUBLIC_SUPABASE_ANON_KEY
```

---

## Architecture

### Server / Client Split

| Component | Type | Why |
|---|---|---|
| `CoursesSection` | Server | Fetches Supabase on the server — no client waterfall |
| `CourseCard` | Client | Framer Motion `whileHover`, `useInView` |
| `ActivityTile` | Client | Framer Motion stagger animations |
| `HeroTile` | Client | Motion entrance animations |
| `Sidebar` | Client | `layoutId` active state, collapse toggle |
| `MobileNav` | Client | `layoutId` tab indicator |

### Graceful Degradation
If Supabase isn't configured or fails, the app shows **mock data** automatically — the dashboard always renders. A colored banner explains the status.

### Animation Rules
All animations use only `transform` and `opacity` — never `width`, `height`, or layout properties — so there are zero layout shifts. Spring physics (`stiffness: 300, damping: 20`) on all hover states.

---

## Available Icon Names (for Supabase `icon_name` column)

`Code2` `Brain` `Database` `Globe` `Cpu` `Layers` `Terminal` `Palette` `BookOpen` `Atom` `Server` `Shield`
# Learning-dashbord
