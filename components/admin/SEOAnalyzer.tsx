/**
 * SEOAnalyzer.tsx
 * ---------------
 * A professional, interactive SEO analysis sidebar component modeled after
 * Rank Math Premium. Accepts reactive props from a parent form and runs a
 * comprehensive rules engine every time the inputs change.
 *
 * Usage:
 *   <SEOAnalyzer
 *     title={title}
 *     content={content}
 *     slug={slug}
 *     focusKeyword={focusKeyword}
 *     onScoreChange={(score) => setScore(score)}
 *   />
 */
'use client'

import { useState, useEffect, useCallback } from 'react'
import {
    CheckCircle2,
    XCircle,
    AlertCircle,
    ChevronDown,
    ChevronUp,
    Search,
    BarChart2,
    BookOpen,
    Zap,
} from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────

type CheckStatus = 'pass' | 'fail' | 'warn'

interface CheckResult {
    id: string
    label: string
    description: string
    status: CheckStatus
    points: number    // points awarded when passing
    earned: boolean   // whether the check passed
}

interface SEOAnalyzerProps {
    title: string
    content: string
    slug: string
    focusKeyword: string
    metaDescription?: string
    onScoreChange?: (score: number) => void
}

// ─── Helpers ──────────────────────────────────────────────────────────────

function countWords(text: string): number {
    if (!text.trim()) return 0
    return text.trim().split(/\s+/).length
}

