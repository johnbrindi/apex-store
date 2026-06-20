'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard, Package, ShoppingBag,
  Users, Tag, Settings, LogOut, BarChart3,
  ChevronRight, ExternalLink, Menu, X, Zap
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { logoutLocalUser } from '@/actions/auth'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/products', label: 'Products', icon: Package },
  { href: '/admin/orders', label: 'Orders', icon: ShoppingBag },
  { href: '/admin/customers', label: 'Customers', icon: Users },
  { href: '/admin/categories', label: 'Categories', icon: Tag },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/admin/seo', label: 'SEO Analyzer', icon: Zap },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
]

interface AdminSidebarClientProps {
  user: { id: string; email: string; username?: string; role?: string }
}

import { useState } from 'react'

export default function AdminSidebarClient({ user }: AdminSidebarClientProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = async () => {
    await logoutLocalUser()
    router.push('/')
    router.refresh()
  }

  const initials = (user.username ?? user.email ?? 'A').charAt(0).toUpperCase()

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-3.5 left-4 z-[60] p-1 text-white/60 hover:text-white"
        aria-label="Open sidebar"
      >
        <Menu size={20} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[60] lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={cn(
        "fixed inset-y-0 left-0 z-[70] w-60 bg-[#173436] border-r border-white/10 flex flex-col min-h-screen transition-transform duration-300 ease-in-out lg:static lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Close button for mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-1 text-white/60 hover:text-white"
        >
          <X size={20} />
        </button>
        {/* Logo */}
        <div className="h-14 flex items-center px-5 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-[#1E73BE] flex items-center justify-center">
              <span className="font-display font-bold text-white text-sm">S</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-sm tracking-wider text-white uppercase">Steroids UK</span>
              <span className="text-white/50 text-[10px] uppercase tracking-widest">Admin Panel</span>
            </div>
          </Link>
        </div>

        {/* User info */}
        <div className="px-4 py-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#1E73BE] flex items-center justify-center rounded-full shrink-0">
              <span className="font-bold text-white text-xs uppercase">{initials}</span>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-white truncate">
                {user.username ?? 'Admin'}
              </p>
              <p className="text-[10px] text-white/50 truncate">{user.email}</p>
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
                    ? 'text-white bg-white/10 border-l-2 border-l-[#1E73BE] pl-[14px]'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                )}
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center gap-3">
                  <item.icon size={15} className={active ? 'text-[#1E73BE]' : 'text-white/40'} />
                  {item.label}
                </span>
                <ChevronRight size={12} className={active ? 'text-[#1E73BE]' : 'text-white/20'} />
              </Link>
            )
          })}
        </nav>

        {/* Bottom actions */}
        <div className="border-t border-white/10 p-3 space-y-1">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-3 py-2.5 text-xs font-semibold text-white/50 hover:text-white hover:bg-white/5 transition-colors"
          >
            <ExternalLink size={14} />
            View Storefront
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2.5 text-xs font-semibold text-white/50 hover:text-red-400 hover:bg-white/5 transition-colors"
          >
            <LogOut size={14} />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  )
}
