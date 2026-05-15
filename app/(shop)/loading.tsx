export default function HomeLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="min-h-[560px] bg-surface-50/20 border-b border-surface-100" />

      {/* Trust strip */}
      <div className="border-y border-surface-100 py-5">
        <div className="container-shop grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-surface-100 rounded shrink-0" />
              <div className="space-y-1.5">
                <div className="h-3 w-20 bg-surface-100 rounded" />
                <div className="h-2.5 w-16 bg-surface-100 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category grid skeleton */}
      <div className="container-shop py-14">
        <div className="h-8 w-48 bg-surface-100 rounded mb-7" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-28 bg-surface border border-surface-100 rounded-sm" />
          ))}
        </div>
      </div>

      {/* Featured products skeleton */}
      <div className="container-shop py-14 border-t border-surface-100">
        <div className="flex justify-between mb-7">
          <div className="h-8 w-48 bg-surface-100 rounded" />
          <div className="h-8 w-48 bg-surface-100 rounded" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-surface border border-surface-100">
              <div className="aspect-square bg-surface-100" />
              <div className="p-3.5 space-y-2.5">
                <div className="h-3 bg-surface-200 rounded w-1/3" />
                <div className="h-4 bg-surface-200 rounded w-5/6" />
                <div className="h-3 bg-surface-200 rounded w-2/3" />
                <div className="flex justify-between pt-2 border-t border-surface-100">
                  <div className="h-5 bg-surface-200 rounded w-16" />
                  <div className="h-8 bg-surface-200 rounded w-16" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
