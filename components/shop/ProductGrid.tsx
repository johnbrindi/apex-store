'use client'

import ProductCard from './ProductCard'
import type { Product } from '@/types'
import { cn } from '@/lib/utils'

interface ProductGridProps {
  products: Product[]
  loading?: boolean
  columns?: 2 | 3 | 4 | 5
  emptyMessage?: string
}

function SkeletonCard() {
  return (
    <div className="bg-surface border border-surface-100 animate-pulse">
      <div className="aspect-square bg-surface-100" />
      <div className="p-3.5 space-y-2.5">
        <div className="h-3 bg-surface-200 rounded w-1/3" />
        <div className="h-4 bg-surface-200 rounded w-5/6" />
        <div className="h-3 bg-surface-200 rounded w-2/3" />
        <div className="flex items-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-surface-200 rounded" />
          ))}
          <div className="h-3 bg-surface-200 rounded w-8 ml-1" />
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-surface-100">
          <div className="h-5 bg-surface-200 rounded w-16" />
          <div className="h-8 bg-surface-200 rounded w-16" />
        </div>
      </div>
    </div>
  )
}

const colClasses: Record<number, string> = {
  2: 'grid-cols-2',
  3: 'grid-cols-2 md:grid-cols-3',
  4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
}

export default function ProductGrid({
  products,
  loading = false,
  columns = 4,
  emptyMessage = 'No products found.',
}: ProductGridProps) {
  if (loading) {
    return (
      <div className={cn('grid gap-3 md:gap-4', colClasses[columns])}>
        {[...Array(columns * 2)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    // Never show "no products" - always redirect to all products instead
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-text-primary font-semibold text-lg mb-3">Showing all products</p>
        <a href="/shop" className="inline-block bg-button-blue hover:bg-button-hover text-white font-bold uppercase px-6 py-2.5 text-sm transition-colors">
          Browse All Products
        </a>
      </div>
    )
  }

  return (
    <div className={cn('grid gap-3 md:gap-4', colClasses[columns])}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
