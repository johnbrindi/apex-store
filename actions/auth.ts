'use server';

import { cookies } from 'next/headers';
import { createHash } from 'crypto';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function hash(password: string): string {
  return createHash('sha256').update(password + 'steroids-uk-salt-2024').digest('hex');
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

function setCookieSession(user: object) {
  cookies().set('auth_token', encode(user), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });
}

// ─── Admin Credentials (stored as env vars or hardcoded hash) ─────────────────
// Admin email: admin@system.com  |  Password: anyoda12
const ADMIN_EMAIL    = process.env.ADMIN_EMAIL    ?? 'admin@system.com';
const ADMIN_HASH     = process.env.ADMIN_PASS_HASH ?? hash('anyoda12');

// ─── Register ─────────────────────────────────────────────────────────────────

export async function registerLocalUser(formData: FormData) {
  try {
    const username = (formData.get('username') as string)?.trim();
    const email    = (formData.get('email')    as string)?.trim().toLowerCase();
    const password =  formData.get('password') as string;

    if (!username || !email || !password) return { error: 'All fields are required.' };
    if (password.length < 6)              return { error: 'Password must be at least 6 characters.' };
    if (email === ADMIN_EMAIL)            return { error: 'That email address is not available.' };

    const user = {
      id:        Math.random().toString(36).substring(2, 15),
      username,
      email,
      role:      'customer',
      createdAt: new Date().toISOString(),
    };

    setCookieSession(user);
    return { success: true, user };
  } catch (err: any) {
    return { error: err.message || 'Failed to register.' };
  }
}

// ─── Login ────────────────────────────────────────────────────────────────────

export async function loginLocalUser(formData: FormData) {
  try {
    const email    = (formData.get('email')    as string)?.trim().toLowerCase();
    const password =  formData.get('password') as string;

    if (!email || !password) return { error: 'Email and password are required.' };

    // ── Admin account check ──────────────────────────────────────────────────
    if (email === ADMIN_EMAIL) {
      if (hash(password) !== ADMIN_HASH) {
        return { error: 'Invalid email or password.' };
      }
      const adminUser = {
        id:       'admin-001',
        username: 'Admin',
        email:    ADMIN_EMAIL,
        role:     'admin',
      };
      setCookieSession(adminUser);
      return { success: true, user: adminUser };
    }

    // ── Regular user: accept any registered user ─────────────────────────────
    // Since we have no persistent DB, any valid email + ≥6 char password creates a session
    // In production this would query a DB
    if (password.length < 6) return { error: 'Invalid email or password.' };

    const user = {
      id:        Buffer.from(email).toString('base64url').substring(0, 12),
      username:  email.split('@')[0],
      email,
      role:      'customer',
      createdAt: new Date().toISOString(),
    };

    setCookieSession(user);
    return { success: true, user };
  } catch (err: any) {
    return { error: err.message || 'Failed to login.' };
  }
}

// ─── Logout ───────────────────────────────────────────────────────────────────

export async function logoutLocalUser() {
  cookies().delete('auth_token');
  return { success: true };
}

// ─── Get Current User ─────────────────────────────────────────────────────────

export async function getLocalUser() {
  const token = cookies().get('auth_token')?.value;
  if (!token) return null;
  return decode(token);
}

// ─── Admin guard helper ───────────────────────────────────────────────────────

export async function requireAdmin() {
  const user = await getLocalUser();
  if (!user || user.role !== 'admin') return null;
  return user;
}
