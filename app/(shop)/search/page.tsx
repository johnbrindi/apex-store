'use client'

import { useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { Search } from 'lucide-react'
import { Suspense } from 'react'
import ProductGrid from '@/components/shop/ProductGrid'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { products } from '@/data/mock'

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') ?? ''

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.short_description?.toLowerCase().includes(q) ||
        p.tags?.some((t) => t.toLowerCase().includes(q)) ||
        p.category?.name.toLowerCase().includes(q)
    )
  }, [query])

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Search', href: '/search' },
    ...(query ? [{ label: `"${query}"` }] : []),
  ]

  return (
    <div className="container-shop py-8">
      <Breadcrumb items={breadcrumbItems} className="mb-7" />

      <div className="flex items-start gap-3 mb-8">
        <div className="w-10 h-10 bg-brand-red/10 border border-brand-red/20 flex items-center justify-center shrink-0">
          <Search size={18} className="text-brand-red" />
        </div>
        <div>
          <h1 className="font-display font-bold text-2xl uppercase tracking-wide text-white">
            {query ? `Results for "${query}"` : 'Search Products'}
          </h1>
          <p className="text-text-muted text-sm mt-0.5">
            {query
              ? `${results.length} product${results.length !== 1 ? 's' : ''} found`
              : 'Enter a search term above to find products'}
          </p>
        </div>
      </div>

      {query && results.length === 0 && (
        <div className="bg-surface border border-surface-100 p-10 text-center mb-8">
          <Search size={40} className="text-surface-300 mx-auto mb-4" />
          <p className="font-display font-semibold text-lg uppercase tracking-wide text-text-secondary mb-2">
            No results found
          </p>
          <p className="text-sm text-text-muted mb-5">
            We couldn&apos;t find any products matching &quot;{query}&quot;. Try a different search term.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Testosterone', 'Anavar', 'Clenbuterol', 'SARMs', 'PCT', 'HGH'].map((term) => (
              <a
                key={term}
                href={`/search?q=${encodeURIComponent(term)}`}
                className="px-3 py-1.5 bg-surface border border-surface-200 hover:border-brand-red hover:text-brand-red text-text-muted text-xs font-semibold transition-colors"
              >
                {term}
              </a>
            ))}
          </div>
        </div>
      )}

      {results.length > 0 && (
        <ProductGrid products={results} columns={4} />
      )}

      {!query && (
        <div className="text-center py-16">
          <Search size={64} className="text-surface-300 mx-auto mb-5" />
          <p className="text-text-secondary font-semibold text-lg mb-2">
            Search our full product range
          </p>
          <p className="text-text-muted text-sm">
            Use the search bar above to find products, categories, or brands.
          </p>
        </div>
      )}
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container-shop py-8"><p className="text-text-muted">Loading…</p></div>}>
      <SearchResults />
    </Suspense>
  )
}
