'use client'

import { useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '@/data/mock'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'

const categories = ['All', ...Array.from(new Set(faqs.map((f) => f.category)))]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [openId, setOpenId] = useState<string | null>(null)
  const [search, setSearch] = useState('')

  const filtered = faqs.filter((faq) => {
    const matchCat = activeCategory === 'All' || faq.category === activeCategory
    const matchSearch =
      !search.trim() ||
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="container-shop py-12 max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3">Help Centre</p>
        <h1 className="font-display font-bold text-4xl uppercase tracking-wide text-white mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-text-muted text-sm">
          Can&apos;t find your answer here?{' '}
          <a href="/contact" className="text-brand-red hover:underline">Contact us</a> — we respond within 24 hours.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-7">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search questions…"
          className="input-base pl-11 py-3.5"
        />
      </div>

      {/* Category tabs */}
      <div className="flex items-center gap-2 flex-wrap mb-7">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              'px-4 py-1.5 text-xs font-semibold uppercase tracking-wide border transition-colors',
              activeCategory === cat
                ? 'bg-brand-red border-brand-red text-white'
                : 'border-surface-200 text-text-muted hover:border-surface-300 hover:text-white'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ list */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-text-secondary font-semibold">No matching questions found.</p>
          <button
            onClick={() => { setSearch(''); setActiveCategory('All') }}
            className="text-brand-red text-sm mt-2 hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="space-y-0 border border-surface-100">
          {filtered.map((faq, i) => (
            <div
              key={faq.id}
              className={cn('border-b border-surface-100 last:border-b-0')}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="flex items-start justify-between w-full px-6 py-5 text-left gap-4 hover:bg-surface-50/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="font-display font-bold text-brand-red text-sm tabular-nums mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-semibold text-text-primary leading-snug">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  size={16}
                  className={cn(
                    'text-text-muted shrink-0 mt-0.5 transition-transform duration-200',
                    openId === faq.id && 'rotate-180 text-brand-red'
                  )}
                />
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 pl-[3.75rem] text-sm text-text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      )}

      {/* Contact CTA */}
      <div className="mt-12 bg-surface border border-surface-100 p-8 text-center">
        <h3 className="font-display font-bold text-xl uppercase tracking-wide text-white mb-2">
          Still Have Questions?
        </h3>
        <p className="text-text-muted text-sm mb-5">
          Our team is available via email and live chat. We typically respond within a few hours.
        </p>
        <a href="/contact" className="btn-primary px-7 py-3 inline-flex">
          Contact Support
        </a>
      </div>
    </div>
  )
}
