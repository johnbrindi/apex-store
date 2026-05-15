'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard, Package, ShoppingBag,
  Users, Tag, Settings, LogOut, BarChart3, ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { createClient } from '@/utils/supabase/client'
import type { User } from '@supabase/supabase-js'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/products', label: 'Products', icon: Package },
  { href: '/admin/orders', label: 'Orders', icon: ShoppingBag },
  { href: '/admin/customers', label: 'Customers', icon: Users },
  { href: '/admin/categories', label: 'Categories', icon: Tag },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
]

export default function AdminSidebarClient({ user }: { user: User }) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <aside className="w-60 shrink-0 bg-dark-100 border-r border-surface-100 flex flex-col min-h-screen">
      {/* Logo */}
      <div className="h-14 flex items-center px-5 border-b border-surface-100">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-brand-red flex items-center justify-center">
            <span className="font-display font-bold text-white text-sm">A</span>
          </div>
          <span className="font-display font-bold text-base tracking-wider text-white uppercase">
            Admin
          </span>
        </Link>
      </div>

      {/* User info */}
      <div className="px-4 py-4 border-b border-surface-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-brand-red/20 border border-brand-red/30 flex items-center justify-center rounded-full">
            <span className="font-bold text-brand-red text-xs uppercase">
              {(user.user_metadata?.first_name?.[0] ?? user.email?.[0] ?? 'A').toUpperCase()}
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-text-primary truncate">
              {user.user_metadata?.first_name ?? 'Admin'}
            </p>
            <p className="text-[10px] text-text-muted truncate">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-2">
        {navItems.map((item) => {
          const active = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href) && item.href !== '/admin'
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center justify-between px-4 py-2.5 text-sm font-semibold transition-colors',
                active
                  ? 'text-white bg-brand-red/10 border-l-2 border-l-brand-red pl-[14px]'
                  : 'text-text-muted hover:text-white hover:bg-surface-50'
              )}
            >
              <span className="flex items-center gap-3">
                <item.icon size={15} className={active ? 'text-brand-red' : 'text-text-muted'} />
                {item.label}
              </span>
              <ChevronRight size={12} className={active ? 'text-brand-red' : 'text-surface-300'} />
            </Link>
          )
        })}
      </nav>

      {/* Bottom actions */}
      <div className="border-t border-surface-100 p-3 space-y-1">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2.5 text-xs font-semibold text-text-muted hover:text-white hover:bg-surface-50 transition-colors"
        >
          <Package size={14} />
          View Storefront
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2.5 text-xs font-semibold text-text-muted hover:text-red-400 hover:bg-surface-50 transition-colors"
        >
          <LogOut size={14} />
          Sign Out
        </button>
      </div>
    </aside>
  )
}
