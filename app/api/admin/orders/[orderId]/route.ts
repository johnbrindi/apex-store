import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/utils/supabase/admin'
import { cookies } from 'next/headers'

function getAuthCookie() {
  const token = cookies().get('auth_token')?.value
  if (!token) return null
  try { return JSON.parse(Buffer.from(token, 'base64url').toString('utf8')) } catch { return null }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { orderId: string } }
) {
  const user = getAuthCookie()
  if (!user || user.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { status } = await request.json()
    const validStatuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded']
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
    }

    const supabase = createAdminClient()
    const { error } = await supabase
      .from('orders')
      .update({ status })
      .eq('id', params.orderId)

    if (error) throw error
    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
