import type { Metadata } from 'next'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import MobileNav from '@/components/layout/MobileNav'
import SearchModal from '@/components/layout/SearchModal'

export const metadata: Metadata = {
  title: {
    default: 'ApexStore — Premium Performance Compounds',
    template: '%s | ApexStore',
  },
}

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <MobileNav />
      <CartDrawer />
      <SearchModal />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
