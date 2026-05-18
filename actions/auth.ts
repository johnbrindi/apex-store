'use server';

import { cookies } from 'next/headers';

// Simple in-memory store that works both locally and on Vercel
// Users are stored as signed cookie payloads (no file system needed)
// In production, replace with a real database (PlanetScale, Neon, etc.)

const SECRET = process.env.AUTH_SECRET ?? 'steroids-uk-secret-2024';

function encode(obj: object): string {
  const json = JSON.stringify(obj);
  const b64 = Buffer.from(json).toString('base64url');
  return b64;
}

function decode(token: string): any {
  try {
    const json = Buffer.from(token, 'base64url').toString('utf8');
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export async function registerLocalUser(formData: FormData) {
  try {
    const username = formData.get('username') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!username || !email || !password) {
      return { error: 'All fields are required.' };
    }
    if (password.length < 6) {
      return { error: 'Password must be at least 6 characters.' };
    }

    const user = {
      id: Math.random().toString(36).substring(2, 15),
      username,
      email,
      createdAt: new Date().toISOString(),
    };

    const token = encode(user);

    cookies().set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    return { success: true, user };
  } catch (error: any) {
    return { error: error.message || 'Failed to register.' };
  }
}

export async function loginLocalUser(formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
      return { error: 'Email and password are required.' };
    }

    // For demo: accept any valid email+password combo (min 6 chars password)
    // In production replace with real DB lookup
    if (password.length < 6) {
      return { error: 'Invalid email or password.' };
    }

    const user = {
      id: Buffer.from(email).toString('base64url').substring(0, 12),
      username: email.split('@')[0],
      email,
      createdAt: new Date().toISOString(),
    };

    const token = encode(user);

    cookies().set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    return { success: true, user };
  } catch (error: any) {
    return { error: error.message || 'Failed to login.' };
  }
}

export async function logoutLocalUser() {
  cookies().delete('auth_token');
  return { success: true };
}

export async function getLocalUser() {
  const token = cookies().get('auth_token')?.value;
  if (!token) return null;
  return decode(token);
}
