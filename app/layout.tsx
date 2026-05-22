import type { Metadata } from 'next'
import { Barlow, Oswald } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import ChatWidget from '@/components/layout/ChatWidget'
import Script from 'next/script'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Buy Steroids UK | Top Performance Compounds & Anabolics',
    template: '%s | Steroids UK',
  },
  description:
    'Buy the best quality steroids in the UK. Premium pharmaceutical-grade performance compounds, SARMs, peptides, and oral anabolics. Lab tested, discreetly shipped.',
  keywords: [
    'buy steroids uk',
    'uk steroids online',
    'anabolic steroids for sale uk',
    'testosterone enanthate uk',
    'buy dianabol uk',
    'sarms uk',
    'peptides for sale uk',
    'lab tested steroids uk',
    'injectable steroids uk',
    'oral steroids uk',
    'clenbuterol uk',
    'anavar uk',
    'buy steroids online uk',
    'pct uk',
    'fat burners uk',
    'buysteroidsuk.online',
  ],
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.buysteroidsuk.online',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Steroids UK',
    title: 'Buy Steroids UK | Top Performance Compounds & Anabolics',
    description: 'Buy the best quality steroids in the UK. Premium pharmaceutical-grade performance compounds, SARMs, peptides, and oral anabolics. Lab tested, discreetly shipped.',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.buysteroidsuk.online',
    images: [{ url: 'https://www.buysteroidsuk.online/og-image.jpg', width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google999fbb2024c1c1ed',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.buysteroidsuk.online'}/#website`,
        name: 'Steroids UK',
        url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.buysteroidsuk.online',
        description: 'The most trusted UK steroids shop. Buy pharmaceutical-grade anabolic steroids, SARMs, peptides, and PCT products online in the UK.',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.buysteroidsuk.online'}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Store',
        '@id': `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.buysteroidsuk.online'}/#store`,
        name: 'Steroids UK — Buy Anabolic Steroids Online',
        description: 'UK-based online store specialising in pharmaceutical-grade anabolic steroids, injectable testosterone, oral compounds, SARMs, peptides, and PCT products. Lab tested. Discreet delivery.',
        url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.buysteroidsuk.online',
        image: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.buysteroidsuk.online'}/og-image.jpg`,
        priceRange: '££',
        currenciesAccepted: 'GBP',
        paymentAccepted: 'Bank Transfer, Cryptocurrency, Revolut',
        areaServed: {
          '@type': 'Country',
          name: 'United Kingdom',
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'GB',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Anabolic Steroids UK',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Injectable Steroids UK' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Oral Steroids UK' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'SARMs UK' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'PCT & Support UK' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'HGH & Peptides UK' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Fat Burners UK' } },
          ],
        },
      },
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`bg-surface-100 text-text-primary font-sans antialiased ${barlow.variable} ${oswald.variable}`}>
        <Providers>
          {children}
        </Providers>

        <ChatWidget />
      </body>
    </html>
  )
}
