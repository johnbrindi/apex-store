import { Plus } from 'lucide-react'

export default function NewProductPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="font-display font-bold text-xl uppercase tracking-wide text-white">Add Product</h1>
      </div>
      <div className="flex flex-col items-center justify-center p-12 rounded-sm border" style={{ background: '#162130', borderColor: 'rgba(255,255,255,0.08)' }}>
        <Plus size={48} className="text-[#1E73BE] mb-4 opacity-50" />
        <h2 className="text-white font-bold text-lg mb-2">Product Creator Coming Soon</h2>
        <p className="text-white/50 text-sm text-center max-w-md">
          The interface for adding new products to the catalog is under development.
        </p>
      </div>
    </div>
  )
}
