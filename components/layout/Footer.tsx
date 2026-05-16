import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-header text-white pt-12 pb-6">
      <div className="container-shop max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Disclaimer */}
          <div className="md:col-span-2 pr-4">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-header text-lg font-bold">
                💪
              </div>
              <div className="font-display font-bold text-lg tracking-tight uppercase leading-tight text-white">
                <div>STEROIDS-UK</div>
                <div className="text-white/70 text-xs">.COM</div>
              </div>
            </Link>
            <p className="text-xs text-white/70 leading-relaxed max-w-md">
              All products listed and provided through SteroidsUK are intended for research purposes only. We do not promote the personal use of these products. Products provided by SteroidsUK are not intended for use in food products or as any type of drug. Our products are not intended to treat, prevent, mitigate or cure any disease or medical condition and are for research purposes only.
            </p>
          </div>

          {/* Other Informations */}
          <div>
            <h4 className="font-bold text-[13px] uppercase tracking-wider mb-4 text-white">
              Other Informations
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-xs text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/my-account" className="text-xs text-white/70 hover:text-white transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-xs text-white/70 hover:text-white transition-colors">
                  Customers Reviews
                </Link>
              </li>
              <li>
                <Link href="/lab-tests" className="text-xs text-white/70 hover:text-white transition-colors">
                  Laboratory Tests
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-bold text-[13px] uppercase tracking-wider mb-4 text-white">
              HELP
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-xs text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs text-white/70 hover:text-white transition-colors">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-xs text-white/70 hover:text-white transition-colors">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 flex justify-between items-center text-[11px] text-white/70">
          <p>
            Made for Steroids-Uk.com {new Date().getFullYear()}.
          </p>
        </div>
      </div>
    </footer>
  )
}
