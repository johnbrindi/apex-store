'use client'

import { useEffect, useState } from 'react'

export default function ChatWidget() {
  const [mounted, setMounted] = useState(false)
  const [isTawkReady, setIsTawkReady] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Setup Tawk_API and hook onLoad/onBeforeLoad events
    const Tawk_API = (window as any).Tawk_API || {}
    const Tawk_LoadStart = new Date()
    
    Tawk_API.onBeforeLoad = function () {
      if (Tawk_API.hideWidget) {
        try {
          Tawk_API.hideWidget()
        } catch (e) {
          console.warn('Tawk.to hideWidget failed during beforeLoad:', e)
        }
      }
    }

    Tawk_API.onLoad = function () {
      setIsTawkReady(true)
      if (Tawk_API.hideWidget) {
        try {
          Tawk_API.hideWidget()
        } catch (e) {
          console.warn('Tawk.to hideWidget failed on load:', e)
        }
      }
    };

    (window as any).Tawk_API = Tawk_API

    // Check if script is already present in DOM to prevent duplicates
    let s1 = document.getElementById('tawk-script-loader') as HTMLScriptElement
    if (s1) {
      if ((window as any).Tawk_API && (window as any).Tawk_API.hideWidget) {
        try {
          (window as any).Tawk_API.hideWidget()
          setIsTawkReady(true)
        } catch (e) {
          console.warn('Tawk.to init failed:', e)
        }
      }
      return
    }

    s1 = document.createElement("script")
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

  const handleOpenTawk = () => {
    const Tawk_API = (window as any).Tawk_API
    if (Tawk_API) {
      try {
        Tawk_API.showWidget()
        Tawk_API.maximize()
      } catch (e) {
        console.error('Tawk.to failed to open:', e)
        // Fallback: If for some reason the widget has a loading error, reload the script or direct link
        window.open('https://tawk.to/chat/6a0b0c3ca536181c3989749e/1jotifk2t', '_blank')
      }
    } else {
      // Fallback redirect to direct chat window if Tawk_API hasn't initialized
      window.open('https://tawk.to/chat/6a0b0c3ca536181c3989749e/1jotifk2t', '_blank')
    }
  }

  if (!mounted) return null

  return (
    <div className="fixed right-[20px] bottom-[20px] z-[99999] flex flex-col items-center gap-3 select-none">
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

        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-200 origin-right whitespace-nowrap bg-zinc-900 text-white text-xs font-bold py-1.5 px-3 rounded shadow-md pointer-events-none uppercase tracking-wider">
          Chat on WhatsApp
        </span>
      </a>

      {/* Custom Tawk.to Live Chat floating button */}
      <button
        onClick={handleOpenTawk}
        className="group relative flex items-center justify-center w-[54px] h-[54px] md:w-[60px] md:h-[60px] rounded-full bg-gradient-to-tr from-[#173436] to-[#1E3D3F] text-white shadow-[0_4px_16px_rgba(23,52,54,0.45)] hover:shadow-[0_6px_22px_rgba(23,52,54,0.65)] border border-[#315B4C]/40 hover:border-[#315B4C]/80 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Open Live Chat"
        title="Chat with Live Support"
      >
        {/* Pulsing online support status indicator dot */}
        <span className="absolute top-[2px] right-[2px] flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#1E3D3F]"></span>
        </span>

        {/* Live Chat Speech Bubble SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:-translate-y-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 18c-.987 0-1.912-.401-2.594-1.042a.75.75 0 01-.11-.8l1.055-2.508C3.27 13.245 3 12.138 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
          />
        </svg>

        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-200 origin-right whitespace-nowrap bg-zinc-900 text-white text-xs font-bold py-1.5 px-3 rounded shadow-md pointer-events-none uppercase tracking-wider">
          Live Chat Support
        </span>
      </button>
    </div>
  )
}
