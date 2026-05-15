import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { ShoppingBag, Heart, MapPin, Settings, ArrowRight, Package, Clock } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'My Account | Steroids UK' }

const quickLinks = [
  { href: '/account/orders', icon: ShoppingBag, label: 'My Orders', sub: 'Track and manage orders' },
  { href: '/account/wishlist', icon: Heart, label: 'Wishlist', sub: 'Saved products' },
  { href: '/account/addresses', icon: MapPin, label: 'Addresses', sub: 'Manage delivery addresses' },
  { href: '/account/settings', icon: Settings, label: 'Settings', sub: 'Profile and security' },
]

const mockRecentOrders = [
  { id: 'ORD-8821', date: '2026-05-10', status: 'Delivered', total: 87.80, items: 2 },
  { id: 'ORD-8754', date: '2026-04-28', status: 'Processing', total: 149.90, items: 3 },
  { id: 'ORD-8701', date: '2026-04-15', status: 'Delivered', total: 42.90, items: 1 },
]

const statusColors: Record<string, string> = {
  Pending: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  Processing: 'bg-blue-50 text-blue-700 border-blue-200',
  Shipped: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  Delivered: 'bg-green-50 text-green-700 border-green-200',
  Cancelled: 'bg-red-50 text-red-700 border-red-200',
}

export default async function AccountPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const displayName = user?.user_metadata?.first_name
    ? `${user.user_metadata.first_name} ${user.user_metadata.last_name ?? ''}`.trim()
    : user?.user_metadata?.username
    ? user.user_metadata.username
    : user?.email?.split('@')[0] ?? 'Customer'

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="bg-white border border-border-light p-5">
        <h1 className="font-display font-bold text-2xl text-text-primary">
          Hello {displayName}!
        </h1>
        <p className="text-text-secondary text-sm mt-1">
          From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Total Orders', value: '3', icon: ShoppingBag },
          { label: 'Wishlist Items', value: '0', icon: Heart },
          { label: 'Saved Addresses', value: '1', icon: MapPin },
          { label: 'Account Status', value: 'Active', icon: Settings },
        ].map(({ label, value, icon: Icon }) => (
          <div key={label} className="bg-white border border-border-light p-4">
            <Icon size={16} className="text-button-blue mb-2" />
            <p className="font-display font-bold text-xl text-text-primary">{value}</p>
            <p className="text-xs text-text-secondary mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {quickLinks.map(({ href, icon: Icon, label, sub }) => (
          <Link
            key={href}
            href={href}
            className="group flex items-center gap-4 p-5 bg-white border border-border-light hover:border-button-blue transition-all"
          >
            <div className="w-10 h-10 bg-surface-100 border border-border-light flex items-center justify-center shrink-0">
              <Icon size={18} className="text-button-blue" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm text-text-primary group-hover:text-button-blue transition-colors">{label}</p>
              <p className="text-xs text-text-secondary truncate">{sub}</p>
            </div>
            <ArrowRight size={14} className="text-text-secondary group-hover:text-button-blue group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>
        ))}
      </div>

      {/* Recent orders */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-bold text-lg text-text-primary uppercase tracking-wide">
            Recent Orders
          </h2>
          <Link href="/account/orders" className="text-xs text-button-blue hover:underline font-semibold flex items-center gap-1">
            View All <ArrowRight size={12} />
          </Link>
        </div>
        <div className="bg-white border border-border-light overflow-hidden">
          {mockRecentOrders.map((order, i) => (
            <div
              key={order.id}
              className={`flex flex-wrap items-center justify-between px-5 py-4 gap-4 ${i < mockRecentOrders.length - 1 ? 'border-b border-border-light' : ''}`}
            >
              <div className="flex items-center gap-3">
                <Package size={16} className="text-text-secondary shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-text-primary">{order.id}</p>
                  <p className="text-xs text-text-secondary flex items-center gap-1 mt-0.5">
                    <Clock size={10} />
                    {new Date(order.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    &nbsp;·&nbsp;{order.items} item{order.items !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-bold px-2 py-0.5 border capitalize ${statusColors[order.status]}`}>
                  {order.status}
                </span>
                <span className="font-bold text-text-primary text-sm">
                  £{order.total.toFixed(2)}
                </span>
                <Link href={`/account/orders/${order.id}`} className="text-xs text-button-blue hover:underline">
                  View →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
