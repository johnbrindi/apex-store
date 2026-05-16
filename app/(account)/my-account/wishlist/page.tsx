'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Heart, ShoppingCart, Trash2, ArrowRight } from 'lucide-react'
import { useWishlistStore } from '@/store/wishlistStore'
import { useCartStore } from '@/store/cartStore'
import { formatCurrency } from '@/lib/utils'

export default function WishlistPage() {
  const { items, removeItem } = useWishlistStore()
  const addToCart = useCartStore((s) => s.addItem)

  const handleAddToCart = (product: typeof items[0]) => {
    addToCart(product)
    removeItem(product.id)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display font-bold text-2xl uppercase tracking-wide text-white">
          My Wishlist
        </h1>
        <p className="text-text-muted text-sm mt-1">
          {items.length} saved item{items.length !== 1 ? 's' : ''}
        </p>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-surface border border-surface-100">
          <Heart size={48} className="text-surface-300 mb-4" />
          <p className="font-display font-semibold text-lg uppercase tracking-wide text-text-secondary mb-2">
            Your wishlist is empty
          </p>
          <p className="text-sm text-text-muted mb-6">
            Save products you&apos;re interested in for later
          </p>
          <Link href="/shop" className="btn-primary px-6 py-3 text-sm">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {items.map((product) => (
            <div
              key={product.id}
              className="group bg-surface border border-surface-100 hover:border-surface-300 transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <Link href={`/product/${product.slug}`} className="block aspect-square overflow-hidden bg-dark">
                <Image
                  src={product.primary_image ?? '/assets/images/placeholder.jpg'}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>

              {/* Info */}
              <div className="p-4">
                <Link
                  href={`/product/${product.slug}`}
                  className="block font-semibold text-sm text-text-primary hover:text-brand-red transition-colors leading-snug line-clamp-2 mb-1.5"
                >
                  {product.name}
                </Link>
                <p className="text-xs text-text-muted line-clamp-1 mb-3">
                  {product.short_description}
                </p>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display font-bold text-brand-red text-lg">
                    {formatCurrency(product.price)}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex items-center gap-1.5 px-3 py-2 bg-button-blue hover:bg-button-hover text-white text-xs font-semibold uppercase tracking-wide transition-colors"
                    >
                      <ShoppingCart size={12} />
                      Add to Cart
                    </button>
                    <button
                      onClick={() => removeItem(product.id)}
                      className="p-2 text-text-muted hover:text-red-400 transition-colors border border-surface-200 hover:border-red-400/50"
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {items.length > 0 && (
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={() => items.forEach((p) => removeItem(p.id))}
            className="text-xs text-text-muted hover:text-red-400 transition-colors underline"
          >
            Clear Wishlist
          </button>
          <Link
            href="/shop"
            className="flex items-center gap-1.5 text-sm text-brand-red hover:text-brand-red-light font-semibold transition-colors"
          >
            Continue Shopping <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </div>
  )
}
