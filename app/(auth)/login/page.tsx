'use client'

import { useState, Suspense } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'
import { registerLocalUser, loginLocalUser } from '@/actions/auth'

function MyAccountPageContent() {
  const [regUsername, setRegUsername] = useState('')
  const [regEmail, setRegEmail] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const [showRegPass, setShowRegPass] = useState(false)
  const [regLoading, setRegLoading] = useState(false)
  const [regError, setRegError] = useState('')
  const [regSuccess, setRegSuccess] = useState('')

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [showLoginPass, setShowLoginPass] = useState(false)
  const [loginLoading, setLoginLoading] = useState(false)
  const [loginError, setLoginError] = useState('')

  const router = useRouter()
  const searchParams = useSearchParams()
  const justRegistered = searchParams.get('registered') === '1'

  const redirectPath = searchParams.get('redirect') || '/my-account'

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!regUsername.trim() || !regEmail.trim() || !regPassword.trim()) {
      setRegError('All fields are required.')
      return
    }
    setRegLoading(true)
    setRegError('')
    setRegSuccess('')
    try {
      const formData = new FormData()
      formData.append('username', regUsername)
      formData.append('email', regEmail)
      formData.append('password', regPassword)

      const result = await registerLocalUser(formData)

      if (result.error) {
        setRegError(result.error)
        return
      }

      router.push(redirectPath)
      router.refresh()
    } catch {
      setRegError('An error occurred. Please try again.')
    } finally {
      setRegLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginLoading(true)
    setLoginError('')
    try {
      const formData = new FormData()
      formData.append('email', loginEmail)
      formData.append('password', loginPassword)

      const result = await loginLocalUser(formData)

      if (result.error) {
        setLoginError(result.error)
        return
      }

      // Admin users always go to /admin dashboard
      if ((result as any).role === 'admin') {
        router.push('/admin')
      } else {
        router.push(redirectPath)
      }
      router.refresh()
    } catch {
      setLoginError('An error occurred. Please try again.')
    } finally {
      setLoginLoading(false)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Register column */}
      <div>
        <h2 className="font-display font-bold text-2xl text-text-primary mb-6 border-b border-border-light pb-3">
          Register
        </h2>

        {regError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm">
            {regError}
          </div>
        )}
        {regSuccess && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 text-sm">
            {regSuccess}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-1">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={regUsername}
              onChange={(e) => setRegUsername(e.target.value)}
              required
              className="w-full border border-border-light bg-white text-text-primary px-3 py-2.5 text-sm focus:outline-none focus:border-button-blue transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-1">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
              required
              className="w-full border border-border-light bg-white text-text-primary px-3 py-2.5 text-sm focus:outline-none focus:border-button-blue transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showRegPass ? 'text' : 'password'}
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                required
                minLength={8}
                className="w-full border border-border-light bg-white text-text-primary px-3 py-2.5 text-sm focus:outline-none focus:border-button-blue transition-colors pr-10"
              />
              <button
                type="button"
                onClick={() => setShowRegPass((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary"
                tabIndex={-1}
              >
                {showRegPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            disabled={regLoading}
            className="w-full bg-button-blue hover:bg-button-hover text-white font-bold uppercase py-3 text-sm tracking-wider transition-colors disabled:opacity-60"
          >
            {regLoading ? 'Creating Account...' : 'REGISTER'}
          </button>
        </form>
      </div>

      {/* Login column */}
      <div>
        <h2 className="font-display font-bold text-2xl text-text-primary mb-6 border-b border-border-light pb-3">
          Login
        </h2>
        <p className="text-sm text-text-secondary leading-relaxed mb-6">
          Registering for this site allows you to access your order status and history. Just fill in the fields below, and we&apos;ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.
        </p>

        {justRegistered && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 text-sm">
            Account created! Please sign in below.
          </div>
        )}
        {loginError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm">
            {loginError}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-1">
              Email address
            </label>
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
              className="w-full border border-border-light bg-white text-text-primary px-3 py-2.5 text-sm focus:outline-none focus:border-button-blue transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showLoginPass ? 'text' : 'password'}
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                className="w-full border border-border-light bg-white text-text-primary px-3 py-2.5 text-sm focus:outline-none focus:border-button-blue transition-colors pr-10"
              />
              <button
                type="button"
                onClick={() => setShowLoginPass((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary"
                tabIndex={-1}
              >
                {showLoginPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={loginLoading}
              className="bg-button-blue hover:bg-button-hover text-white font-bold uppercase py-2.5 px-6 text-sm tracking-wider transition-colors disabled:opacity-60"
            >
              {loginLoading ? 'Signing in...' : 'LOGIN'}
            </button>
            <Link href="/forgot-password" className="text-sm text-button-blue hover:underline">
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function MyAccountPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <MyAccountPageContent />
    </Suspense>
  )
}
