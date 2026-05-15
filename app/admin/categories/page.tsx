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
          <h1 className="font-display font-bold text-2xl uppercase tracking-wide text-white">
            Categories
          </h1>
          <p className="text-text-muted text-sm mt-0.5">{cats.length} categories</p>
        </div>
        <button
          onClick={() => setAddingNew(true)}
          className="btn-primary px-4 py-2.5 text-sm flex items-center gap-2"
        >
          <Plus size={15} />
          Add Category
        </button>
      </div>

      {/* Add new form */}
      {addingNew && (
        <div className="bg-surface border border-brand-red/30 p-5 flex flex-wrap items-end gap-3">
          <div className="flex-1 min-w-[160px]">
            <label className="label-base">Category Name</label>
            <input
              type="text"
              value={newName}
              onChange={(e) => {
                setNewName(e.target.value)
                setNewSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))
              }}
              placeholder="e.g. New Category"
              className="input-base py-2.5 text-sm"
              autoFocus
            />
          </div>
          <div className="flex-1 min-w-[160px]">
            <label className="label-base">Slug</label>
            <input
              type="text"
              value={newSlug}
              onChange={(e) => setNewSlug(e.target.value)}
              placeholder="e.g. new-category"
              className="input-base py-2.5 text-sm font-mono"
            />
          </div>
          <div className="flex items-center gap-2 pb-0.5">
            <button
              onClick={addCategory}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-brand-red text-white text-sm font-semibold uppercase tracking-wide hover:bg-brand-red-dark transition-colors"
            >
              <Check size={14} /> Save
            </button>
            <button
              onClick={() => { setAddingNew(false); setNewName(''); setNewSlug('') }}
              className="flex items-center gap-1.5 px-4 py-2.5 border border-surface-200 text-text-muted hover:text-white text-sm font-semibold uppercase tracking-wide transition-colors"
            >
              <X size={14} /> Cancel
            </button>
          </div>
        </div>
      )}

      {/* Categories list */}
      <div className="bg-surface border border-surface-100 overflow-hidden">
        <div className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-0 border-b border-surface-100 bg-surface-50/30 px-5 py-3">
          {['', 'Name', 'Slug', 'Products', 'Actions'].map((h) => (
            <div key={h} className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-2 first:px-0">
              {h}
            </div>
          ))}
        </div>

        <div className="divide-y divide-surface-100">
          {cats.map((cat) => (
            <div key={cat.id}>
              {/* Parent category row */}
              <div className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-0 px-5 py-3.5 hover:bg-surface-50/20 transition-colors">
                <div className="pr-3">
                  <Tag size={14} className="text-brand-red" />
                </div>

                <div className="px-2">
                  {editingId === cat.id ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      onKeyDown={(e) => { if (e.key === 'Enter') saveEdit(cat.id); if (e.key === 'Escape') setEditingId(null) }}
                      className="input-base py-1.5 text-sm max-w-[200px]"
                      autoFocus
                    />
                  ) : (
                    <span className="font-semibold text-text-primary">{cat.name}</span>
                  )}
                </div>

                <div className="px-2">
                  <code className="text-xs text-text-muted font-mono bg-surface-50 px-2 py-0.5 border border-surface-100">
                    {cat.slug}
                  </code>
                </div>

                <div className="px-2 text-center">
                  <span className="text-sm text-text-secondary font-semibold">
                    {cat.product_count ?? 0}
                  </span>
                </div>

                <div className="px-2 flex items-center gap-2">
                  {editingId === cat.id ? (
                    <>
                      <button onClick={() => saveEdit(cat.id)} className="p-1.5 text-green-400 hover:text-green-300 transition-colors">
                        <Check size={14} />
                      </button>
                      <button onClick={() => setEditingId(null)} className="p-1.5 text-text-muted hover:text-white transition-colors">
                        <X size={14} />
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => startEdit(cat)} className="p-1.5 text-text-muted hover:text-brand-red transition-colors">
                        <Edit2 size={14} />
                      </button>
                      <button onClick={() => deleteCategory(cat.id)} className="p-1.5 text-text-muted hover:text-red-400 transition-colors">
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
                  className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-0 px-5 py-2.5 bg-surface-50/10 hover:bg-surface-50/20 transition-colors border-t border-surface-100/50"
                >
                  <div className="pr-3 flex items-center justify-end">
                    <ChevronRight size={11} className="text-brand-red/50" />
                  </div>
                  <div className="px-2">
                    <span className="text-sm text-text-muted">{child.name}</span>
                  </div>
                  <div className="px-2">
                    <code className="text-xs text-text-muted/70 font-mono bg-surface-50 px-2 py-0.5 border border-surface-100">
                      {child.slug}
                    </code>
                  </div>
                  <div className="px-2 text-center">
                    <span className="text-xs text-text-muted">{child.product_count ?? 0}</span>
                  </div>
                  <div className="px-2 flex items-center gap-2">
                    <button className="p-1 text-text-muted hover:text-brand-red transition-colors">
                      <Edit2 size={12} />
                    </button>
                    <button className="p-1 text-text-muted hover:text-red-400 transition-colors">
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
            <Tag size={32} className="text-surface-300 mx-auto mb-3" />
            <p className="text-text-secondary font-semibold">No categories yet</p>
            <p className="text-text-muted text-sm mt-1">Add your first category to get started</p>
          </div>
        )}
      </div>

      {/* Info box */}
      <div className="bg-surface-50/30 border border-surface-100 p-4 text-sm text-text-muted">
        <p className="font-semibold text-text-secondary mb-1">Category Tips</p>
        <ul className="space-y-1 text-xs">
          <li className="flex items-start gap-2"><span className="text-brand-red mt-0.5">→</span> Slugs are used in URLs — keep them short and hyphen-separated.</li>
          <li className="flex items-start gap-2"><span className="text-brand-red mt-0.5">→</span> Sub-categories inherit the parent URL path (e.g. /shop/parent/child).</li>
          <li className="flex items-start gap-2"><span className="text-brand-red mt-0.5">→</span> Deleting a category will not delete its products — they will become uncategorised.</li>
        </ul>
      </div>
    </div>
  )
}
