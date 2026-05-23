import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Tag, ArrowLeft, ArrowRight, Clock, ShieldCheck } from 'lucide-react'
import { blogPosts } from '@/data/mock'
import { formatDate } from '@/lib/utils'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.buysteroidsuk.online'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Post Not Found' }
  const postUrl = `${BASE_URL}/blog/${post.slug}`
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: postUrl },
    keywords: post.tags ?? [],
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      locale: 'en_GB',
      images: post.cover_image ? [{ url: post.cover_image, width: 1200, height: 630 }] : [],
      publishedTime: post.published_at ?? post.created_at,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 2)

  // Estimate read time
  const wordCount = post.content.split(/\s+/).length
  const readTime = Math.max(1, Math.ceil(wordCount / 200))

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    url: `${BASE_URL}/blog/${post.slug}`,
    image: post.cover_image ?? `${BASE_URL}/og-image.jpg`,
    datePublished: post.published_at ?? post.created_at,
    dateModified: post.published_at ?? post.created_at,
    author: { '@type': 'Organization', name: 'Steroids UK', url: BASE_URL },
    reviewedBy: post.medical_reviewer ? { '@type': 'Person', name: post.medical_reviewer } : undefined,
    publisher: { '@type': 'Organization', name: 'Steroids UK', url: BASE_URL },
    keywords: post.tags?.join(', '),
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/blog/${post.slug}` },
  }

  return (
    <div className="container-shop py-10 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* Back */}
      <Link
        href="/blog"
        className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors mb-8"
      >
        <ArrowLeft size={15} />
        Back to Blog
      </Link>

      {/* Header */}
      <div className="mb-8">
        {post.category && (
          <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-red mb-4 w-fit">
            <Tag size={11} />
            {post.category}
          </span>
        )}
        <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-white leading-tight mb-5">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-5 text-sm text-text-muted">
          {post.published_at && (
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {formatDate(post.published_at)}
            </span>
          )}
          {post.medical_reviewer && (
            <span className="flex items-center gap-1.5 text-brand-primary">
              <ShieldCheck size={13} />
              Reviewed by {post.medical_reviewer}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            {readTime} min read
          </span>
          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-surface border border-surface-200 text-[11px] font-medium text-text-muted capitalize"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Cover image */}
      {post.cover_image && (
        <div className="aspect-[16/7] overflow-hidden bg-surface border border-surface-100 mb-10">
          <Image
            src={post.cover_image}
            alt={post.title}
            width={1200}
            height={525}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      )}

      {/* Disclaimer */}
      <div className="bg-brand-red/8 border border-brand-red/20 p-5 mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">
          ⚠ Medical Disclaimer
        </p>
        <p className="text-sm text-text-muted leading-relaxed">
          The content in this article is for informational and educational purposes only.
          It does not constitute medical advice. Always consult a qualified healthcare
          professional before starting any compound protocol.
        </p>
      </div>

      {/* Content */}
      <article className="prose-content mb-12">
        {post.content.split('\n\n').map((block, i) => {
          const trimmed = block.trim()
          if (!trimmed) return null

          // Heading detection
          if (trimmed.startsWith('# ')) {
            return (
              <h2 key={i} className="font-display font-bold text-2xl uppercase tracking-wide text-white mt-8 mb-4 border-l-4 border-brand-red pl-4">
                {trimmed.slice(2)}
              </h2>
            )
          }
          if (trimmed.startsWith('## ')) {
            return (
              <h3 key={i} className="font-display font-bold text-xl uppercase tracking-wide text-white mt-6 mb-3">
                {trimmed.slice(3)}
              </h3>
            )
          }
          if (trimmed.startsWith('### ')) {
            return (
              <h4 key={i} className="font-display font-semibold text-base uppercase tracking-wide text-text-primary mt-5 mb-2">
                {trimmed.slice(4)}
              </h4>
            )
          }

          // List items
          if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
            const items = trimmed.split('\n').filter((l) => l.trim().startsWith('- ') || l.trim().startsWith('* '))
            return (
              <ul key={i} className="space-y-2 mb-5 ml-4">
                {items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-text-muted text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-brand-red rounded-full shrink-0 mt-2" />
                    {item.replace(/^[•\-*]\s+/, '')}
                  </li>
                ))}
              </ul>
            )
          }

          // Numbered list
          if (/^\d+\./.test(trimmed)) {
            const items = trimmed.split('\n').filter((l) => /^\d+\./.test(l.trim()))
            return (
              <ol key={i} className="space-y-2 mb-5 ml-4">
                {items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-text-muted text-sm leading-relaxed">
                    <span className="w-5 h-5 bg-brand-red/20 text-brand-red text-[10px] font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      {j + 1}
                    </span>
                    {item.replace(/^\d+\.\s+/, '')}
                  </li>
                ))}
              </ol>
            )
          }

          // Table detection (markdown)
          if (trimmed.includes('|') && trimmed.includes('\n')) {
            const rows = trimmed.split('\n').filter((r) => r.includes('|') && !r.match(/^[\s|:-]+$/))
            if (rows.length > 1) {
              const headers = rows[0].split('|').filter(Boolean).map((h) => h.trim())
              const dataRows = rows.slice(1)
              return (
                <div key={i} className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-brand-red/10 border border-surface-200">
                        {headers.map((h, hi) => (
                          <th key={hi} className="px-4 py-2.5 text-left font-bold uppercase tracking-wide text-text-secondary border-r border-surface-200 last:border-r-0 text-xs">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {dataRows.map((row, ri) => {
                        const cells = row.split('|').filter(Boolean).map((c) => c.trim())
                        return (
                          <tr key={ri} className="border-b border-surface-100 hover:bg-surface-50/30">
                            {cells.map((cell, ci) => (
                              <td key={ci} className="px-4 py-2.5 text-text-muted border-r border-surface-100 last:border-r-0">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              )
            }
          }

          // Inline renderer: supports **bold** and [link text](url)
          const renderInline = (text: string) => {
            // First split on markdown links [text](url)
            const linkParts = text.split(/(\[[^\]]+\]\([^)]+\))/g)
            return linkParts.map((segment, si) => {
              const linkMatch = segment.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
              if (linkMatch) {
                const [, linkText, href] = linkMatch
                const isInternal = href.startsWith('/')
                if (isInternal) {
                  return (
                    <Link key={si} href={href} className="text-brand-red hover:text-brand-red-light underline underline-offset-2 transition-colors">
                      {linkText}
                    </Link>
                  )
                }
                return (
                  <a key={si} href={href} target="_blank" rel="noopener noreferrer" className="text-brand-red hover:text-brand-red-light underline underline-offset-2 transition-colors">
                    {linkText}
                  </a>
                )
              }
              // Then handle **bold** within the segment
              const boldParts = segment.split(/(\*\*[^*]+\*\*)/g)
              return boldParts.map((part, pi) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={`${si}-${pi}`} className="font-semibold text-text-primary">{part.slice(2, -2)}</strong>
                }
                return <span key={`${si}-${pi}`}>{part}</span>
              })
            })
          }

          // Regular paragraph
          return (
            <p key={i} className="text-text-muted text-sm leading-relaxed mb-4">
              {renderInline(trimmed)}
            </p>
          )
        })}
      </article>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap pb-8 border-b border-surface-100 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Tags:</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-surface border border-surface-200 text-xs font-medium text-text-muted hover:border-brand-red hover:text-brand-red transition-colors capitalize cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Related posts */}
      {related.length > 0 && (
        <div>
          <h3 className="font-display font-bold text-xl uppercase tracking-wide mb-5">
            Related Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {related.map((relPost) => (
              <Link
                key={relPost.id}
                href={`/blog/${relPost.slug}`}
                className="group flex gap-4 bg-surface border border-surface-100 hover:border-surface-300 transition-all p-4 overflow-hidden"
              >
                <div className="w-20 h-20 bg-dark overflow-hidden shrink-0">
                  {relPost.cover_image && (
                    <Image
                      src={relPost.cover_image}
                      alt={relPost.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-brand-red uppercase tracking-wider mb-1">
                    {relPost.category}
                  </p>
                  <p className="text-sm font-semibold text-text-primary group-hover:text-brand-red transition-colors line-clamp-2 leading-snug">
                    {relPost.title}
                  </p>
                  <p className="flex items-center gap-1 text-xs text-brand-red mt-2 font-semibold">
                    Read <ArrowRight size={11} />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
