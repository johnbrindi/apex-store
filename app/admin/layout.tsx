import { redirect } from 'next/navigation'
import { getLocalUser } from '@/actions/auth'
import AdminSidebarClient from './AdminSidebarClient'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: { default: 'Admin', template: '%s | Admin' } }

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getLocalUser()

  // Must be logged in AND have admin role
  if (!user) redirect('/login?redirect=/admin')
  if (user.role !== 'admin') redirect('/')

  return (
    <div className="min-h-screen flex" style={{ background: '#0F1923' }}>
      {/* Sidebar */}
      <AdminSidebarClient user={user} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top bar */}
        <header className="h-14 border-b border-white/10 flex items-center justify-between px-6 shrink-0" style={{ background: '#162130' }}>
          <div className="text-sm text-white/60 font-medium">
            Steroids UK — Admin Dashboard
          </div>
          <div className="flex items-center gap-3">
            <div className="text-xs text-white/40">
              {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
