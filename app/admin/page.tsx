import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ShoppingBag, Users, Package, TrendingUp,
  ArrowUpRight, LayoutDashboard, ExternalLink, Tag, Plus, AlertCircle
} from 'lucide-react'
import { products, categories } from '@/data/mock'

export const metadata: Metadata = { title: 'Dashboard' }

// ── Real-time data from Supabase ───────────────────────────────────────────────
async function getAdminStats() {
  try {
    const { createAdminClient } = await import('@/utils/supabase/admin')
    const supabase = createAdminClient()

    const [ordersRes, profilesRes] = await Promise.all([
      supabase
        .from('orders')
        .select('id, total_amount, status, customer_name, customer_email, payment_method, created_at')
        .order('created_at', { ascending: false }),
      supabase
        .from('profiles')
        .select('id', { count: 'exact' }),
    ])

    const orders   = ordersRes.data  ?? []
    const customers = profilesRes.count ?? 0

    const totalRevenue  = orders
      .filter((o: any) => o.status !== 'cancelled')
      .reduce((s: number, o: any) => s + Number(o.total_amount ?? 0), 0)

    const pendingCount  = orders.filter((o: any) => o.status === 'pending').length
    const recentOrders  = orders.slice(0, 8)

    return { orders, recentOrders, totalRevenue, customers, pendingCount, error: null }
  } catch (err: any) {
    return { orders: [], recentOrders: [], totalRevenue: 0, customers: 0, pendingCount: 0, error: err.message }
  }
}

// ── Derived product stats ──────────────────────────────────────────────────────
const totalProducts  = products.length
const inStockCount   = products.filter(p => p.in_stock).length
const totalCategories = categories.length
const topRated       = [...products].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0)).slice(0, 5)

// ── Sub-components ─────────────────────────────────────────────────────────────
function StatCard({ icon: Icon, label, value, sub, accent = '#1E73BE' }: {
  icon: any; label: string; value: string | number; sub?: string; accent?: string
}) {
  return (
    <div className="rounded-sm p-5 flex flex-col gap-3 border"
         style={{ background: '#162130', borderColor: 'rgba(255,255,255,0.08)' }}>
      <div className="w-10 h-10 flex items-center justify-center rounded-sm"
           style={{ background: `${accent}20`, border: `1px solid ${accent}40` }}>
        <Icon size={18} style={{ color: accent }} />
      </div>
      <div>
        <p className="font-display font-bold text-2xl text-white">{value}</p>
        <p className="text-xs text-white/50 uppercase tracking-wider mt-0.5">{label}</p>
        {sub && <p className="text-[11px] text-white/30 mt-1">{sub}</p>}
      </div>
    </div>
  )
}

function SectionHeader({ title, href }: { title: string; href: string }) {
  return (
    <div className="flex items-center justify-between px-5 py-3.5 border-b"
         style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
      <h2 className="font-display font-bold text-sm uppercase tracking-widest text-white/90">{title}</h2>
      <Link href={href} className="text-[11px] font-semibold flex items-center gap-1 text-[#1E73BE] hover:text-blue-400 transition-colors">
        View All <ExternalLink size={10} />
      </Link>
    </div>
  )
}

const statusStyles: Record<string, string> = {
  pending:    'bg-yellow-500/20 text-yellow-400',
  processing: 'bg-blue-500/20 text-blue-400',
  shipped:    'bg-indigo-400/20 text-indigo-400',
  delivered:  'bg-green-500/20 text-green-400',
  cancelled:  'bg-red-500/20 text-red-400',
}

