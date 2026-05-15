# ApexStore — Premium Performance Ecommerce

A production-grade Next.js 14 ecommerce application with dark premium aesthetic, full auth, cart, wishlist, checkout, admin dashboard, and Supabase backend.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | TailwindCSS |
| Auth + DB | Supabase |
| State | Zustand |
| Forms | React Hook Form + Zod |
| Animations | Framer Motion |
| Icons | Lucide React |

---

## Project Structure

```
apex-store/
├── app/
│   ├── (auth)/              # Login, Register, Forgot Password
│   ├── (shop)/              # All public storefront pages
│   │   ├── page.tsx         # Homepage
│   │   ├── shop/            # Shop listing + category pages
│   │   ├── product/[slug]/  # Product detail pages
│   │   ├── cart/            # Cart page
│   │   ├── checkout/        # Multi-step checkout
│   │   ├── search/          # Search results
│   │   ├── blog/            # Blog listing + posts
│   │   ├── faq/             # FAQ accordion
│   │   ├── contact/         # Contact form
│   │   ├── about/           # About page
│   │   ├── shipping/        # Delivery information
│   │   ├── privacy-policy/  # Privacy policy
│   │   ├── terms/           # Terms & Conditions
│   │   └── refund-policy/   # Refund policy
│   ├── (account)/           # Protected account pages
│   │   └── account/
│   │       ├── page.tsx     # Dashboard
│   │       ├── orders/      # Order history
│   │       ├── wishlist/    # Saved products
│   │       ├── addresses/   # Saved addresses
│   │       └── settings/    # Profile + security
│   ├── admin/               # Admin dashboard
│   │   ├── page.tsx         # Admin overview
│   │   ├── products/        # Product management
│   │   ├── orders/          # Order management
│   │   ├── customers/       # Customer list
│   │   └── categories/      # Category management
│   ├── layout.tsx           # Root layout with providers
│   ├── not-found.tsx        # 404 page
│   ├── error.tsx            # Error boundary
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots.txt
├── components/
│   ├── ui/                  # Reusable primitives
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   ├── Breadcrumb.tsx
│   │   ├── Skeleton.tsx
│   │   └── Toast.tsx
│   ├── layout/              # Site structure
│   │   ├── AnnouncementBar.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileNav.tsx
│   │   ├── CartDrawer.tsx
│   │   └── SearchModal.tsx
│   ├── shop/                # Ecommerce components
│   │   ├── HeroBanner.tsx
│   │   ├── CategoryGrid.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ShopSidebar.tsx
│   │   ├── PromoBanners.tsx
│   │   ├── TrustStrip.tsx
│   │   ├── NewsletterSection.tsx
│   │   ├── RecentBlogPosts.tsx
│   │   └── RecentlyViewed.tsx
│   └── account/             # Account components
│       └── AccountSidebar.tsx
├── store/                   # Zustand state
│   ├── cartStore.ts
│   ├── wishlistStore.ts
│   └── uiStore.ts
├── hooks/
│   └── index.ts             # Custom React hooks
├── actions/
│   └── index.ts             # Server actions
├── utils/
│   └── supabase/
│       ├── client.ts
│       ├── server.ts
│       └── middleware.ts
├── lib/
│   └── utils.ts             # Helper functions
├── types/
│   └── index.ts             # TypeScript interfaces
├── data/
│   └── mock.ts              # Demo products, categories, blog posts
├── supabase/
│   └── schema.sql           # Full DB schema with RLS policies
└── middleware.ts             # Session refresh + route protection
```

---

## Quick Start

### 1. Clone or unzip the project

```bash
cd apex-store
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the env file (already pre-filled with your Supabase project):

```bash
cp .env.local.example .env.local
```

Your `.env.local` is already configured with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://ehtvsjtkjefbnjnuelcp.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_gXNZRtyCqprWEQAjIGdDwA_YECsOtPu
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=ApexStore
```

### 4. Set up the database

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Navigate to **SQL Editor**
4. Open `supabase/schema.sql`
5. Copy and paste the entire contents
6. Click **Run**

This creates all tables, indexes, RLS policies, triggers, and sample category data.

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Key Features

