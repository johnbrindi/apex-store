'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, RefreshCw, ArrowLeft } from 'lucide-react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('App error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center px-4 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(224,29,29,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto">
        <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle size={28} className="text-red-400" />
        </div>

        <h1 className="font-display font-bold text-3xl uppercase tracking-wide text-white mb-4">
          Something Went Wrong
        </h1>

        <p className="text-text-muted text-sm leading-relaxed mb-2">
          An unexpected error occurred. Our team has been notified.
        </p>

        {error.digest && (
          <p className="text-xs text-text-muted font-mono mb-8">
            Error ID: {error.digest}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <button
            onClick={reset}
            className="btn-primary px-6 py-3 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <RefreshCw size={15} />
            Try Again
          </button>
          <Link
            href="/"
            className="btn-secondary px-6 py-3 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
