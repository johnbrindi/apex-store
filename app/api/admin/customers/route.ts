import { NextResponse } from 'next/server'
import { createAdminClient } from '@/utils/supabase/admin'
import { cookies } from 'next/headers'

function getAuthCookie() {
  const token = cookies().get('auth_token')?.value
  if (!token) return null
  try { return JSON.parse(Buffer.from(token, 'base64url').toString('utf8')) } catch { return null }
}

export async function GET() {
  const user = getAuthCookie()
  if (!user || user.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const supabase = createAdminClient()
    const { data: customers, error } = await supabase
      .from('profiles')
      .select('id, email, first_name, last_name, role, created_at')
      .order('created_at', { ascending: false })

    if (error) throw error
    return NextResponse.json({ customers: customers ?? [] })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
