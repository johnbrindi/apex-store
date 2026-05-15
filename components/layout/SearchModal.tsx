'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Search, X, ArrowRight, TrendingUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useUIStore } from '@/store/uiStore'
import { products, categories } from '@/data/mock'
import { formatCurrency } from '@/lib/utils'

const POPULAR_SEARCHES = [
  'Testosterone Enanthate',
  'Anavar',
  'Clenbuterol',
  'Dianabol',
  'Nolvadex PCT',
  'SARMs Stack',
  'Fat Burner',
  'HGH',
]

export default function SearchModal() {
  const { searchOpen, closeSearch } = useUIStore()
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const filtered = query.trim().length > 1
    ? products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.tags?.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 6)
    : []

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 80)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setQuery('')
    }
    return () => { document.body.style.overflow = '' }
  }, [searchOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSearch()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [closeSearch])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
      closeSearch()
    }
  }

  return (
    <AnimatePresence>
      {searchOpen && (
        <>
          <motion.div
            key="search-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            onClick={closeSearch}
          />

          <motion.div
            key="search-modal"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 z-[110] p-4 pt-6 md:pt-12 max-w-3xl mx-auto"
          >
            {/* Search box */}
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex items-center bg-dark-50 border-2 border-brand-red shadow-red-glow">
                <Search size={20} className="ml-4 text-brand-red shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for products, categories, brands…"
                  className="flex-1 bg-transparent text-text-primary placeholder:text-text-muted text-base px-4 py-4 focus:outline-none"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    className="p-2 mr-1 text-text-muted hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                )}
                <button
                  type="submit"
                  className="h-full px-5 py-4 bg-brand-red text-white font-semibold text-sm uppercase tracking-wide hover:bg-brand-red-dark transition-colors"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Results / suggestions */}
            <div className="mt-2 bg-dark-50 border border-surface-100 shadow-card max-h-[70vh] overflow-y-auto">
              {filtered.length > 0 ? (
                <>
                  <div className="px-4 pt-3 pb-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                      Products ({filtered.length})
                    </p>
                  </div>
                  {filtered.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                      onClick={closeSearch}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-surface-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-surface shrink-0 overflow-hidden">
                        <Image
                          src={product.primary_image ?? '/assets/images/placeholder.jpg'}
                          alt={product.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-text-primary truncate">
                          {product.name}
                        </p>
                        <p className="text-xs text-text-muted truncate">
                          {product.short_description}
                        </p>
                      </div>
                      <span className="text-brand-red font-display font-bold text-sm shrink-0">
                        {formatCurrency(product.price)}
                      </span>
                    </Link>
                  ))}
                  <div className="px-4 py-3 border-t border-surface-100">
                    <button
                      onClick={handleSubmit as unknown as React.MouseEventHandler}
                      className="flex items-center gap-2 text-sm text-brand-red hover:text-brand-red-light font-semibold transition-colors"
                    >
                      View all results for &quot;{query}&quot;
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="px-4 pt-4 pb-2">
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-muted">
                      <TrendingUp size={12} />
                      Popular Searches
                    </p>
                  </div>
                  <div className="px-4 pb-4 flex flex-wrap gap-2">
                    {POPULAR_SEARCHES.map((s) => (
                      <button
                        key={s}
                        onClick={() => {
                          setQuery(s)
                          inputRef.current?.focus()
                        }}
                        className="px-3 py-1.5 bg-surface text-text-secondary hover:text-white hover:bg-surface-200 border border-surface-100 text-xs font-medium transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>

                  <div className="border-t border-surface-100 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
                      Browse Categories
                    </p>
                    <div className="grid grid-cols-2 gap-1">
                      {categories.slice(0, 6).map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/shop/${cat.slug}`}
                          onClick={closeSearch}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-text-secondary hover:text-white hover:bg-surface-50 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 bg-brand-red rounded-full shrink-0" />
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            <button
              onClick={closeSearch}
              className="absolute -right-2 -top-2 w-8 h-8 bg-surface border border-surface-200 flex items-center justify-center text-text-muted hover:text-white transition-colors rounded-full"
            >
              <X size={15} />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
