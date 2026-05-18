'use client'

import { useState, useEffect } from 'react'
import { Search, Package, ChevronDown, RefreshCw, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const statusConfig: Record<string, string> = {
  pending:    'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  processing: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  shipped:    'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
  delivered:  'bg-green-500/20 text-green-400 border-green-500/30',
  cancelled:  'bg-red-500/20 text-red-400 border-red-500/30',
  refunded:   'bg-gray-500/20 text-gray-400 border-gray-500/30',
}

const ALL_STATUSES = ['All', 'pending', 'processing', 'shipped', 'delivered', 'cancelled']

function formatCurrency(n: number) {
  return `£${Number(n).toFixed(2)}`
}

export default function AdminOrdersPage() {
  const [orders,       setOrders]       = useState<any[]>([])
  const [loading,      setLoading]      = useState(true)
  const [error,        setError]        = useState<string | null>(null)
  const [search,       setSearch]       = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [selected,     setSelected]     = useState<string | null>(null)
  const [updating,     setUpdating]     = useState<string | null>(null)

  const fetchOrders = async () => {
    setLoading(true)
    setError(null)
    try {
      const res  = await fetch('/api/admin/orders')
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Failed to fetch orders')
      setOrders(data.orders ?? [])
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchOrders() }, [])

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    setUpdating(orderId)
    try {
      await fetch(`/api/admin/orders/${orderId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })
      setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o))
    } catch {
      // Silently fail — UI still reflects attempted change
    } finally {
      setUpdating(null)
    }
  }

  const filtered = orders.filter(o => {
    const q = search.toLowerCase()
    const matchSearch = !q ||
      o.id?.toLowerCase().includes(q) ||
      o.customer_name?.toLowerCase().includes(q) ||
      o.customer_email?.toLowerCase().includes(q)
    const matchStatus = statusFilter === 'All' || o.status === statusFilter
    return matchSearch && matchStatus
  })

  const totalRevenue = filtered
    .filter(o => o.status !== 'cancelled')
    .reduce((s, o) => s + Number(o.total_amount ?? 0), 0)

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-xl uppercase tracking-wide text-white">Orders</h1>
          <p className="text-white/40 text-xs mt-0.5">
            {loading ? 'Loading…' : `${filtered.length} orders · Revenue: `}
            {!loading && <span className="text-[#1E73BE] font-bold">{formatCurrency(totalRevenue)}</span>}
          </p>
        </div>
        <button
          onClick={fetchOrders}
          disabled={loading}
          className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-white/60 hover:text-white border border-white/10 hover:border-white/30 rounded-sm transition-colors disabled:opacity-40"
        >
          <RefreshCw size={12} className={loading ? 'animate-spin' : ''} />
          Refresh
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-start gap-3 p-4 rounded-sm border text-sm"
             style={{ background: '#f59e0b10', borderColor: '#f59e0b40' }}>
          <AlertCircle size={16} className="text-yellow-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-yellow-400">Could not load orders</p>
            <p className="text-white/50 text-xs mt-1">{error}</p>
            <p className="text-white/40 text-xs mt-1">
              Make sure <code className="text-yellow-300">SUPABASE_SERVICE_ROLE_KEY</code> is set in <code className="text-yellow-300">.env.local</code>
            </p>
          </div>
        </div>
      )}

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3 p-4 rounded-sm border"
           style={{ background: '#162130', borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="relative flex-1 min-w-[200px]">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by order ID, name or email…"
            className="w-full pl-9 pr-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none rounded-sm border"
            style={{ background: '#0F1923', borderColor: 'rgba(255,255,255,0.1)' }}
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {ALL_STATUSES.map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={cn(
                'px-3 py-1.5 text-xs font-semibold uppercase tracking-wide border transition-colors capitalize rounded-sm',
                statusFilter === s ? 'text-white border-[#1E73BE]' : 'text-white/40 border-white/10 hover:text-white hover:border-white/30'
              )}
              style={statusFilter === s ? { background: '#1E73BE20' } : {}}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="rounded-sm border overflow-hidden"
           style={{ background: '#162130', borderColor: 'rgba(255,255,255,0.08)' }}>
        {loading ? (
          <div className="py-16 text-center text-white/40 text-sm">Loading orders…</div>
        ) : filtered.length === 0 ? (
          <div className="py-16 text-center">
            <Package size={32} className="text-white/20 mx-auto mb-3" />
            <p className="text-white/40 font-semibold">No orders found</p>
            {!error && <p className="text-white/25 text-xs mt-1">Orders placed at checkout will appear here automatically.</p>}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b" style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
                  {['Order ID', 'Customer', 'Date', 'Payment', 'Total', 'Status', 'Actions'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-white/30 whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map(order => (
                  <>
                    <tr
                      key={order.id}
                      className="hover:bg-white/5 transition-colors cursor-pointer"
                      onClick={() => setSelected(selected === order.id ? null : order.id)}
                    >
                      <td className="px-4 py-3">
                        <span className="font-display font-bold text-white text-sm">
                          #{order.id.slice(0, 8).toUpperCase()}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <p className="font-semibold text-white/80">{order.customer_name ?? '—'}</p>
                        <p className="text-xs text-white/40">{order.customer_email ?? '—'}</p>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-white/40 text-xs whitespace-nowrap">
                          {new Date(order.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-xs text-white/40 capitalize">
                          {(order.payment_method ?? '—').replace('_', ' ')}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="font-display font-bold text-white tabular-nums">
                          {formatCurrency(order.total_amount)}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={cn('text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm border', statusConfig[order.status] ?? 'bg-white/10 text-white/50 border-white/10')}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 py-3" onClick={e => e.stopPropagation()}>
                        <div className="relative inline-block">
                          <select
                            value={order.status}
                            onChange={e => handleStatusChange(order.id, e.target.value)}
                            disabled={updating === order.id}
                            className="text-xs px-2 py-1 pr-6 focus:outline-none appearance-none rounded-sm border cursor-pointer disabled:opacity-40"
                            style={{ background: '#0F1923', borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)' }}
                          >
                            {ALL_STATUSES.filter(s => s !== 'All').map(s => (
                              <option key={s} value={s} className="capitalize">{s}</option>
                            ))}
                          </select>
                          <ChevronDown size={10} className="absolute right-1.5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                        </div>
                      </td>
                    </tr>

                    {/* Expandable detail row */}
                    {selected === order.id && (
                      <tr key={`${order.id}-detail`} style={{ background: 'rgba(30,115,190,0.05)' }}>
                        <td colSpan={7} className="px-5 py-4">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                            {[
                              { label: 'Order ID',   value: order.id },
                              { label: 'Email',      value: order.customer_email ?? '—' },
                              { label: 'Total',      value: formatCurrency(order.total_amount) },
                              { label: 'Shipping',   value: formatCurrency(order.shipping_cost) },
                              { label: 'Payment',    value: (order.payment_method ?? '—').replace('_', ' ') },
                              { label: 'Status',     value: order.status },
                              { label: 'Address',    value: order.shipping_address ? Object.values(order.shipping_address).filter(Boolean).join(', ') : '—' },
                              { label: 'Notes',      value: order.notes ?? '—' },
                            ].map(({ label, value }) => (
                              <div key={label}>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">{label}</p>
                                <p className="font-semibold text-white/70 capitalize break-all">{String(value)}</p>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
