import { createClient } from '@supabase/supabase-js'

/**
 * Admin client uses the SERVICE ROLE key which bypasses all RLS policies.
 * NEVER expose this on the client — only use in Server Components, API routes, and Server Actions.
 */
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    throw new Error(
      'Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.\n' +
      'Go to your Supabase Dashboard → Settings → API and copy the service_role secret into .env.local'
    )
  }

  return createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}
