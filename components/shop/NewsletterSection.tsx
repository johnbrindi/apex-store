'use client'

import { useState } from 'react'
import { Mail, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="border-t border-surface-100 bg-surface-50/30">
      <div className="container-shop py-14">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-12 bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mx-auto mb-5">
            <Mail size={22} className="text-brand-red" />
          </div>
          <h2 className="section-title mb-3">Stay in the Loop</h2>
          <p className="text-text-muted text-sm mb-7 max-w-md mx-auto">
            Subscribe for exclusive deals, new arrivals, cycle guides, and lab-test updates.
            No spam — just the good stuff.
          </p>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-3"
              >
                <CheckCircle size={40} className="text-green-400" />
                <p className="font-display font-semibold text-lg uppercase tracking-wide text-white">
                  You&apos;re subscribed!
                </p>
                <p className="text-text-muted text-sm">
                  Welcome aboard. Check your inbox for a confirmation.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 input-base"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary px-7 py-3 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Subscribing…' : 'Subscribe'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          <p className="text-xs text-text-muted mt-4">
            By subscribing you agree to our{' '}
            <a href="/privacy-policy" className="underline hover:text-white transition-colors">
              Privacy Policy
            </a>
            . Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
