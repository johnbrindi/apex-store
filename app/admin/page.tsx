import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ShoppingBag, Users, Package, TrendingUp,
  ArrowUpRight, ArrowDownRight, LayoutDashboard,
  ExternalLink, Tag, Plus
} from 'lucide-react'
import { products, categories } from '@/data/mock'

export const metadata: Metadata = { title: 'Dashboard' }

// ── Live stats derived from real product data ──────────────────────────────────
const totalProducts   = products.length
const inStockCount    = products.filter(p => p.in_stock).length
const featuredCount   = products.filter(p => p.is_featured).length
const onSaleCount     = products.filter(p => p.is_on_sale).length
const totalCategories = categories.length
const avgPrice        = products.reduce((s, p) => s + p.price, 0) / products.length
const topRated        = [...products].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0)).slice(0, 5)
const mostReviewed    = [...products].sort((a, b) => (b.review_count ?? 0) - (a.review_count ?? 0)).slice(0, 8)

// ── Reusable stat card ─────────────────────────────────────────────────────────
function StatCard({
  icon: Icon, label, value, sub, up, accent = '#1E73BE'
}: {
  icon: any; label: string; value: string | number; sub?: string; up?: boolean; accent?: string
}) {
  return (
    <div
      className="rounded-sm p-5 flex flex-col gap-3 border"
      style={{ background: '#162130', borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="flex items-start justify-between">
        <div
          className="w-10 h-10 flex items-center justify-center rounded-sm"
          style={{ background: `${accent}20`, border: `1px solid ${accent}40` }}
        >
          <Icon size={18} style={{ color: accent }} />
        </div>
        {up !== undefined && (
          <span
            className="flex items-center gap-0.5 text-[11px] font-bold"
            style={{ color: up ? '#4ade80' : '#f87171' }}
          >
            {up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
            {up ? 'Live' : 'Check'}
          </span>
        )}
      </div>
      <div>
        <p className="font-display font-bold text-2xl text-white">{value}</p>
        <p className="text-xs text-white/50 uppercase tracking-wider mt-0.5">{label}</p>
        {sub && <p className="text-[11px] text-white/30 mt-1">{sub}</p>}
      </div>
    </div>
  )
}

// ── Section header ─────────────────────────────────────────────────────────────
function SectionHeader({ title, href, linkLabel = 'View All' }: { title: string; href: string; linkLabel?: string }) {
  return (
    <div
      className="flex items-center justify-between px-5 py-3.5 border-b"
      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <h2 className="font-display font-bold text-sm uppercase tracking-widest text-white/90">
        {title}
      </h2>
      <Link
        href={href}
        className="text-[11px] font-semibold transition-colors flex items-center gap-1"
        style={{ color: '#1E73BE' }}
      >
        {linkLabel} <ExternalLink size={10} />
      </Link>
    </div>
  )
}

export default function AdminDashboard() {
  return (
    <div className="space-y-6 max-w-[1400px]">

      {/* Page header */}
      <div className="flex items-center gap-3 mb-2">
        <LayoutDashboard size={20} style={{ color: '#1E73BE' }} />
        <div>
          <h1 className="font-display font-bold text-xl uppercase tracking-wide text-white">
            Dashboard
          </h1>
          <p className="text-white/40 text-xs mt-0.5">
            Live overview — {totalProducts} products across {totalCategories} categories
          </p>
        </div>
      </div>

      {/* ── Stats Grid ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Package}
          label="Total Products"
          value={totalProducts}
          sub={`${inStockCount} in stock`}
          up={true}
          accent="#1E73BE"
        />
        <StatCard
          icon={Tag}
          label="On Sale"
          value={onSaleCount}
          sub={`${featuredCount} featured`}
          up={true}
          accent="#f59e0b"
        />
        <StatCard
          icon={TrendingUp}
          label="Avg. Price"
          value={`£${avgPrice.toFixed(2)}`}
          sub="across all products"
          up={true}
          accent="#10b981"
        />
        <StatCard
          icon={ShoppingBag}
          label="Categories"
          value={totalCategories}
          sub="product groups"
          accent="#8b5cf6"
        />
      </div>

      {/* ── Main content row ────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Most reviewed products (col-span-2) */}
        <div
          className="lg:col-span-2 rounded-sm border overflow-hidden"
          style={{ background: '#162130', borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <SectionHeader title="Most Reviewed Products" href="/admin/products" />
          <div className="divide-y divide-white/5">
            {mostReviewed.map((product, i) => (
              <div
                key={product.id}
                className="flex items-center gap-4 px-5 py-3 hover:bg-white/5 transition-colors"
              >
                {/* Rank */}
                <span
                  className="w-5 text-center font-display font-bold text-xs shrink-0"
                  style={{ color: i < 3 ? '#1E73BE' : 'rgba(255,255,255,0.25)' }}
                >
                  {i + 1}
                </span>
                {/* Product image */}
                <div className="w-10 h-10 shrink-0 overflow-hidden rounded-sm bg-white/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.primary_image ?? ''}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white/90 truncate">{product.name}</p>
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className="text-[11px] text-white/40">
                      {product.review_count} reviews
                    </span>
                    <span className="text-[11px] text-white/40">
                      ★ {product.rating?.toFixed(1)}
                    </span>
                  </div>
                </div>
                {/* Price */}
                <span className="font-display font-bold text-sm text-white/80 shrink-0 tabular-nums">
                  £{product.price.toFixed(2)}
                </span>
                {/* Status */}
                <span
                  className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm shrink-0"
                  style={
                    product.in_stock
                      ? { background: '#10b98120', color: '#4ade80' }
                      : { background: '#f8717120', color: '#f87171' }
                  }
                >
                  {product.in_stock ? 'In Stock' : 'Out'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top rated sidebar */}
        <div
          className="rounded-sm border overflow-hidden"
          style={{ background: '#162130', borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <SectionHeader title="Top Rated" href="/admin/products" />
          <div className="divide-y divide-white/5">
            {topRated.map((product, i) => (
              <div key={product.id} className="px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <span
                    className="font-display font-bold text-xs w-4 shrink-0"
                    style={{ color: '#1E73BE' }}
                  >
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-white/80 leading-snug truncate">
                      {product.name}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[11px] text-white/40">
                        ★ {product.rating?.toFixed(1)} ({product.review_count})
                      </span>
                      <span className="text-[11px] font-bold text-white/60 tabular-nums">
                        £{product.price.toFixed(2)}
                      </span>
                    </div>
                    {/* Rating bar */}
                    <div
                      className="h-1 mt-1.5 rounded-full overflow-hidden"
                      style={{ background: 'rgba(255,255,255,0.08)' }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${((product.rating ?? 0) / 5) * 100}%`,
                          background: '#1E73BE',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Category breakdown ─────────────────────────────────────── */}
      <div
        className="rounded-sm border overflow-hidden"
        style={{ background: '#162130', borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <SectionHeader title="Category Breakdown" href="/admin/categories" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 divide-x divide-y" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          {categories.map((cat) => {
            const count = products.filter(p => p.category_id === cat.id || p.category_id?.startsWith(cat.id + '-')).length
            const pct   = Math.round((count / totalProducts) * 100)
            return (
              <div key={cat.id} className="p-4 hover:bg-white/5 transition-colors">
                <p className="text-sm font-semibold text-white/80 truncate">{cat.name}</p>
                <p className="text-2xl font-display font-bold text-white mt-1">{count}</p>
                <div
                  className="h-1 mt-2 rounded-full overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${pct}%`, background: '#1E73BE' }}
                  />
                </div>
                <p className="text-[11px] text-white/30 mt-1">{pct}% of catalog</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Quick Actions ───────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Add Product',       href: '/admin/products/new', icon: Plus,        color: '#1E73BE' },
          { label: 'View Orders',        href: '/admin/orders',       icon: ShoppingBag, color: '#10b981' },
          { label: 'Manage Customers',  href: '/admin/customers',    icon: Users,       color: '#f59e0b' },
          { label: 'View Storefront',   href: '/',                   icon: ExternalLink,color: '#8b5cf6' },
        ].map(({ label, href, icon: Icon, color }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 p-4 rounded-sm border font-semibold text-sm transition-all hover:scale-[1.01]"
            style={{
              background: `${color}10`,
              borderColor: `${color}30`,
              color: '#fff',
            }}
          >
            <Icon size={16} style={{ color }} className="shrink-0" />
            {label}
          </Link>
        ))}
      </div>

    </div>
  )
}
