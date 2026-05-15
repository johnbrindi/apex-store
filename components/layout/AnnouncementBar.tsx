'use client'

import { useEffect, useRef } from 'react'

const messages = [
  { text: 'FREE NEXT-DAY DELIVERY:', highlight: 'ORDERS £149+ WITH CODE: DELIVERY5' },
  { text: 'PAY WITH REVOLUT:', highlight: 'RECEIVE FREE PRODUCT AND 5% DISCOUNT CODE: REVO10' },
  { text: 'FREE NEXT-DAY DELIVERY:', highlight: 'ORDERS £149+ WITH CODE: DELIVERY5' },
  { text: 'MINIMUM ORDER:', highlight: '£90 — DISCREET PLAIN PACKAGING' },
  { text: 'LAB TESTED STEROIDS:', highlight: 'INDEPENDENTLY VERIFIED PURITY & CONCENTRATION' },
]

export default function AnnouncementBar() {
  return (
    <div className="bg-brand-header text-white text-xs font-bold py-2 overflow-hidden relative">
      <div className="flex whitespace-nowrap announcement-scroll">
        {[...messages, ...messages].map((msg, i) => (
          <span key={i} className="inline-flex items-center gap-1 px-8">
            {msg.text}
            <span className="text-yellow-300 ml-1">{msg.highlight}</span>
            <span className="mx-4 text-white/50">•</span>
          </span>
        ))}
      </div>

      <style jsx global>{`
        .announcement-scroll {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .announcement-scroll {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
