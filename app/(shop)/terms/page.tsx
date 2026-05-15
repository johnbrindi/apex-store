import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'ApexStore terms and conditions of sale and use.',
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By accessing or using the ApexStore website and placing an order, you agree to be bound by these Terms and Conditions in full.',
      'If you do not agree with any part of these terms, you must not use our website or services.',
      'We reserve the right to update these terms at any time. Continued use of our services constitutes acceptance of any revised terms.',
      'You must be 18 years of age or older to use this website and purchase products. By using this site, you confirm you meet this age requirement.',
    ],
  },
  {
    title: '2. Products and Descriptions',
    content: [
      'We make every effort to ensure product descriptions, specifications, and images are accurate. However, we do not warrant that product descriptions are entirely free of errors.',
      'Product images are for illustrative purposes. Actual products may vary slightly in appearance from images shown.',
      'We reserve the right to discontinue, modify, or limit availability of any product without notice.',
      'Prices are displayed in British Pounds Sterling (GBP) and are inclusive of any applicable taxes unless stated otherwise.',
    ],
  },
  {
    title: '3. Orders and Payment',
    content: [
      'Placing an order constitutes an offer to purchase. We reserve the right to refuse or cancel any order at our discretion.',
      'An order is confirmed only upon receipt of full payment. Orders are not binding until we send a written confirmation.',
      'Accepted payment methods include bank transfer, cryptocurrency (Bitcoin, Ethereum, USDT), and Revolut.',
      'Prices may change at any time. The price applicable to your order is the price shown at the time of checkout confirmation.',
      'If payment is not received within 48 hours of order placement, the order may be cancelled automatically.',
    ],
  },
  {
    title: '4. Delivery',
    content: [
      'We aim to dispatch all orders within the timescales stated on our delivery information page.',
      'Delivery timescales are estimates and not guaranteed. We are not liable for delays caused by third-party carriers or circumstances beyond our control.',
      'Risk of loss or damage to goods passes to the customer upon delivery.',
      'You are responsible for ensuring a correct and accessible delivery address is provided. We cannot be held liable for non-delivery due to incorrect address information.',
    ],
  },
  {
    title: '5. Returns and Refunds',
    content: [
      'Returns are accepted on sealed, unopened products within 14 days of delivery, provided the product is defective or was incorrectly sent.',
      'To initiate a return, contact our support team with your order number and photographic evidence of the issue.',
      'Refunds are processed within 5–10 business days of receiving the returned product.',
      'We do not accept returns on opened products due to the nature of our inventory.',
      'Shipping costs for returns are the responsibility of the customer unless the return is due to our error.',
    ],
  },
  {
    title: '6. Liability Disclaimer',
    content: [
      'Products are sold for research and informational purposes only. We make no medical claims regarding the products listed on this website.',
      'It is the customer\'s sole responsibility to research, understand, and comply with the laws of their jurisdiction regarding the purchase, possession, and use of our products.',
      'We strongly recommend consulting a qualified healthcare professional before using any performance compound.',
      'ApexStore accepts no liability for any harm, injury, or legal consequence arising from the misuse or unlawful use of products purchased from us.',
      'Our maximum liability to any customer shall not exceed the value of the products purchased in the relevant transaction.',
    ],
  },
  {
    title: '7. Intellectual Property',
    content: [
      'All content on this website, including text, images, logos, and design, is the intellectual property of ApexStore or its licensors.',
      'You may not copy, reproduce, or distribute any content from this website without prior written permission.',
    ],
  },
  {
    title: '8. Governing Law',
    content: [
      'These terms are governed by and construed in accordance with the laws of England and Wales.',
      'Any dispute arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.',
    ],
  },
]

export default function TermsPage() {
  return (
    <div className="container-shop py-12 max-w-3xl mx-auto">
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3">Legal</p>
        <h1 className="font-display font-bold text-4xl uppercase tracking-wide text-white mb-4">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-text-muted">
          Effective date: <span className="text-text-secondary">1 January 2025</span> · Last updated:{' '}
          <span className="text-text-secondary">1 May 2026</span>
        </p>
      </div>

      <div className="bg-surface border border-surface-100 p-6 mb-8">
        <p className="text-sm text-text-muted leading-relaxed">
          Please read these Terms &amp; Conditions carefully before using ApexStore. These terms govern
          your access to and use of our website, products, and services. By using our site you accept
          these terms in full.
        </p>
      </div>

      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-display font-bold text-lg uppercase tracking-wide text-white mb-4 border-l-4 border-brand-red pl-4">
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.content.map((para, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-text-muted leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-brand-red/60 rounded-full shrink-0 mt-2" />
                  {para}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-surface border border-surface-100 p-6">
        <h3 className="font-display font-bold text-base uppercase tracking-wide text-white mb-3">
          Questions About These Terms
        </h3>
        <p className="text-sm text-text-muted leading-relaxed">
          If you have any questions about these Terms &amp; Conditions, please contact us at{' '}
          <a href="mailto:legal@apexstore.co.uk" className="text-brand-red hover:underline">
            legal@apexstore.co.uk
          </a>
          .
        </p>
      </div>
    </div>
  )
}
