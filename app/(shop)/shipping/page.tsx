import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Delivery Information | Steroids UK',
  description: 'Delivery options, timescales and costs for Steroids-UK.com orders.',
}

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-surface-100">
      <div className="bg-white border-b border-border-light py-8">
        <div className="container-shop text-center">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-text-primary">Delivery Information</h1>
          <div className="flex items-center justify-center gap-2 mt-2 text-sm text-text-secondary">
            <Link href="/" className="hover:text-text-primary">Home</Link>
            <span>/</span>
            <span className="text-text-primary">Delivery Information</span>
          </div>
        </div>
      </div>

      <div className="container-shop py-10 max-w-3xl">
        {/* Delivery options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <div className="bg-white border border-border-light p-6">
            <div className="text-3xl mb-3">🚚</div>
            <h2 className="font-display font-bold text-xl text-text-primary mb-2">Local Delivery</h2>
            <div className="text-3xl font-bold text-button-blue mb-1">£10.00</div>
            <div className="text-sm text-text-secondary mb-4">2 to 3 business days</div>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold shrink-0">✓</span>
                Standard tracked delivery
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold shrink-0">✓</span>
                Plain discreet packaging
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold shrink-0">✓</span>
                Tracking number provided
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-button-blue p-6 ring-1 ring-button-blue/10">
            <div className="text-3xl mb-3">⚡</div>
            <h2 className="font-display font-bold text-xl text-text-primary mb-2">Express Delivery</h2>
            <div className="text-3xl font-bold text-button-blue mb-1">£25.00</div>
            <div className="text-sm text-text-secondary mb-4">7 to 24 hours</div>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold shrink-0">✓</span>
                Priority tracked delivery
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold shrink-0">✓</span>
                Plain discreet packaging
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold shrink-0">✓</span>
                Real-time tracking updates
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold shrink-0">✓</span>
                Same-day dispatch before 2PM
              </li>
            </ul>
          </div>
        </div>

        {/* Minimum order */}
        <div className="bg-surface-100 border border-border-light p-5 mb-6">
          <h3 className="font-bold text-text-primary mb-2">Minimum Order</h3>
          <p className="text-sm text-text-secondary">
            Our minimum order value is <strong className="text-text-primary">£90</strong>. This helps us ensure quality packing and handling standards are maintained for every order.
          </p>
        </div>

        {/* FAQ */}
        <div className="bg-white border border-border-light p-6 space-y-5">
          <h3 className="font-bold text-xl text-text-primary border-b border-border-light pb-3">Delivery FAQ</h3>
          {[
            { q: 'When will my order be dispatched?', a: 'Orders placed and paid before 2PM on a business day are dispatched the same day. Orders after 2PM are dispatched the following business day.' },
            { q: 'How is my order packaged?', a: 'All orders are sent in plain, discreet packaging with no external branding or indication of contents. The sender address is a generic fulfilment address.' },
            { q: 'Will I get a tracking number?', a: 'Yes. A tracking number is emailed to you as soon as your order is dispatched. You can track your parcel in real time.' },
            { q: 'What if my order does not arrive?', a: 'If your order does not arrive within the expected timeframe, contact our support team. We will investigate with the courier and arrange a replacement if necessary.' },
          ].map((item) => (
            <div key={item.q}>
              <p className="font-semibold text-sm text-text-primary mb-1">{item.q}</p>
              <p className="text-sm text-text-secondary">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
