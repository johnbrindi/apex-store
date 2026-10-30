'use client'

import { useEffect, useState } from 'react'
import Image, { type ImageProps } from 'next/image'

export const PLACEHOLDER_IMAGE = '/assets/images/placeholder.svg'

// Drop-in replacement for next/image that swaps in a placeholder when the
// src is missing or fails to load (e.g. a deleted remote image).
export default function SafeImage({ src, alt, ...props }: ImageProps) {
  const [failed, setFailed] = useState(false)

  useEffect(() => setFailed(false), [src])

  return (
    <Image
      {...props}
      src={failed || !src ? PLACEHOLDER_IMAGE : src}
      alt={alt}
      onError={() => setFailed(true)}
    />
  )
}
