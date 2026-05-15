import type { Metadata } from 'next'
import Link from 'next/link'
import { Package, Clock, ChevronRight, ShoppingBag } from 'lucide-react'

export const metadata: Metadata = { title: 'My Orders' }

const mockOrders = [
  {
    id: 'ORD-8821',
    date: '2026-05-10',
    status: 'delivered',
    total: 87.80,
    items: [
      { name: 'Testosterone Enanthate 300', qty: 1, price: 42.90, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=80&q=80' },
      { name: 'Anavar 10mg Tablets', qty: 1, price: 47.90, image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=80&q=80' },
    ],
    tracking: 'GB123456789',
  },
  {
    id: 'ORD-8754',
    date: '2026-04-28',
    status: 'processing',
    total: 149.90,
    items: [
      { name: 'Bulking Stack – Pro Series', qty: 1, price: 149.90, image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=80&q=80' },
    ],
    tracking: null,
  },
  {
    id: 'ORD-8701',
    date: '2026-04-15',
    status: 'delivered',
    total: 42.90,
    items: [
      { name: 'Testosterone Cypionate 200', qty: 1, price: 39.90, image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=80&q=80' },
    ],
    tracking: 'GB987654321',
  },
]

const statusConfig: Record<string, { color: string; label: string }> = {
  pending:    { color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',  label: 'Pending' },
  processing: { color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',        label: 'Processing' },
  shipped:    { color: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',  label: 'Shipped' },
  delivered:  { color: 'bg-green-500/20 text-green-400 border-green-500/30',     label: 'Delivered' },
  cancelled:  { color: 'bg-red-500/20 text-red-400 border-red-500/30',           label: 'Cancelled' },
}

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display font-bold text-2xl uppercase tracking-wide text-white">
          My Orders
        </h1>
        <p className="text-text-muted text-sm mt-1">
          {mockOrders.length} order{mockOrders.length !== 1 ? 's' : ''} in your history
        </p>
      </div>

      {mockOrders.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-surface border border-surface-100">
          <ShoppingBag size={48} className="text-surface-300 mb-4" />
          <p className="font-display font-semibold text-lg uppercase tracking-wide text-text-secondary mb-2">
            No orders yet
          </p>
          <p className="text-sm text-text-muted mb-6">Your orders will appear here once placed</p>
          <Link href="/shop" className="btn-primary px-6 py-3 text-sm">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {mockOrders.map((order) => {
            const status = statusConfig[order.status] ?? statusConfig.pending
            return (
              <div key={order.id} className="bg-surface border border-surface-100 overflow-hidden">
                {/* Order header */}
                <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-surface-100 bg-surface-50/30">
                  <div className="flex items-center gap-4 flex-wrap">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Order</p>
                      <p className="font-display font-bold text-base text-white">{order.id}</p>
                    </div>
                    <div className="w-px h-8 bg-surface-200 hidden sm:block" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Date</p>
                      <p className="text-sm font-semibold text-text-secondary flex items-center gap-1">
                        <Clock size={12} />
                        {new Date(order.date).toLocaleDateString('en-GB', {
                          day: 'numeric', month: 'long', year: 'numeric',
                        })}
                      </p>
                    </div>
                    <div className="w-px h-8 bg-surface-200 hidden sm:block" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Total</p>
                      <p className="font-display font-bold text-brand-red">
                        £{order.total.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`badge border text-xs capitalize ${status.color}`}>
                      {status.label}
                    </span>
                    <Link
                      href={`/account/orders/${order.id}`}
                      className="flex items-center gap-1 text-xs font-semibold text-text-muted hover:text-white transition-colors"
                    >
                      Details <ChevronRight size={13} />
                    </Link>
                  </div>
                </div>

                {/* Order items */}
                <div className="px-5 py-4 space-y-3">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-dark border border-surface-100 overflow-hidden shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-text-primary truncate">{item.name}</p>
                        <p className="text-xs text-text-muted">Qty: {item.qty}</p>
                      </div>
                      <span className="text-sm font-bold text-text-secondary shrink-0">
                        £{item.price.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tracking */}
                {order.tracking && (
                  <div className="px-5 py-3 border-t border-surface-100 flex items-center gap-2">
                    <Package size={14} className="text-brand-red" />
                    <span className="text-xs text-text-muted">
                      Tracking:{' '}
                      <span className="text-text-primary font-mono font-semibold">{order.tracking}</span>
                    </span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
