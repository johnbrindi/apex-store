'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { categories } from '@/data/mock'
import { cn, formatCurrency } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

interface ShopSidebarProps {
  selectedCategories: string[]
  setSelectedCategories: (v: string[]) => void
  inStockOnly: boolean
  setInStockOnly: (v: boolean) => void
  onSaleOnly: boolean
  setOnSaleOnly: (v: boolean) => void
  priceMax: number
  setPriceMax: (v: number) => void
}

function SidebarSection({
  title,
  children,
  defaultOpen = true,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-surface-100 pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full mb-3 group"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-text-secondary group-hover:text-white transition-colors">
          {title}
        </span>
        <ChevronDown
          size={14}
          className={cn(
            'text-text-muted transition-transform duration-200',
            !open && '-rotate-90'
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ShopSidebar({
  selectedCategories,
  setSelectedCategories,
  inStockOnly,
  setInStockOnly,
  onSaleOnly,
  setOnSaleOnly,
  priceMax,
  setPriceMax,
}: ShopSidebarProps) {
  const toggleCategory = (slug: string) => {
    setSelectedCategories(
      selectedCategories.includes(slug)
        ? selectedCategories.filter((s) => s !== slug)
        : [...selectedCategories, slug]
    )
  }

  return (
    <div className="space-y-0">
      {/* Categories */}
      <SidebarSection title="Categories">
        <ul className="space-y-0.5">
          <li>
            <button
              onClick={() => setSelectedCategories([])}
              className={cn(
                'w-full flex items-center justify-between px-2 py-2 text-sm transition-colors rounded',
                selectedCategories.length === 0
                  ? 'text-brand-red font-semibold bg-brand-red/5'
                  : 'text-text-muted hover:text-white'
              )}
            >
              <span className="flex items-center gap-2">
                <ChevronRight size={12} className="text-brand-red opacity-60" />
                All Products
              </span>
              <span className="text-xs text-text-muted">{130}</span>
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => toggleCategory(cat.slug)}
                className={cn(
                  'w-full flex items-center justify-between px-2 py-2 text-sm transition-colors',
                  selectedCategories.includes(cat.slug)
                    ? 'text-brand-red font-semibold bg-brand-red/5'
                    : 'text-text-muted hover:text-white'
                )}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={cn(
                      'w-3 h-3 border flex items-center justify-center shrink-0 transition-colors',
                      selectedCategories.includes(cat.slug)
                        ? 'bg-brand-red border-brand-red'
                        : 'border-surface-200'
                    )}
                  >
                    {selectedCategories.includes(cat.slug) && (
                      <span className="w-1.5 h-1.5 bg-white block" />
                    )}
                  </span>
                  {cat.name}
                </span>
                <span className="text-xs text-text-muted">{cat.product_count}</span>
              </button>
            </li>
          ))}
        </ul>
      </SidebarSection>

      {/* Price range */}
      <SidebarSection title="Max Price">
        <div className="px-1 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-muted">Up to</span>
            <span className="font-bold text-brand-red font-display">{formatCurrency(priceMax)}</span>
          </div>
          <input
            type="range"
            min={10}
            max={200}
            step={5}
            value={priceMax}
            onChange={(e) => setPriceMax(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-text-muted">
            <span>£10</span>
            <span>£200</span>
          </div>
        </div>
      </SidebarSection>

      {/* Availability */}
      <SidebarSection title="Availability">
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div
              onClick={() => setInStockOnly(!inStockOnly)}
              className={cn(
                'w-4 h-4 border flex items-center justify-center shrink-0 transition-colors cursor-pointer',
                inStockOnly ? 'bg-brand-red border-brand-red' : 'border-surface-200 hover:border-surface-300'
              )}
            >
              {inStockOnly && <span className="w-2 h-2 bg-white block" />}
            </div>
            <span className="text-sm text-text-muted group-hover:text-white transition-colors">
              In Stock Only
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <div
              onClick={() => setOnSaleOnly(!onSaleOnly)}
              className={cn(
                'w-4 h-4 border flex items-center justify-center shrink-0 transition-colors cursor-pointer',
                onSaleOnly ? 'bg-brand-red border-brand-red' : 'border-surface-200 hover:border-surface-300'
              )}
            >
              {onSaleOnly && <span className="w-2 h-2 bg-white block" />}
            </div>
            <span className="text-sm text-text-muted group-hover:text-white transition-colors">
              On Sale
            </span>
          </label>
        </div>
      </SidebarSection>

      {/* Quick links */}
      <SidebarSection title="Quick Links" defaultOpen={false}>
        <ul className="space-y-1.5">
          {[
            { label: 'Best for Bulking', href: '/shop?goal=bulking' },
            { label: 'Best for Cutting', href: '/shop?goal=cutting' },
            { label: 'Beginner Friendly', href: '/shop?level=beginner' },
            { label: 'Pre-Made Stacks', href: '/shop/pre-made-stacks' },
            { label: 'Currently On Sale', href: '/shop?sale=true' },
            { label: 'Lab Test Results', href: '/lab-tests' },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex items-center gap-2 text-sm text-text-muted hover:text-brand-red transition-colors py-1"
              >
                <ChevronRight size={12} className="text-brand-red/60" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </SidebarSection>

      {/* Info box */}
      <div className="bg-brand-red/8 border border-brand-red/20 p-4 mt-4">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1.5">
          Pay with Revolut
        </p>
        <p className="text-xs text-text-muted leading-relaxed">
          Use code <span className="text-white font-bold">REVO10</span> for 5% off and a free product with every order.
        </p>
        <Link
          href="/payments"
          className="inline-block mt-2.5 text-xs font-semibold text-brand-red hover:text-brand-red-light transition-colors underline"
        >
          Learn more →
        </Link>
      </div>
    </div>
  )
}
