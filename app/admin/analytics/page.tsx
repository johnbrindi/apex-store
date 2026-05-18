import { BarChart3 } from 'lucide-react'

export default function AnalyticsPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="font-display font-bold text-xl uppercase tracking-wide text-white">Analytics</h1>
      </div>
      <div className="flex flex-col items-center justify-center p-12 rounded-sm border" style={{ background: '#162130', borderColor: 'rgba(255,255,255,0.08)' }}>
        <BarChart3 size={48} className="text-[#1E73BE] mb-4 opacity-50" />
        <h2 className="text-white font-bold text-lg mb-2">Analytics Dashboard Coming Soon</h2>
        <p className="text-white/50 text-sm text-center max-w-md">
          Detailed sales reports, customer insights, and product performance metrics will be available in a future update.
        </p>
      </div>
    </div>
  )
}
