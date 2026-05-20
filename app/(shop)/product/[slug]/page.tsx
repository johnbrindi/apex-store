import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { products } from '@/data/mock'
import ProductDetailClient from './ProductDetailClient'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) return { title: 'Product Not Found' }
  return {
    title: product.name,
    description: product.short_description,
    openGraph: {
      title: product.name,
      description: product.short_description,
      images: product.primary_image ? [{ url: product.primary_image }] : [],
    },
  }
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) notFound()

  const related = products
    .filter((p) => p.id !== product.id && p.category_id === product.category_id)
    .slice(0, 4)

  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.buysteroidsuk.online'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.primary_image ? [product.primary_image] : [],
    description: product.description || product.short_description || '',
    sku: product.sku || product.slug,
    mpn: product.id,
    brand: {
      '@type': 'Brand',
      name: 'Steroids UK',
    },
    offers: {
      '@type': 'Offer',
      url: `${BASE_URL}/product/${product.slug}`,
      priceCurrency: 'GBP',
      price: product.price,
      priceValidUntil: '2027-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: product.in_stock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'Steroids UK',
      },
    },
    ...(product.rating ? {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        reviewCount: product.review_count || 12,
        bestRating: '5',
        worstRating: '1',
      }
    } : {})
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailClient product={product} related={related} />
    </>
  )
}
