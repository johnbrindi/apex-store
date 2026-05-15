'use client'

import { useState } from 'react'
import { Search, Eye, Package, ChevronDown } from 'lucide-react'
import { cn, formatCurrency } from '@/lib/utils'

const mockOrders = [
  { id: 'ORD-8821', customer: 'James R.', email: 'james@example.com', total: 87.80, status: 'delivered', items: 2, date: '2026-05-10', payment: 'bank_transfer' },
  { id: 'ORD-8820', customer: 'Mike T.', email: 'mike@example.com', total: 149.90, status: 'processing', items: 1, date: '2026-05-10', payment: 'revolut' },
  { id: 'ORD-8819', customer: 'D. Collins', email: 'dcollins@example.com', total: 42.90, status: 'shipped', items: 1, date: '2026-05-09', payment: 'bitcoin' },
  { id: 'ORD-8818', customer: 'Sarah L.', email: 'sarah@example.com', total: 64.90, status: 'pending', items: 2, date: '2026-05-09', payment: 'bank_transfer' },
  { id: 'ORD-8817', customer: 'Tom B.', email: 'tomb@example.com', total: 189.70, status: 'delivered', items: 3, date: '2026-05-08', payment: 'ethereum' },
  { id: 'ORD-8816', customer: 'Anna K.', email: 'annak@example.com', total: 54.80, status: 'cancelled', items: 1, date: '2026-05-08', payment: 'revolut' },
  { id: 'ORD-8815', customer: 'Chris M.', email: 'chrism@example.com', total: 97.80, status: 'delivered', items: 2, date: '2026-05-07', payment: 'usdt' },
  { id: 'ORD-8814', customer: 'Lee P.', email: 'leep@example.com', total: 33.90, status: 'delivered', items: 1, date: '2026-05-07', payment: 'bank_transfer' },
]

const statusConfig: Record<string, string> = {
  pending:    'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  processing: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  shipped:    'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
  delivered:  'bg-green-500/20 text-green-400 border-green-500/30',
  cancelled:  'bg-red-500/20 text-red-400 border-red-500/30',
}

const allStatuses = ['All', 'pending', 'processing', 'shipped', 'delivered', 'cancelled']

export default function AdminOrdersPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null)

  const filtered = mockOrders.filter((o) => {
    const matchSearch =
      !search.trim() ||
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.email.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'All' || o.status === statusFilter
    return matchSearch && matchStatus
  })

  const totalRevenue = filtered.reduce((s, o) => s + (o.status !== 'cancelled' ? o.total : 0), 0)

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl uppercase tracking-wide text-white">Orders</h1>
          <p className="text-text-muted text-sm mt-0.5">
            {filtered.length} orders · Revenue: <span className="text-brand-red font-bold">{formatCurrency(totalRevenue)}</span>
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3 bg-surface border border-surface-100 p-4">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search orders, customers, emails…"
            className="input-base pl-9 py-2 text-sm"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {allStatuses.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={cn(
                'px-3 py-1.5 text-xs font-semibold uppercase tracking-wide border transition-colors capitalize',
                statusFilter === s
                  ? 'bg-brand-red border-brand-red text-white'
                  : 'border-surface-200 text-text-muted hover:border-surface-300 hover:text-white'
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-surface border border-surface-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-100 bg-surface-50/30">
                {['Order ID', 'Customer', 'Date', 'Items', 'Payment', 'Total', 'Status', 'Actions'].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-text-muted whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {filtered.map((order) => (
                <tr key={order.id} className="hover:bg-surface-50/30 transition-colors">
                  <td className="px-4 py-3">
                    <span className="font-display font-bold text-white text-sm">{order.id}</span>
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-semibold text-text-primary">{order.customer}</p>
                    <p className="text-xs text-text-muted">{order.email}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-text-muted text-xs">
                      {new Date(order.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-text-secondary text-sm">{order.items}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-text-muted capitalize">
                      {order.payment.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-display font-bold text-brand-red tabular-nums">
                      {formatCurrency(order.total)}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={cn('badge border text-[10px] capitalize', statusConfig[order.status])}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                        className="flex items-center gap-1 text-xs text-text-muted hover:text-white transition-colors"
                      >
                        <Eye size={13} /> View
                      </button>
                      <div className="relative">
                        <select
                          defaultValue={order.status}
                          className="text-xs bg-surface-50 border border-surface-200 text-text-muted px-2 py-1 focus:outline-none focus:border-brand-red appearance-none pr-5 cursor-pointer"
                        >
                          {allStatuses.filter(s => s !== 'All').map(s => (
                            <option key={s} value={s} className="capitalize">{s}</option>
                          ))}
                        </select>
                        <ChevronDown size={10} className="absolute right-1.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <Package size={32} className="text-surface-300 mx-auto mb-3" />
            <p className="text-text-secondary font-semibold">No orders found</p>
          </div>
        )}
      </div>

      {/* Order detail panel */}
      {selectedOrder && (() => {
        const order = mockOrders.find(o => o.id === selectedOrder)!
        return (
          <div className="bg-surface border border-brand-red/30 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-bold text-lg uppercase tracking-wide text-white">
                Order Detail — {order.id}
              </h3>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-xs text-text-muted hover:text-white transition-colors"
              >
                Close ✕
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {[
                { label: 'Customer', value: order.customer },
                { label: 'Email', value: order.email },
                { label: 'Total', value: formatCurrency(order.total) },
                { label: 'Payment', value: order.payment.replace('_', ' ') },
                { label: 'Status', value: order.status },
                { label: 'Items', value: String(order.items) },
                { label: 'Date', value: order.date },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-1">{label}</p>
                  <p className="font-semibold text-text-primary capitalize">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )
      })()}
    </div>
  )
}
