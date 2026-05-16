import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getLocalUser } from '@/actions/auth'
import {
  LayoutDashboard, Package, ShoppingBag,
  Users, Tag, Settings, ChevronRight, BarChart3
} from 'lucide-react'
import AdminSidebarClient from './AdminSidebarClient'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getLocalUser()
  if (!user) redirect('/login')

  return (
    <div className="min-h-screen bg-dark flex">
      {/* Sidebar */}
      <AdminSidebarClient user={user} />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
