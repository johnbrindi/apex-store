'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { CartItem, Product } from '@/types'

interface CartStore {
  items: CartItem[]
  isOpen: boolean

  // Actions
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void

  // Computed
  itemCount: () => number
  subtotal: () => number
  total: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, quantity = 2) => {
        // Enforce minimum quantity of 2
        const safeQty = Math.max(2, quantity)
        set((state) => {
          const existing = state.items.find((i) => i.product_id === product.id)
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product_id === product.id
                  ? { ...i, quantity: i.quantity + safeQty }
                  : i
              ),
              isOpen: true,
            }
          }
          const newItem: CartItem = {
            id: `${product.id}-${Date.now()}`,
            product_id: product.id,
            product,
            quantity: safeQty,
            price: product.price,
          }
          return { items: [...state.items, newItem], isOpen: true }
        })
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((i) => i.product_id !== productId),
        }))
      },

      updateQuantity: (productId, quantity) => {
        // Enforce minimum quantity of 2; remove only if going to 0 explicitly
        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }
        const safeQty = Math.max(2, quantity)
        set((state) => ({
          items: state.items.map((i) =>
            i.product_id === productId ? { ...i, quantity: safeQty } : i
          ),
        }))
      },

      clearCart: () => set({ items: [] }),

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      itemCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

      subtotal: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),

      total: () => {
        const subtotal = get().subtotal()
        const shipping = subtotal >= 149 ? 0 : 4.99
        return subtotal + shipping
      },
    }),
    {
      name: 'apex-cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
