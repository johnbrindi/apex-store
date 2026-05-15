import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, FlaskConical, Truck, Users, Award, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about ApexStore — the UK\'s premier destination for lab-tested performance compounds.',
}

const stats = [
  { value: '1,000+', label: 'Products in Stock' },
  { value: '10,000+', label: 'Orders Fulfilled' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '24hr', label: 'UK Delivery' },
]

const values = [
  {
    icon: FlaskConical,
    title: 'Lab Verified',
    body: 'Every product we stock undergoes independent third-party laboratory testing before being listed. We publish test results openly so customers can verify exactly what they are purchasing.',
  },
  {
    icon: Shield,
    title: 'Customer Privacy',
    body: 'We take discretion seriously. All orders ship in plain, unmarked packaging. Your personal data is encrypted and never sold or shared with third parties under any circumstances.',
  },
  {
    icon: Truck,
    title: 'Reliable Delivery',
    body: 'UK-based fulfilment means fast, domestic shipping. Orders placed before 2PM are dispatched same day. We offer standard and next-day tracked delivery options.',
  },
  {
    icon: Users,
    title: 'Community First',
    body: 'Built by athletes for athletes. We publish educational guides, maintain a knowledge hub, and provide responsive customer support to help every customer make informed decisions.',
  },
  {
    icon: Award,
    title: 'Quality Standards',
    body: 'We only stock from verified manufacturers and authorised distributors. Every batch is checked before being added to inventory. No counterfeits, no compromises.',
  },
  {
    icon: Target,
    title: 'Harm Reduction',
    body: 'We believe in education over ignorance. Our blog and guides promote informed, responsible use with emphasis on health monitoring, PCT protocols, and professional consultation.',
  },
]

export default function AboutPage() {
  return (
    <div className="container-shop py-12">
      {/* Hero */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3">Our Story</p>
        <h1 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-wide text-white mb-6">
          About ApexStore
        </h1>
        <p className="text-text-muted leading-relaxed mb-6">
          ApexStore was founded with a single mission: to give serious athletes access to
          pharmaceutical-grade performance compounds with full transparency, verified purity,
          and the discretion they deserve.
        </p>
        <p className="text-text-muted leading-relaxed">
          We operate entirely within the UK, with domestic fulfilment ensuring fast delivery
          and no customs complications. Every product we list has been independently tested.
          Every batch is traceable. Every customer is treated with respect.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map(({ value, label }) => (
          <div key={label} className="bg-surface border border-surface-100 p-6 text-center">
            <p className="font-display font-bold text-3xl text-brand-red mb-1">{value}</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">{label}</p>
          </div>
        ))}
      </div>

      {/* Values */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="font-display font-bold text-3xl uppercase tracking-wide text-white">
            Our Values
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-surface border border-surface-100 p-6">
              <div className="w-11 h-11 bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mb-4">
                <Icon size={20} className="text-brand-red" />
              </div>
              <h3 className="font-display font-bold text-base uppercase tracking-wide text-white mb-3">
                {title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-3xl mx-auto bg-surface border border-surface-100 p-8 mb-12">
        <h3 className="font-display font-bold text-xl uppercase tracking-wide text-white mb-4">
          Legal Disclaimer
        </h3>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            ApexStore sells products for research, laboratory, and harm reduction purposes. The information
            provided on this website is for educational purposes only and does not constitute medical advice.
          </p>
          <p>
            Customers must be 18 years of age or older to purchase from this store. It is the
            customer&apos;s responsibility to understand and comply with the laws of their jurisdiction
            regarding the purchase, possession, and use of the products listed.
          </p>
          <p>
            We strongly recommend consulting with a qualified healthcare professional before beginning
            any compound protocol. Our blog and guides are educational resources only and should not
            replace professional medical advice.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h3 className="font-display font-bold text-2xl uppercase tracking-wide text-white mb-4">
          Ready to Shop?
        </h3>
        <p className="text-text-muted text-sm mb-6">
          Browse our full range of lab-tested performance compounds.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link href="/shop" className="btn-primary px-8 py-3.5">
            Shop All Products
          </Link>
          <Link href="/contact" className="btn-secondary px-8 py-3.5">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
