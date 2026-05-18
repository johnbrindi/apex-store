import type { Metadata } from 'next'
import { Barlow, Oswald } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebStore',
    name: 'Steroids UK',
    description: 'Buy the best quality steroids in the UK. Premium pharmaceutical-grade performance compounds.',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.buysteroidsuk.online',
    image: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.buysteroidsuk.online'}/assets/images/logo.png`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'UK'
    },
    priceRange: '££'
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

        {/* Live Chat Widget (Tawk.to) */}
        <Script id="tawk-live-chat" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6a0b0c3ca536181c3989749e/1jotifk2t';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
