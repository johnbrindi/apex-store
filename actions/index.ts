'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { z } from 'zod'

// ─── Auth Actions ─────────────────────────────────────────────────────────────

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export async function loginAction(formData: FormData) {
  const result = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!result.success) {
    return { error: 'Invalid email or password format.' }
  }

  const supabase = createClient()
  const { error } = await supabase.auth.signInWithPassword(result.data)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  redirect('/account')
}

export async function registerAction(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const first_name = formData.get('first_name') as string
  const last_name = formData.get('last_name') as string

  if (!email || !password) {
    return { error: 'Email and password are required.' }
  }

  const supabase = createClient()
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { first_name, last_name },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/account`,
    },
  })

  if (error) {
    return { error: error.message }
  }

  return { success: true }
}

export async function logoutAction() {
  const supabase = createClient()
  await supabase.auth.signOut()
  revalidatePath('/', 'layout')
  redirect('/')
}

export async function resetPasswordAction(formData: FormData) {
  const email = formData.get('email') as string

  if (!email) {
    return { error: 'Email is required.' }
  }

  const supabase = createClient()
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/account/settings?tab=security`,
  })

  if (error) {
    return { error: error.message }
  }

  return { success: true }
}

// ─── Profile Actions ──────────────────────────────────────────────────────────

export async function updateProfileAction(formData: FormData) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return { error: 'Not authenticated.' }

  const updates = {
    first_name: formData.get('first_name') as string,
    last_name: formData.get('last_name') as string,
    phone: formData.get('phone') as string | undefined,
    updated_at: new Date().toISOString(),
  }

  const { error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', user.id)

  if (error) return { error: error.message }

  revalidatePath('/account/settings')
  return { success: true }
}

// ─── Address Actions ──────────────────────────────────────────────────────────

export async function createAddressAction(formData: FormData) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return { error: 'Not authenticated.' }

  const address = {
    user_id: user.id,
    first_name: formData.get('first_name') as string,
    last_name: formData.get('last_name') as string,
    company: formData.get('company') as string | undefined,
    address_line1: formData.get('address_line1') as string,
    address_line2: formData.get('address_line2') as string | undefined,
    city: formData.get('city') as string,
    postal_code: formData.get('postal_code') as string,
    country: (formData.get('country') as string) || 'GB',
    phone: formData.get('phone') as string | undefined,
    is_default: formData.get('is_default') === 'true',
  }

  const { error } = await supabase.from('addresses').insert(address)

  if (error) return { error: error.message }

  revalidatePath('/account/addresses')
  return { success: true }
}

export async function deleteAddressAction(id: string) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return { error: 'Not authenticated.' }

  const { error } = await supabase
    .from('addresses')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id)

  if (error) return { error: error.message }

  revalidatePath('/account/addresses')
  return { success: true }
}

// ─── Newsletter Action ────────────────────────────────────────────────────────

export async function subscribeNewsletterAction(formData: FormData) {
  const email = formData.get('email') as string

  if (!email || !email.includes('@')) {
    return { error: 'Valid email required.' }
  }

  // In production: integrate with email service (e.g. Mailchimp, Klaviyo)
  // For now we just update the profile if user is logged in
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    await supabase
      .from('profiles')
      .update({ newsletter_subscribed: true })
      .eq('id', user.id)
  }

  return { success: true }
}

// ─── Order Actions ────────────────────────────────────────────────────────────

export async function createOrderAction(orderData: {
  items: Array<{ product_id: string; product_name: string; product_image?: string; product_sku?: string; quantity: number; unit_price: number; total_price: number }>
  subtotal: number
  shipping_cost: number
  total_amount: number
  payment_method: string
  shipping_address: Record<string, string>
  customer_email: string
  customer_name: string
  coupon_code?: string
  discount_amount?: number
}) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert({
      user_id: user?.id ?? null,
      status: 'pending',
      subtotal: orderData.subtotal,
      shipping_cost: orderData.shipping_cost,
      tax_amount: 0,
      discount_amount: orderData.discount_amount ?? 0,
      total_amount: orderData.total_amount,
      payment_method: orderData.payment_method,
      payment_status: 'pending',
      shipping_address: orderData.shipping_address,
      customer_email: orderData.customer_email,
      customer_name: orderData.customer_name,
      coupon_code: orderData.coupon_code,
    })
    .select()
    .single()

  if (orderError) return { error: orderError.message }

  // Insert order items
  const { error: itemsError } = await supabase.from('order_items').insert(
    orderData.items.map((item) => ({
      order_id: order.id,
      ...item,
    }))
  )

  if (itemsError) return { error: itemsError.message }

  revalidatePath('/account/orders')
  return { success: true, orderId: order.id }
}

// ─── Review Actions ───────────────────────────────────────────────────────────

export async function createReviewAction(formData: FormData) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return { error: 'You must be logged in to leave a review.' }

  const product_id = formData.get('product_id') as string
  const rating = parseInt(formData.get('rating') as string)
  const title = formData.get('title') as string
  const body = formData.get('body') as string

  if (!product_id || !rating) return { error: 'Missing required fields.' }

  const { error } = await supabase.from('reviews').insert({
    product_id,
    user_id: user.id,
    rating,
    title,
    body,
    is_verified: false,
    is_approved: false,
  })

  if (error) {
    if (error.code === '23505') return { error: 'You have already reviewed this product.' }
    return { error: error.message }
  }

  revalidatePath(`/product`)
  return { success: true }
}

// ─── Admin Actions ────────────────────────────────────────────────────────────

export async function updateOrderStatusAction(orderId: string, status: string) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return { error: 'Not authenticated.' }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (profile?.role !== 'admin') return { error: 'Unauthorized.' }

  const { error } = await supabase
    .from('orders')
    .update({ status })
    .eq('id', orderId)

  if (error) return { error: error.message }

  revalidatePath('/admin/orders')
  return { success: true }
}
