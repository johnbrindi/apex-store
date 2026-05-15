// ─── Product Types ───────────────────────────────────────────────────────────

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  image_url?: string
  parent_id?: string | null
  product_count?: number
  children?: Category[]
}

export interface ProductImage {
  id: string
  product_id: string
  url: string
  alt?: string
  position: number
  is_primary: boolean
}

export interface Product {
  id: string
  name: string
  slug: string
  description?: string
  short_description?: string
  price: number
  compare_at_price?: number | null
  sku?: string
  stock_quantity: number
  in_stock: boolean
  is_featured: boolean
  is_on_sale: boolean
  category_id?: string
  category?: Category
  images?: ProductImage[]
  primary_image?: string
  tags?: string[]
  rating?: number
  review_count?: number
  meta_title?: string
  meta_description?: string
  created_at: string
  updated_at: string
}

export interface Review {
  id: string
  product_id: string
  user_id: string
  rating: number
  title?: string
  body?: string
  is_verified: boolean
  created_at: string
  profile?: Profile
}

// ─── Cart Types ───────────────────────────────────────────────────────────────

export interface CartItem {
  id: string
  product_id: string
  product: Product
  quantity: number
  price: number
}

export interface Cart {
  items: CartItem[]
  subtotal: number
  total: number
  item_count: number
}

// ─── Wishlist Types ───────────────────────────────────────────────────────────

export interface WishlistItem {
  id: string
  user_id: string
  product_id: string
  product: Product
  created_at: string
}

// ─── Order Types ──────────────────────────────────────────────────────────────

export type OrderStatus =
  | 'pending'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded'

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  product?: Product
  quantity: number
  unit_price: number
  total_price: number
  product_name: string
  product_image?: string
}

export interface Order {
  id: string
  user_id: string
  status: OrderStatus
  subtotal: number
  shipping_cost: number
  tax_amount: number
  total_amount: number
  shipping_address?: Address
  billing_address?: Address
  payment_method?: string
  tracking_number?: string
  notes?: string
  items?: OrderItem[]
  created_at: string
  updated_at: string
}

// ─── Address Types ────────────────────────────────────────────────────────────

export interface Address {
  id: string
  user_id: string
  first_name: string
  last_name: string
  company?: string
  address_line1: string
  address_line2?: string
  city: string
  state?: string
  postal_code: string
  country: string
  phone?: string
  is_default: boolean
  created_at: string
}

// ─── Auth / Profile Types ─────────────────────────────────────────────────────

export interface Profile {
  id: string
  email: string
  first_name?: string
  last_name?: string
  avatar_url?: string
  phone?: string
  date_of_birth?: string
  role: 'customer' | 'admin'
  newsletter_subscribed: boolean
  created_at: string
  updated_at: string
}

// ─── Blog Types ───────────────────────────────────────────────────────────────

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt?: string
  content: string
  cover_image?: string
  author_id?: string
  author?: Profile
  category?: string
  tags?: string[]
  published: boolean
  published_at?: string
  created_at: string
}

// ─── UI / Misc Types ──────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href?: string
  children?: NavItem[]
}

export interface FilterState {
  categories: string[]
  priceMin?: number
  priceMax?: number
  inStock: boolean
  onSale: boolean
  sortBy: SortOption
}

export type SortOption =
  | 'featured'
  | 'newest'
  | 'price-asc'
  | 'price-desc'
  | 'rating'
  | 'best-selling'

export interface PaginationMeta {
  page: number
  per_page: number
  total: number
  total_pages: number
}

export interface ApiResponse<T> {
  data: T | null
  error: string | null
}