export default async function AdminDashboard() {
  const { recentOrders, totalRevenue, customers, pendingCount, error } = await getAdminStats()

  return (
    <div className="space-y-6 max-w-[1400px]">

      {/* Page header */}
      <div className="flex items-center gap-3">
        <LayoutDashboard size={20} style={{ color: '#1E73BE' }} />
        <div>
          <h1 className="font-display font-bold text-xl uppercase tracking-wide text-white">Dashboard</h1>
          <p className="text-white/40 text-xs mt-0.5">
            Live overview — {totalProducts} products · {totalCategories} categories
          </p>
        </div>
      </div>

      {/* Service key warning */}
      {error && (
        <div className="flex items-start gap-3 p-4 rounded-sm border text-sm"
             style={{ background: '#f59e0b10', borderColor: '#f59e0b40' }}>
          <AlertCircle size={16} className="text-yellow-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-yellow-400">Database not connected</p>
            <p className="text-white/50 text-xs mt-1">
              Add your <code className="text-yellow-300">SUPABASE_SERVICE_ROLE_KEY</code> to{' '}
              <code className="text-yellow-300">.env.local</code> (Supabase Dashboard → Settings → API → service_role secret).
              Orders placed by customers will still save once this key is added.
            </p>
          </div>
        </div>
      )}

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={TrendingUp} label="Total Revenue"   value={`£${totalRevenue.toFixed(2)}`}  sub="from real orders"  accent="#10b981" />
        <StatCard icon={ShoppingBag} label="Pending Orders" value={pendingCount}                    sub="awaiting action"   accent="#f59e0b" />
        <StatCard icon={Users}       label="Customers"      value={customers}                        sub="registered users"  accent="#1E73BE" />
        <StatCard icon={Package}     label="Products"       value={totalProducts}                    sub={`${inStockCount} in stock`} accent="#8b5cf6" />
      </div>

      {/* Main row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Recent orders (real data) */}
        <div className="lg:col-span-2 rounded-sm border overflow-hidden"
             style={{ background: '#162130', borderColor: 'rgba(255,255,255,0.08)' }}>
          <SectionHeader title="Recent Orders" href="/admin/orders" />
          <div className="divide-y divide-white/5">
            {recentOrders.length === 0 ? (
              <div className="py-12 text-center">
                <ShoppingBag size={28} className="mx-auto mb-3 text-white/20" />
                <p className="text-white/40 text-sm">No orders yet.</p>
                <p className="text-white/25 text-xs mt-1">Orders placed by customers will appear here.</p>
              </div>
            ) : (
              recentOrders.map((order: any) => (
                <div key={order.id}
                     className="flex items-center gap-4 px-5 py-3.5 hover:bg-white/5 transition-colors">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white/90 truncate">
                      {order.customer_name ?? order.customer_email ?? 'Guest'}
                    </p>
                    <p className="text-[11px] text-white/40 mt-0.5">
                      {new Date(order.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      {order.payment_method && ` · ${order.payment_method.replace('_', ' ')}`}
                    </p>
                  </div>
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm ${statusStyles[order.status] ?? 'bg-white/10 text-white/50'}`}>
                    {order.status}
                  </span>
                  <span className="font-display font-bold text-sm text-white tabular-nums shrink-0">
                    £{Number(order.total_amount).toFixed(2)}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Top rated products */}
        <div className="rounded-sm border overflow-hidden"
             style={{ background: '#162130', borderColor: 'rgba(255,255,255,0.08)' }}>
          <SectionHeader title="Top Rated Products" href="/admin/products" />
          <div className="divide-y divide-white/5">
            {topRated.map((product, i) => (
              <div key={product.id} className="px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <span className="font-display font-bold text-xs w-4 shrink-0" style={{ color: '#1E73BE' }}>
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-white/80 truncate">{product.name}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[11px] text-white/40">★ {product.rating?.toFixed(1)} ({product.review_count})</span>
                      <span className="text-[11px] font-bold text-white/60 tabular-nums">£{product.price.toFixed(2)}</span>
                    </div>
                    <div className="h-1 mt-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                      <div className="h-full rounded-full" style={{ width: `${((product.rating ?? 0) / 5) * 100}%`, background: '#1E73BE' }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Add Product',      href: '/admin/products/new', icon: Plus,         color: '#1E73BE' },
          { label: 'View Orders',       href: '/admin/orders',       icon: ShoppingBag,  color: '#10b981' },
          { label: 'Manage Customers', href: '/admin/customers',    icon: Users,        color: '#f59e0b' },
          { label: 'View Storefront',  href: '/',                   icon: ExternalLink, color: '#8b5cf6' },
        ].map(({ label, href, icon: Icon, color }) => (
          <Link key={href} href={href}
                className="flex items-center gap-3 p-4 rounded-sm border font-semibold text-sm text-white transition-all hover:scale-[1.01]"
                style={{ background: `${color}10`, borderColor: `${color}30` }}>
            <Icon size={16} style={{ color }} className="shrink-0" />
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}
