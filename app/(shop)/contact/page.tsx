'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, MessageSquare, Clock, CheckCircle, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

const schema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Valid email required'),
  subject: z.string().min(4, 'Subject required'),
  order_id: z.string().optional(),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})
type FormData = z.infer<typeof schema>

const SUBJECTS = [
  'Order Query',
  'Delivery Issue',
  'Product Question',
  'Payment Help',
  'Returns / Refunds',
  'Account Help',
  'Other',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="container-shop py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3">Support</p>
        <h1 className="font-display font-bold text-4xl uppercase tracking-wide text-white mb-4">
          Contact Us
        </h1>
        <p className="text-text-muted text-sm max-w-md mx-auto">
          Have a question or need help with your order? We&apos;re here to help. Use the form below or reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Info cards */}
        <div className="space-y-4">
          {[
            {
              icon: Mail,
              label: 'Email Support',
              value: 'Davethomson1122@gmail.com',
              sub: 'We reply within 24 hours',
            },
            {
              icon: MessageSquare,
              label: 'Live Chat',
              value: 'Available on site',
              sub: 'Mon–Fri, 9AM–6PM GMT',
            },
            {
              icon: Clock,
              label: 'Response Time',
              value: 'Under 24 hours',
              sub: 'Usually much faster',
            },
          ].map(({ icon: Icon, label, value, sub }) => (
            <div key={label} className="bg-surface border border-surface-100 p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-red/10 border border-brand-red/20 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-brand-red" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">{label}</p>
                  <p className="text-sm font-semibold text-text-primary">{value}</p>
                  <p className="text-xs text-text-muted mt-0.5">{sub}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Quick links */}
          <div className="bg-surface border border-surface-100 p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3">
              Quick Answers
            </p>
            <ul className="space-y-2">
              {[
                { label: 'Delivery Information', href: '/shipping' },
                { label: 'Payment Methods', href: '/payments' },
                { label: 'Returns Policy', href: '/refund-policy' },
                { label: 'FAQ', href: '/faq' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-text-muted hover:text-brand-red transition-colors"
                  >
                    <span className="w-1 h-1 bg-brand-red rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact form */}
        <div className="lg:col-span-2">
          <div className="bg-surface border border-surface-100 p-7">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={52} className="text-green-400 mx-auto mb-5" />
                  <h3 className="font-display font-bold text-2xl uppercase tracking-wide text-white mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                    Thanks for getting in touch. We&apos;ll review your message and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary px-6 py-2.5 text-sm"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h2 className="font-display font-bold text-xl uppercase tracking-wide text-white mb-6">
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="Your Name"
                        placeholder="John Smith"
                        error={errors.name?.message}
                        {...register('name')}
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        placeholder="you@example.com"
                        error={errors.email?.message}
                        {...register('email')}
                      />
                    </div>

                    <div>
                      <label className="label-base">Subject</label>
                      <select
                        className="input-base"
                        {...register('subject')}
                      >
                        <option value="">Select a subject…</option>
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.subject && (
                        <p className="mt-1.5 text-xs text-red-400">{errors.subject.message}</p>
                      )}
                    </div>

                    <Input
                      label="Order ID (optional)"
                      placeholder="ORD-XXXX"
                      hint="Include your order ID if this relates to a specific order"
                      {...register('order_id')}
                    />

                    <div>
                      <label className="label-base">Message</label>
                      <textarea
                        rows={6}
                        placeholder="Describe your question or issue in detail…"
                        className="input-base resize-none"
                        {...register('message')}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
                      )}
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        size="lg"
                        loading={loading}
                        leftIcon={<Send size={15} />}
                      >
                        Send Message
                      </Button>
                    </div>

                    <p className="text-xs text-text-muted leading-relaxed">
                      By submitting this form you agree to our{' '}
                      <a href="/privacy-policy" className="text-brand-red hover:underline">Privacy Policy</a>.
                      We will never share your details with third parties.
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
