'use client'

import Link from 'next/link'
import { products } from '@/data/mock'
import ProductCard from './ProductCard'

export default function FeaturedProducts() {
  // Show all featured products as best sellers
  const bestSellers = products.filter((p) => p.is_featured).slice(0, 8)

  return (
    <section className="bg-white border-t border-border-light py-10">
      <div className="container-shop">
        <h2 className="text-2xl font-display font-bold text-text-primary mb-8">
          Best sellers:
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/shop"
            className="inline-block border border-border-light bg-white hover:bg-surface-100 text-text-primary font-bold uppercase px-8 py-3 text-sm transition-colors"
          >
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </div>
    </section>
  )
}
