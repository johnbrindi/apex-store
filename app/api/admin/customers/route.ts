import { NextResponse } from 'next/server'
import { createAdminClient } from '@/utils/supabase/admin'
import { getAdminUser } from '@/lib/session'

export async function GET() {
  if (!getAdminUser()) {
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
