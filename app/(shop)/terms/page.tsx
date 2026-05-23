import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for purchasing from SteroidsUK.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/terms`,
  },
}

export default function TermsOfService() {
  return (
    <div className="container-shop max-w-[900px] mx-auto px-4 py-12 md:py-20 font-sans text-gray-800">
      <h1 className="text-4xl font-display font-bold uppercase mb-8 text-brand-primary">Terms & Conditions</h1>

      <div className="space-y-6 text-sm md:text-base leading-relaxed">
        <p className="font-semibold text-lg border-l-4 border-brand-primary pl-4">
          By accessing and using SteroidsUK, you agree to be bound by the following Terms & Conditions. If you do not agree to these terms, please do not use our website.
        </p>

        <h2 className="text-xl font-bold uppercase mt-8 mb-4">1. Age & Eligibility</h2>
        <p>
          You must be at least 21 years of age to purchase any products from SteroidsUK. By placing an order, you confirm that you meet this age requirement and that you are legally capable of entering into binding contracts.
        </p>

        <h2 className="text-xl font-bold uppercase mt-8 mb-4">2. Product Intended Use</h2>
        <p>
          All products sold on SteroidsUK (including Anabolic Steroids, Peptides, and SARMs) are sold strictly for in-vitro research purposes only. They are explicitly NOT intended for human consumption, ingestion, or veterinary use. Any implication of human use will result in the immediate cancellation of your order and a ban from our platform.
        </p>

        <h2 className="text-xl font-bold uppercase mt-8 mb-4">3. Legal Compliance</h2>
        <p>
          It is the sole responsibility of the buyer to determine the laws governing the purchase, possession, and use of these research compounds in their specific region or country (including the United Kingdom). SteroidsUK operates on the assumption that the buyer possesses the necessary licensing or permits to handle these compounds if required by their local jurisdiction.
        </p>

        <h2 className="text-xl font-bold uppercase mt-8 mb-4">4. Shipping & Delivery</h2>
        <p>
          While we guarantee stealth and secure packaging, SteroidsUK is not responsible for lost packages, custom seizures, or delays once the package is dispatched. We provide tracking information for all orders, but the final liability of safe receipt rests with the buyer in accordance with their local importation laws.
        </p>

        <h2 className="text-xl font-bold uppercase mt-8 mb-4">5. Refunds & Returns</h2>
        <p>
          Due to the nature of the products, we do not accept returns. If there is an error in fulfillment (e.g., you received the wrong item), please contact our support team within 48 hours of delivery to seek a resolution. We do not offer refunds for packages held or seized by customs.
        </p>
      </div>
    </div>
  )
}
