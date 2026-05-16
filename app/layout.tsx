import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/components/Providers'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: 'Buy Steroids UK | Top Performance Compounds & Anabolics',
    template: '%s | Steroids UK',
  },
  description:
    'Buy the best quality steroids in the UK. Premium pharmaceutical-grade performance compounds, SARMs, peptides, and oral anabolics. Lab tested, discreetly shipped.',
  keywords: [
    'buy steroids uk',
    'uk steroids',
    'performance supplements',
    'anabolics for sale',
    'testosterone enanthate uk',
    'buy dianabol uk',
    'sarms uk',
    'peptides for sale',
    'lab tested steroids',
  ],
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://steroids-uk.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Steroids UK',
    title: 'Buy Steroids UK | Top Performance Compounds & Anabolics',
    description: 'Buy the best quality steroids in the UK. Premium pharmaceutical-grade performance compounds, SARMs, peptides, and oral anabolics. Lab tested, discreetly shipped.',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://steroids-uk.com',
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
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://steroids-uk.com',
    image: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://steroids-uk.com'}/assets/images/logo.png`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'UK'
    },
    priceRange: '££'
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface-100 text-text-primary font-sans antialiased">
        <Providers>
          {children}
        </Providers>

        {/* Live Chat Widget (Tawk.to) */}
        <Script id="tawk-live-chat" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            // NOTE FOR ADMIN: Replace this src link with your own Tawk.to Direct Chat Link!
            // You can get yours for free at https://www.tawk.to/
            s1.src='https://embed.tawk.to/6646543b981b6c5647715b9e/1hu11e3b6';
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
