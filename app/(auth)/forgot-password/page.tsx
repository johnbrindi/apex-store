'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { createClient } from '@/utils/supabase/client'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
})
type FormData = z.infer<typeof schema>

export default function ForgotPasswordPage() {
  const [serverError, setServerError] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    setServerError('')
    try {
      const supabase = createClient()
      const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/account/settings?tab=security`,
      })
      if (error) { setServerError(error.message); return }
      setSent(true)
    } catch {
      setServerError('An unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div className="bg-surface border border-surface-100 p-8">
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="sent"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4"
            >
              <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
              <h2 className="font-display font-bold text-2xl uppercase tracking-wide text-white mb-3">
                Check Your Email
              </h2>
              <p className="text-text-muted text-sm mb-6 leading-relaxed">
                If an account exists for that email, we&apos;ve sent password reset instructions. Check your inbox and spam folder.
              </p>
              <Link href="/login" className="flex items-center justify-center gap-2 text-sm text-brand-red hover:text-brand-red-light transition-colors font-semibold">
                <ArrowLeft size={14} /> Back to Login
              </Link>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mx-auto mb-4">
                  <Mail size={20} className="text-brand-red" />
                </div>
                <h1 className="font-display font-bold text-2xl uppercase tracking-wide text-white mb-1.5">
                  Reset Password
                </h1>
                <p className="text-sm text-text-muted">
                  Enter your email and we&apos;ll send you a reset link
                </p>
              </div>

              {serverError && (
                <div className="mb-5 p-3.5 bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  {serverError}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  error={errors.email?.message}
                  {...register('email')}
                />
                <Button type="submit" fullWidth size="lg" loading={loading} leftIcon={<Mail size={15} />}>
                  Send Reset Link
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Link href="/login" className="flex items-center justify-center gap-2 text-sm text-text-muted hover:text-white transition-colors">
                  <ArrowLeft size={14} /> Back to Login
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
