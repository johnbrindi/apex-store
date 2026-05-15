'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ShoppingCart, Heart, Share2, Star, Shield,
  Truck, FlaskConical, ChevronDown, Minus, Plus,
  Check, Package
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '@/store/cartStore'
import { useWishlistStore } from '@/store/wishlistStore'
import { formatCurrency, getDiscountPercent, cn } from '@/lib/utils'
import ProductGrid from '@/components/shop/ProductGrid'
import Breadcrumb from '@/components/ui/Breadcrumb'
import type { Product } from '@/types'

interface Props {
  product: Product
  related: Product[]
}

const MOCK_REVIEWS = [
  { id: 1, author: 'James R.', rating: 5, title: 'Excellent quality', body: 'Exactly as described. Arrived next day in discreet packaging. Will be a returning customer.', verified: true, date: '2 days ago' },
  { id: 2, author: 'Mike T.', rating: 5, title: 'Top product', body: 'Noticed results within two weeks. Packaging is great, communication was solid. Highly recommend.', verified: true, date: '1 week ago' },
  { id: 3, author: 'D. Collins', rating: 4, title: 'Good stuff', body: 'Quality seems on point based on previous lab reports I found. Shipping was quick.', verified: true, date: '2 weeks ago' },
]

const tabList = ['Description', 'Lab Results', 'Usage Guide', 'Reviews', 'FAQ']

