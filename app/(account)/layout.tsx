import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import MobileNav from '@/components/layout/MobileNav'
import SearchModal from '@/components/layout/SearchModal'
import AccountSidebar from '@/components/account/AccountSidebar'

export default async function AccountLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login?redirect=/account')

  return (
    <>
      <AnnouncementBar />
      <Header />
      <MobileNav />
      <CartDrawer />
      <SearchModal />
      <main className="min-h-screen">
        <div className="container-shop py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <AccountSidebar user={user} />
            <div className="flex-1 min-w-0">{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
