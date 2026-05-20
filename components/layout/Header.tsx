'use client'

import Link from 'next/link'
import { Search, ShoppingBag, User, Menu, X, ChevronDown } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import { useUIStore } from '@/store/uiStore'
import { navigationItems } from '@/data/mock'
import { cn } from '@/lib/utils'
import { useState, useRef, useEffect } from 'react'
import { formatCurrency } from '@/lib/utils'
import { createClient } from '@/utils/supabase/client'

export default function Header() {
  const { itemCount, subtotal, openCart } = useCartStore()
  const cartCount = itemCount()
  const cartTotal = subtotal()
  const { openSearch, toggleMobileNav, mobileNavOpen } = useUIStore()
  const [activeNav, setActiveNav] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [mounted, setMounted] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setMounted(true)
    import('@/actions/auth').then(({ getLocalUser }) => {
      getLocalUser().then((user) => setIsLoggedIn(!!user))
    })
  }, [])
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveNav(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveNav(null), 150)
  }

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Main header row */}
      <div className="container-shop py-2 flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-3">
        <div className="flex items-center justify-between w-full lg:w-auto gap-3">
          <div className="flex items-center gap-2">
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileNav}
              className="lg:hidden p-1.5 text-text-primary hover:text-brand-teal transition-colors flex-shrink-0"
              aria-label="Open menu"
            >
              {mobileNavOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="flex items-center gap-1.5">
                {/* Muscle/bodybuilder icon */}
                <div className="w-10 h-10 bg-brand-header rounded-full flex items-center justify-center text-white text-lg font-bold">
                  💪
                </div>
                <div className="font-display font-bold text-sm md:text-base tracking-tight text-text-primary uppercase leading-tight">
                  <div className="text-brand-header">STEROIDS-UK</div>
                  <div className="text-text-secondary text-xs">.ONLINE</div>
                </div>
              </div>
            </Link>
          </div>

          {/* Right side for mobile (Cart & Account icons) */}
          <div className="flex lg:hidden items-center gap-3 shrink-0">
            {/* Account Icon */}
            <Link
              href={isLoggedIn ? "/my-account" : "/login"}
              className="text-text-primary hover:text-brand-teal transition-colors"
              aria-label="Account"
            >
              <User size={22} />
            </Link>

            {/* Cart */}
            <button
              onClick={openCart}
              className="flex items-center gap-1.5 text-text-primary hover:text-brand-teal transition-colors"
              aria-label="Cart"
            >
              <div className="relative">
                <ShoppingBag size={22} />
                {mounted && cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-4 h-4 bg-button-blue text-white text-[10px] rounded-full font-bold">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Search bar - takes up most space, full-width on mobile */}
        <div className="flex-1 w-full lg:max-w-2xl lg:mx-6">
          <div className="relative flex border border-border-light">
            <input
              type="text"
              placeholder="Search for products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-white text-text-primary placeholder:text-text-secondary text-sm px-3 py-2 focus:outline-none min-w-0"
              onFocus={() => openSearch()}
            />
            <button
              className="bg-white px-3 text-text-secondary hover:text-brand-teal transition-colors border-l border-border-light"
              onClick={openSearch}
            >
              <Search size={17} />
            </button>
          </div>
        </div>

        {/* Right side for desktop */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          {/* Login */}
          <Link
            href={isLoggedIn ? "/my-account" : "/login"}
            className="flex items-center gap-1 text-xs font-bold uppercase text-text-primary hover:text-brand-teal transition-colors whitespace-nowrap"
          >
            {mounted ? (isLoggedIn ? "MY ACCOUNT" : "LOGIN / REGISTER") : "LOGIN / REGISTER"}
          </Link>

          {/* Cart */}
          <button
            onClick={openCart}
            className="flex items-center gap-1.5 text-text-primary hover:text-brand-teal transition-colors"
            aria-label="Cart"
          >
            <div className="relative">
              <ShoppingBag size={22} />
              {mounted && cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-4 h-4 bg-button-blue text-white text-[10px] rounded-full font-bold">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="text-xs font-bold">
              £{mounted ? cartTotal.toFixed(2) : '0.00'}
            </span>
          </button>
        </div>
      </div>

      {/* Desktop navigation bar */}
      <nav className="hidden lg:block bg-brand-header" role="navigation">
        <div className="container-shop">
          <ul className="flex items-center justify-center flex-wrap h-11 text-[12.5px] gap-0">
            {navigationItems.map((item) => (
              <li
                key={item.label}
                className="relative h-11 flex items-center"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href ?? '#'}
                  className={cn(
                    'flex items-center gap-0.5 h-full px-3 text-white uppercase font-semibold tracking-wide transition-colors hover:bg-white/10',
                    activeNav === item.label && 'bg-white/10'
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown size={12} className={cn('ml-0.5 transition-transform', activeNav === item.label && 'rotate-180')} />}
                </Link>

                {/* Dropdown */}
                {item.children && activeNav === item.label && (
                  <div
                    className="absolute top-full left-0 min-w-[200px] bg-white border border-border-light shadow-card-hover py-1 z-50"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href ?? '#'}
                        className="block px-4 py-2 text-sm text-text-primary hover:bg-surface-100 hover:text-button-blue transition-colors"
                        onClick={() => setActiveNav(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}

            {/* BLOG special item */}
            <li className="h-11 flex items-center">
              <Link href="/blog" className="flex items-center h-full px-3 bg-white text-text-primary uppercase font-bold hover:bg-surface-100 transition-colors text-[12.5px]">
                BLOG
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
