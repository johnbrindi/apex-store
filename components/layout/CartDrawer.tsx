'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X, Minus, Plus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '@/store/cartStore'
import { formatCurrency } from '@/lib/utils'

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    total,
    itemCount,
  } = useCartStore()

  const count = itemCount()
  const sub = subtotal()
  const tot = total()
  const freeShippingThreshold = 149
  const remaining = freeShippingThreshold - sub

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 z-[80]"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            key="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.28 }}
            className="fixed inset-y-0 right-0 w-full max-w-[420px] bg-white z-[90] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 h-14 border-b border-border-light shrink-0">
              <div className="flex items-center gap-2">
                <ShoppingBag size={18} className="text-button-blue" />
                <span className="font-display font-bold text-base uppercase tracking-wide">
                  Your Cart
                </span>
                {count > 0 && (
                  <span className="w-5 h-5 bg-button-blue text-white text-[11px] font-bold rounded-full flex items-center justify-center">
                    {count}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="p-1.5 text-text-secondary hover:text-button-blue transition-colors"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Free shipping bar */}
            {sub < freeShippingThreshold && sub > 0 && (
              <div className="px-5 py-3 bg-surface-50 border-b border-border-light shrink-0">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-text-secondary">
                    Add{' '}
                    <span className="text-button-blue font-semibold">
                      {formatCurrency(remaining)}
                    </span>{' '}
                    for free delivery
                  </span>
                  <span className="text-text-secondary">
                    {Math.round((sub / freeShippingThreshold) * 100)}%
                  </span>
                </div>
                <div className="h-1.5 bg-surface-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-button-blue rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((sub / freeShippingThreshold) * 100, 100)}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            )}
            {sub >= freeShippingThreshold && (
              <div className="px-5 py-2.5 bg-button-blue/10 border-b border-button-blue/20 text-button-blue text-xs font-semibold text-center shrink-0">
                ✓ You qualify for FREE next-day delivery!
              </div>
            )}

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <ShoppingBag size={48} className="text-border-light mb-4" />
                  <p className="font-display font-semibold text-lg text-text-secondary uppercase tracking-wide mb-2">
                    Your cart is empty
                  </p>
                  <p className="text-sm text-text-secondary mb-6">
                    Add some products to get started
                  </p>
                  <button
                    onClick={closeCart}
                    className="btn-primary text-sm px-5 py-2.5"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 pb-4 border-b border-border-light last:border-b-0"
                  >
                    {/* Product image */}
                    <Link
                      href={`/product/${item.product.slug}`}
                      onClick={closeCart}
                      className="shrink-0 w-16 h-16 bg-white overflow-hidden"
                    >
                      <Image
                        src={item.product.primary_image ?? '/assets/images/placeholder.jpg'}
                        alt={item.product.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </Link>

                    {/* Product details */}
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/product/${item.product.slug}`}
                        onClick={closeCart}
                        className="block text-sm font-semibold text-text-primary hover:text-button-blue transition-colors line-clamp-2 leading-tight mb-1"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-button-blue font-display font-bold text-base">
                        {formatCurrency(item.price)}
                      </p>

                      {/* Qty controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center border border-border-light">
                          <button
                            onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-text-secondary hover:text-button-blue hover:bg-surface-100 transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-sm font-semibold tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-text-secondary hover:text-button-blue hover:bg-surface-100 transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <span className="text-xs text-text-secondary">
                          = {formatCurrency(item.price * item.quantity)}
                        </span>

                        <button
                          onClick={() => removeItem(item.product_id)}
                          className="ml-auto p-1 text-text-secondary hover:text-red-400 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="shrink-0 border-t border-border-light p-5 space-y-3">
                {/* Subtotal */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Subtotal</span>
                    <span className="font-semibold">{formatCurrency(sub)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Delivery</span>
                    <span className="font-semibold">
                      {sub >= 149 ? (
                        <span className="text-green-400">FREE</span>
                      ) : (
                        formatCurrency(4.99)
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-bold pt-2 border-t border-border-light">
                    <span>Total</span>
                    <span className="text-button-blue font-display text-lg">
                      {formatCurrency(tot)}
                    </span>
                  </div>
                </div>

                {/* CTA buttons */}
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-button-blue hover:bg-button-hover text-white font-display font-bold uppercase tracking-wider transition-colors"
                >
                  Proceed to Checkout
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="flex items-center justify-center w-full py-3 border border-border-light text-text-secondary hover:text-button-blue hover:border-surface-300 font-semibold uppercase tracking-wider text-sm transition-colors"
                >
                  View Full Cart
                </Link>

                <p className="text-center text-xs text-text-secondary">
                  Secure checkout · Discreet packaging · Lab-tested products
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
