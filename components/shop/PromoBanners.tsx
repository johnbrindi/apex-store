'use client'

import Link from 'next/link'
import { Tag, Truck, CreditCard } from 'lucide-react'
import { motion } from 'framer-motion'

const promos = [
  {
    icon: CreditCard,
    eyebrow: 'Pay with Revolut',
    headline: 'Get 5% Off + Free Gift',
    sub: 'Use code REVO10 at checkout',
    href: '/payments',
    cta: 'Learn More',
    accent: 'bg-gradient-to-br from-violet-900/30 to-transparent',
  },
  {
    icon: Truck,
    eyebrow: 'Free Delivery',
    headline: 'Orders Over £149',
    sub: 'Next-day dispatch · Code: DELIVERY5',
    href: '/shipping',
    cta: 'Delivery Info',
    accent: 'bg-gradient-to-br from-emerald-900/20 to-transparent',
  },
  {
    icon: Tag,
    eyebrow: 'Pre-Made Stacks',
    headline: 'Expert Cycle Bundles',
    sub: 'Save up to 20% vs individual products',
    href: '/shop/pre-made-stacks',
    cta: 'View Stacks',
    accent: 'bg-gradient-to-br from-amber-900/20 to-transparent',
  },
]

export default function PromoBanners() {
  return (
    <section className="container-shop py-14 border-t border-surface-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {promos.map((promo, i) => (
          <motion.div
            key={promo.headline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Link
              href={promo.href}
              className={`group flex flex-col justify-between p-6 border border-surface-100 hover:border-surface-300 transition-all duration-300 min-h-[160px] overflow-hidden relative ${promo.accent}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-brand-red/10 border border-brand-red/20 flex items-center justify-center shrink-0">
                  <promo.icon size={20} className="text-brand-red" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">
                    {promo.eyebrow}
                  </p>
                  <h3 className="font-display font-bold text-xl uppercase tracking-wide text-text-primary leading-tight">
                    {promo.headline}
                  </h3>
                  <p className="text-sm text-text-muted mt-1">{promo.sub}</p>
                </div>
              </div>
              <div className="mt-4 text-xs font-bold uppercase tracking-widest text-brand-red group-hover:text-brand-red-light transition-colors flex items-center gap-1.5">
                {promo.cta}
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
