/**
 * /admin/seo/page.tsx
 * -------------------
 * Standalone SEO Analyzer tool — a dedicated page in the admin panel
 * where you can type or paste any title, content, and meta details
 * and get a real-time Rank Math-style SEO analysis score and checklist.
 *
 * Navigate to: /admin/seo
 */
'use client'

import { useState } from 'react'
import { Zap, RotateCcw } from 'lucide-react'
import SEOAnalyzer from '@/components/admin/SEOAnalyzer'

const inputBase = 'w-full bg-[#0F1923] border border-white/10 rounded-sm px-3 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#1E73BE]/60 transition-colors'

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
    return (
        <div>
            <label className="block text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-1.5">{label}</label>
            {children}
            {hint && <p className="text-[11px] text-white/25 mt-1">{hint}</p>}
        </div>
    )
}

export default function AdminSEOPage() {
    const [focusKeyword, setFocusKeyword] = useState('')
    const [seoTitle, setSeoTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [metaDescription, setMetaDescription] = useState('')
    const [content, setContent] = useState('')
    const [seoScore, setSeoScore] = useState(0)

    const scoreBadgeColor = seoScore >= 81 ? '#34d399' : seoScore >= 51 ? '#fbbf24' : '#f87171'

    const handleReset = () => {
        setFocusKeyword('')
        setSeoTitle('')
        setSlug('')
        setMetaDescription('')
        setContent('')
        setSeoScore(0)
    }

    return (
        <div className="space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="font-display font-bold text-xl uppercase tracking-wide text-white flex items-center gap-2">
                        <Zap size={18} className="text-[#1E73BE]" /> SEO Analyzer
                    </h1>
                    <p className="text-white/40 text-xs mt-0.5">
                        Paste any content and check its SEO score in real time — just like Rank Math.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    {/* Live score pill */}
                    <div
                        className="flex items-center gap-2 px-3 py-1.5 rounded-sm border text-xs font-bold"
                        style={{ background: `${scoreBadgeColor}18`, borderColor: `${scoreBadgeColor}50`, color: scoreBadgeColor }}
                    >
                        Score: {seoScore} / 100
                    </div>
                    <button
                        onClick={handleReset}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-white/50 hover:text-white border border-white/10 hover:border-white/30 rounded-sm transition-colors"
                    >
                        <RotateCcw size={12} /> Reset
                    </button>
                </div>
            </div>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6 items-start">

                {/* LEFT: Input Fields */}
                <div
                    className="rounded-sm border space-y-5 p-6"
                    style={{ background: '#162130', borderColor: 'rgba(255,255,255,0.08)' }}
                >
                    <div className="flex items-center gap-2 pb-1 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-white/50">Content to Analyze</h2>
                    </div>

                    {/* Focus Keyword */}
                    <Field label="Focus Keyword *" hint="The primary search term — most important field for analysis.">
                        <div className="relative">
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#1E73BE] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <circle cx="11" cy="11" r="8" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35" />
                            </svg>
                            <input
                                type="text"
                                value={focusKeyword}
                                onChange={e => setFocusKeyword(e.target.value)}
                                placeholder="e.g. buy steroids uk, testosterone enanthate uk…"
                                className={`${inputBase} pl-9`}
                            />
                        </div>
                    </Field>

                    {/* SEO Title */}
                    <Field label={`SEO / Page Title — ${seoTitle.length}/60 chars`} hint="The <title> tag of the page. Ideal: 50–60 characters.">
                        <input
                            type="text"
                            value={seoTitle}
                            onChange={e => setSeoTitle(e.target.value)}
                            maxLength={70}
                            placeholder="e.g. Buy Testosterone Enanthate UK | Steroids UK"
                            className={inputBase}
                        />
                        <div className="mt-1.5 h-1 rounded-full bg-white/10 overflow-hidden">
                            <div
                                className="h-full rounded-full transition-all duration-300"
                                style={{
                                    width: `${Math.min((seoTitle.length / 60) * 100, 100)}%`,
                                    background: seoTitle.length < 50 ? '#fbbf24' : seoTitle.length <= 60 ? '#34d399' : '#f87171',
                                }}
                            />
                        </div>
                    </Field>

                    {/* URL Slug */}
                    <Field label="URL Slug / Permalink" hint="The page path. Should contain your focus keyword with hyphens.">
                        <div className="flex items-center gap-2">
                            <span className="text-white/20 text-xs shrink-0">/product/</span>
                            <input
                                type="text"
                                value={slug}
                                onChange={e => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'))}
                                placeholder="buy-steroids-uk"
                                className={`${inputBase} flex-1`}
                            />
                        </div>
                    </Field>

                    {/* Meta Description */}
                    <Field label={`Meta Description — ${metaDescription.length}/160 chars`} hint="Shown in Google results. Ideal: 120–160 characters.">
                        <textarea
                            rows={3}
                            maxLength={170}
                            value={metaDescription}
                            onChange={e => setMetaDescription(e.target.value)}
                            placeholder="Buy lab-tested Testosterone Enanthate 300mg online in the UK. Verified purity, discreet delivery. Order from Steroids UK today."
                            className={`${inputBase} resize-none`}
                        />
                        <div className="mt-1 h-1 rounded-full bg-white/10 overflow-hidden">
                            <div
                                className="h-full rounded-full transition-all duration-300"
                                style={{
                                    width: `${Math.min((metaDescription.length / 160) * 100, 100)}%`,
                                    background: metaDescription.length < 120 ? '#fbbf24' : metaDescription.length <= 160 ? '#34d399' : '#f87171',
                                }}
                            />
                        </div>
                    </Field>

                    {/* Full Content */}
                    <Field
                        label="Page Content (HTML or plain text)"
                        hint="Paste the full body content. Use <h2>, <h3>, <p> tags. 600+ words for best SEO results."
                    >
                        <textarea
                            rows={16}
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            placeholder={`<h2>What Is Testosterone Enanthate?</h2>\n<p>Testosterone Enanthate is a synthetic anabolic-androgenic steroid (AAS) designed to mimic the effects of the naturally occurring hormone testosterone...</p>\n\n<h2>Why Buy from Steroids UK?</h2>\n<p>All of our products are independently laboratory tested...</p>`}
                            className={`${inputBase} resize-y font-mono text-xs leading-relaxed`}
                        />
                        {/* Word count badge */}
                        <div className="flex justify-end mt-1">
                            <span className="text-[11px] text-white/30">
                                {content.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length} words
                            </span>
                        </div>
                    </Field>
                </div>

                {/* RIGHT: SEO Analyzer Sidebar */}
                <div className="xl:sticky xl:top-6">
                    <SEOAnalyzer
                        title={seoTitle}
                        content={content}
                        slug={slug}
                        focusKeyword={focusKeyword}
                        metaDescription={metaDescription}
                        onScoreChange={setSeoScore}
                    />
                </div>

            </div>
        </div>
    )
}
