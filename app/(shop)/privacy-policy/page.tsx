import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'ApexStore privacy policy — how we collect, use, and protect your data.',
}

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      'When you create an account or place an order, we collect personal information including your name, email address, delivery address, and phone number.',
      'We collect payment-related information solely for the purpose of processing transactions. We do not store full payment details on our servers.',
      'We automatically collect certain technical data when you visit our site, including IP address, browser type, pages visited, and time spent. This is used for analytics and security purposes only.',
      'If you contact our support team, we retain records of those communications to provide better service.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'To process and fulfil your orders, including sending confirmation and dispatch emails.',
      'To provide customer support and respond to enquiries.',
      'To send transactional emails related to your account and orders.',
      'To improve our website, products, and services based on aggregate usage data.',
      'To comply with legal obligations and prevent fraud.',
      'With your explicit consent, to send marketing communications. You may unsubscribe at any time.',
    ],
  },
  {
    title: '3. Data Sharing',
    content: [
      'We do not sell, rent, or trade your personal data to third parties for marketing purposes.',
      'We share data with trusted service providers who assist in operating our business (shipping carriers, payment processors, email service providers). These partners are contractually obligated to protect your data.',
      'We may disclose information where required by law or to protect the rights, property, or safety of our business or customers.',
    ],
  },
  {
    title: '4. Data Security',
    content: [
      'All data transmitted to and from our website is encrypted using SSL/TLS technology.',
      'We implement industry-standard security measures including firewalls, access controls, and regular security audits.',
      'We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected.',
      'In the event of a data breach that affects your rights, we will notify you as required by applicable law.',
    ],
  },
  {
    title: '5. Your Rights',
    content: [
      'You have the right to access the personal data we hold about you at any time.',
      'You may request correction of inaccurate data or deletion of your account and associated data.',
      'You may object to or restrict certain types of data processing.',
      'You have the right to data portability — to receive your data in a structured, machine-readable format.',
      'To exercise any of these rights, contact us at privacy@apexstore.co.uk.',
    ],
  },
  {
    title: '6. Cookies',
    content: [
      'We use essential cookies required for the operation of our website (session management, cart functionality).',
      'We use analytics cookies to understand how visitors interact with our site. These are anonymised.',
      'You can control cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.',
    ],
  },
  {
    title: '7. Changes to This Policy',
    content: [
      'We may update this privacy policy from time to time. Changes will be posted on this page with an updated effective date.',
      'Continued use of our website after changes are posted constitutes acceptance of the updated policy.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="container-shop py-12 max-w-3xl mx-auto">
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3">Legal</p>
        <h1 className="font-display font-bold text-4xl uppercase tracking-wide text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-text-muted">
          Effective date: <span className="text-text-secondary">1 January 2025</span> · Last updated:{' '}
          <span className="text-text-secondary">1 May 2026</span>
        </p>
      </div>

      <div className="bg-surface border border-surface-100 p-6 mb-8">
        <p className="text-sm text-text-muted leading-relaxed">
          ApexStore (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your personal data.
          This policy explains what information we collect, how we use it, and your rights regarding your data.
          Please read this policy carefully before using our website or services.
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
          Contact Regarding Privacy
        </h3>
        <p className="text-sm text-text-muted leading-relaxed">
          If you have questions about this privacy policy or wish to exercise your data rights,
          please contact our Data Controller at{' '}
          <a href="mailto:privacy@apexstore.co.uk" className="text-brand-red hover:underline">
            privacy@apexstore.co.uk
          </a>{' '}
          or write to: ApexStore Data Protection, United Kingdom.
        </p>
      </div>
    </div>
  )
}
