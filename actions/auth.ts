'use server';

import { cookies } from 'next/headers';
import { createHash } from 'crypto';
import { createClient } from '@/utils/supabase/server';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function hashPw(password: string): string {
  return createHash('sha256')
    .update(password + (process.env.AUTH_SECRET ?? 'steroids-uk-salt'))
    .digest('hex');
}

function encode(obj: object): string {
  return Buffer.from(JSON.stringify(obj)).toString('base64url');
}

function decode(token: string): any {
  try {
    return JSON.parse(Buffer.from(token, 'base64url').toString('utf8'));
  } catch {
    return null;
  }
}

function setAuthCookie(user: object) {
  cookies().set('auth_token', encode(user), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

// ─── Admin credentials ────────────────────────────────────────────────────────
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? 'admin@system.com';
const ADMIN_HASH  = hashPw(process.env.ADMIN_PASSWORD ?? 'anyoda12');

// ─── Register ─────────────────────────────────────────────────────────────────
// Saves user to Supabase auth.users (and auto-creates profile via DB trigger)

export async function registerLocalUser(formData: FormData) {
  try {
    const username = (formData.get('username') as string)?.trim();
    const email    = (formData.get('email')    as string)?.trim().toLowerCase();
    const password =  formData.get('password') as string;

    if (!username || !email || !password) return { error: 'All fields are required.' };
    if (password.length < 6)              return { error: 'Password must be at least 6 characters.' };
    if (email === ADMIN_EMAIL)            return { error: 'That email address is not available.' };

    // Save user to Supabase (persisted in DB, not just a cookie)
    const supabase = createClient();
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username, first_name: username },
      },
    });

    if (signUpError) {
      return { error: signUpError.message };
    }

    if (!data.user) {
      return { error: 'Failed to create account. Please try again.' };
    }

    // Set local cookie for middleware routing
    const user = {
      id:       data.user.id,
      username,
      email:    data.user.email!,
      role:     'customer',
      createdAt: new Date().toISOString(),
    };
    setAuthCookie(user);

    return { success: true, user };
  } catch (err: any) {
    return { error: err.message || 'Failed to register.' };
  }
}

// ─── Login ────────────────────────────────────────────────────────────────────
// Admin: hardcoded credentials. Regular users: validated against Supabase.

export async function loginLocalUser(formData: FormData) {
  try {
    const email    = (formData.get('email')    as string)?.trim().toLowerCase();
    const password =  formData.get('password') as string;

    if (!email || !password) return { error: 'Email and password are required.' };

    // ── Admin check (hardcoded, no DB needed) ────────────────────────────────
    if (email === ADMIN_EMAIL) {
      if (hashPw(password) !== ADMIN_HASH) {
        return { error: 'Invalid email or password.' };
      }
      const adminUser = { id: 'admin-001', username: 'Admin', email: ADMIN_EMAIL, role: 'admin' };
      setAuthCookie(adminUser);
      return { success: true, user: adminUser, role: 'admin' };
    }

    // ── Regular user: validate against Supabase ──────────────────────────────
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error || !data.user) {
      return { error: 'Invalid email or password.' };
    }

    // Set local cookie so middleware can read role/identity
    const user = {
      id:       data.user.id,
      username: data.user.user_metadata?.username ?? data.user.user_metadata?.first_name ?? email.split('@')[0],
      email:    data.user.email!,
      role:     'customer',
    };
    setAuthCookie(user);
    return { success: true, user, role: 'customer' };
  } catch (err: any) {
    return { error: err.message || 'Failed to login.' };
  }
}

// ─── Logout ───────────────────────────────────────────────────────────────────

export async function logoutLocalUser() {
  // Sign out Supabase session (for regular users)
  try {
    const supabase = createClient();
    await supabase.auth.signOut();
  } catch {
    // Ignore if no Supabase session
  }
  cookies().delete('auth_token');
  return { success: true };
}

// ─── Get current user from cookie ─────────────────────────────────────────────

export async function getLocalUser() {
  const token = cookies().get('auth_token')?.value;
  if (!token) return null;
  return decode(token);
}

// ─── Admin guard ──────────────────────────────────────────────────────────────

export async function requireAdmin() {
  const user = await getLocalUser();
  if (!user || user.role !== 'admin') return null;
  return user;
}
