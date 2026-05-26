'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Tag } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '@/store/cartStore'
import { formatCurrency } from '@/lib/utils'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { useState } from 'react'

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, total, clearCart } = useCartStore()
  const [coupon, setCoupon] = useState('')
  const [couponApplied, setCouponApplied] = useState(false)
  const [couponError, setCouponError] = useState('')

  const sub = subtotal()
  const tot = total()
  const shipping = sub >= 149 ? 0 : 4.99
  const totalQty = items.reduce((s, i) => s + i.quantity, 0)
  const MIN_ORDER_QTY = 2
  const canCheckout = totalQty >= MIN_ORDER_QTY

  const handleCoupon = (e: React.FormEvent) => {
    e.preventDefault()
    if (coupon.toUpperCase() === 'REVO10') {
      setCouponApplied(true)
      setCouponError('')
    } else {
      setCouponError('Invalid or expired coupon code.')
    }
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Cart' },
  ]

  if (items.length === 0) {
    return (
      <div className="container-shop py-16">
        <Breadcrumb items={breadcrumbItems} className="mb-8" />
        <div className="flex flex-col items-center justify-center text-center py-20">
          <ShoppingBag size={64} className="text-surface-300 mb-6" />
          <h1 className="font-display font-bold text-3xl uppercase tracking-wide text-text-primary mb-3">
            Your Cart is Empty
          </h1>
          <p className="text-text-muted mb-8 max-w-sm">
            Looks like you haven&apos;t added any products yet. Browse our range to get started.
          </p>
          <Link href="/shop" className="btn-primary px-8 py-3.5">
            Shop All Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container-shop py-8">
      <Breadcrumb items={breadcrumbItems} className="mb-7" />

      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display font-bold text-3xl uppercase tracking-wide">
          Shopping Cart
          <span className="ml-3 text-lg text-text-muted font-normal normal-case tracking-normal">
            ({items.reduce((s, i) => s + i.quantity, 0)} items)
          </span>
        </h1>
        <button
          onClick={clearCart}
          className="text-xs text-text-muted hover:text-red-400 transition-colors underline"
        >
          Clear cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart items */}
        <div className="lg:col-span-2 space-y-0">
          {/* Header row */}
          <div className="hidden md:grid grid-cols-[1fr_auto_auto_auto] gap-4 px-4 py-2 text-xs font-bold uppercase tracking-widest text-text-muted border-b border-surface-100">
            <span>Product</span>
            <span className="text-center w-28">Price</span>
            <span className="text-center w-28">Quantity</span>
            <span className="text-right w-20">Total</span>
          </div>

          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16, height: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-4 items-center px-4 py-5 border-b border-surface-100 hover:bg-surface-50/30 transition-colors"
              >
                {/* Product info */}
                <div className="flex items-center gap-4">
                  <Link href={`/product/${item.product.slug}`} className="shrink-0 w-20 h-20 bg-surface border border-surface-100 overflow-hidden">
                    <Image
                      src={item.product.primary_image ?? '/assets/images/placeholder.jpg'}
                      alt={item.product.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </Link>
                  <div>
                    <Link
                      href={`/product/${item.product.slug}`}
                      className="font-semibold text-sm text-text-primary hover:text-brand-red transition-colors leading-snug line-clamp-2"
                    >
                      {item.product.name}
                    </Link>
                    {item.product.sku && (
                      <p className="text-xs text-text-muted mt-0.5 font-mono">
                        SKU: {item.product.sku}
                      </p>
                    )}
                    <button
                      onClick={() => removeItem(item.product_id)}
                      className="flex items-center gap-1 text-xs text-text-muted hover:text-red-400 transition-colors mt-1.5"
                    >
                      <Trash2 size={11} />
                      Remove
                    </button>
                  </div>
                </div>

                {/* Unit price */}
                <div className="w-28 text-center">
                  <span className="md:hidden text-xs text-text-muted mr-2">Price:</span>
                  <span className="font-display font-bold text-brand-red">
                    {formatCurrency(item.price)}
                  </span>
                </div>

                {/* Quantity */}
                <div className="w-28 flex items-center justify-center">
                  <div className="flex items-center border border-surface-200">
                    <button
                      onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center text-text-muted hover:text-white hover:bg-surface-100 transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="w-9 text-center text-sm font-bold tabular-nums">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center text-text-muted hover:text-white hover:bg-surface-100 transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>

                {/* Line total */}
                <div className="w-20 text-right">
                  <span className="md:hidden text-xs text-text-muted mr-2">Total:</span>
                  <span className="font-display font-bold text-white tabular-nums">
                    {formatCurrency(item.price * item.quantity)}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Coupon */}
          <div className="pt-5">
            <form onSubmit={handleCoupon} className="flex gap-2 max-w-sm">
              <div className="relative flex-1">
                <Tag size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => { setCoupon(e.target.value); setCouponError('') }}
                  placeholder="Coupon code"
                  className="input-base pl-9"
                />
              </div>
              <button type="submit" className="btn-secondary px-4 py-2.5 whitespace-nowrap">
                Apply
              </button>
            </form>
            {couponError && <p className="text-xs text-red-400 mt-1.5">{couponError}</p>}
            {couponApplied && <p className="text-xs text-green-400 mt-1.5">✓ Code REVO10 applied — 5% off!</p>}
          </div>
        </div>

        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="bg-surface border border-surface-100 p-6 sticky top-24">
            <h2 className="font-display font-bold text-lg uppercase tracking-wide mb-5 pb-3 border-b border-surface-100">
              Order Summary
            </h2>

            <div className="space-y-3 mb-5">
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Subtotal</span>
                <span className="font-semibold">{formatCurrency(sub)}</span>
              </div>
              {couponApplied && (
                <div className="flex justify-between text-sm">
                  <span className="text-green-400">Discount (5%)</span>
                  <span className="text-green-400 font-semibold">-{formatCurrency(sub * 0.05)}</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Delivery</span>
                <span className={shipping === 0 ? 'text-green-400 font-semibold' : 'font-semibold'}>
                  {shipping === 0 ? 'FREE' : formatCurrency(shipping)}
                </span>
              </div>
              {sub < 149 && (
                <p className="text-xs text-text-muted bg-surface-50 border border-surface-100 p-2.5">
                  Add{' '}
                  <span className="text-brand-red font-semibold">
                    {formatCurrency(149 - sub)}
                  </span>{' '}
                  more for free next-day delivery
                </p>
              )}
              <div className="flex justify-between text-base font-bold pt-3 border-t border-surface-100">
                <span>Total</span>
                <span className="text-brand-red font-display text-xl tabular-nums">
                  {formatCurrency(couponApplied ? tot * 0.95 : tot)}
                </span>
              </div>
            </div>

            {/* Minimum order notice */}
            {!canCheckout && (
              <div className="mb-3 bg-amber-50 border border-amber-200 rounded px-3 py-2 text-xs text-amber-700 font-medium">
                ⚠ Minimum order is <strong>2 items</strong>. Add more products to proceed.
              </div>
            )}

            {canCheckout ? (
              <Link
                href="/checkout"
                className="flex items-center justify-center gap-2 w-full py-4 bg-brand-red hover:bg-brand-red-dark text-white font-display font-bold uppercase tracking-wider transition-colors"
              >
                Proceed to Checkout
                <ArrowRight size={16} />
              </Link>
            ) : (
              <button
                disabled
                className="flex items-center justify-center gap-2 w-full py-4 bg-gray-300 text-gray-500 font-display font-bold uppercase tracking-wider cursor-not-allowed"
              >
                Proceed to Checkout
                <ArrowRight size={16} />
              </button>
            )}

            <Link
              href="/shop"
              className="flex items-center justify-center w-full py-3 mt-2 border border-surface-200 text-text-secondary hover:text-white hover:border-surface-300 font-semibold uppercase tracking-wider text-sm transition-colors"
            >
              Continue Shopping
            </Link>

            {/* Trust */}
            <div className="mt-5 pt-4 border-t border-surface-100 space-y-2">
              {['SSL Secure Checkout', 'Discreet Packaging', 'Lab-Tested Products'].map((t) => (
                <p key={t} className="flex items-center gap-2 text-xs text-text-muted">
                  <span className="text-green-400">✓</span> {t}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
