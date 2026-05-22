import type { Metadata } from 'next'
import HeroBanner from '@/components/shop/HeroBanner'
import CategoryGrid from '@/components/shop/CategoryGrid'
import FeaturedProducts from '@/components/shop/FeaturedProducts'
import RecentBlogPosts from '@/components/shop/RecentBlogPosts'
import TrustStrip from '@/components/shop/TrustStrip'
import ReviewsSection from '@/components/shop/ReviewsSection'
import Link from 'next/link'

import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Steroids UK — Buy Anabolic Steroids Online | UK Steroids Shop',
  description:
    'The most trusted UK steroids shop. Buy pharmaceutical-grade anabolic steroids, injectables, oral compounds, SARMs, and PCT online in the UK. Lab tested, discreet next-day delivery.',
  keywords: [
    'buy steroids uk',
    'buy anabolic steroids uk',
    'anabolic steroids for sale uk',
    'uk steroids shop',
    'steroids online uk',
    'injectable steroids uk',
    'oral steroids uk',
    'testosterone uk',
    'buy testosterone online uk',
    'sarms uk',
    'pct uk',
    'buy dianabol uk',
    'buy anavar uk',
    'buy winstrol uk',
    'buy trenbolone uk',
    'buy clenbuterol uk',
    'peptides uk',
    'hgh uk',
    'fat burners uk',
    'bodybuilding supplements uk',
    'performance enhancing drugs uk',
    'muscle building steroids uk',
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Steroids UK — Buy Anabolic Steroids Online | UK Steroids Shop',
    description:
      'The most trusted UK steroids shop. Lab tested pharmaceutical-grade compounds. Discreet next-day delivery.',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <CategoryGrid />
      <TrustStrip />
      <FeaturedProducts />

      {/* Info block */}
      <section className="bg-white border-t border-b border-border-light py-12 md:py-20">
        <div className="container-shop max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

            {/* Image Column */}
            <div className="w-full md:w-1/2 relative min-h-[300px]">
              <Image
                src="https://steroids-uk.com/wp-content/uploads/2025/11/muscle-400x267.webp"
                alt="Bodybuilder"
                fill
                className="object-cover shadow-lg"
              />
            </div>

            {/* Content Column */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="font-display font-semibold text-lg md:text-xl text-text-primary mb-2">
                The most trusted online portal for buying quality anabolic steroids.
              </h2>
              <h1 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-4">
                Steroids UK — UK Steroids Shop
              </h1>
              <p className="text-sm md:text-base text-text-secondary mb-6 leading-relaxed">
                Here, we prioritize your fitness journey, providing you with safe and effective bodybuilding supplements. Our vast selection, rigorous quality controls, fast shipping, and exceptional service make us the top choice for athletes, bodybuilders, and fitness enthusiasts throughout the United Kingdom.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link
                  href="/shop"
                  className="inline-block bg-button-blue hover:bg-button-hover text-white font-bold uppercase px-8 py-3 text-sm transition-colors"
                >
                  STEROIDS FOR SALE
                </Link>
              </div>
            </div>

          </div>

          <div className="mt-12 text-sm text-text-secondary space-y-6">
            <div>
              <h3 className="font-display font-bold text-xl text-text-primary mb-2">Welcome to Steroids UK</h3>
              <p>The most trusted online portal for buying quality anabolic steroids. Here, we prioritize Your fitness journey, providing you with safe and effective bodybuilding supplements. Our vast selection, rigorous quality controls, fast shipping, and exceptional service make us the top choice for athletes, bodybuilders, and fitness enthusiasts throughout the United Kingdom.</p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-text-primary mb-2">Our Wide Offer of Safe and Effective Anabolics</h3>
              <p>At Steroids UK, we offer a broad array of anabolic steroids that are specifically designed to enhance muscle growth, strength, and recovery time. Every product in our inventory has been carefully selected to ensure high potency, purity and safety. From testosterone supplements to professional-grade bodybuilding formulas, we've got you covered, helping you reach your physique goals quicker.</p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-text-primary mb-2">Who Can Use the Products From Steroids UK?</h3>
              <p>Our top-quality products are suitable for anyone who is looking to sculpt their bodies through weight lifting. Whether you're an advanced bodybuilder aiming to amplify your gains or a beginner aspiring to accelerate muscle development, Steroids UK provides the best supplement solution tailored for your needs. However, it's crucial to consult with a healthcare provider or experienced trainer prior to starting any steroid regimen.</p>
            </div>
          </div>

        </div>
      </section>

      <ReviewsSection />
      <RecentBlogPosts />
    </>
  )
}
