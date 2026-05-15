import type { Metadata } from 'next'
import { ShoppingBag, Users, Package, TrendingUp, ArrowUp, ArrowDown, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = { title: 'Admin Dashboard' }

const stats = [
  { label: 'Total Revenue', value: '£24,891', change: '+12.4%', up: true, icon: TrendingUp },
  { label: 'Orders This Month', value: '183', change: '+8.1%', up: true, icon: ShoppingBag },
  { label: 'Active Customers', value: '1,247', change: '+3.7%', up: true, icon: Users },
  { label: 'Products in Stock', value: '1,032', change: '-2.1%', up: false, icon: Package },
]

const recentOrders = [
  { id: 'ORD-8821', customer: 'James R.', total: 87.80, status: 'delivered', date: '10 May 2026' },
  { id: 'ORD-8820', customer: 'Mike T.', total: 149.90, status: 'processing', date: '10 May 2026' },
  { id: 'ORD-8819', customer: 'D. Collins', total: 42.90, status: 'shipped', date: '9 May 2026' },
  { id: 'ORD-8818', customer: 'Sarah L.', total: 64.90, status: 'pending', date: '9 May 2026' },
  { id: 'ORD-8817', customer: 'Tom B.', total: 189.70, status: 'delivered', date: '8 May 2026' },
]

const topProducts = [
  { name: 'Testosterone Enanthate 300', sold: 84, revenue: 3603.60 },
  { name: 'Anavar 10mg Tablets', sold: 71, revenue: 3400.90 },
  { name: 'Bulking Stack – Pro Series', sold: 38, revenue: 5696.20 },
  { name: 'Clenbuterol 40mcg', sold: 63, revenue: 2135.70 },
  { name: 'Nolvadex / Tamoxifen 20mg', sold: 55, revenue: 1974.50 },
]

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-500/20 text-yellow-400',
  processing: 'bg-blue-500/20 text-blue-400',
  shipped: 'bg-indigo-500/20 text-indigo-400',
  delivered: 'bg-green-500/20 text-green-400',
  cancelled: 'bg-red-500/20 text-red-400',
}

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl uppercase tracking-wide text-white">
            Dashboard
          </h1>
          <p className="text-text-muted text-sm mt-0.5">
            Welcome back — here&apos;s what&apos;s happening today.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-text-muted bg-surface border border-surface-100 px-3 py-2">
          <Clock size={14} className="text-brand-red" />
          Last updated: just now
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, change, up, icon: Icon }) => (
          <div key={label} className="bg-surface border border-surface-100 p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="w-9 h-9 bg-brand-red/10 border border-brand-red/20 flex items-center justify-center">
                <Icon size={16} className="text-brand-red" />
              </div>
              <span className={`flex items-center gap-0.5 text-xs font-bold ${up ? 'text-green-400' : 'text-red-400'}`}>
                {up ? <ArrowUp size={11} /> : <ArrowDown size={11} />}
                {change}
              </span>
            </div>
            <p className="font-display font-bold text-2xl text-white">{value}</p>
            <p className="text-xs text-text-muted mt-0.5 uppercase tracking-wider">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent orders */}
        <div className="lg:col-span-2 bg-surface border border-surface-100">
          <div className="flex items-center justify-between px-5 py-4 border-b border-surface-100">
            <h2 className="font-display font-bold text-base uppercase tracking-wide text-white">
              Recent Orders
            </h2>
            <a href="/admin/orders" className="text-xs text-brand-red hover:text-brand-red-light font-semibold transition-colors">
              View All →
            </a>
          </div>
          <div className="divide-y divide-surface-100">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between px-5 py-3.5 gap-4 hover:bg-surface-50/30 transition-colors">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-text-primary">{order.id}</p>
                  <p className="text-xs text-text-muted mt-0.5">{order.customer} · {order.date}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`badge text-[10px] capitalize ${statusColors[order.status]}`}>
                    {order.status}
                  </span>
                  <span className="font-display font-bold text-brand-red text-sm tabular-nums">
                    £{order.total.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top products */}
        <div className="bg-surface border border-surface-100">
          <div className="flex items-center justify-between px-5 py-4 border-b border-surface-100">
            <h2 className="font-display font-bold text-base uppercase tracking-wide text-white">
              Top Products
            </h2>
            <a href="/admin/products" className="text-xs text-brand-red hover:text-brand-red-light font-semibold transition-colors">
              All →
            </a>
          </div>
          <div className="divide-y divide-surface-100">
            {topProducts.map((product, i) => (
              <div key={product.name} className="px-5 py-3.5">
                <div className="flex items-start gap-3">
                  <span className="font-display font-bold text-xs text-brand-red/50 tabular-nums w-4 shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-text-primary leading-snug line-clamp-1">
                      {product.name}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[11px] text-text-muted">{product.sold} sold</span>
                      <span className="text-[11px] font-bold text-brand-red tabular-nums">
                        £{product.revenue.toFixed(2)}
                      </span>
                    </div>
                    {/* Mini bar */}
                    <div className="h-1 bg-surface-200 mt-1.5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-brand-red/60 rounded-full"
                        style={{ width: `${(product.sold / topProducts[0].sold) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Add Product', href: '/admin/products/new', icon: Package },
          { label: 'View Orders', href: '/admin/orders', icon: ShoppingBag },
          { label: 'Manage Customers', href: '/admin/customers', icon: Users },
          { label: 'Edit Categories', href: '/admin/categories', icon: Package },
        ].map(({ label, href, icon: Icon }) => (
          <a
            key={href}
            href={href}
            className="flex items-center gap-3 p-4 bg-surface border border-surface-100 hover:border-surface-300 text-sm font-semibold text-text-secondary hover:text-white transition-all group"
          >
            <Icon size={16} className="text-brand-red shrink-0" />
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}
