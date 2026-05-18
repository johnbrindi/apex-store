'use client'

import { useState } from 'react'
import { Plus, Edit2, Trash2, ChevronRight, Tag, Check, X } from 'lucide-react'
import { categories as initialCategories } from '@/data/mock'
import { cn } from '@/lib/utils'
import type { Category } from '@/types'

export default function AdminCategoriesPage() {
  const [cats, setCats] = useState<Category[]>(initialCategories)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editName, setEditName] = useState('')
  const [addingNew, setAddingNew] = useState(false)
  const [newName, setNewName] = useState('')
  const [newSlug, setNewSlug] = useState('')

  const startEdit = (cat: Category) => {
    setEditingId(cat.id)
    setEditName(cat.name)
  }

  const saveEdit = (id: string) => {
    setCats((prev) => prev.map((c) => c.id === id ? { ...c, name: editName } : c))
    setEditingId(null)
  }

  const deleteCategory = (id: string) => {
    setCats((prev) => prev.filter((c) => c.id !== id))
  }

  const addCategory = () => {
    if (!newName.trim()) return
    const slug = newSlug || newName.toLowerCase().replace(/\s+/g, '-')
    setCats((prev) => [
      ...prev,
      { id: `cat-${Date.now()}`, name: newName, slug, product_count: 0 },
    ])
    setNewName('')
    setNewSlug('')
    setAddingNew(false)
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-xl uppercase tracking-wide text-white">
            Categories
          </h1>
          <p className="text-white/40 text-xs mt-0.5">{cats.length} categories</p>
        </div>
        <button
          onClick={() => setAddingNew(true)}
          className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-white rounded-sm transition-colors"
          style={{ background: '#1E73BE' }}
        >
          <Plus size={15} />
          Add Category
        </button>
      </div>

      {/* Add new form */}
      {addingNew && (
        <div className="rounded-sm border p-5 flex flex-wrap items-end gap-3" style={{ background: '#162130', borderColor: '#1E73BE80' }}>
          <div className="flex-1 min-w-[160px]">
            <label className="block text-xs font-semibold text-white/50 mb-1.5">Category Name</label>
            <input
              type="text"
              value={newName}
              onChange={(e) => {
                setNewName(e.target.value)
                setNewSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))
              }}
              placeholder="e.g. New Category"
              className="w-full border p-2.5 text-sm focus:outline-none rounded-sm text-white"
              style={{ background: '#0F1923', borderColor: 'rgba(255,255,255,0.1)' }}
              autoFocus
            />
          </div>
          <div className="flex-1 min-w-[160px]">
            <label className="block text-xs font-semibold text-white/50 mb-1.5">Slug</label>
            <input
              type="text"
              value={newSlug}
              onChange={(e) => setNewSlug(e.target.value)}
              placeholder="e.g. new-category"
              className="w-full border p-2.5 text-sm font-mono focus:outline-none rounded-sm text-white"
              style={{ background: '#0F1923', borderColor: 'rgba(255,255,255,0.1)' }}
            />
          </div>
          <div className="flex items-center gap-2 pb-0.5">
            <button
              onClick={addCategory}
              className="flex items-center gap-1.5 px-4 py-2.5 text-white text-sm font-semibold uppercase tracking-wide rounded-sm transition-colors"
              style={{ background: '#1E73BE' }}
            >
              <Check size={14} /> Save
            </button>
            <button
              onClick={() => { setAddingNew(false); setNewName(''); setNewSlug('') }}
              className="flex items-center gap-1.5 px-4 py-2.5 border border-white/10 text-white/40 hover:text-white text-sm font-semibold uppercase tracking-wide transition-colors rounded-sm"
            >
              <X size={14} /> Cancel
            </button>
          </div>
        </div>
      )}

      {/* Categories list */}
      <div className="rounded-sm border overflow-hidden" style={{ background: '#162130', borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-0 border-b px-5 py-3" style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
          {['', 'Name', 'Slug', 'Products', 'Actions'].map((h) => (
            <div key={h} className="text-[10px] font-bold uppercase tracking-widest text-white/30 px-2 first:px-0">
              {h}
            </div>
          ))}
        </div>

        <div className="divide-y divide-white/5">
          {cats.map((cat) => (
            <div key={cat.id}>
              {/* Parent category row */}
              <div className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-0 px-5 py-3.5 hover:bg-white/5 transition-colors">
                <div className="pr-3">
                  <Tag size={14} className="text-[#1E73BE]" />
                </div>

                <div className="px-2">
                  {editingId === cat.id ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      onKeyDown={(e) => { if (e.key === 'Enter') saveEdit(cat.id); if (e.key === 'Escape') setEditingId(null) }}
                      className="w-full border p-1.5 text-sm focus:outline-none rounded-sm text-white max-w-[200px]"
                      style={{ background: '#0F1923', borderColor: 'rgba(255,255,255,0.1)' }}
                      autoFocus
                    />
                  ) : (
                    <span className="font-semibold text-white/80">{cat.name}</span>
                  )}
                </div>

                <div className="px-2">
                  <code className="text-xs text-white/40 font-mono px-2 py-0.5 border rounded-sm" style={{ background: '#0F1923', borderColor: 'rgba(255,255,255,0.1)' }}>
                    {cat.slug}
                  </code>
                </div>

                <div className="px-2 text-center">
                  <span className="text-sm text-white/60 font-semibold">
                    {cat.product_count ?? 0}
                  </span>
                </div>

                <div className="px-2 flex items-center gap-2">
                  {editingId === cat.id ? (
                    <>
                      <button onClick={() => saveEdit(cat.id)} className="p-1.5 text-green-400 hover:text-green-300 transition-colors">
                        <Check size={14} />
                      </button>
                      <button onClick={() => setEditingId(null)} className="p-1.5 text-white/30 hover:text-white transition-colors">
                        <X size={14} />
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => startEdit(cat)} className="p-1.5 text-white/30 hover:text-[#1E73BE] transition-colors">
                        <Edit2 size={14} />
                      </button>
                      <button onClick={() => deleteCategory(cat.id)} className="p-1.5 text-white/30 hover:text-red-400 transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Sub-categories */}
              {cat.children?.map((child) => (
                <div
                  key={child.id}
                  className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-0 px-5 py-2.5 transition-colors border-t border-white/5 hover:bg-white/5"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="pr-3 flex items-center justify-end">
                    <ChevronRight size={11} className="text-[#1E73BE]/50" />
                  </div>
                  <div className="px-2">
                    <span className="text-sm text-white/50">{child.name}</span>
                  </div>
                  <div className="px-2">
                    <code className="text-xs text-white/30 font-mono px-2 py-0.5 border rounded-sm" style={{ background: '#0F1923', borderColor: 'rgba(255,255,255,0.05)' }}>
                      {child.slug}
                    </code>
                  </div>
                  <div className="px-2 text-center">
                    <span className="text-xs text-white/40">{child.product_count ?? 0}</span>
                  </div>
                  <div className="px-2 flex items-center gap-2">
                    <button className="p-1 text-white/30 hover:text-[#1E73BE] transition-colors">
                      <Edit2 size={12} />
                    </button>
                    <button className="p-1 text-white/30 hover:text-red-400 transition-colors">
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {cats.length === 0 && (
          <div className="text-center py-12">
            <Tag size={32} className="text-white/20 mx-auto mb-3" />
            <p className="text-white/40 font-semibold">No categories yet</p>
            <p className="text-white/30 text-sm mt-1">Add your first category to get started</p>
          </div>
        )}
      </div>

      {/* Info box */}
      <div className="rounded-sm border p-4 text-sm" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.08)' }}>
        <p className="font-semibold text-white/70 mb-1">Category Tips</p>
        <ul className="space-y-1 text-xs text-white/40">
          <li className="flex items-start gap-2"><span className="text-[#1E73BE] mt-0.5">→</span> Slugs are used in URLs — keep them short and hyphen-separated.</li>
          <li className="flex items-start gap-2"><span className="text-[#1E73BE] mt-0.5">→</span> Sub-categories inherit the parent URL path (e.g. /shop/parent/child).</li>
          <li className="flex items-start gap-2"><span className="text-[#1E73BE] mt-0.5">→</span> Deleting a category will not delete its products — they will become uncategorised.</li>
        </ul>
      </div>
    </div>
  )
}
