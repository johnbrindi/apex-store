import { getLocalUser } from '@/actions/auth'
import Link from 'next/link'
import { FileText, Download, Settings, MapPin, User, LogOut } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'My Account | Steroids UK' }

const quickLinks = [
  { href: '/my-account/orders', icon: FileText, label: 'Orders' },
  { href: '#', icon: Download, label: 'Downloads' },
  { href: '#', icon: Settings, label: 'Coupons' },
  { href: '/my-account/addresses', icon: MapPin, label: 'Addresses' },
  { href: '/my-account/settings', icon: User, label: 'Account details' },
  { href: '/login', icon: LogOut, label: 'Logout' },
]

export default async function AccountPage() {
  const user = await getLocalUser()

  const displayName = user?.username ?? user?.email?.split('@')[0] ?? 'Customer'

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Welcome */}
      <div className="text-center py-4">
        <h1 className="font-display font-bold text-4xl text-text-primary mb-2">
          My Account
        </h1>
        <p className="text-text-secondary text-sm">
          Home / My Account
        </p>
      </div>

      <div className="mt-8">
        <p className="text-sm font-medium mb-4 text-text-primary">
          Hello {displayName} (not {displayName}? <Link href="/login" className="text-button-blue hover:underline">Log out</Link>)
        </p>
        <p className="text-sm text-text-primary mb-8">
          From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
        </p>

        {/* 6 Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {quickLinks.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              className="flex flex-col items-center justify-center p-8 bg-white border border-border-light hover:border-button-blue transition-colors group shadow-sm"
            >
              <Icon size={32} strokeWidth={1.5} className="text-text-secondary mb-3 group-hover:text-button-blue transition-colors" />
              <p className="font-semibold text-[13px] text-text-primary group-hover:text-button-blue transition-colors">{label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
