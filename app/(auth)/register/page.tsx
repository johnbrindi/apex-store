'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Eye, EyeOff, UserPlus } from 'lucide-react'
import { motion } from 'framer-motion'
import { createClient } from '@/utils/supabase/client'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

const schema = z.object({
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirm_password: z.string(),
  age_confirm: z.boolean().refine((v) => v === true, 'You must confirm you are 18+'),
  terms: z.boolean().refine((v) => v === true, 'You must accept the terms'),
}).refine((d) => d.password === d.confirm_password, {
  message: 'Passwords do not match',
  path: ['confirm_password'],
})

type FormData = z.infer<typeof schema>

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [serverError, setServerError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    setServerError('')
    try {
      const supabase = createClient()

      // Step 1: Sign up
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            first_name: data.first_name,
            last_name: data.last_name,
            username: `${data.first_name.toLowerCase()}${data.last_name.toLowerCase()}`,
          },
          emailRedirectTo: undefined,
        },
      })

      if (signUpError) {
        setServerError(signUpError.message)
        return
      }

      // Step 2: Immediately sign in to bypass email confirmation
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      })

      if (signInError) {
        // Sign-up worked but sign-in failed — just go to login
        router.push('/login?registered=1')
        return
      }

      // Step 3: Redirect to account dashboard
      router.push('/account')
      router.refresh()
    } catch {
      setServerError('An unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border border-border-light p-8 text-center shadow-sm"
      >
        <div className="w-16 h-16 bg-green-500/20 border-2 border-green-500 rounded-full flex items-center justify-center mx-auto mb-5">
          <span className="text-2xl">✓</span>
        </div>
        <h2 className="font-display font-bold text-2xl uppercase tracking-wide text-text-primary mb-3">
          Account Created!
        </h2>
        <p className="text-text-secondary text-sm mb-6 leading-relaxed">
          We&apos;ve sent a confirmation email. Please verify your email address to activate your account.
        </p>
        <Button variant="secondary" fullWidth onClick={() => router.push('/login')}>
          Back to Login
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white border border-border-light p-8 shadow-sm">
        <div className="text-center mb-8">
          <h1 className="font-display font-bold text-2xl uppercase tracking-wide text-text-primary mb-1.5">
            Create Account
          </h1>
          <p className="text-sm text-text-secondary">
            Join Steroids UK for order tracking and exclusive offers
          </p>
        </div>

        {serverError && (
          <div className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-600 text-sm">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Input
              label="First Name"
              placeholder="John"
              autoComplete="given-name"
              error={errors.first_name?.message}
              {...register('first_name')}
            />
            <Input
              label="Last Name"
              placeholder="Smith"
              autoComplete="family-name"
              error={errors.last_name?.message}
              {...register('last_name')}
            />
          </div>

          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            error={errors.email?.message}
            {...register('email')}
          />

          <Input
            label="Password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Min. 8 characters"
            autoComplete="new-password"
            error={errors.password?.message}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="text-text-secondary hover:text-text-primary transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            }
            {...register('password')}
          />

          <Input
            label="Confirm Password"
            type={showConfirm ? 'text' : 'password'}
            placeholder="Repeat your password"
            autoComplete="new-password"
            error={errors.confirm_password?.message}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                className="text-text-secondary hover:text-text-primary transition-colors"
                tabIndex={-1}
              >
                {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            }
            {...register('confirm_password')}
          />

          {/* Checkboxes */}
          <div className="space-y-3 pt-1">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                className="sr-only peer"
                {...register('age_confirm')}
              />
              <div className="w-4 h-4 border border-border-light bg-white shrink-0 mt-0.5 peer-checked:bg-brand-teal peer-checked:border-brand-teal transition-colors flex items-center justify-center">
                <span className="hidden peer-checked:block text-white text-[10px] font-bold">✓</span>
              </div>
              <span className="text-xs text-text-secondary leading-relaxed">
                I confirm that I am 18 years of age or older
              </span>
            </label>
            {errors.age_confirm && (
              <p className="text-xs text-red-500 -mt-2">{errors.age_confirm.message}</p>
            )}

            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                className="sr-only peer"
                {...register('terms')}
              />
              <div className="w-4 h-4 border border-border-light bg-white shrink-0 mt-0.5 peer-checked:bg-brand-teal peer-checked:border-brand-teal transition-colors flex items-center justify-center">
                <span className="hidden peer-checked:block text-white text-[10px] font-bold">✓</span>
              </div>
              <span className="text-xs text-text-secondary leading-relaxed">
                I agree to the{' '}
                <Link href="/terms" className="text-brand-teal hover:underline">Terms & Conditions</Link>
                {' '}and{' '}
                <Link href="/privacy-policy" className="text-brand-teal hover:underline">Privacy Policy</Link>
              </span>
            </label>
            {errors.terms && (
              <p className="text-xs text-red-500 -mt-2">{errors.terms.message}</p>
            )}
          </div>

          <Button
            type="submit"
            fullWidth
            size="lg"
            loading={loading}
            leftIcon={<UserPlus size={15} />}
            className="mt-2"
          >
            Create Account
          </Button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-border-light" />
          <span className="text-xs text-text-secondary uppercase tracking-widest">or</span>
          <div className="flex-1 h-px bg-border-light" />
        </div>

        <p className="text-center text-sm text-text-secondary">
          Already have an account?{' '}
          <Link
            href="/login"
            className="text-brand-teal hover:text-brand-teal/80 font-semibold transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </motion.div>
  )
}
