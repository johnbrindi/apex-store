import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Payment Methods | Steroids UK',
  description: 'Accepted payment methods at Steroids-UK.com — Bank Transfer, Revolut, Bitcoin, and more.',
}

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-surface-100">
      <div className="bg-white border-b border-border-light py-8">
        <div className="container-shop text-center">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-text-primary">Payment Methods</h1>
          <div className="flex items-center justify-center gap-2 mt-2 text-sm text-text-secondary">
            <Link href="/" className="hover:text-text-primary">Home</Link>
            <span>/</span>
            <span className="text-text-primary">Payment Methods</span>
          </div>
        </div>
      </div>

      <div className="container-shop py-10 max-w-3xl">
        <div className="space-y-5">
          {[
            {
              icon: '🏦',
              title: 'Bank Transfer',
              description: 'Standard UK bank transfer (BACS/Faster Payments). Payment details sent via email after order placement. Orders dispatched once payment clears.',
              highlight: false,
            },
            {
              icon: '🔄',
              title: 'Revolut',
              description: 'Pay via Revolut and receive a 5% discount PLUS a free product with your order. Use code REVO10 at checkout. Our most popular payment method.',
              badge: '5% OFF + FREE PRODUCT',
              highlight: true,
            },
            {
              icon: '₿',
              title: 'Bitcoin (BTC)',
              description: 'Send Bitcoin to our wallet address provided after order. Payments confirmed after 1 network confirmation. 5% crypto discount applied.',
              badge: '5% OFF',
              highlight: false,
            },
            {
              icon: 'Ξ',
              title: 'Ethereum (ETH)',
              description: 'Ethereum payments accepted. Wallet address provided at checkout. 5% discount applied automatically for all crypto payments.',
              badge: '5% OFF',
              highlight: false,
            },
            {
              icon: '💲',
              title: 'USDT (Tether)',
              description: 'USDT payments accepted on multiple networks (TRC20, ERC20). Stable coin preferred by many customers. 5% crypto discount applied.',
              badge: '5% OFF',
              highlight: false,
            },
          ].map((method) => (
            <div
              key={method.title}
              className={`bg-white border p-5 ${method.highlight ? 'border-button-blue ring-1 ring-button-blue/20' : 'border-border-light'}`}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0">{method.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-lg text-text-primary">{method.title}</h3>
                    {method.badge && (
                      <span className="bg-button-blue text-white text-xs font-bold px-2 py-0.5 uppercase">
                        {method.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{method.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-surface-100 border border-border-light p-5">
          <h3 className="font-bold text-text-primary mb-2">Payment Security</h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            All payment information is handled securely. We never store card details. Bank transfer instructions are sent via encrypted email. Cryptocurrency addresses are generated uniquely per order for maximum security.
          </p>
        </div>
      </div>
    </div>
  )
}
