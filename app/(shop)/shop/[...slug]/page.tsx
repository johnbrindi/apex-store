import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { categories } from '@/data/mock'
import ShopClient from '../ShopClient'

interface Props {
  params: { slug: string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const currentSlug = params.slug[params.slug.length - 1]
  // First try to find a parent category, if not look in children
  let cat = categories.find((c) => c.slug === currentSlug)
  if (!cat) {
    for (const parent of categories) {
      const child = parent.children?.find(c => c.slug === currentSlug)
      if (child) {
        cat = parent // For metadata, we use parent category data or we could use child
        break
      }
    }
  }
  
  if (!cat) return { title: 'Category Not Found' }
  return {
    title: `${cat.name} — Shop`,
    description: cat.description,
  }
}

export async function generateStaticParams() {
  const paths: { slug: string[] }[] = []
  
  categories.forEach(parent => {
    paths.push({ slug: [parent.slug] })
    if (parent.children) {
      parent.children.forEach(child => {
        paths.push({ slug: [parent.slug, child.slug] })
      })
    }
  })
  
  return paths
}

export default function CategoryPage({ params, searchParams }: Props) {
  const currentSlug = params.slug[params.slug.length - 1]
  let activeCatName = ''
  let found = false

  // Find if slug belongs to parent or child
  const cat = categories.find((c) => c.slug === currentSlug)
  if (cat) {
    activeCatName = cat.name
    found = true
  } else {
    for (const parent of categories) {
      const child = parent.children?.find(c => c.slug === currentSlug)
      if (child) {
        activeCatName = child.name
        found = true
        break
      }
    }
  }

  // If not found in our strict mock data, generate a readable name from slug instead of 404ing
  if (!found) {
    activeCatName = currentSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }

  return (
    <ShopClient
      searchParams={searchParams}
      categorySlug={currentSlug}
      categoryName={activeCatName}
    />
  )
}
