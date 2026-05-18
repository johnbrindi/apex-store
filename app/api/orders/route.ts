import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/utils/supabase/admin'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      customer_name,
      customer_email,
      payment_method,
      shipping_address,
      items,
      subtotal,
      shipping_cost,
      total_amount,
      notes,
    } = body

    // Validate required fields
    if (!customer_email || !items?.length || !total_amount) {
      return NextResponse.json({ error: 'Missing required order fields.' }, { status: 400 })
    }

    // Use admin client to bypass RLS — orders can be placed by guests
    const supabase = createAdminClient()

    // Insert order
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        user_id:          null, // guest order (no Supabase auth session required)
        status:           'pending',
        subtotal:         subtotal ?? 0,
        shipping_cost:    shipping_cost ?? 0,
        tax_amount:       0,
        discount_amount:  0,
        total_amount,
        payment_method,
        payment_status:   'pending',
        shipping_address,
        customer_email,
        customer_name,
        notes: notes ?? null,
      })
      .select()
      .single()

    if (orderError) {
      console.error('Order insert error:', orderError)
      return NextResponse.json({ error: orderError.message }, { status: 500 })
    }

    // Insert order items
    const orderItems = items.map((item: any) => ({
      order_id:      order.id,
      product_id:    item.product_id ?? null,
      product_name:  item.product_name,
      product_image: item.product_image ?? null,
      product_sku:   item.product_sku ?? null,
      quantity:      item.quantity,
      unit_price:    item.unit_price,
      total_price:   item.total_price,
    }))

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItems)

    if (itemsError) {
      console.error('Order items insert error:', itemsError)
      // Order was created but items failed — still return the order ID
      return NextResponse.json({
        success: true,
        orderId: order.id,
        warning: 'Order created but some items failed to save.',
      })
    }

    return NextResponse.json({ success: true, orderId: order.id })
  } catch (err: any) {
    console.error('Orders API error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 })
}
