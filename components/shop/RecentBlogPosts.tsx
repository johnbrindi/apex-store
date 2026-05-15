import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import { blogPosts } from '@/data/mock'
import { formatDate } from '@/lib/utils'

export default function RecentBlogPosts() {
  const posts = blogPosts.slice(0, 3)

  return (
    <section className="container-shop max-w-[1200px] mx-auto py-10 pb-20">
      <h2 className="text-2xl font-bold text-center text-text-primary mb-8 font-display uppercase tracking-wide">
        FROM OUR LATEST BLOGS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, i) => {
          // Dummy dates for the visual style
          const day = "12"
          const month = "MAY"
          
          return (
            <div key={post.id} className="bg-white border border-border-light text-center flex flex-col items-center">
              {/* Image Container with Date Badge */}
              <div className="relative w-full aspect-video overflow-hidden mb-4 bg-surface-100">
                <div className="absolute top-0 left-4 bg-white text-text-primary font-bold px-3 py-1 flex flex-col items-center border border-border-light border-t-0 z-10 shadow-sm">
                  <span className="text-xl">{day}</span>
                  <span className="text-[10px] uppercase tracking-wider">{month}</span>
                </div>
                {post.cover_image && (
                  <Image
                    src={post.cover_image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                )}
                {/* Category badge */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center translate-y-1/2 z-10">
                  <span className="bg-button-blue text-white text-[10px] font-bold uppercase px-3 py-1 tracking-wider shadow-sm">
                    {post.category || 'GUIDE'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-8 flex flex-col items-center flex-1">
                <Link href={`/blog/${post.slug}`} className="hover:text-button-blue transition-colors">
                  <h3 className="font-bold text-base md:text-lg text-text-primary mb-2 px-2 leading-tight">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-4">
                  Posted by <span className="font-bold text-text-primary">Admin</span>
                </p>
                
                <p className="text-sm text-text-secondary mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="mt-auto text-xs font-bold text-button-blue uppercase hover:underline"
                >
                  CONTINUE READING
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
