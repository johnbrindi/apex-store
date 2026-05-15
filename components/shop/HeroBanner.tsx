'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    eyebrow: 'Exclusive',
    title: 'Pre-made Stacks',
    subtitle: 'The more you buy, the less you pay!',
    cta: 'Buy Pre-Made Stacks',
    ctaHref: '/shop/pre-made-stacks',
    bg: 'from-[#0d1b2e] to-[#1a3a5c]',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
  },
  {
    id: 2,
    eyebrow: 'Recommended',
    title: 'Pay with Revolut',
    subtitle: '5% Discount + FREE product with every order',
    cta: 'Check Revolut',
    ctaHref: '/payments',
    bg: 'from-[#1a2e1f] to-[#0d2112]',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
  },
  {
    id: 3,
    eyebrow: 'Lab Tested',
    title: 'Testosterone Steroids',
    subtitle: 'The best quality testosterone compounds in the UK',
    cta: 'Shop Testosterone',
    ctaHref: '/shop/injectable-solutions',
    bg: 'from-[#1e1e2e] to-[#0f0f20]',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80',
  },
  {
    id: 4,
    eyebrow: 'Best Sellers',
    title: 'Oral Steroids',
    subtitle: 'Anavar, Dianabol, Winstrol and more — all lab tested',
    cta: 'Shop Oral Steroids',
    ctaHref: '/shop/oral-compounds',
    bg: 'from-[#2e1a0d] to-[#1a0a00]',
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=800&q=80',
  },
]

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  const slide = slides[current]

  return (
    <div className="relative w-full overflow-hidden bg-gray-900" style={{ height: 'clamp(200px, 45vw, 480px)' }}>
      {/* Slide */}
      <div
        key={slide.id}
        className={`absolute inset-0 bg-gradient-to-r ${slide.bg} flex items-center`}
      >
        {/* Background image */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container-shop w-full flex items-center justify-between gap-6">
          <div className="text-white max-w-md md:max-w-lg">
            <p className="text-sm md:text-base text-gray-300 mb-1 font-medium">{slide.eyebrow}</p>
            <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-3 leading-tight">
              {slide.title}
            </h1>
            <p className="text-sm md:text-lg text-gray-300 mb-6">{slide.subtitle}</p>
            <Link
              href={slide.ctaHref}
              className="inline-block bg-button-blue hover:bg-button-hover text-white font-bold uppercase px-6 py-3 text-sm md:text-base transition-colors"
            >
              {slide.cta}
            </Link>
          </div>

          {/* Right image placeholder */}
          <div className="hidden md:block w-64 lg:w-80 shrink-0 relative h-60 lg:h-72 opacity-90">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-contain object-right"
            />
          </div>
        </div>
      </div>

      {/* Prev/Next arrows */}
      <button
        onClick={prev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors rounded-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors rounded-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full border-2 border-white transition-all ${
              i === current ? 'bg-white' : 'bg-transparent'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
