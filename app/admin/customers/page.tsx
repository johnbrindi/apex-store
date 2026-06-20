'use client'

import { useState, useEffect } from 'react'
import { Search, Users, AlertCircle, RefreshCw, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

function formatCurrency(n: number) { return `£${Number(n).toFixed(2)}` }

export default function AdminCustomersPage() {
  const [customers, setCustomers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState('')

  const fetchCustomers = async () => {
    setLoading(true); setError(null)
    try {
      const res = await fetch('/api/admin/customers')
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Failed to fetch')
      setCustomers(data.customers ?? [])
    } catch (err: any) { setError(err.message) }
    finally { setLoading(false) }
  }

  useEffect(() => { fetchCustomers() }, [])

  const filtered = customers.filter(c => {
    const q = search.toLowerCase()
    return !q || c.email?.toLowerCase().includes(q) ||
      `${c.first_name ?? ''} ${c.last_name ?? ''}`.toLowerCase().includes(q)
  })

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-xl uppercase tracking-wide text-white">Customers</h1>
          <p className="text-white/40 text-xs mt-0.5">
            {loading ? 'Loading…' : `${customers.length} registered users`}
          </p>
        </div>
        <button onClick={fetchCustomers} disabled={loading}
          className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-white/60 hover:text-white border border-white/10 hover:border-white/30 rounded-sm transition-colors disabled:opacity-40">
          <RefreshCw size={12} className={loading ? 'animate-spin' : ''} /> Refresh
        </button>
      </div>

      {/* Error */}
      {/* Intentionally removed banner complaining about .env.local as per request */}

      {/* Search */}
      <div className="p-4 rounded-sm border" style={{ background: '#162130', borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="relative max-w-md">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
          <input type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search by name or email…"
            className="w-full pl-9 pr-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none rounded-sm border"
            style={{ background: '#0F1923', borderColor: 'rgba(255,255,255,0.1)' }} />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-sm border overflow-hidden" style={{ background: '#162130', borderColor: 'rgba(255,255,255,0.08)' }}>
        {loading ? (
          <div className="py-16 text-center text-white/40 text-sm">Loading customers…</div>
        ) : filtered.length === 0 ? (
          <div className="py-16 text-center">
            <Users size={32} className="text-white/20 mx-auto mb-3" />
            <p className="text-white/40 font-semibold">{error ? 'Could not load' : 'No customers yet'}</p>
            {!error && <p className="text-white/25 text-xs mt-1">Registered users will appear here automatically.</p>}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b" style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
                  {['Customer', 'Email', 'Joined', 'Actions'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-white/30 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map(c => {
                  const name = [c.first_name, c.last_name].filter(Boolean).join(' ') || c.email?.split('@')[0] || 'Unknown'
                  const initial = name[0]?.toUpperCase() ?? '?'
                  return (
                    <tr key={c.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-xs"
                            style={{ background: '#1E73BE20', color: '#1E73BE', border: '1px solid #1E73BE40' }}>
                            {initial}
                          </div>
                          <span className="font-semibold text-white/80">{name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3"><span className="text-white/40 text-xs">{c.email}</span></td>
                      <td className="px-4 py-3">
                        <span className="text-white/40 text-xs">
                          {c.created_at ? new Date(c.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <a href={`mailto:${c.email}`}
                          className="flex items-center gap-1 text-xs text-white/40 hover:text-[#1E73BE] transition-colors w-fit">
                          <Mail size={12} /> Email
                        </a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
