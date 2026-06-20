'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

type ProductModalProps = {
    isOpen: boolean
    onClose: () => void
    product: any | null
    onSave: (product: any) => void
}

export default function ProductModal({ isOpen, onClose, product, onSave }: ProductModalProps) {
    const [formData, setFormData] = useState<any>({})
    const [loading, setLoading] = useState(false)
    const isEdit = !!product

    useEffect(() => {
        if (product) {
            setFormData(product)
        } else {
            setFormData({
                name: '',
                sku: '',
                price: '',
                compare_at_price: '',
                stock_quantity: 0,
                in_stock: true,
                is_on_sale: false,
                is_featured: false,
                category_id: 'cat-1',
                primary_image: ''
            })
        }
    }, [product, isOpen])

    if (!isOpen) return null

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        if (type === 'checkbox') {
            setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked })
        } else if (type === 'number') {
            setFormData({ ...formData, [name]: parseFloat(value) || 0 })
        } else {
            setFormData({ ...formData, [name]: value })
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const url = isEdit ? `/api/admin/products/${product.id}` : '/api/admin/products'
            const method = isEdit ? 'PUT' : 'POST'

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (!res.ok) throw new Error('Failed to save product')
            const data = await res.json()
            onSave(data.product)
            onClose()
        } catch (err) {
            console.error(err)
            alert("Error saving product.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <div className="bg-[#162130] w-full max-w-2xl rounded-sm border border-white/10 shadow-2xl flex flex-col max-h-[90vh]">
                <div className="flex items-center justify-between p-5 border-b border-white/10 shrink-0">
                    <h2 className="text-lg font-bold text-white uppercase tracking-wide">
                        {isEdit ? 'Edit Product' : 'Add Product'}
                    </h2>
                    <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
                        <X size={20} />
                    </button>
                </div>

                <div className="p-5 overflow-y-auto flex-1">
                    <form id="product-form" onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                                <label className="block text-xs font-semibold uppercase text-white/50 mb-1">Name</label>
                                <input required type="text" name="name" value={formData.name || ''} onChange={handleChange} className="w-full bg-[#0F1923] border border-white/10 rounded-sm px-3 py-2 text-white text-sm focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase text-white/50 mb-1">SKU</label>
                                <input required type="text" name="sku" value={formData.sku || ''} onChange={handleChange} className="w-full bg-[#0F1923] border border-white/10 rounded-sm px-3 py-2 text-white text-sm focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase text-white/50 mb-1">Category ID</label>
                                <input required type="text" name="category_id" value={formData.category_id || ''} onChange={handleChange} className="w-full bg-[#0F1923] border border-white/10 rounded-sm px-3 py-2 text-white text-sm focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase text-white/50 mb-1">Price (£)</label>
                                <input required type="number" step="0.01" name="price" value={formData.price || ''} onChange={handleChange} className="w-full bg-[#0F1923] border border-white/10 rounded-sm px-3 py-2 text-white text-sm focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase text-white/50 mb-1">Compare At Price</label>
                                <input type="number" step="0.01" name="compare_at_price" value={formData.compare_at_price || ''} onChange={handleChange} className="w-full bg-[#0F1923] border border-white/10 rounded-sm px-3 py-2 text-white text-sm focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase text-white/50 mb-1">Stock Quantity</label>
                                <input required type="number" name="stock_quantity" value={formData.stock_quantity || 0} onChange={handleChange} className="w-full bg-[#0F1923] border border-white/10 rounded-sm px-3 py-2 text-white text-sm focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase text-white/50 mb-1">Primary Image URL</label>
                                <input type="text" name="primary_image" value={formData.primary_image || ''} onChange={handleChange} className="w-full bg-[#0F1923] border border-white/10 rounded-sm px-3 py-2 text-white text-sm focus:outline-none" />
                            </div>
                        </div>

                        <div className="flex gap-4 pt-2">
                            <label className="flex items-center gap-2 text-sm text-white/80 cursor-pointer">
                                <input type="checkbox" name="in_stock" checked={formData.in_stock || false} onChange={handleChange} className="accent-[#1E73BE]" />
                                In Stock
                            </label>
                            <label className="flex items-center gap-2 text-sm text-white/80 cursor-pointer">
                                <input type="checkbox" name="is_on_sale" checked={formData.is_on_sale || false} onChange={handleChange} className="accent-[#1E73BE]" />
                                On Sale
                            </label>
                            <label className="flex items-center gap-2 text-sm text-white/80 cursor-pointer">
                                <input type="checkbox" name="is_featured" checked={formData.is_featured || false} onChange={handleChange} className="accent-[#1E73BE]" />
                                Featured
                            </label>
                        </div>
                    </form>
                </div>

                <div className="p-5 border-t border-white/10 shrink-0 flex justify-end gap-3">
                    <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-semibold text-white/60 hover:text-white transition-colors">
                        Cancel
                    </button>
                    <button type="submit" form="product-form" disabled={loading} className="px-5 py-2 text-sm font-bold text-white rounded-sm transition-colors disabled:opacity-50" style={{ background: '#1E73BE' }}>
                        {loading ? 'Saving...' : 'Save Product'}
                    </button>
                </div>
            </div>
        </div>
    )
}
