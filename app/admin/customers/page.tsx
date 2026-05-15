'use client'

import { useState } from 'react'
import { Search, Mail, ShoppingBag, Users } from 'lucide-react'
import { cn, formatCurrency } from '@/lib/utils'

const mockCustomers = [
  { id: 'cust-1', name: 'James Robertson', email: 'james@example.com', orders: 8, spent: 642.30, joined: '2025-11-03', status: 'active' },
  { id: 'cust-2', name: 'Mike Thompson', email: 'mike@example.com', orders: 5, spent: 487.50, joined: '2025-12-15', status: 'active' },
  { id: 'cust-3', name: 'David Collins', email: 'dcollins@example.com', orders: 12, spent: 1024.80, joined: '2025-09-22', status: 'active' },
  { id: 'cust-4', name: 'Sarah Lewis', email: 'sarah@example.com', orders: 3, spent: 189.70, joined: '2026-01-08', status: 'active' },
  { id: 'cust-5', name: 'Tom Burke', email: 'tomb@example.com', orders: 7, spent: 583.40, joined: '2025-10-17', status: 'active' },
  { id: 'cust-6', name: 'Anna King', email: 'annak@example.com', orders: 2, spent: 109.80, joined: '2026-02-22', status: 'inactive' },
  { id: 'cust-7', name: 'Chris Murphy', email: 'chrism@example.com', orders: 15, spent: 1487.20, joined: '2025-08-05', status: 'active' },
  { id: 'cust-8', name: 'Lee Patterson', email: 'leep@example.com', orders: 4, spent: 254.60, joined: '2025-11-30', status: 'active' },
]

export default function AdminCustomersPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')

  const filtered = mockCustomers.filter((c) => {
    const matchSearch =
      !search.trim() ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'All' || c.status === statusFilter
    return matchSearch && matchStatus
  })

  const totalRevenue = mockCustomers.reduce((s, c) => s + c.spent, 0)
  const avgOrderValue = totalRevenue / mockCustomers.reduce((s, c) => s + c.orders, 0)

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl uppercase tracking-wide text-white">Customers</h1>
          <p className="text-text-muted text-sm mt-0.5">{mockCustomers.length} total customers</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Total Customers', value: mockCustomers.length.toString() },
          { label: 'Active Customers', value: mockCustomers.filter(c => c.status === 'active').length.toString() },
          { label: 'Total Revenue', value: formatCurrency(totalRevenue) },
          { label: 'Avg Order Value', value: formatCurrency(avgOrderValue) },
        ].map(({ label, value }) => (
          <div key={label} className="bg-surface border border-surface-100 p-4">
            <p className="font-display font-bold text-xl text-white">{value}</p>
            <p className="text-xs text-text-muted mt-0.5 uppercase tracking-wider">{label}</p>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3 bg-surface border border-surface-100 p-4">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or email…"
            className="input-base pl-9 py-2 text-sm"
          />
        </div>
        <div className="flex items-center gap-2">
          {['All', 'active', 'inactive'].map((s) => (
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
        <span className="text-xs text-text-muted ml-auto">
          {filtered.length} result{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Table */}
      <div className="bg-surface border border-surface-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-100 bg-surface-50/30">
                {['Customer', 'Email', 'Joined', 'Orders', 'Total Spent', 'Status', 'Actions'].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-text-muted whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {filtered.map((customer) => (
                <tr key={customer.id} className="hover:bg-surface-50/30 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-brand-red/10 border border-brand-red/20 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-brand-red">
                          {customer.name[0].toUpperCase()}
                        </span>
                      </div>
                      <span className="font-semibold text-text-primary">{customer.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-text-muted text-xs">{customer.email}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-text-muted text-xs">
                      {new Date(customer.joined).toLocaleDateString('en-GB', {
                        day: 'numeric', month: 'short', year: 'numeric'
                      })}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <ShoppingBag size={12} className="text-text-muted" />
                      <span className="text-text-secondary font-semibold">{customer.orders}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-display font-bold text-brand-red tabular-nums">
                      {formatCurrency(customer.spent)}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={cn(
                      'badge text-[10px] capitalize',
                      customer.status === 'active'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-surface-200 text-text-muted'
                    )}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="flex items-center gap-1 text-xs text-text-muted hover:text-brand-red transition-colors">
                      <Mail size={12} />
                      Email
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <Users size={32} className="text-surface-300 mx-auto mb-3" />
            <p className="text-text-secondary font-semibold">No customers found</p>
          </div>
        )}
      </div>
    </div>
  )
}
