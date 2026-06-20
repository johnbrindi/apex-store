'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Plus, Search, Filter, Edit2, Trash2, Eye, ChevronUp, ChevronDown } from 'lucide-react'
import { formatCurrency, cn } from '@/lib/utils'
import ProductModal from '@/components/admin/ProductModal'

const statusOptions = ['All', 'In Stock', 'Out of Stock', 'On Sale']

export default function AdminProductsPage() {
  const [allProducts, setAllProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [sortCol, setSortCol] = useState<'name' | 'price' | 'stock' | 'rating'>('name')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<any | null>(null)

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/products')
      const data = await res.json()
      setAllProducts(data.products || [])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return
    try {
      const res = await fetch(`/api/admin/products/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Failed to delete')
      setAllProducts(prev => prev.filter(p => p.id !== id))
    } catch (err) {
      alert("Error deleting product")
    }
  }

  const handleSave = (savedProduct: any) => {
    setAllProducts(prev => {
      const exists = prev.find(p => p.id === savedProduct.id)
      if (exists) {
        return prev.map(p => p.id === savedProduct.id ? savedProduct : p)
      } else {
        return [savedProduct, ...prev]
      }
    })
  }

  const openAddModal = (e: React.MouseEvent) => {
    e.preventDefault()
    setEditingProduct(null)
    setIsModalOpen(true)
  }

  const openEditModal = (product: any) => {
    setEditingProduct(product)
    setIsModalOpen(true)
  }

  const filtered = allProducts
    .filter((p) => {
      const matchSearch =
        !search.trim() ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.sku?.toLowerCase().includes(search.toLowerCase())
      const matchStatus =
        statusFilter === 'All' ||
        (statusFilter === 'In Stock' && p.in_stock) ||
        (statusFilter === 'Out of Stock' && !p.in_stock) ||
        (statusFilter === 'On Sale' && p.is_on_sale)
      return matchSearch && matchStatus
    })
    .sort((a, b) => {
      let cmp = 0
      if (sortCol === 'name') cmp = a.name.localeCompare(b.name)
      if (sortCol === 'price') cmp = a.price - b.price
      if (sortCol === 'stock') cmp = a.stock_quantity - b.stock_quantity
      if (sortCol === 'rating') cmp = (a.rating ?? 0) - (b.rating ?? 0)
      return sortDir === 'asc' ? cmp : -cmp
    })

  const handleSort = (col: typeof sortCol) => {
    if (sortCol === col) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    else { setSortCol(col); setSortDir('asc') }
  }

  const SortIcon = ({ col }: { col: typeof sortCol }) =>
    sortCol === col ? (
      sortDir === 'asc' ? <ChevronUp size={12} className="text-brand-red" /> : <ChevronDown size={12} className="text-brand-red" />
    ) : (
      <ChevronUp size={12} className="text-surface-300" />
    )

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-xl uppercase tracking-wide text-white">Products</h1>
          <p className="text-white/40 text-xs mt-0.5">{allProducts.length} products total</p>
        </div>
        <button onClick={openAddModal}
          className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-white rounded-sm transition-colors"
          style={{ background: '#1E73BE' }}>
          <Plus size={15} /> Add Product
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3 p-4 rounded-sm border"
        style={{ background: '#162130', borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="relative flex-1 min-w-[200px]">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products or SKU…"
            className="w-full pl-9 pr-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none rounded-sm border"
            style={{ background: '#0F1923', borderColor: 'rgba(255,255,255,0.1)' }} />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {statusOptions.map((s) => (
            <button key={s} onClick={() => setStatusFilter(s)}
              className={cn(
                'px-3 py-1.5 text-xs font-semibold uppercase tracking-wide border transition-colors capitalize rounded-sm',
                statusFilter === s ? 'text-white border-[#1E73BE]' : 'text-white/40 border-white/10 hover:text-white hover:border-white/30'
              )}
              style={statusFilter === s ? { background: '#1E73BE20' } : {}}>
              {s}
            </button>
          ))}
        </div>
        <span className="text-xs text-white/30 ml-auto">
          {filtered.length} result{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Table */}
      <div className="rounded-sm border overflow-hidden" style={{ background: '#162130', borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b" style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
                <th className="px-4 py-3 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">Product</span>
                </th>
                <th className="px-4 py-3 text-left">
                  <button onClick={() => handleSort('price')} className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-white transition-colors">
                    Price <SortIcon col="price" />
                  </button>
                </th>
                <th className="px-4 py-3 text-left">
                  <button onClick={() => handleSort('stock')} className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-white transition-colors">
                    Stock <SortIcon col="stock" />
                  </button>
                </th>
                <th className="px-4 py-3 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">Status</span>
                </th>
                <th className="px-4 py-3 text-left">
                  <button onClick={() => handleSort('rating')} className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-white transition-colors">
                    Rating <SortIcon col="rating" />
                  </button>
                </th>
                <th className="px-4 py-3 text-right">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((product) => (
                <tr key={product.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-sm border overflow-hidden shrink-0 bg-white/5" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                        <Image src={product.primary_image ?? '/assets/images/placeholder.jpg'} alt={product.name} width={40} height={40} className="w-full h-full object-contain" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-white/80 truncate max-w-[200px]">{product.name}</p>
                        <p className="text-xs text-white/30 font-mono">{product.sku}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-display font-bold text-white tabular-nums">{formatCurrency(product.price)}</span>
                    {product.compare_at_price && (
                      <span className="ml-2 text-xs text-white/30 line-through">{formatCurrency(product.compare_at_price)}</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <span className={cn('text-sm font-semibold tabular-nums', product.stock_quantity === 0 ? 'text-red-400' : product.stock_quantity < 10 ? 'text-yellow-400' : 'text-text-secondary')}>
                      {product.stock_quantity}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col gap-1">
                      <span className={cn('badge text-[10px]', product.in_stock ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400')}>
                        {product.in_stock ? 'In Stock' : 'Out of Stock'}
                      </span>
                      {product.is_on_sale && (
                        <span className="badge-red text-[10px]">On Sale</span>
                      )}
                      {product.is_featured && (
                        <span className="badge bg-amber-500/20 text-amber-400 text-[10px]">Featured</span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    {product.rating ? (
                      <div className="flex items-center gap-1.5">
                        <span className="text-yellow-400 text-xs">★</span>
                        <span className="text-sm font-semibold text-white/60">{product.rating}</span>
                        <span className="text-xs text-white/30">({product.review_count})</span>
                      </div>
                    ) : (
                      <span className="text-xs text-white/20">No reviews</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5 justify-end">
                      <Link href={`/product/${product.slug}`} target="_blank"
                        className="p-1.5 text-white/30 hover:text-white transition-colors" title="View on storefront">
                        <Eye size={14} />
                      </Link>
                      <button onClick={() => openEditModal(product)} className="p-1.5 text-white/30 hover:text-[#1E73BE] transition-colors" title="Edit">
                        <Edit2 size={14} />
                      </button>
                      <button onClick={() => handleDelete(product.id)} className="p-1.5 text-white/30 hover:text-red-400 transition-colors" title="Delete">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {loading && (
          <div className="text-center py-12 text-white/40 font-semibold">
            Loading products...
          </div>
        )}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/40 font-semibold">No products found</p>
            <p className="text-white/25 text-sm mt-1">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={editingProduct}
        onSave={handleSave}
      />
    </div>
  )
}