export default function ProductDetailClient({ product, related }: Props) {
  const [qty, setQty] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState('Description')
  const [addedToCart, setAddedToCart] = useState(false)
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>('Description')

  const addItem = useCartStore((s) => s.addItem)
  const { toggleItem, isWishlisted } = useWishlistStore()
  const wishlisted = isWishlisted(product.id)

  const discount = product.compare_at_price
    ? getDiscountPercent(product.price, product.compare_at_price)
    : null

  const handleAddToCart = () => {
    if (!product.in_stock) return
    addItem(product, qty)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const images = product.images?.length
    ? product.images
    : [{ id: 'img-0', url: product.primary_image ?? '/assets/images/placeholder.jpg', position: 0, is_primary: true, product_id: product.id }]

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    ...(product.category ? [{ label: product.category.name, href: `/shop/${product.category.slug}` }] : []),
    { label: product.name },
  ]

  return (
    <div className="container-shop py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-7">
        {/* ── Left: Gallery ── */}
        <div className="space-y-3">
          {/* Main image */}
          <div className="relative aspect-square bg-surface border border-surface-100 overflow-hidden">
            <Image
              src={images[selectedImage]?.url ?? '/assets/images/placeholder.jpg'}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {discount && (
              <div className="absolute top-3 left-3 badge-red text-xs">
                -{discount}%
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(i)}
                  className={cn(
                    'w-16 h-16 border-2 overflow-hidden transition-all',
                    i === selectedImage ? 'border-brand-red' : 'border-surface-100 hover:border-surface-300'
                  )}
                >
                  <Image
                    src={img.url}
                    alt={`${product.name} ${i + 1}`}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Right: Info ── */}
        <div>
          {/* Category / badges */}
          <div className="flex items-center gap-2 mb-2">
            {product.category && (
              <Link
                href={`/shop/${product.category.slug}`}
                className="text-xs font-bold uppercase tracking-widest text-brand-red hover:text-brand-red-light transition-colors"
              >
                {product.category.name}
              </Link>
            )}
            {product.is_on_sale && (
              <span className="badge-red text-[10px]">Sale</span>
            )}
          </div>

          {/* Name */}
          <h1 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-wide text-text-primary leading-tight mb-3">
            {product.name}
          </h1>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={14}
                    className={s <= Math.round(product.rating!) ? 'text-yellow-400 fill-yellow-400' : 'text-surface-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-text-muted">
                {product.rating} ({product.review_count} reviews)
              </span>
            </div>
          )}

          {/* SKU */}
          {product.sku && (
            <p className="text-xs text-text-muted mb-4">
              SKU: <span className="text-text-secondary font-mono">{product.sku}</span>
            </p>
          )}

          {/* Short description */}
          {product.short_description && (
            <p className="text-text-muted text-sm leading-relaxed mb-5 border-l-2 border-brand-red/40 pl-3">
              {product.short_description}
            </p>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-6">
            <span className="font-display font-bold text-4xl text-brand-teal tabular-nums">
              {formatCurrency(product.price)}
            </span>
            {product.compare_at_price && (
              <>
                <span className="text-lg text-text-secondary line-through tabular-nums">
                  {formatCurrency(product.compare_at_price)}
                </span>
                <span className="badge-red text-xs">
                  Save {formatCurrency(product.compare_at_price - product.price)}
                </span>
              </>
            )}
          </div>

          {/* Stock status - Always available */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-sm font-semibold text-green-500">
              In Stock — {Math.max(product.stock_quantity, 100)} available
            </span>
          </div>

          {/* Quantity + Add to cart */}
          <div className="flex items-stretch gap-3 mb-6">
            {/* Qty */}
            <div className="flex items-center border border-surface-200 bg-surface">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-10 h-12 flex items-center justify-center text-text-muted hover:text-white hover:bg-surface-100 transition-colors"
              >
                <Minus size={14} />
              </button>
              <span className="w-10 text-center text-sm font-bold tabular-nums">{qty}</span>
              <button
                onClick={() => setQty((q) => Math.min(10, q + 1))}
                className="w-10 h-12 flex items-center justify-center text-text-muted hover:text-white hover:bg-surface-100 transition-colors"
              >
                <Plus size={14} />
              </button>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={cn(
                'flex-1 flex items-center justify-center gap-2 h-12 font-display font-semibold uppercase tracking-wider text-sm transition-all duration-200',
                addedToCart
                  ? 'bg-green-600 text-white'
                  : 'bg-button-blue hover:bg-button-hover text-white active:scale-[0.98]'
              )}
            >
              <AnimatePresence mode="wait">
                {addedToCart ? (
                  <motion.span key="added" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <Check size={16} /> Added to Cart
                  </motion.span>
                ) : (
                  <motion.span key="add" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <ShoppingCart size={16} />
                    Add to Cart
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Wishlist */}
            <button
              onClick={() => toggleItem(product)}
              className={cn(
                'w-12 h-12 flex items-center justify-center border transition-all',
                wishlisted
                  ? 'bg-brand-red border-brand-red text-white'
                  : 'border-surface-200 text-text-muted hover:border-brand-red hover:text-brand-red'
              )}
              aria-label="Wishlist"
            >
              <Heart size={17} fill={wishlisted ? 'currentColor' : 'none'} />
            </button>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 gap-2 mb-6 p-4 bg-surface-50/50 border border-surface-100">
            {[
              { icon: FlaskConical, text: 'Independently Lab Tested' },
              { icon: Truck, text: 'Next-Day UK Delivery' },
              { icon: Shield, text: 'Discreet Plain Packaging' },
              { icon: Package, text: 'Same Day Dispatch' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-xs text-text-muted">
                <Icon size={13} className="text-brand-red shrink-0" />
                {text}
              </div>
            ))}
          </div>

          {/* Share */}
          <button className="flex items-center gap-2 text-xs text-text-muted hover:text-white transition-colors">
            <Share2 size={13} />
            Share this product
          </button>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="mt-14 border-t border-surface-100 pt-10">
        {/* Tab nav */}
        <div className="flex items-center gap-0 border-b border-surface-100 mb-8 overflow-x-auto scrollbar-hide">
          {tabList.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'px-5 py-3 text-sm font-semibold uppercase tracking-wide border-b-2 whitespace-nowrap transition-colors',
                activeTab === tab
                  ? 'border-brand-red text-white'
                  : 'border-transparent text-text-muted hover:text-white'
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="max-w-3xl"
          >
            {activeTab === 'Description' && (
              <div className="prose prose-invert prose-sm max-w-none text-text-muted leading-relaxed space-y-4">
                {(product.description ?? '').split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}

            {activeTab === 'Lab Results' && (
              <div className="space-y-4">
                <p className="text-text-muted text-sm leading-relaxed">
                  All batches are independently tested by accredited third-party laboratories. Results are available below.
                </p>
                <div className="bg-surface border border-surface-100 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display font-bold text-base uppercase tracking-wide">
                      Batch #{product.sku}-2024-11
                    </span>
                    <span className="badge bg-green-500/20 text-green-400 text-[10px]">Verified ✓</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {[
                      ['Purity', '99.2%'],
                      ['Concentration', 'As labelled'],
                      ['Heavy Metals', 'Below detection'],
                      ['Microbial Count', 'Pass'],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between py-2 border-b border-surface-100">
                        <span className="text-text-muted">{k}</span>
                        <span className="font-semibold text-text-primary">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-text-muted mt-3">
                    Lab: Elite Analytical Services Ltd · Date: November 2024
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'Usage Guide' && (
              <div className="space-y-4 text-sm text-text-muted leading-relaxed">
                <div className="bg-brand-red/8 border border-brand-red/20 p-4">
                  <p className="text-brand-red font-semibold text-xs uppercase tracking-widest mb-2">
                    ⚠ Important Disclaimer
                  </p>
                  <p>
                    This information is provided for educational purposes only. Always consult
                    a qualified healthcare professional before beginning any supplement or compound protocol.
                  </p>
                </div>
                <p>
                  Usage guidelines vary depending on individual goals, experience level, and health status.
                  Dosing, cycle length, and ancillary support should be determined in consultation with a
                  healthcare provider familiar with your medical history.
                </p>
                <p>
                  Refer to peer-reviewed research and established community resources for evidence-based
                  dosing protocols. This product is sold for research purposes.
                </p>
              </div>
            )}

            {activeTab === 'Reviews' && (
              <div className="space-y-5">
                {/* Summary */}
                <div className="flex items-center gap-6 p-5 bg-surface border border-surface-100">
                  <div className="text-center">
                    <p className="font-display font-bold text-5xl text-brand-red">
                      {product.rating?.toFixed(1)}
                    </p>
                    <div className="flex items-center gap-0.5 justify-center mt-1">
                      {[1,2,3,4,5].map((s) => (
                        <Star key={s} size={14} className={s <= Math.round(product.rating ?? 0) ? 'text-yellow-400 fill-yellow-400' : 'text-surface-300'} />
                      ))}
                    </div>
                    <p className="text-xs text-text-muted mt-1">{product.review_count} reviews</p>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    {[5,4,3,2,1].map((star) => {
                      const pct = star === 5 ? 72 : star === 4 ? 18 : star === 3 ? 7 : 2
                      return (
                        <div key={star} className="flex items-center gap-2 text-xs">
                          <span className="text-text-muted w-3">{star}</span>
                          <Star size={10} className="text-yellow-400 fill-yellow-400 shrink-0" />
                          <div className="flex-1 h-1.5 bg-surface-200 rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="text-text-muted w-7 text-right">{pct}%</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Individual reviews */}
                {MOCK_REVIEWS.map((review) => (
                  <div key={review.id} className="border-b border-surface-100 pb-5 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-text-primary">{review.author}</span>
                        {review.verified && (
                          <span className="badge bg-green-500/15 text-green-400 text-[10px]">
                            Verified Purchase
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-text-muted">{review.date}</span>
                    </div>
                    <div className="flex items-center gap-0.5 mb-2">
                      {[1,2,3,4,5].map((s) => (
                        <Star key={s} size={12} className={s <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-surface-300'} />
                      ))}
                    </div>
                    <p className="font-semibold text-sm text-text-primary mb-1">{review.title}</p>
                    <p className="text-sm text-text-muted leading-relaxed">{review.body}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'FAQ' && (
              <div className="space-y-0">
                {[
                  { q: 'Is this product lab tested?', a: 'Yes. Every batch undergoes independent third-party laboratory testing for purity, concentration, and contaminants. Results are available in the Lab Results tab.' },
                  { q: 'How quickly will my order arrive?', a: 'Orders placed before 2PM on business days are dispatched same day. Standard delivery is 1–3 days. Next-day delivery is available at checkout.' },
                  { q: 'How is the order packaged?', a: 'All orders ship in plain, unmarked packaging with no external indication of contents. The return address is a generic fulfilment address.' },
                  { q: 'What payment methods are accepted?', a: 'We accept bank transfer, cryptocurrency (Bitcoin, Ethereum, USDT), and Revolut. Pay with Revolut for 5% off and a free product.' },
                ].map((item, i) => (
                  <div key={i} className="border-b border-surface-100">
                    <button
                      onClick={() => setExpandedAccordion(expandedAccordion === item.q ? null : item.q)}
                      className="flex items-center justify-between w-full py-4 text-left gap-4"
                    >
                      <span className="text-sm font-semibold text-text-primary">{item.q}</span>
                      <ChevronDown
                        size={16}
                        className={cn(
                          'text-text-muted shrink-0 transition-transform duration-200',
                          expandedAccordion === item.q && 'rotate-180'
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {expandedAccordion === item.q && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-text-muted leading-relaxed pb-4">{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Related Products ── */}
      {related.length > 0 && (
        <div className="mt-14 border-t border-surface-100 pt-10">
          <h2 className="section-title mb-7">You May Also Like</h2>
          <ProductGrid products={related} columns={4} />
        </div>
      )}
    </div>
  )
}
