'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { X, ChevronDown, ChevronRight, User, Heart, ShoppingBag } from 'lucide-react'
import { useUIStore } from '@/store/uiStore'
import { navigationItems } from '@/data/mock'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileNav() {
  const { mobileNavOpen, closeMobileNav } = useUIStore()
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileNavOpen])

  const toggle = (label: string) =>
    setExpanded((prev) => (prev === label ? null : label))

  return (
    <AnimatePresence>
      {mobileNavOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 z-[60] lg:hidden"
            onClick={closeMobileNav}
          />

          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.28 }}
            className="fixed inset-y-0 left-0 w-[300px] max-w-[85vw] bg-white z-[70] flex flex-col lg:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 h-14 border-b border-border-light bg-brand-header shrink-0">
              <span className="font-display font-bold text-base text-white uppercase tracking-wider">
                STEROIDS-UK.COM
              </span>
              <button
                onClick={closeMobileNav}
                className="p-1.5 text-white/70 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Quick links */}
            <div className="flex border-b border-border-light">
              {[
                { href: '/account', icon: User, label: 'Account' },
                { href: '/account/wishlist', icon: Heart, label: 'Wishlist' },
                { href: '/account/orders', icon: ShoppingBag, label: 'Orders' },
              ].map(({ href, icon: Icon, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMobileNav}
                  className="flex-1 flex flex-col items-center gap-1 py-3 text-text-primary hover:text-button-blue text-xs font-semibold uppercase tracking-wide transition-colors border-r border-border-light last:border-r-0"
                >
                  <Icon size={18} />
                  {label}
                </Link>
              ))}
            </div>

            {/* Nav items */}
            <nav className="flex-1 py-2">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggle(item.label)}
                        className="flex items-center justify-between w-full px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-text-primary hover:bg-surface-100 transition-colors border-b border-border-light/50"
                      >
                        {item.label}
                        <ChevronDown
                          size={15}
                          className={cn(
                            'transition-transform duration-200 text-text-secondary',
                            expanded === item.label && 'rotate-180'
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {expanded === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden bg-surface-100"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href ?? '#'}
                                onClick={closeMobileNav}
                                className="flex items-center gap-2 pl-8 pr-4 py-3 text-sm text-text-primary hover:text-button-blue hover:bg-surface-200 transition-colors border-b border-border-light/30"
                              >
                                <ChevronRight size={12} className="text-button-blue shrink-0" />
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href ?? '#'}
                      onClick={closeMobileNav}
                      className="flex items-center px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-text-primary hover:bg-surface-100 hover:text-button-blue transition-colors border-b border-border-light/50"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/blog"
                onClick={closeMobileNav}
                className="flex items-center px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-text-primary hover:bg-surface-100 hover:text-button-blue transition-colors border-b border-border-light/50"
              >
                BLOG
              </Link>
            </nav>

            {/* Bottom CTA */}
            <div className="p-4 border-t border-border-light shrink-0 space-y-2">
              <Link
                href="/shop"
                onClick={closeMobileNav}
                className="flex items-center justify-center gap-2 w-full py-3 bg-button-blue text-white font-bold uppercase tracking-wider text-sm hover:bg-button-hover transition-colors"
              >
                SHOP ALL PRODUCTS
              </Link>
              <Link
                href="/login"
                onClick={closeMobileNav}
                className="flex items-center justify-center w-full py-3 border border-border-light text-text-primary hover:bg-surface-100 font-bold uppercase tracking-wider text-sm transition-colors"
              >
                LOGIN / REGISTER
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
