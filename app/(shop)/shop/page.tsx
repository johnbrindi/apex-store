import type { Metadata } from 'next'
import ShopClient from './ShopClient'

export const metadata: Metadata = {
  title: 'Shop All Products',
  description: 'Browse our full range of premium performance compounds. Lab tested, UK domestic, discreet shipping.',
}

export default function ShopPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return <ShopClient searchParams={searchParams} />
}
