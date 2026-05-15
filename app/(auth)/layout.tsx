import Link from 'next/link'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-100 flex flex-col">
      {/* Use the shop header */}
      <div className="bg-white border-b border-border-light">
        <div className="container-shop py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-brand-header rounded-full flex items-center justify-center text-white text-lg">
              💪
            </div>
            <div className="font-display font-bold text-sm tracking-tight text-text-primary uppercase leading-tight">
              <div className="text-brand-header">STEROIDS-UK</div>
              <div className="text-text-secondary text-xs">.COM</div>
            </div>
          </Link>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <Link href="/faq" className="hover:text-text-primary transition-colors">FAQ</Link>
            <Link href="/contact" className="hover:text-text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      {/* Page heading like reference */}
      <div className="bg-surface-100 border-b border-border-light py-8 text-center">
        <h1 className="font-display font-bold text-3xl md:text-4xl text-text-primary">My Account</h1>
        <div className="flex items-center justify-center gap-2 mt-2 text-sm text-text-secondary">
          <Link href="/" className="hover:text-text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text-primary">My Account</span>
        </div>
      </div>

      {/* Main */}
      <main className="flex-1 py-10 px-4">
        <div className="container-shop max-w-4xl mx-auto">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border-light py-4 px-6 text-center bg-white">
        <p className="text-xs text-text-secondary">
          © {new Date().getFullYear()} Steroids-UK.com ·{' '}
          <Link href="/privacy-policy" className="hover:text-text-primary transition-colors">Privacy</Link>
          {' · '}
          <Link href="/terms" className="hover:text-text-primary transition-colors">Terms</Link>
        </p>
      </footer>
    </div>
  )
}
