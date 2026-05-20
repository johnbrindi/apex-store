'use client'

import { useEffect, useState } from 'react'

export default function ChatWidget() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check if script is already present in DOM to prevent duplicate loads during hydration/navigation
    if (document.getElementById('tawk-script-loader')) {
      if ((window as any).Tawk_API && (window as any).Tawk_API.showWidget) {
        try {
          (window as any).Tawk_API.showWidget()
        } catch (e) {
          console.warn('Tawk.to showWidget failed:', e)
        }
      }
      return
    }

    // Set up Tawk.to API globals
    const Tawk_API = (window as any).Tawk_API || {}
    const Tawk_LoadStart = new Date();
    (window as any).Tawk_API = Tawk_API
    Tawk_API.onLoad = function () {
      if (Tawk_API.showWidget) {
        try {
          Tawk_API.showWidget()
        } catch (e) {
          console.error('Tawk.to onLoad showWidget error:', e)
        }
      }
    }

    const s1 = document.createElement("script")
    s1.id = 'tawk-script-loader'
    s1.async = true
    s1.src = 'https://embed.tawk.to/6a0b0c3ca536181c3989749e/1jotifk2t'
    s1.charset = 'UTF-8'
    s1.setAttribute('crossorigin', '*')

    const s0 = document.getElementsByTagName("script")[0]
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0)
    } else {
      document.head.appendChild(s1)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed right-[20px] bottom-[95px] md:bottom-[100px] z-[99999] flex flex-col items-center gap-3 select-none">
      {/* WhatsApp floating button with tooltip and pulsing ripple */}
      <a
        href="https://wa.me/message/WZDFVTAYKKLMJ1"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-[54px] h-[54px] md:w-[60px] md:h-[60px] rounded-full bg-[#25D366] text-white shadow-[0_4px_16px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_22px_rgba(37,211,102,0.65)] hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 active:scale-95"
        title="Chat with us on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        {/* Subtle pulsing background ripple */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none group-hover:animate-none"></span>

        {/* WhatsApp Premium SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:rotate-12"
        >
          <path
            fillRule="evenodd"
            d="M1.5 12c0-5.176 3.996-9.42 9.1-9.948v1.006a8.948 8.948 0 0 0-8.1 8.942c0 2.298.868 4.398 2.3 6l-.9 3 3.1-.9a8.904 8.904 0 0 0 4.5 1.2c4.912 0 8.9-3.988 8.9-8.9 0-.472-.036-.935-.107-1.385l.983-.393c.081.579.124 1.171.124 1.778 0 5.462-4.438 9.9-9.9 9.9-1.636 0-3.175-.4-4.536-1.107L3.107 22l1.107-3.693C3.51 16.953 3 15.036 3 13.003L1.5 12Zm11.89-3.43c-.22-.49-.45-.5-.66-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.09 3.19 5.07 4.48.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07a8.274 8.274 0 0 1-2.42-1.49c-.64-.57-1.08-1.28-1.21-1.5-.12-.22-.01-.35.13-.49.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22Z"
            clipRule="evenodd"
          />
        </svg>

        {/* Hover Tooltip tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-200 origin-right whitespace-nowrap bg-zinc-900 text-white text-xs font-bold py-1.5 px-3 rounded shadow-md pointer-events-none uppercase tracking-wider">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  )
}
