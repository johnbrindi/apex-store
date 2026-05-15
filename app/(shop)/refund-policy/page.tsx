import type { Metadata } from 'next'
import Link from 'next/link'
import { RotateCcw, AlertCircle, CheckCircle, XCircle, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'ApexStore refund and returns policy — your rights and our process.',
}

export default function RefundPolicyPage() {
  return (
    <div className="container-shop py-12 max-w-3xl mx-auto">
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3">Legal</p>
        <h1 className="font-display font-bold text-4xl uppercase tracking-wide text-white mb-4">
          Refund Policy
        </h1>
        <p className="text-sm text-text-muted">
          Last updated: <span className="text-text-secondary">1 May 2026</span>
        </p>
      </div>

      <div className="bg-surface border border-surface-100 p-6 mb-8">
        <p className="text-sm text-text-muted leading-relaxed">
          We want you to be completely satisfied with every purchase. If something is wrong with your
          order, we will do everything we can to make it right. Please read this policy carefully
          before requesting a return or refund.
        </p>
      </div>

      {/* Eligible / Not eligible */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-green-500/8 border border-green-500/20 p-5">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle size={18} className="text-green-400" />
            <h3 className="font-display font-bold text-base uppercase tracking-wide text-green-400">
              Eligible for Refund
            </h3>
          </div>
          <ul className="space-y-2">
            {[
              'Sealed, unopened product received damaged',
              'Incorrect product sent',
              'Product significantly different from description',
              'Order not received (after investigation)',
              'Duplicate orders charged in error',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-text-muted">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full shrink-0 mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-500/8 border border-red-500/20 p-5">
          <div className="flex items-center gap-2 mb-4">
            <XCircle size={18} className="text-red-400" />
            <h3 className="font-display font-bold text-base uppercase tracking-wide text-red-400">
              Not Eligible for Refund
            </h3>
          </div>
          <ul className="space-y-2">
            {[
              'Opened or used products',
              'Change of mind after dispatch',
              'Products returned without prior authorisation',
              'Damage caused by improper storage',
              'Orders where delivery address was incorrect',
              'Products held in customs (international)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-text-muted">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0 mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Process */}
      <div className="mb-8">
        <h2 className="font-display font-bold text-xl uppercase tracking-wide text-white mb-5 border-l-4 border-brand-red pl-4">
          How to Request a Refund
        </h2>
        <div className="space-y-4">
          {[
            {
              step: '01',
              title: 'Contact Support',
              body: 'Email us at returns@apexstore.co.uk within 14 days of delivery. Include your order number and a clear description of the issue.',
            },
            {
              step: '02',
              title: 'Provide Evidence',
              body: 'Attach clear photographs of the product and packaging showing the damage or issue. This helps us process your request faster.',
            },
            {
              step: '03',
              title: 'Await Authorisation',
              body: 'Our team will review your request within 1–2 business days and confirm whether a return or refund is authorised.',
            },
            {
              step: '04',
              title: 'Return or Resolution',
              body: 'Depending on the issue, we will either send a replacement, issue a store credit, or process a full refund to your original payment method.',
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 bg-surface border border-surface-100 p-5">
              <span className="font-display font-bold text-2xl text-brand-red/40 shrink-0 tabular-nums">
                {item.step}
              </span>
              <div>
                <p className="font-display font-semibold text-base uppercase tracking-wide text-white mb-1">
                  {item.title}
                </p>
                <p className="text-sm text-text-muted leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timescales */}
      <div className="mb-8 bg-surface border border-surface-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-surface-100 bg-surface-50/30">
          <h3 className="font-display font-bold text-base uppercase tracking-wide text-white flex items-center gap-2">
            <RotateCcw size={16} className="text-brand-red" />
            Refund Timescales
          </h3>
        </div>
        <div className="divide-y divide-surface-100">
          {[
            { method: 'Bank Transfer', time: '3–5 business days' },
            { method: 'Cryptocurrency (BTC/ETH/USDT)', time: '1–3 business days' },
            { method: 'Revolut', time: '1–2 business days' },
            { method: 'Store Credit', time: 'Instant upon approval' },
          ].map((row) => (
            <div key={row.method} className="flex justify-between items-center px-6 py-3.5 text-sm">
              <span className="text-text-secondary font-semibold">{row.method}</span>
              <span className="text-text-muted">{row.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Notice */}
      <div className="bg-amber-500/8 border border-amber-500/20 p-5 flex gap-3 mb-8">
        <AlertCircle size={18} className="text-amber-400 shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-amber-400 text-sm mb-1">Important</p>
          <p className="text-sm text-text-muted leading-relaxed">
            Refund requests must be submitted within 14 days of the delivery date. Requests submitted
            after this window may not be accepted. Always retain your original packaging and products
            until the matter is resolved.
          </p>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-surface border border-surface-100 p-6">
        <div className="flex items-start gap-3">
          <Mail size={18} className="text-brand-red shrink-0 mt-0.5" />
          <div>
            <h3 className="font-display font-bold text-base uppercase tracking-wide text-white mb-2">
              Contact Returns Team
            </h3>
            <p className="text-sm text-text-muted leading-relaxed mb-3">
              For all return and refund enquiries, contact our dedicated returns team. Please include
              your order number in the subject line.
            </p>
            <a
              href="mailto:returns@apexstore.co.uk"
              className="text-brand-red hover:text-brand-red-light font-semibold text-sm transition-colors"
            >
              returns@apexstore.co.uk
            </a>
            <span className="text-text-muted text-sm mx-3">·</span>
            <Link href="/contact" className="text-brand-red hover:text-brand-red-light font-semibold text-sm transition-colors">
              Contact Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
