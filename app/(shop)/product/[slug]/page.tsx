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

  return <ProductDetailClient product={product} related={related} />
}
