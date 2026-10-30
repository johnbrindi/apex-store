import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/utils/supabase/admin'
import { getAdminUser } from '@/lib/session'

export async function GET() {
  if (!getAdminUser()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const supabase = createAdminClient()
    const { data: orders, error } = await supabase
      .from('orders')
      .select('id, customer_name, customer_email, total_amount, shipping_cost, status, payment_method, shipping_address, notes, created_at')
      .order('created_at', { ascending: false })

    if (error) throw error
    return NextResponse.json({ orders: orders ?? [] })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
