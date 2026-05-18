'use client'

import Link from 'next/link'
import Image from 'next/image'

// Using actual illustrated character images from steroids-uk.com
const features = [
  {
    image: 'https://steroids-uk.com/wp-content/uploads/2025/10/top-uk-store-steroids-ukcom-e1761588952987-70x70.webp',
    title: 'Top UK Store',
    subtitle: 'Offering 1,000+ products',
    href: '/shop',
    fallback: '👑',
  },
  {
    image: 'https://steroids-uk.com/wp-content/uploads/2025/10/low-prices-steroids-ukcom-1-70x70.webp',
    title: 'Low Prices',
    subtitle: 'Best prices guaranteed.',
    href: '/shop',
    fallback: '💰',
  },
  {
    image: 'https://steroids-uk.com/wp-content/uploads/2025/10/next-day-delivery-steroids-uk.com_-70x70.webp',
    title: 'Next Day Delivery',
    subtitle: 'Order before 2PM',
    href: '/shipping',
    fallback: '🚚',
  },
  {
    image: 'https://steroids-uk.com/wp-content/uploads/2025/10/anabolic-steroids-steroid-ukcom-70x70.webp',
    title: 'The Best Anabolic Steroids Shop in Great Britain',
    subtitle: '',
    href: '/shop',
    fallback: '🏆',
  },
  {
    image: 'https://steroids-uk.com/wp-content/uploads/2025/10/fat-burners-steorids-ukcom-70x70.webp',
    title: 'The Strongest Fat Burners',
    subtitle: '',
    href: '/shop/fat-burners',
    fallback: '🔥',
  },
  {
    image: 'https://steroids-uk.com/wp-content/uploads/2025/10/laboratory-tested-steroids-ukcom-70x70.webp',
    title: 'Laboratory Tested Steroids For Sale',
    subtitle: 'Check laboratory tests',
    href: '/lab-tests',
    fallback: '🔬',
  },
  {
    image: 'https://steroids-uk.com/wp-content/uploads/2025/10/secure-payment-steroids-ukcom-70x70.webp',
    title: 'Secure Payment',
    subtitle: '100% secure payments',
    href: '/payments',
    fallback: '💳',
  },
  {
    image: 'https://steroids-uk.com/wp-content/uploads/2025/10/europe-and-usa-steroids-ukcom-70x70.webp',
    title: 'Europe and USA store warehouse option',
    subtitle: '',
    href: '/shop',
    fallback: '🌍',
  },
]


function TrustIcon({ src, fallback, title }: { src: string; fallback: string; title: string }) {
  return (
    <div className="relative w-20 h-20 mx-auto mb-3">
      <Image
        src={src}
        alt={title}
        fill
        className="object-contain"
        onError={(e) => {
          // Hide the image on error and show fallback
          const img = e.currentTarget as HTMLImageElement
          img.style.display = 'none'
          const parent = img.parentElement
          if (parent) {
            parent.innerHTML = `<span style="font-size:48px;display:flex;align-items:center;justify-content:center;width:100%;height:100%">${fallback}</span>`
          }
        }}
        unoptimized
      />
    </div>
  )
}

export default function TrustStrip() {
  return (
    <section className="bg-white border-b border-border-light py-10">
      <div className="container-shop">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8">
          {features.map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="flex flex-col items-center text-center group"
            >
              <TrustIcon src={f.image} fallback={f.fallback} title={f.title} />
              <p className="text-sm font-bold text-text-primary group-hover:text-button-blue transition-colors leading-snug">
                {f.title}
              </p>
              {f.subtitle && (
                <p className="text-xs text-button-blue mt-0.5">{f.subtitle}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
