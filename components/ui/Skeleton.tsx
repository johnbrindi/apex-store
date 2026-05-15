import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn('animate-pulse bg-surface-100 rounded-sm', className)}
    />
  )
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-surface border border-surface-100 animate-pulse">
      <div className="aspect-square bg-surface-100" />
      <div className="p-3.5 space-y-2.5">
        <Skeleton className="h-3 w-1/3" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-3 w-2/3" />
        <div className="flex items-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="w-3 h-3 rounded-full" />
          ))}
          <Skeleton className="h-3 w-8 ml-1" />
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-surface-100">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-8 w-16" />
        </div>
      </div>
    </div>
  )
}

export function ProductDetailSkeleton() {
  return (
    <div className="container-shop py-8 animate-pulse">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-7">
        <Skeleton className="h-3 w-10" />
        <Skeleton className="h-3 w-3" />
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-3 w-3" />
        <Skeleton className="h-3 w-32" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image */}
        <div className="space-y-3">
          <Skeleton className="aspect-square w-full" />
          <div className="flex gap-2">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="w-16 h-16" />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-10 w-2/3" />
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="w-4 h-4 rounded-full" />
            ))}
            <Skeleton className="h-4 w-20 ml-2" />
          </div>
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-14 w-full" />
          <Skeleton className="h-12 w-full" />
          <div className="flex gap-3">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="flex-1 h-12" />
            <Skeleton className="h-12 w-12" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function OrderSkeleton() {
  return (
    <div className="bg-surface border border-surface-100 animate-pulse overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-surface-100 bg-surface-50/30">
        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-3 w-36" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-16" />
        </div>
      </div>
      <div className="px-5 py-4 space-y-3">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <Skeleton className="w-12 h-12" />
            <div className="flex-1 space-y-1.5">
              <Skeleton className="h-3 w-48" />
              <Skeleton className="h-3 w-16" />
            </div>
            <Skeleton className="h-4 w-14" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function TableRowSkeleton({ cols = 5 }: { cols?: number }) {
  return (
    <tr className="border-b border-surface-100">
      {[...Array(cols)].map((_, i) => (
        <td key={i} className="px-4 py-3">
          <Skeleton className="h-4 w-full max-w-[120px]" />
        </td>
      ))}
    </tr>
  )
}
