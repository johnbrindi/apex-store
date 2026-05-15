'use client'

import { create } from 'zustand'

interface UIStore {
  searchOpen: boolean
  mobileNavOpen: boolean
  activeModal: string | null

  openSearch: () => void
  closeSearch: () => void
  toggleSearch: () => void

  openMobileNav: () => void
  closeMobileNav: () => void
  toggleMobileNav: () => void

  openModal: (id: string) => void
  closeModal: () => void
}

export const useUIStore = create<UIStore>((set) => ({
  searchOpen: false,
  mobileNavOpen: false,
  activeModal: null,

  openSearch: () => set({ searchOpen: true }),
  closeSearch: () => set({ searchOpen: false }),
  toggleSearch: () => set((s) => ({ searchOpen: !s.searchOpen })),

  openMobileNav: () => set({ mobileNavOpen: true }),
  closeMobileNav: () => set({ mobileNavOpen: false }),
  toggleMobileNav: () => set((s) => ({ mobileNavOpen: !s.mobileNavOpen })),

  openModal: (id) => set({ activeModal: id }),
  closeModal: () => set({ activeModal: null }),
}))
