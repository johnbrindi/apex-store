import Link from 'next/link'
import { ArrowLeft, ShoppingBag } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface-100 flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-xl mx-auto">
        {/* 404 number */}
        <div className="font-display font-bold text-[120px] md:text-[160px] leading-none text-border-light select-none mb-2">
          404
        </div>

        {/* Content */}
        <div className="w-14 h-1 bg-button-blue mx-auto mb-8" />

        <h1 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-wide text-text-primary mb-4">
          Page Not Found
        </h1>

        <p className="text-text-secondary text-sm leading-relaxed mb-10 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Try browsing our shop or searching for what you need.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <Link href="/" className="bg-button-blue hover:bg-button-hover text-white font-bold uppercase px-7 py-3.5 flex items-center gap-2 w-full sm:w-auto justify-center text-sm transition-colors">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <Link href="/shop" className="border border-border-light bg-white hover:bg-surface-100 text-text-primary font-bold uppercase px-7 py-3.5 flex items-center gap-2 w-full sm:w-auto justify-center text-sm transition-colors">
            <ShoppingBag size={16} />
            Browse Shop
          </Link>
        </div>

        {/* Quick links */}
        <div className="border-t border-border-light pt-8">
          <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-4">
            Popular Pages
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: 'Injectables', href: '/shop/injectable-solutions' },
              { label: 'Oral Steroids', href: '/shop/oral-compounds' },
              { label: 'SARMs', href: '/shop/sarms' },
              { label: 'Fat Burners', href: '/shop/fat-burners' },
              { label: 'PCT & Support', href: '/shop/pct-support' },
              { label: 'Pre-Made Stacks', href: '/shop/pre-made-stacks' },
              { label: 'FAQ', href: '/faq' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 bg-white border border-border-light hover:border-button-blue hover:text-button-blue text-text-primary text-xs font-semibold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
