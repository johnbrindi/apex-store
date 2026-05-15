import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center gap-1.5 text-xs', className)}>
      <Link href="/" className="text-text-muted hover:text-brand-red transition-colors flex items-center">
        <Home size={12} />
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight size={11} className="text-surface-300 shrink-0" />
          {item.href && i < items.length - 1 ? (
            <Link
              href={item.href}
              className="text-text-muted hover:text-brand-red transition-colors truncate max-w-[140px]"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-text-secondary truncate max-w-[200px]">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
