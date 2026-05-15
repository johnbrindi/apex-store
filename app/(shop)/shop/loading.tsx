export default function Loading() {
  return (
    <div className="container-shop py-8 animate-pulse">
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2 mb-7">
        <div className="h-3 w-10 bg-surface-200 rounded" />
        <div className="h-3 w-3 bg-surface-200 rounded" />
        <div className="h-3 w-20 bg-surface-200 rounded" />
      </div>

      {/* Toolbar skeleton */}
      <div className="flex items-center gap-4 mb-6">
        <div className="h-9 w-48 bg-surface-100 rounded" />
        <div className="h-9 w-32 bg-surface-100 rounded" />
        <div className="ml-auto h-9 w-36 bg-surface-100 rounded" />
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-surface border border-surface-100">
            <div className="aspect-square bg-surface-100" />
            <div className="p-3.5 space-y-2.5">
              <div className="h-3 bg-surface-200 rounded w-1/3" />
              <div className="h-4 bg-surface-200 rounded w-5/6" />
              <div className="h-3 bg-surface-200 rounded w-2/3" />
              <div className="flex items-center justify-between pt-2 border-t border-surface-100">
                <div className="h-5 bg-surface-200 rounded w-16" />
                <div className="h-8 bg-surface-200 rounded w-16" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
