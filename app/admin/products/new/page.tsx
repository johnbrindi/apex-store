/**
 * /admin/products/new/page.tsx
 * ----------------------------
 * Full product creation form with integrated SEO Analyzer sidebar.
 * On save, redirects to the products list with a success state.
 */
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Save, Package, Tag, Globe, Image as ImageIcon, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import SEOAnalyzer from '@/components/admin/SEOAnalyzer'

// ─── Reusable helpers ─────────────────────────────────────────────────────

function Panel({ children, title, icon }: { children: React.ReactNode; title: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-sm border" style={{ background: '#162130', borderColor: 'rgba(255,255,255,0.08)' }}>
      <div className="flex items-center gap-2 px-5 py-3.5 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <span className="text-[#1E73BE]">{icon}</span>
        <h3 className="text-xs font-bold uppercase tracking-widest text-white/70">{title}</h3>
      </div>
      <div className="p-5 space-y-4">{children}</div>
    </div>
  )
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-1.5">{label}</label>
      {children}
      {hint && <p className="text-[11px] text-white/25 mt-1">{hint}</p>}
    </div>
  )
}

const inputBase = 'w-full bg-[#0F1923] border border-white/10 rounded-sm px-3 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#1E73BE]/60 transition-colors'

// ─── Page ─────────────────────────────────────────────────────────────────

