'use client'

import { useState, useMemo } from 'react'
import { SlidersHorizontal, Grid2X2, List, ChevronDown, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductGrid from '@/components/shop/ProductGrid'
import ShopSidebar from '@/components/shop/ShopSidebar'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { products, categories } from '@/data/mock'
import { cn } from '@/lib/utils'
import type { SortOption } from '@/types'

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'best-selling', label: 'Best Selling' },
]

interface ShopClientProps {
  searchParams: { [key: string]: string | string[] | undefined }
  categorySlug?: string
  categoryName?: string
}

export default function ShopClient({ searchParams, categorySlug, categoryName }: ShopClientProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [sortDropOpen, setSortDropOpen] = useState(false)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categorySlug ? [categorySlug] : []
  )
  const [inStockOnly, setInStockOnly] = useState(false)
  const [onSaleOnly, setOnSaleOnly] = useState(searchParams?.sale === 'true')
  const [priceMax, setPriceMax] = useState(200)

  const filtered = useMemo(() => {
    let result = [...products]

    if (selectedCategories.length > 0) {
      result = result.filter((p) => {
        // Find the categories that match the selected slugs
        const matchingCatIds = new Set<string>()
        selectedCategories.forEach(slug => {
          // Check top-level
          const cat = categories.find(c => c.slug === slug)
          if (cat) {
            matchingCatIds.add(cat.id)
            // If we selected a parent, include all its children
            cat.children?.forEach(child => matchingCatIds.add(child.id))
          }
          // Check children directly
          categories.forEach(parent => {
            const child = parent.children?.find(c => c.slug === slug)
            if (child) {
              matchingCatIds.add(child.id)
              // Optionally include the parent as well if we want a product in parent category to show? 
              // Usually products should belong strictly to child if child is selected.
            }
          })
        })
        
        return p.category_id ? matchingCatIds.has(p.category_id) : false
      })
    }
    if (inStockOnly) result = result.filter((p) => p.in_stock)
    if (onSaleOnly) result = result.filter((p) => p.is_on_sale)
    result = result.filter((p) => p.price <= priceMax)

    switch (sortBy) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break
      case 'price-desc': result.sort((a, b) => b.price - a.price); break
      case 'rating': result.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0)); break
      case 'best-selling': result.sort((a, b) => (b.review_count ?? 0) - (a.review_count ?? 0)); break
      case 'newest': result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()); break
      default: result.sort((a, b) => (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0))
    }

    return result
  }, [selectedCategories, inStockOnly, onSaleOnly, priceMax, sortBy])

  const activeFiltersCount = [
    selectedCategories.length > 0,
    inStockOnly,
    onSaleOnly,
    priceMax < 200,
  ].filter(Boolean).length

  const clearFilters = () => {
    setSelectedCategories(categorySlug ? [categorySlug] : [])
    setInStockOnly(false)
    setOnSaleOnly(false)
    setPriceMax(200)
  }

  const sortLabel = SORT_OPTIONS.find((o) => o.value === sortBy)?.label ?? 'Featured'

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    ...(categoryName ? [{ label: categoryName }] : []),
  ]

  return (
    <div className="container-shop py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex items-start gap-7 mt-6">
        {/* Sidebar — desktop */}
        <aside className="hidden lg:block w-64 shrink-0">
          <ShopSidebar
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            inStockOnly={inStockOnly}
            setInStockOnly={setInStockOnly}
            onSaleOnly={onSaleOnly}
            setOnSaleOnly={setOnSaleOnly}
            priceMax={priceMax}
            setPriceMax={setPriceMax}
          />
        </aside>

        {/* Mobile sidebar drawer */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                key="sidebar-bg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 z-[60] lg:hidden"
                onClick={() => setSidebarOpen(false)}
              />
              <motion.div
                key="sidebar-drawer"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: 0.25 }}
                className="fixed inset-y-0 left-0 w-[300px] bg-white z-[70] lg:hidden overflow-y-auto p-5 border-r border-border-light"
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-display font-bold text-base uppercase tracking-wide text-text-primary">
                    Filters
                  </h3>
                  <button onClick={() => setSidebarOpen(false)} className="p-1.5 text-text-secondary hover:text-text-primary">
                    <X size={18} />
                  </button>
                </div>
                <ShopSidebar
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  inStockOnly={inStockOnly}
                  setInStockOnly={setInStockOnly}
                  onSaleOnly={onSaleOnly}
                  setOnSaleOnly={setOnSaleOnly}
                  priceMax={priceMax}
                  setPriceMax={setPriceMax}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 border border-border-light text-text-primary hover:text-button-blue text-sm font-semibold transition-colors"
            >
              <SlidersHorizontal size={15} />
              Filters
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-brand-red text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Results count */}
            <p className="text-sm text-text-secondary">
              <span className="text-text-primary font-semibold">{filtered.length}</span>{' '}
              {categoryName ? `${categoryName} products` : 'products'}
            </p>

            {/* Active filter pills */}
            {inStockOnly && (
              <button
                onClick={() => setInStockOnly(false)}
                className="flex items-center gap-1.5 px-3 py-1 bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-semibold"
              >
                In Stock <X size={11} />
              </button>
            )}
            {onSaleOnly && (
              <button
                onClick={() => setOnSaleOnly(false)}
                className="flex items-center gap-1.5 px-3 py-1 bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-semibold"
              >
                On Sale <X size={11} />
              </button>
            )}
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-xs text-text-muted hover:text-brand-red transition-colors underline"
              >
                Clear all
              </button>
            )}

            {/* Spacer */}
            <div className="ml-auto flex items-center gap-2">
              {/* View toggle */}
              <div className="hidden sm:flex items-center border border-surface-100">
                <button
                  onClick={() => setViewMode('grid')}
                  className={cn(
                    'p-2 transition-colors',
                    viewMode === 'grid' ? 'bg-surface text-white' : 'text-text-muted hover:text-white'
                  )}
                  aria-label="Grid view"
                >
                  <Grid2X2 size={15} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={cn(
                    'p-2 transition-colors',
                    viewMode === 'list' ? 'bg-surface text-white' : 'text-text-muted hover:text-white'
                  )}
                  aria-label="List view"
                >
                  <List size={15} />
                </button>
              </div>

              {/* Sort dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSortDropOpen((v) => !v)}
                  className="flex items-center gap-2 px-4 py-2.5 border border-border-light text-text-secondary hover:text-text-primary text-sm font-semibold transition-colors"
                >
                  Sort: {sortLabel}
                  <ChevronDown size={14} className={cn('transition-transform', sortDropOpen && 'rotate-180')} />
                </button>
                <AnimatePresence>
                  {sortDropOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-1 w-52 bg-white border border-border-light shadow-card-hover z-20"
                    >
                      {SORT_OPTIONS.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => { setSortBy(opt.value); setSortDropOpen(false) }}
                          className={cn(
                            'w-full text-left px-4 py-2.5 text-sm transition-colors',
                            sortBy === opt.value
                              ? 'text-button-blue bg-blue-50 font-semibold'
                              : 'text-text-primary hover:text-button-blue hover:bg-surface-100'
                          )}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Grid */}
          <ProductGrid
            products={filtered}
            columns={viewMode === 'list' ? 3 : 4}
            emptyMessage="Try adjusting your filters to find products."
          />

          {/* Pagination placeholder */}
          {filtered.length > 0 && (
            <div className="flex items-center justify-center gap-2 mt-10">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={cn(
                    'w-9 h-9 flex items-center justify-center text-sm font-semibold border transition-colors',
                    page === 1
                      ? 'bg-button-blue border-button-blue text-white'
                      : 'border-border-light text-text-primary hover:border-button-blue hover:text-button-blue'
                  )}
                >
                  {page}
                </button>
              ))}
              <button className="px-4 h-9 flex items-center justify-center text-sm font-semibold border border-border-light text-text-primary hover:border-button-blue hover:text-button-blue transition-colors">
                Next →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
