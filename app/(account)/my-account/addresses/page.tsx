'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { MapPin, Plus, Trash2, Edit2, Check, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const addressSchema = z.object({
  first_name: z.string().min(1, 'Required'),
  last_name: z.string().min(1, 'Required'),
  company: z.string().optional(),
  address_line1: z.string().min(5, 'Required'),
  address_line2: z.string().optional(),
  city: z.string().min(2, 'Required'),
  postal_code: z.string().min(4, 'Required'),
  country: z.string().default('United Kingdom'),
  phone: z.string().optional(),
})
type AddressForm = z.infer<typeof addressSchema>

const mockAddresses = [
  {
    id: 'addr-1',
    first_name: 'John',
    last_name: 'Smith',
    address_line1: '123 Example Street',
    address_line2: '',
    city: 'London',
    postal_code: 'SW1A 1AA',
    country: 'United Kingdom',
    phone: '+44 7000 000000',
    is_default: true,
  },
]

export default function AddressesPage() {
  const [addresses, setAddresses] = useState(mockAddresses)
  const [showForm, setShowForm] = useState(false)
  const [editId, setEditId] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddressForm>({ resolver: zodResolver(addressSchema) })

  const onSubmit = (data: AddressForm) => {
    if (editId) {
      setAddresses((prev) =>
        prev.map((a) =>
          a.id === editId ? { ...a, ...data } : a
        )
      )
      setEditId(null)
    } else {
      setAddresses((prev) => [
        ...prev,
        { ...data, id: `addr-${Date.now()}`, is_default: prev.length === 0, company: data.company ?? '', address_line2: data.address_line2 ?? '', phone: data.phone ?? '' },
      ])
    }
    reset()
    setShowForm(false)
  }

  const deleteAddress = (id: string) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id))
  }

  const setDefault = (id: string) => {
    setAddresses((prev) =>
      prev.map((a) => ({ ...a, is_default: a.id === id }))
    )
  }

  const startEdit = (addr: typeof mockAddresses[0]) => {
    reset(addr)
    setEditId(addr.id)
    setShowForm(true)
  }

  const cancelForm = () => {
    reset()
    setShowForm(false)
    setEditId(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl uppercase tracking-wide text-text-primary">
            Saved Addresses
          </h1>
          <p className="text-text-secondary text-sm mt-1">
            Manage your delivery addresses
          </p>
        </div>
        {!showForm && (
          <Button
            size="sm"
            onClick={() => { reset(); setEditId(null); setShowForm(true) }}
            leftIcon={<Plus size={14} />}
          >
            Add Address
          </Button>
        )}
      </div>

      {/* Address form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-white border border-border-light p-6"
          >
            <h3 className="font-display font-bold text-base uppercase tracking-wide text-text-primary mb-5">
              {editId ? 'Edit Address' : 'New Address'}
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input label="First Name" error={errors.first_name?.message} {...register('first_name')} />
                <Input label="Last Name" error={errors.last_name?.message} {...register('last_name')} />
              </div>
              <Input label="Company (optional)" placeholder="Your company" {...register('company')} />
              <Input label="Address Line 1" placeholder="123 Street Name" error={errors.address_line1?.message} {...register('address_line1')} />
              <Input label="Address Line 2 (optional)" placeholder="Flat / Apartment" {...register('address_line2')} />
              <div className="grid grid-cols-2 gap-4">
                <Input label="City" error={errors.city?.message} {...register('city')} />
                <Input label="Postcode" error={errors.postal_code?.message} {...register('postal_code')} />
              </div>
              <Input label="Phone (optional)" type="tel" {...register('phone')} />
              <div className="flex gap-3 pt-2">
                <Button type="submit" leftIcon={<Check size={14} />}>
                  {editId ? 'Save Changes' : 'Add Address'}
                </Button>
                <Button type="button" variant="secondary" onClick={cancelForm} leftIcon={<X size={14} />}>
                  Cancel
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Address cards */}
      {addresses.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center bg-white border border-border-light">
          <MapPin size={40} className="text-text-secondary mb-4" />
          <p className="font-display font-semibold text-lg uppercase tracking-wide text-text-primary mb-2">
            No saved addresses
          </p>
          <p className="text-sm text-text-secondary mb-5">
            Add a delivery address to speed up checkout
          </p>
          <Button size="sm" onClick={() => setShowForm(true)} leftIcon={<Plus size={14} />}>
            Add Address
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className={cn(
                'bg-white border p-5 relative',
                addr.is_default ? 'border-button-blue' : 'border-border-light'
              )}
            >
              {addr.is_default && (
                <span className="absolute top-3 right-3 bg-button-blue text-white font-bold uppercase tracking-wider px-2 py-0.5 text-[10px]">Default</span>
              )}
              <div className="flex items-start gap-3 mb-3">
                <MapPin size={16} className="text-button-blue shrink-0 mt-0.5" />
                <div className="text-sm text-text-secondary leading-relaxed">
                  <p className="font-semibold text-text-primary">
                    {addr.first_name} {addr.last_name}
                  </p>
                  <p>{addr.address_line1}</p>
                  {addr.address_line2 && <p>{addr.address_line2}</p>}
                  <p>{addr.city}, {addr.postal_code}</p>
                  <p>{addr.country}</p>
                  {addr.phone && <p className="text-text-secondary mt-0.5">{addr.phone}</p>}
                </div>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-border-light">
                {!addr.is_default && (
                  <button
                    onClick={() => setDefault(addr.id)}
                    className="text-xs text-text-secondary hover:text-button-blue transition-colors font-semibold"
                  >
                    Set Default
                  </button>
                )}
                <button
                  onClick={() => startEdit(addr)}
                  className="flex items-center gap-1 text-xs text-text-secondary hover:text-button-blue transition-colors"
                >
                  <Edit2 size={11} /> Edit
                </button>
                <button
                  onClick={() => deleteAddress(addr.id)}
                  className="flex items-center gap-1 text-xs text-text-secondary hover:text-red-500 transition-colors ml-auto"
                >
                  <Trash2 size={11} /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
