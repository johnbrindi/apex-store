'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard, ShoppingBag, Heart, MapPin,
  Settings, LogOut, User, ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { logoutLocalUser } from '@/actions/auth'

const navItems = [
  { href: '/my-account', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/my-account/orders', label: 'My Orders', icon: ShoppingBag },
  { href: '/my-account/wishlist', label: 'Wishlist', icon: Heart },
  { href: '/my-account/addresses', label: 'Addresses', icon: MapPin },
  { href: '/my-account/settings', label: 'Settings', icon: Settings },
]

interface AccountSidebarProps {
  user: any
}

export default function AccountSidebar({ user }: AccountSidebarProps) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await logoutLocalUser()
    router.push('/')
    router.refresh()
  }

  const displayName = user?.username ?? user?.email?.split('@')[0] ?? 'Customer'

  return (
    <aside className="w-full lg:w-60 shrink-0">
      {/* User info card */}
      <div className="bg-white border border-border-light p-4 mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-surface-100 border border-border-light flex items-center justify-center shrink-0">
            <User size={18} className="text-button-blue" />
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-sm text-text-primary truncate">{displayName}</p>
            <p className="text-xs text-text-secondary truncate">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-white border border-border-light">
        {navItems.map((item) => {
          const active = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center justify-between px-4 py-3.5 text-sm font-semibold border-b border-border-light last:border-0 transition-colors',
                active
                  ? 'text-button-blue bg-blue-50 border-l-2 border-l-button-blue pl-[14px]'
                  : 'text-text-primary hover:text-button-blue hover:bg-surface-100'
              )}
            >
              <span className="flex items-center gap-3">
                <item.icon size={16} className={active ? 'text-button-blue' : 'text-text-secondary'} />
                {item.label}
              </span>
              <ChevronRight size={13} className={active ? 'text-button-blue' : 'text-text-secondary'} />
            </Link>
          )
        })}

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3.5 text-sm font-semibold text-text-secondary hover:text-red-500 hover:bg-surface-100 transition-colors border-t border-border-light"
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </nav>

      {/* Promo box */}
      <div className="mt-3 bg-button-blue p-4">
        <p className="text-xs font-bold uppercase tracking-widest text-white mb-1.5">
          Revolut Offer
        </p>
        <p className="text-xs text-white/80 leading-relaxed">
          Use <span className="text-white font-bold">REVO10</span> for 5% off and a free product on your next order.
        </p>
      </div>
    </aside>
  )
}