### Storefront
- **Homepage** — Hero, trust strip, category grid, featured products, promo banners, blog posts, newsletter
- **Shop** — Filterable/sortable product grid with sidebar, pagination
- **Category pages** — Dynamic routes `/shop/[category]`
- **Product detail** — Gallery, quantity selector, add to cart, wishlist, tabs (description, lab results, reviews, FAQ)
- **Search** — Live modal search with results, popular suggestions
- **Blog** — Listing page, full post renderer with markdown-style content parsing
- **FAQ** — Searchable accordion with category filtering
- **Static pages** — About, Contact, Shipping, Privacy, Terms, Refund Policy

### Shopping
- **Cart drawer** — Slide-in cart with quantity controls, free shipping progress bar
- **Cart page** — Full cart view with coupon code input
- **Checkout** — 3-step flow: Delivery → Payment → Review → Confirmation
- **Wishlist** — Add/remove, move to cart, persisted in localStorage

### Auth
- **Login / Register / Forgot Password** — Full Supabase email auth
- **Protected routes** — Middleware redirects unauthenticated users
- **Session persistence** — Cookie-based sessions via `@supabase/ssr`

### Account Dashboard
- **Overview** — Stats, quick links, recent orders
- **Orders** — Order history with status badges and tracking
- **Wishlist** — Manage saved products
- **Addresses** — Add/edit/delete delivery addresses
- **Settings** — Profile info, password change, notification preferences

### Admin Dashboard
- **Overview** — Revenue stats, recent orders, top products
- **Products** — Table with search, filter, sort; inline actions
- **Orders** — Full order list with status management
- **Customers** — Customer list with spend analytics
- **Categories** — Tree view with inline edit/add/delete

---

## Design System

The design uses a **premium dark ecommerce aesthetic**:

- **Background**: `#0a0a0a` (near black)
- **Surface**: `#1c1c1c` (dark card)
- **Accent**: `#e01d1d` (brand red)
- **Text primary**: `#f5f5f5`
- **Text muted**: `#a0a0a0`
- **Typography**: Oswald (display/headings) + Barlow (body)

All colors and tokens are defined in `tailwind.config.ts` and can be customised centrally.

---

## Database Schema

Tables created by `supabase/schema.sql`:

| Table | Description |
|-------|-------------|
| `profiles` | User profiles linked to auth.users |
| `categories` | Product categories with parent/child support |
| `products` | Product listings with all metadata |
| `product_images` | Multiple images per product |
| `addresses` | Saved delivery addresses |
| `orders` | Order records with JSONB address snapshots |
| `order_items` | Line items per order |
| `cart_items` | Server-side cart (synced with DB when logged in) |
| `wishlist_items` | Server-side wishlist |
| `reviews` | Product reviews with approval workflow |
| `blog_posts` | Blog content with publishing workflow |

All tables have Row Level Security (RLS) policies. Customers can only read/write their own data. Admins have full access.

---

## Customisation

### Change brand name
Search and replace `ApexStore` across the project.

### Change accent colour
In `tailwind.config.ts`:
```ts
brand: {
  red: '#e01d1d',        // ← change this
  'red-dark': '#b91515', // ← and this
}
```

### Add products
Edit `data/mock.ts` to add/modify demo products, or connect your real Supabase data by replacing mock imports with Supabase queries in server components.

### Connect real Supabase data
Replace mock data imports in page files:
```ts
// Before (mock)
import { products } from '@/data/mock'

// After (Supabase)
import { createClient } from '@/utils/supabase/server'
const supabase = createClient()
const { data: products } = await supabase.from('products').select('*')
```

---

## Production Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

Set environment variables in Vercel dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_SITE_URL` (your production domain)

### Build locally

```bash
npm run build
npm start
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Dependencies

```json
{
  "@hookform/resolvers": "^3.3.4",
  "@supabase/ssr": "^0.3.0",
  "@supabase/supabase-js": "^2.43.4",
  "clsx": "^2.1.1",
  "framer-motion": "^11.1.9",
  "lucide-react": "^0.383.0",
  "next": "14.2.3",
  "react": "^18",
  "react-dom": "^18",
  "react-hook-form": "^7.51.5",
  "swiper": "^11.1.3",
  "tailwind-merge": "^2.3.0",
  "zod": "^3.23.8",
  "zustand": "^4.5.2"
}
```

---

## License

This project is provided as a foundation for your own ecommerce store. All demo content (product names, descriptions, pricing) is fictional placeholder data for development purposes only.
