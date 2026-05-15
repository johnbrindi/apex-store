'use client'

import Link from 'next/link'
import Image from 'next/image'

const featuredCategories = [
  { slug: 'testosterone-steroids', label: 'Testosterone Steroids', image: '/assets/images/imgi_206_1MiLJjXmPhA-700x467.webp' },
  { slug: 'clenbuterol', label: 'Clenbuterol', image: '/assets/images/imgi_198_wt5jg8_WrJg-430x287.webp' },
  { slug: 'anavar', label: 'Anavar Tablets', image: '/assets/images/imgi_190_tC9oZG428aY-430x285.webp' },
]

export default function CategoryGrid() {
  return (
    <section className="container-shop max-w-[1200px] mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredCategories.map((cat, i) => (
          <Link
            key={i}
            href={`/shop/${cat.slug}`}
            className="group relative block overflow-hidden bg-black aspect-[4/3] sm:aspect-video md:aspect-square lg:aspect-[4/3]"
          >
            {/* Background Image */}
            <Image
              src={cat.image}
              alt={cat.label}
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            {/* Overlay Gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-bold text-lg md:text-xl uppercase tracking-wider leading-tight">
                {cat.label}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
