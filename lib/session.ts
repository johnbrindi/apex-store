import { createHmac, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'

// Signed session cookie: base64url(payload).base64url(hmac-sha256(payload))
// The signature stops anyone from editing the cookie (e.g. setting role: 'admin').

export const SESSION_COOKIE = 'auth_token'
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7 // 7 days

function getSecret(): string {
  const secret = process.env.AUTH_SECRET
  if (!secret) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('AUTH_SECRET must be set in production.')
    }
    return 'dev-only-insecure-secret'
  }
  return secret
}

function sign(data: string): string {
  return createHmac('sha256', getSecret()).update(data).digest('base64url')
}

export function encodeSession(user: object): string {
  const payload = Buffer.from(
    JSON.stringify({ ...user, exp: Date.now() + SESSION_MAX_AGE * 1000 })
  ).toString('base64url')
  return `${payload}.${sign(payload)}`
}

export function decodeSession(token: string | undefined): any {
  if (!token) return null
  const [payload, sig] = token.split('.')
  if (!payload || !sig) return null

  const expected = Buffer.from(sign(payload))
  const given = Buffer.from(sig)
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return null

  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'))
    if (typeof data.exp !== 'number' || data.exp < Date.now()) return null
    return data
  } catch {
    return null
  }
}

export function getSessionUser(): any {
  return decodeSession(cookies().get(SESSION_COOKIE)?.value)
}

export function getAdminUser(): any {
  const user = getSessionUser()
  return user?.role === 'admin' ? user : null
}
