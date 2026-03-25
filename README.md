# Extinval Group — Next.js Website

## Stack
- **Next.js 14** (App Router) on **Vercel** (free tier)
- **Supabase** (PostgreSQL) — CMS content storage
- **JWT** via `jose` — authentication, stored in `httpOnly` cookies
- **Formspree** — contact form (proxied server-side)

## Security Architecture
```
Browser              Next.js API Routes         Supabase / Env
──────────           ──────────────────         ──────────────
POST /api/auth  →    verifies password          (CMS_PASSWORD, JWT_SECRET in env only)
                     issues JWT in httpOnly
                     cookie (never visible)
GET  /api/auth  →    checks cookie validity
DELETE /api/auth →   clears cookie (logout)

GET  /api/cms   →    reads Supabase DB          (SUPABASE_SERVICE_KEY in env only)
POST /api/cms   →    verifies JWT cookie
                     writes to Supabase DB

POST /api/contact → proxies to Formspree        (FORMSPREE_ID in env only)
```
No sensitive keys ever reach the browser.

## 1. Local Setup

```bash
npm install
cp .env.example .env.local
# Fill in .env.local with your values (see below)
npm run dev
```
Open http://localhost:3000

## 2. Environment Variables

Set these in **Vercel → Project → Settings → Environment Variables**:

| Variable | Where to get it |
|---|---|
| `SUPABASE_URL` | supabase.com → Project → Settings → API |
| `SUPABASE_SERVICE_KEY` | supabase.com → Project → Settings → API → service_role key |
| `CMS_PASSWORD` | Choose a strong password for your marketing team |
| `JWT_SECRET` | Run: `openssl rand -base64 32` |
| `NEXT_PUBLIC_FORMSPREE_ID` | formspree.io → your form ID |

## 3. Supabase Database Setup

In Supabase SQL Editor, run once:

```sql
CREATE TABLE IF NOT EXISTS cms_content (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  page_key    text NOT NULL,
  content_key text NOT NULL,
  content_html text NOT NULL DEFAULT '',
  updated_at  timestamptz DEFAULT now(),
  UNIQUE(page_key, content_key)
);
CREATE INDEX IF NOT EXISTS idx_cms_page ON cms_content(page_key);
ALTER TABLE cms_content ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_read" ON cms_content FOR SELECT USING (true);
```

## 4. Deploy to Vercel

```bash
# Push to GitHub first
git init && git add . && git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USER/extinval-web.git
git push -u origin main
```

Then in Vercel:
1. New Project → Import your GitHub repo
2. Framework: Next.js (auto-detected)
3. Add all env vars from section 2
4. Deploy

Add custom domain `extinval.com` in Vercel → Settings → Domains.

## 5. Using the CMS Editor

1. Go to any page on the live site
2. Click the **✏ pencil button** (bottom-right corner)
3. Enter the CMS password
4. Click any text on the page to edit it in-place
5. Click **💾 Guardar** to save — changes persist to Supabase
6. Changes are visible to all visitors immediately

## 6. Page & Field Inventory

| Page | Route | page_key |
|---|---|---|
| Inicio | `/` | `home` |
| Oil & Gas | `/servicios/oil-gas` | `oil-gas` |
| Buques Mercantes | `/servicios/buques-mercantes` | `buques-mercantes` |
| Náutica de Recreo | `/servicios/nautica-recreo` | `nautica-recreo` |
| Industrial & Comercial | `/servicios/industrial-comercial` | `industrial-comercial` |
| Nosotros | `/nosotros` | `nosotros` |
| Autoridad | `/autoridad` | `autoridad` |
| Red Global | `/red-global` | `red-global` |
| Contacto | `/contacto` | `contacto` |
| Área Clientes | `/area-clientes` | `area-clientes` |

Every `data-cms-field` attribute in the HTML corresponds to an `id` prop on an `<EditableField>` component — all are editable via the CMS.