function stripHtml(html: string): string {
    return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

function getScoreTier(score: number): {
    label: string
    textClass: string
    bgClass: string
    barColor: string
} {
    if (score >= 81) return {
        label: 'Excellent',
        textClass: 'text-emerald-400',
        bgClass: 'bg-emerald-400/15',
        barColor: '#34d399', // emerald-400
    }
    if (score >= 51) return {
        label: 'Fair',
        textClass: 'text-amber-400',
        bgClass: 'bg-amber-400/15',
        barColor: '#fbbf24', // amber-400
    }
    return {
        label: 'Poor',
        textClass: 'text-red-400',
        bgClass: 'bg-red-400/15',
        barColor: '#f87171', // red-400
    }
}

// ─── Sub-Components ───────────────────────────────────────────────────────

function StatusIcon({ status }: { status: CheckStatus }) {
    if (status === 'pass') return (
        <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
    )
    if (status === 'warn') return (
        <AlertCircle size={15} className="text-amber-400 shrink-0 mt-0.5" />
    )
    return (
        <XCircle size={15} className="text-red-400 shrink-0 mt-0.5" />
    )
}

function AccordionSection({
    title,
    icon,
    checks,
    defaultOpen = false,
}: {
    title: string
    icon: React.ReactNode
    checks: CheckResult[]
    defaultOpen?: boolean
}) {
    const [open, setOpen] = useState(defaultOpen)
    const passed = checks.filter(c => c.earned).length
    const total = checks.length

    return (
        <div className="rounded-sm border" style={{ borderColor: 'rgba(255,255,255,0.08)', background: '#0F1923' }}>
            {/* Header */}
            <button
                type="button"
                onClick={() => setOpen(o => !o)}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/5 transition-colors"
            >
                <div className="flex items-center gap-2.5">
                    <span className="text-[#1E73BE]">{icon}</span>
                    <span className="text-sm font-semibold text-white tracking-wide">{title}</span>
                </div>
                <div className="flex items-center gap-2.5">
                    <span className="text-[11px] font-bold text-white/40 tabular-nums">
                        {passed}/{total}
                    </span>
                    {open ? <ChevronUp size={14} className="text-white/40" /> : <ChevronDown size={14} className="text-white/40" />}
                </div>
            </button>

            {/* Check List */}
            {open && (
                <div className="border-t divide-y" style={{ borderColor: 'rgba(255,255,255,0.06)', borderTopColor: 'rgba(255,255,255,0.06)' }}>
                    {checks.map(check => (
                        <div key={check.id} className="flex items-start gap-3 px-4 py-3 hover:bg-white/5 transition-colors">
                            <StatusIcon status={check.status} />
                            <div className="min-w-0">
                                <p className="text-xs font-semibold text-white/80 leading-snug">{check.label}</p>
                                <p className="text-[11px] text-white/40 mt-0.5 leading-snug">{check.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

// ─── Main Component ───────────────────────────────────────────────────────

export default function SEOAnalyzer({
    title,
    content,
    slug,
    focusKeyword,
    metaDescription = '',
    onScoreChange,
}: SEOAnalyzerProps) {
    const [basicChecks, setBasicChecks] = useState<CheckResult[]>([])
    const [additionalChecks, setAdditionalChecks] = useState<CheckResult[]>([])
    const [readabilityChecks, setReadabilityChecks] = useState<CheckResult[]>([])
    const [score, setScore] = useState(0)

    /**
     * The Rules Engine — runs whenever any input prop changes.
     * Each check returns a CheckResult object indicating pass/fail/warn.
     */
    const runAnalysis = useCallback(() => {
        const kw = focusKeyword.toLowerCase().trim()
        const plainContent = stripHtml(content)
        const totalWords = countWords(plainContent)
        // First 10% slice used for intro keyword detection below
        const keywordInFirstTenth = kw && plainContent.toLowerCase().split(/\s+/).slice(0, Math.ceil(totalWords * 0.1)).join(' ').includes(kw)

        // ── Basic SEO ──────────────────────────────────────
        const kwInTitle: CheckResult = (() => {
            const pass = !!kw && title.toLowerCase().includes(kw)
            return {
                id: 'kw-title',
                label: 'Focus Keyword in SEO Title',
                description: pass
                    ? `"${focusKeyword}" found in title.`
                    : kw ? `Add "${focusKeyword}" to your title.` : 'Set a focus keyword first.',
                status: pass ? 'pass' : 'fail',
                points: 20,
                earned: pass,
            }
        })()

        const kwInSlug: CheckResult = (() => {
            const pass = !!kw && slug.toLowerCase().includes(kw.replace(/\s+/g, '-'))
            return {
                id: 'kw-slug',
                label: 'Focus Keyword in Slug / URL',
                description: pass
                    ? `"${focusKeyword}" found in URL slug.`
                    : kw ? `Include "${focusKeyword}" in your slug.` : 'Set a focus keyword first.',
                status: pass ? 'pass' : 'fail',
                points: 10,
                earned: pass,
            }
        })()

        const kwInIntro: CheckResult = (() => {
            const pass = !!kw && keywordInFirstTenth
            return {
                id: 'kw-intro',
                label: 'Keyword in First 10% of Content',
                description: pass
                    ? 'Focus keyword appears early in the content — great!'
                    : kw ? 'Use the focus keyword within the first few sentences.' : 'Set a focus keyword first.',
                status: pass ? 'pass' : 'warn',
                points: 10,
                earned: pass,
            }
        })()

        const wordCountCheck: CheckResult = (() => {
            const excellent = totalWords >= 600
            const fair = totalWords >= 300
            const pass = excellent || fair
            return {
                id: 'word-count',
                label: `Content Word Count (${totalWords} words)`,
                description: excellent
                    ? 'Excellent! 600+ words is ideal for search engines.'
                    : fair
                        ? 'Good — aim for 600+ words for better rankings.'
                        : 'Content is too short. Write at least 300 words.',
                status: excellent ? 'pass' : fair ? 'warn' : 'fail',
                points: excellent ? 30 : fair ? 15 : 0,
                earned: pass,
            }
        })()

        // ── Additional Reviews ─────────────────────────────
        const densityCheck: CheckResult = (() => {
            if (!kw || totalWords === 0) return {
                id: 'density',
                label: 'Keyword Density',
                description: 'Set a focus keyword and add content.',
                status: 'warn',
                points: 10,
                earned: false,
            }
            const occurrences = (plainContent.toLowerCase().match(new RegExp(kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length
            const density = (occurrences / totalWords) * 100
            const pass = density >= 1 && density <= 2.5
            const tooLow = density < 1
            return {
                id: 'density',
                label: `Keyword Density (${density.toFixed(2)}%)`,
                description: pass
                    ? `Ideal density between 1%–2.5%. Currently ${density.toFixed(2)}%.`
                    : tooLow
                        ? `Use "${focusKeyword}" more often (currently ${density.toFixed(2)}%, aim for 1%–2.5%).`
                        : `Keyword overuse detected (${density.toFixed(2)}%). Reduce usage to avoid spam penalties.`,
                status: pass ? 'pass' : tooLow ? 'warn' : 'fail',
                points: 10,
                earned: pass,
            }
        })()

        const titleLengthCheck: CheckResult = (() => {
            const len = title.length
            const pass = len >= 50 && len <= 60
            const tooShort = len < 50
            return {
                id: 'title-length',
                label: `Title Length (${len} chars)`,
                description: pass
                    ? 'Perfect title length (50–60 characters).'
                    : tooShort
                        ? `Title is too short (${len} chars). Aim for 50–60.`
                        : `Title is too long (${len} chars). Keep it under 60.`,
                status: pass ? 'pass' : tooShort ? 'warn' : 'warn',
                points: 10,
                earned: pass,
            }
        })()

        const metaDescCheck: CheckResult = (() => {
            const len = metaDescription.length
            const pass = len >= 120 && len <= 160
            return {
                id: 'meta-desc',
                label: `Meta Description (${len} chars)`,
                description: pass
                    ? 'Meta description has ideal length (120–160 chars).'
                    : len === 0
                        ? 'No meta description set. Aim for 120–160 characters.'
                        : len < 120
                            ? `Meta description too short (${len} chars). Aim for 120+.`
                            : `Meta description too long (${len} chars). Keep under 160.`,
                status: pass ? 'pass' : len === 0 ? 'fail' : 'warn',
                points: 5,
                earned: pass,
            }
        })()

        // ── Readability ──────────────────────────────────
        const paragraphLengthCheck: CheckResult = (() => {
            const paragraphs = content.split(/<\/p>|<br\s*\/?>\s*<br\s*\/?>/i).map(stripHtml).filter(p => p.trim())
            const longParagraphs = paragraphs.filter(p => countWords(p) > 120)
            const pass = longParagraphs.length === 0
            return {
                id: 'para-length',
                label: 'Paragraph Length',
                description: pass
                    ? 'All paragraphs are a readable length (≤120 words).'
                    : `${longParagraphs.length} paragraph(s) are too long. Split them into shorter chunks.`,
                status: pass ? 'pass' : 'warn',
                points: 5,
                earned: pass,
            }
        })()

        const headingStructureCheck: CheckResult = (() => {
            const hasHeading = /<h[2-3]/i.test(content)
            return {
                id: 'headings',
                label: 'Heading Structure (H2 / H3)',
                description: hasHeading
                    ? 'Content uses subheadings to break up sections — great for readability.'
                    : 'Add at least one H2 or H3 heading to structure your content.',
                status: hasHeading ? 'pass' : 'fail',
                points: 0, // bonus only
                earned: hasHeading,
            }
        })()

        const kwInMetaDesc: CheckResult = (() => {
            const pass = !!kw && metaDescription.toLowerCase().includes(kw)
            return {
                id: 'kw-meta',
                label: 'Keyword in Meta Description',
                description: pass
                    ? `"${focusKeyword}" found in meta description.`
                    : kw ? `Include "${focusKeyword}" in the meta description.` : 'Set a focus keyword first.',
                status: pass ? 'pass' : 'warn',
                points: 0, // bonus only
                earned: pass,
            }
        })()

        const newBasic = [kwInTitle, kwInSlug, kwInIntro, wordCountCheck]
        const newAdditional = [densityCheck, titleLengthCheck, metaDescCheck]
        const newReadability = [paragraphLengthCheck, headingStructureCheck, kwInMetaDesc]

        // Calculate score out of 100
        const allChecks = [...newBasic, ...newAdditional, ...newReadability]
        const earned = allChecks.reduce((sum, c) => sum + (c.earned ? c.points : 0), 0)
        const total = allChecks.reduce((sum, c) => sum + c.points, 0)
        const finalScore = total > 0 ? Math.round((earned / total) * 100) : 0

        setBasicChecks(newBasic)
        setAdditionalChecks(newAdditional)
        setReadabilityChecks(newReadability)
        setScore(finalScore)
        onScoreChange?.(finalScore)
    }, [title, content, slug, focusKeyword, metaDescription, onScoreChange])

    useEffect(() => {
        runAnalysis()
    }, [runAnalysis])

    const tier = getScoreTier(score)
    const passCount = [...basicChecks, ...additionalChecks, ...readabilityChecks].filter(c => c.earned).length
    const totalCount = [...basicChecks, ...additionalChecks, ...readabilityChecks].length

    return (
        <div
            className="flex flex-col gap-4 rounded-sm select-none"
            style={{ minWidth: 0 }}
        >
            {/* ── Score Card ─────────────────────────────────── */}
            <div
                className="rounded-sm border p-5"
                style={{ background: '#162130', borderColor: 'rgba(255,255,255,0.08)' }}
            >
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Zap size={16} className="text-[#1E73BE]" />
                        <h2 className="text-sm font-bold uppercase tracking-widest text-white">
                            SEO Optimization
                        </h2>
                    </div>
                    {/* Score Pill */}
                    <div className={`px-2.5 py-1 rounded-sm text-xs font-bold ${tier.bgClass} ${tier.textClass}`}>
                        {score} / 100
                    </div>
                </div>

                {/* Score Label */}
                <div className="flex justify-between items-center mb-2">
                    <span className={`text-xs font-semibold ${tier.textClass}`}>{tier.label}</span>
                    <span className="text-xs text-white/30">{passCount} / {totalCount} checks passed</span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                        className="h-full rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${score}%`, background: tier.barColor }}
                    />
                </div>

                {/* Legend */}
                <div className="flex items-center justify-between mt-3">
                    <span className="flex items-center gap-1 text-[10px] text-red-400 font-medium">
                        <span className="w-2 h-2 rounded-full bg-red-400 inline-block" /> 0–50 Poor
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-amber-400 font-medium">
                        <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" /> 51–80 Fair
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" /> 81–100 Excellent
                    </span>
                </div>
            </div>

            {/* ── Focus Keyword Badge ──────────────────────── */}
            {focusKeyword && (
                <div
                    className="flex items-center gap-2 px-3 py-2 rounded-sm border"
                    style={{ background: '#1E73BE15', borderColor: '#1E73BE40' }}
                >
                    <Search size={13} className="text-[#1E73BE] shrink-0" />
                    <span className="text-xs text-white/60">Focus Keyword:</span>
                    <span className="text-xs font-bold text-[#1E73BE]">{focusKeyword}</span>
                </div>
            )}

            {/* ── Checklist Sections ───────────────────────── */}
            <AccordionSection
                title="Basic SEO"
                icon={<Search size={14} />}
                checks={basicChecks}
                defaultOpen
            />
            <AccordionSection
                title="Additional Reviews"
                icon={<BarChart2 size={14} />}
                checks={additionalChecks}
                defaultOpen
            />
            <AccordionSection
                title="Readability"
                icon={<BookOpen size={14} />}
                checks={readabilityChecks}
                defaultOpen={false}
            />

            {/* ── Score Summary Footer ─────────────────────── */}
            <div
                className="rounded-sm border p-3 text-center"
                style={{ background: '#0F1923', borderColor: 'rgba(255,255,255,0.06)' }}
            >
                <p className="text-[11px] text-white/30 leading-snug">
                    Analysis updates as you type. Aim for a score of <span className="text-emerald-400 font-semibold">81+</span> before publishing.
                </p>
            </div>
        </div>
    )
}
