'use server';

import fs from 'fs';
import path from 'path';
import { cookies } from 'next/headers';

const dbPath = path.join(process.cwd(), 'data', 'users.json');

// Initialize DB if it doesn't exist
const getDb = () => {
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify({ users: [] }));
  }
  return JSON.parse(fs.readFileSync(dbPath, 'utf8'));
};

const saveDb = (data: any) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

export async function registerLocalUser(formData: FormData) {
  try {
    const username = formData.get('username') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!username || !email || !password) {
      return { error: 'All fields are required.' };
    }

    const db = getDb();
    
    // Check if user exists
    if (db.users.find((u: any) => u.email === email)) {
      return { error: 'User already registered. Please log in instead.' };
    }

    const newUser = {
      id: Math.random().toString(36).substring(2, 15),
      username,
      email,
      password, // Stored in plain text for simplicity since this is a mock DB
      createdAt: new Date().toISOString()
    };

    db.users.push(newUser);
    saveDb(db);

    // Set cookie
    cookies().set('auth_token', newUser.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 1 week
    });

    return { success: true, user: newUser };
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

    const db = getDb();
    const user = db.users.find((u: any) => u.email === email && u.password === password);

    if (!user) {
      return { error: 'Invalid email or password.' };
    }

    // Set cookie
    cookies().set('auth_token', user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 1 week
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

  const db = getDb();
  return db.users.find((u: any) => u.id === token) || null;
}
