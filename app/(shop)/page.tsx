import type { Metadata } from 'next'
import HeroBanner from '@/components/shop/HeroBanner'
import CategoryGrid from '@/components/shop/CategoryGrid'
import FeaturedProducts from '@/components/shop/FeaturedProducts'
import RecentBlogPosts from '@/components/shop/RecentBlogPosts'
import TrustStrip from '@/components/shop/TrustStrip'
import ReviewsSection from '@/components/shop/ReviewsSection'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Steroids UK - UK Steroids Shop | Buy Anabolic Steroids Online',
  description: 'The most trusted online portal for buying quality anabolic steroids in the UK. Lab tested, discreet shipping, next day delivery.',
}

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <CategoryGrid />
      <TrustStrip />
      <FeaturedProducts />

      {/* Info block */}
      <section className="bg-white border-t border-b border-border-light py-12">
        <div className="container-shop max-w-[1200px] mx-auto text-center px-4">
          <h2 className="font-display font-semibold text-xl md:text-2xl text-text-primary mb-4">
            The most trusted online portal for buying quality anabolic steroids.
          </h2>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-6">
            Steroids UK — UK Steroids Shop
          </h1>
          <p className="text-sm md:text-base text-text-secondary mb-8 max-w-4xl mx-auto leading-relaxed">
            Here, we prioritize your fitness journey, providing you with safe and effective bodybuilding supplements. Our vast selection, rigorous quality controls, fast shipping, and exceptional service make us the top choice for athletes, bodybuilders, and fitness enthusiasts throughout the United Kingdom. Minimum order £90. We offer local delivery (2-3 days, £10) and express delivery (7-24 hours, £25).
          </p>
          <Link
            href="/shop"
            className="inline-block bg-button-blue hover:bg-button-hover text-white font-bold uppercase px-8 py-3 text-sm transition-colors"
          >
            STEROIDS FOR SALE
          </Link>
        </div>
      </section>

      <ReviewsSection />
      <RecentBlogPosts />
    </>
  )
}
