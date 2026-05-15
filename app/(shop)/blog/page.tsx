import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Tag, ArrowRight, BookOpen } from 'lucide-react'
import { blogPosts } from '@/data/mock'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Blog & Guides',
  description: 'Expert guides on performance compounds, cycle planning, PCT protocols, and more.',
}

const allCategories = ['All', 'Training Guides', 'PCT Guide', 'Education', 'Nutrition']

export default function BlogPage() {
  return (
    <div className="container-shop py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3">
          Knowledge Hub
        </p>
        <h1 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-wide text-white mb-4">
          Blog & Guides
        </h1>
        <p className="text-text-muted max-w-xl mx-auto text-sm leading-relaxed">
          Expert articles on performance compounds, training protocols, cycle planning,
          PCT guides, and harm reduction. Written for the serious athlete.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex items-center gap-2 flex-wrap justify-center mb-10">
        {allCategories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wide border transition-colors ${
              cat === 'All'
                ? 'bg-brand-red border-brand-red text-white'
                : 'border-surface-200 text-text-muted hover:border-surface-300 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured post */}
      {blogPosts[0] && (
        <Link
          href={`/blog/${blogPosts[0].slug}`}
          className="group block mb-10 bg-surface border border-surface-100 hover:border-surface-300 transition-all duration-300 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-[16/9] md:aspect-auto overflow-hidden bg-dark">
              {blogPosts[0].cover_image && (
                <Image
                  src={blogPosts[0].cover_image}
                  alt={blogPosts[0].title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="badge-red text-[10px] mb-4 inline-flex w-fit">Featured</span>
              {blogPosts[0].category && (
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-red mb-3">
                  <Tag size={10} />
                  {blogPosts[0].category}
                </span>
              )}
              <h2 className="font-display font-bold text-2xl uppercase tracking-wide text-white group-hover:text-brand-red transition-colors leading-snug mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-text-muted">
                  <Calendar size={11} />
                  {blogPosts[0].published_at ? formatDate(blogPosts[0].published_at) : ''}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-brand-red group-hover:text-brand-red-light transition-colors">
                  Read Article <ArrowRight size={12} />
                </span>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Post grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogPosts.slice(1).map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group bg-surface border border-surface-100 hover:border-surface-300 transition-all duration-300 overflow-hidden flex flex-col"
          >
            <div className="aspect-[16/9] overflow-hidden bg-dark">
              {post.cover_image && (
                <Image
                  src={post.cover_image}
                  alt={post.title}
                  width={480}
                  height={270}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>
            <div className="p-5 flex flex-col flex-1">
              {post.category && (
                <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-brand-red mb-2">
                  <Tag size={10} />
                  {post.category}
                </span>
              )}
              <h3 className="font-display font-semibold text-base uppercase tracking-wide text-white group-hover:text-brand-red transition-colors leading-snug mb-2 line-clamp-2 flex-1">
                {post.title}
              </h3>
              <p className="text-sm text-text-muted line-clamp-2 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-surface-100 mt-auto">
                <span className="flex items-center gap-1.5 text-xs text-text-muted">
                  <Calendar size={11} />
                  {post.published_at ? formatDate(post.published_at) : ''}
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-brand-red">
                  Read <ArrowRight size={11} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty state */}
      {blogPosts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <BookOpen size={48} className="text-surface-300 mb-4" />
          <p className="text-text-secondary font-semibold text-lg">No articles yet</p>
        </div>
      )}

      {/* Newsletter CTA */}
      <div className="mt-14 bg-surface border border-surface-100 p-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">Stay Updated</p>
        <h3 className="font-display font-bold text-2xl uppercase tracking-wide text-white mb-3">
          Get New Guides in Your Inbox
        </h3>
        <p className="text-text-muted text-sm mb-5 max-w-md mx-auto">
          Subscribe to get notified when we publish new cycle guides, lab test results, and product updates.
        </p>
        <div className="flex gap-2 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 input-base"
          />
          <button className="btn-primary px-5 whitespace-nowrap">Subscribe</button>
        </div>
      </div>
    </div>
  )
}
