'use client'

import { useEffect } from 'react'
import { useRecentlyViewed } from '@/hooks'
import ProductGrid from './ProductGrid'
import type { Product } from '@/types'

interface Props {
  currentProductId: string
  product: Product
}

export function RecentlyViewedTracker({ currentProductId, product }: Props) {
  const { addItem } = useRecentlyViewed()

  useEffect(() => {
    addItem(product)
  }, [currentProductId]) // eslint-disable-line

  return null
}

export function RecentlyViewedSection() {
  const { items } = useRecentlyViewed()

  if (items.length === 0) return null

  return (
    <section className="container-shop py-14 border-t border-surface-100">
      <div className="flex items-end justify-between mb-7">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1.5">
            Your History
          </p>
          <h2 className="section-title">Recently Viewed</h2>
        </div>
      </div>
      <ProductGrid products={items.slice(0, 4)} columns={4} />
    </section>
  )
}