export default function NewProductPage() {
  const router = useRouter()

  // Core product fields
  const [name, setName] = useState('')
  const [sku, setSku] = useState('')
  const [categoryId, setCategoryId] = useState('cat-1')
  const [price, setPrice] = useState('')
  const [compareAtPrice, setCompareAtPrice] = useState('')
  const [stockQty, setStockQty] = useState('50')
  const [primaryImage, setPrimaryImage] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  const [fullDescription, setFullDescription] = useState('')
  const [inStock, setInStock] = useState(true)
  const [isOnSale, setIsOnSale] = useState(false)
  const [isFeatured, setIsFeatured] = useState(false)

  // SEO fields
  const [seoTitle, setSeoTitle] = useState('')
  const [metaDescription, setMetaDescription] = useState('')
  const [focusKeyword, setFocusKeyword] = useState('')
  const [slug, setSlug] = useState('')
  const [internalLinks, setInternalLinks] = useState('')
  const [externalLinks, setExternalLinks] = useState('')

  // UI state
  const [seoScore, setSeoScore] = useState(0)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  // Auto-populate slug + seoTitle from name
  const handleNameChange = (val: string) => {
    setName(val)
    if (!seoTitle) setSeoTitle(val)
    setSlug(val.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''))
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      const product = {
        name,
        sku,
        slug: slug || name.toLowerCase().replace(/\s+/g, '-'),
        short_description: shortDescription,
        description: fullDescription,
        price: parseFloat(price) || 0,
        compare_at_price: compareAtPrice ? parseFloat(compareAtPrice) : null,
        stock_quantity: parseInt(stockQty) || 0,
        in_stock: inStock,
        is_on_sale: isOnSale,
        is_featured: isFeatured,
        category_id: categoryId,
        primary_image: primaryImage || null,
        images: primaryImage ? [{ id: `img-new-${Date.now()}`, product_id: 'new', url: primaryImage, position: 0, is_primary: true }] : [],
        tags: [],
        rating: null,
        review_count: 0,
        seo: {
          title: seoTitle,
          meta_description: metaDescription,
          focus_keyword: focusKeyword,
          internal_links: internalLinks,
          external_links: externalLinks,
        },
      }

      const res = await fetch('/api/admin/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      })

      if (!res.ok) throw new Error('Server error saving product')

      // ✅ Show success banner then redirect
      setSaved(true)
      setTimeout(() => router.push('/admin/products'), 1500)
    } catch (err: any) {
      setError(err.message || 'Error saving product.')
    } finally {
      setSaving(false)
    }
  }

  const scoreBadgeColor = seoScore >= 81 ? '#34d399' : seoScore >= 51 ? '#fbbf24' : '#f87171'

  return (
    <form onSubmit={handleSave}>
      {/* ── Success Overlay ──────────────────────────────── */}
      {saved && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="flex flex-col items-center gap-3 p-10 rounded-sm border" style={{ background: '#162130', borderColor: '#34d399aa' }}>
            <CheckCircle2 size={48} className="text-emerald-400" />
            <p className="text-white font-bold text-lg">Product Saved!</p>
            <p className="text-white/50 text-sm">Redirecting to Products list…</p>
          </div>
        </div>
      )}

      {/* ── Header ───────────────────────────────────────── */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Link href="/admin/products" className="p-1.5 text-white/40 hover:text-white transition-colors">
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="font-display font-bold text-xl uppercase tracking-wide text-white">Add Product</h1>
            <p className="text-white/30 text-xs mt-0.5">Fill in all details, check your SEO score, then save.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* Live SEO Score Pill */}
          <div
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-sm border text-xs font-bold"
            style={{ background: `${scoreBadgeColor}18`, borderColor: `${scoreBadgeColor}50`, color: scoreBadgeColor }}
          >
            SEO: {seoScore}/100
          </div>
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-white rounded-sm transition-colors disabled:opacity-50"
            style={{ background: '#1E73BE' }}
          >
            <Save size={15} />
            {saving ? 'Saving…' : 'Save Product'}
          </button>
        </div>
      </div>

      {/* ── Error Banner ─────────────────────────────────── */}
      {error && (
        <div className="mb-4 px-4 py-3 rounded-sm border border-red-500/40 bg-red-500/10 text-red-400 text-sm font-medium">
          ⚠ {error}
        </div>
      )}

      {/* ── Two-column layout ─────────────────────────────── */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6 items-start">

        {/* LEFT: Product form fields */}
        <div className="space-y-5">

          <Panel title="Product Information" icon={<Package size={14} />}>
            <Field label="Product Name *" hint="The full product name as displayed on the storefront.">
              <input required type="text" value={name} onChange={e => handleNameChange(e.target.value)}
                placeholder="e.g. Testosterone Enanthate 300mg — Pharmaqo Labs" className={inputBase} />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="SKU *">
                <input required type="text" value={sku} onChange={e => setSku(e.target.value)}
                  placeholder="e.g. TEST-E-300" className={inputBase} />
              </Field>
              <Field label="Category ID" hint="cat-1 Oral · cat-2 Injectable · cat-3 Fat Burners · cat-4 SARMs · cat-5 PCT · cat-8 Sexual">
                <input type="text" value={categoryId} onChange={e => setCategoryId(e.target.value)} className={inputBase} />
              </Field>
            </div>
          </Panel>

          <Panel title="Pricing & Stock" icon={<Tag size={14} />}>
            <div className="grid grid-cols-3 gap-4">
              <Field label="Price (£) *">
                <input required type="number" step="0.01" value={price} onChange={e => setPrice(e.target.value)}
                  placeholder="29.99" className={inputBase} />
              </Field>
              <Field label="Compare At (£)" hint="Original / crossed-out price">
                <input type="number" step="0.01" value={compareAtPrice} onChange={e => setCompareAtPrice(e.target.value)}
                  placeholder="—" className={inputBase} />
              </Field>
              <Field label="Stock Qty">
                <input type="number" value={stockQty} onChange={e => setStockQty(e.target.value)} className={inputBase} />
              </Field>
            </div>
            <div className="flex gap-6 pt-1">
              {[
                { label: 'In Stock', val: inStock, set: setInStock },
                { label: 'On Sale', val: isOnSale, set: setIsOnSale },
                { label: 'Featured', val: isFeatured, set: setIsFeatured },
              ].map(({ label, val, set }) => (
                <label key={label} className="flex items-center gap-2 text-sm text-white/70 cursor-pointer select-none">
                  <input type="checkbox" checked={val} onChange={e => set(e.target.checked)} className="accent-[#1E73BE]" />
                  {label}
                </label>
              ))}
            </div>
          </Panel>

          <Panel title="Product Image" icon={<ImageIcon size={14} />}>
            <Field label="Primary Image URL" hint="Paste a direct WEBP or JPG image URL.">
              <input type="url" value={primaryImage} onChange={e => setPrimaryImage(e.target.value)}
                placeholder="https://steroids-uk.com/wp-content/uploads/..." className={inputBase} />
            </Field>
            {primaryImage && (
              <div className="mt-2 w-24 h-24 rounded-sm border overflow-hidden bg-white/5" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                <Image src={primaryImage} alt="Preview" width={96} height={96} className="w-full h-full object-contain" unoptimized />
              </div>
            )}
          </Panel>

          <Panel title="Content & Descriptions" icon={<Package size={14} />}>
            <Field label="Short Description" hint="Brief summary shown below the price on the product page.">
              <textarea rows={2} value={shortDescription} onChange={e => setShortDescription(e.target.value)}
                placeholder="e.g. Premium injectable testosterone with long-ester for sustained release."
                className={`${inputBase} resize-none`} />
            </Field>
            <Field label="Full Description (HTML)" hint='Use <h2>, <h3>, <p> tags. Headings and 600+ words improve your SEO score.'>
              <textarea rows={12} value={fullDescription} onChange={e => setFullDescription(e.target.value)}
                placeholder={`<h2>What is Testosterone Enanthate?</h2>\n<p>Testosterone Enanthate is a synthetic...</p>`}
                className={`${inputBase} resize-y font-mono text-xs leading-relaxed`} />
            </Field>
          </Panel>

          {/* SEO Settings Panel */}
          <Panel title="SEO Settings" icon={<Globe size={14} />}>
            {/* Focus Keyword */}
            <Field label="Focus Keyword" hint="The primary search term you want this page to rank for.">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-3.5 h-3.5 text-[#1E73BE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35" />
                  </svg>
                </span>
                <input type="text" value={focusKeyword} onChange={e => setFocusKeyword(e.target.value)}
                  placeholder="e.g. testosterone enanthate uk" className={`${inputBase} pl-9`} />
              </div>
            </Field>

            <div className="w-full h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />

            {/* SEO Title */}
            <Field label={`SEO / Meta Title — ${seoTitle.length}/60 chars`}>
              <input type="text" value={seoTitle} onChange={e => setSeoTitle(e.target.value)} maxLength={70}
                placeholder="e.g. Buy Testosterone Enanthate UK | Steroids UK" className={inputBase} />
              <div className="mt-1 h-1 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.min((seoTitle.length / 60) * 100, 100)}%`,
                    background: seoTitle.length < 50 ? '#fbbf24' : seoTitle.length <= 60 ? '#34d399' : '#f87171',
                  }} />
              </div>
            </Field>

            {/* Slug */}
            <Field label="URL Slug" hint="Auto-generated from the product name. Use hyphens, no spaces.">
              <div className="flex items-center gap-2">
                <span className="text-white/20 text-xs shrink-0 whitespace-nowrap">/product/</span>
                <input type="text" value={slug} onChange={e => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'))}
                  placeholder="testosterone-enanthate-300mg" className={`${inputBase} flex-1`} />
              </div>
            </Field>

            {/* Meta Description */}
            <Field label={`Meta Description — ${metaDescription.length}/160 chars`}
              hint="Shown in Google search results. Aim for 120–160 characters.">
              <textarea rows={3} maxLength={170} value={metaDescription} onChange={e => setMetaDescription(e.target.value)}
                placeholder="Buy lab-tested Testosterone Enanthate 300mg online in the UK. Discreet delivery, verified purity certificates. Shop Steroids UK."
                className={`${inputBase} resize-none`} />
              <div className="mt-1 h-1 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.min((metaDescription.length / 160) * 100, 100)}%`,
                    background: metaDescription.length < 120 ? '#fbbf24' : metaDescription.length <= 160 ? '#34d399' : '#f87171',
                  }} />
              </div>
            </Field>

            {/* Links */}
            <div className="grid grid-cols-2 gap-4">
              <Field label="Internal Links" hint="One URL per line. Link to related pages on your site.">
                <textarea rows={3} value={internalLinks} onChange={e => setInternalLinks(e.target.value)}
                  placeholder={"/shop/injectable-solutions\n/blog/testosterone-enanthate-uk-guide"}
                  className={`${inputBase} resize-none text-xs`} />
              </Field>
              <Field label="External Links" hint="One URL per line. Link to trusted external sources.">
                <textarea rows={3} value={externalLinks} onChange={e => setExternalLinks(e.target.value)}
                  placeholder="https://en.wikipedia.org/wiki/Testosterone_enanthate"
                  className={`${inputBase} resize-none text-xs`} />
              </Field>
            </div>
          </Panel>

        </div>

        {/* RIGHT: Sticky SEO Analyzer Sidebar */}
        <div className="xl:sticky xl:top-6">
          <SEOAnalyzer
            title={seoTitle || name}
            content={fullDescription}
            slug={slug}
            focusKeyword={focusKeyword}
            metaDescription={metaDescription}
            onScoreChange={setSeoScore}
          />
        </div>

      </div>
    </form>
  )
}
