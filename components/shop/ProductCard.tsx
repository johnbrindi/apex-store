'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCartStore } from '@/store/cartStore'
import { formatCurrency, getDiscountPercent } from '@/lib/utils'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // Always add to cart (removed out of stock logic)
    addItem(product)
  }

  // Force product to be in stock
  const inStock = true

  return (
    <div className="group relative bg-white border border-border-light hover:shadow-card transition-all duration-200 text-center pb-4">
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        {product.is_on_sale && product.compare_at_price && (
          <span className="bg-brand-teal text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">
            Sale!
          </span>
        )}
      </div>

      {/* Image */}
      <Link href={`/product/${product.slug}`} className="block overflow-hidden bg-white aspect-square relative mb-4">
        <Image
          src={product.primary_image ?? '/assets/images/placeholder.jpg'}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-full object-contain p-4"
        />
      </Link>

      {/* Content */}
      <div className="px-4">
        {/* Name */}
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-sm font-semibold text-text-primary hover:text-brand-teal transition-colors mb-2 leading-snug">
            {product.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="flex items-center justify-center gap-2 mb-4">
          {product.compare_at_price && (
            <span className="text-sm text-text-secondary line-through">
              {formatCurrency(product.compare_at_price)}
            </span>
          )}
          <span className="font-bold text-text-primary text-[15px]">
            {formatCurrency(product.price)}
          </span>
        </div>

        {/* Add to basket button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-button-blue hover:bg-button-hover text-white text-xs font-bold uppercase py-2.5 transition-colors"
        >
          Add to basket
        </button>
      </div>
    </div>
  )
}
