'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ChevronRight, Lock, CreditCard, Truck, Check, ArrowLeft } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '@/store/cartStore'
import { formatCurrency, cn } from '@/lib/utils'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

const addressSchema = z.object({
  email: z.string().email('Valid email required'),
  first_name: z.string().min(1, 'First name required'),
  last_name: z.string().min(1, 'Last name required'),
  address_line1: z.string().min(5, 'Address required'),
  address_line2: z.string().optional(),
  city: z.string().min(2, 'City required'),
  postal_code: z.string().min(4, 'Postcode required'),
  country: z.string().default('GB'),
  phone: z.string().optional(),
})

const paymentSchema = z.object({
  method: z.enum(['bank_transfer', 'bitcoin', 'ethereum', 'usdt', 'revolut']),
})

type AddressForm = z.infer<typeof addressSchema>
type PaymentForm = z.infer<typeof paymentSchema>

const STEPS = ['Delivery', 'Payment', 'Review']

const PAYMENT_METHODS = [
  {
    id: 'bank_transfer',
    label: 'Bank Transfer',
    description: 'Standard UK bank transfer',
    icon: '🏦',
  },
  {
    id: 'bitcoin',
    label: 'Bitcoin (BTC)',
    description: '5% discount applied automatically',
    icon: '₿',
    discount: true,
  },
  {
    id: 'ethereum',
    label: 'Ethereum (ETH)',
    description: '5% discount applied automatically',
    icon: 'Ξ',
    discount: true,
  },
  {
    id: 'usdt',
    label: 'USDT (Tether)',
    description: '5% discount applied automatically',
    icon: '💲',
    discount: true,
  },
  {
    id: 'revolut',
    label: 'Revolut',
    description: '5% off + free product — code REVO10',
    icon: '🔄',
    discount: true,
    highlight: true,
  },
]

export default function CheckoutPage() {
  const [step, setStep] = useState(0)
  const [addressData, setAddressData] = useState<AddressForm | null>(null)
  const [paymentMethod, setPaymentMethod] = useState<string>('bank_transfer')
  const [placing, setPlacing] = useState(false)
  const [placed, setPlaced] = useState(false)

  const { items, subtotal, total, clearCart } = useCartStore()
  const sub = subtotal()
  const MIN_ORDER = 90
  const [shippingMethod, setShippingMethod] = useState<'local' | 'express'>('local')
  const shipping = shippingMethod === 'express' ? 25 : 10
  const tot = sub + shipping

  const {
    register: registerAddress,
    handleSubmit: handleAddressSubmit,
    formState: { errors: addressErrors },
  } = useForm<AddressForm>({ resolver: zodResolver(addressSchema) })

  const onAddressSubmit = (data: AddressForm) => {
    setAddressData(data)
    setStep(1)
  }

  const onPaymentSubmit = () => {
    setStep(2)
  }

  const placeOrder = async () => {
    setPlacing(true)
    await new Promise((r) => setTimeout(r, 1800))
    clearCart()
    setPlacing(false)
    setPlaced(true)
  }

  if (placed) {
    return (
      <div className="container-shop py-20 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.4 }}
          className="w-20 h-20 bg-green-500/20 border-2 border-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Check size={36} className="text-green-400" />
        </motion.div>
        <h1 className="font-display font-bold text-4xl uppercase tracking-wide mb-3">
          Order Confirmed!
        </h1>
        <p className="text-text-muted mb-2">
          Thank you for your order. You will receive an email confirmation shortly.
        </p>
        <p className="text-text-muted mb-8 text-sm">
          Payment instructions have been sent to{' '}
          <span className="text-white font-semibold">{addressData?.email}</span>
        </p>
        <div className="bg-surface border border-surface-100 p-5 mb-8 text-left space-y-2">
          <p className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-3">Next Steps</p>
          {[
            'Check your email for payment instructions',
            'Complete payment within 24 hours to avoid cancellation',
            'Your order will be dispatched same day if paid before 2PM',
            'Tracking info will be emailed once shipped',
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-text-muted">
              <span className="w-5 h-5 bg-brand-red/20 text-brand-red text-[10px] font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              {step}
            </div>
          ))}
        </div>
        <div className="flex gap-3 justify-center">
          <Link href="/account/orders" className="btn-primary px-6 py-3">
            View Orders
          </Link>
          <Link href="/shop" className="btn-secondary px-6 py-3">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container-shop py-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Link href="/cart" className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors">
          <ArrowLeft size={15} />
          Back to Cart
        </Link>
        <div className="flex items-center gap-1 text-xs text-text-muted">
          <Lock size={12} className="text-brand-red" />
          Secure Checkout
        </div>
      </div>

      {/* Step indicator */}
      <div className="flex items-center justify-center gap-0 mb-10">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all',
                  i < step
                    ? 'bg-green-500 border-green-500 text-white'
                    : i === step
                    ? 'bg-brand-red border-brand-red text-white'
                    : 'bg-transparent border-surface-300 text-text-muted'
                )}
              >
                {i < step ? <Check size={14} /> : i + 1}
              </div>
              <span className={cn('text-xs font-semibold uppercase tracking-wider hidden sm:block',
                i === step ? 'text-white' : 'text-text-muted'
              )}>
                {s}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={cn('w-20 sm:w-32 h-0.5 mx-2 transition-colors',
                i < step ? 'bg-green-500' : 'bg-surface-200'
              )} />
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {/* Step 0: Delivery */}
            {step === 0 && (
              <motion.div
                key="delivery"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-brand-red flex items-center justify-center">
                    <Truck size={15} className="text-white" />
                  </div>
                  <h2 className="font-display font-bold text-xl uppercase tracking-wide">
                    Delivery Details
                  </h2>
                </div>

                <form onSubmit={handleAddressSubmit(onAddressSubmit)} className="space-y-4">
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                    error={addressErrors.email?.message}
                    {...registerAddress('email')}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      placeholder="John"
                      error={addressErrors.first_name?.message}
                      {...registerAddress('first_name')}
                    />
                    <Input
                      label="Last Name"
                      placeholder="Smith"
                      error={addressErrors.last_name?.message}
                      {...registerAddress('last_name')}
                    />
                  </div>
                  <Input
                    label="Address Line 1"
                    placeholder="123 Example Street"
                    error={addressErrors.address_line1?.message}
                    {...registerAddress('address_line1')}
                  />
                  <Input
                    label="Address Line 2 (optional)"
                    placeholder="Flat / Apartment"
                    {...registerAddress('address_line2')}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="City"
                      placeholder="London"
                      error={addressErrors.city?.message}
                      {...registerAddress('city')}
                    />
                    <Input
                      label="Postcode"
                      placeholder="SW1A 1AA"
                      error={addressErrors.postal_code?.message}
                      {...registerAddress('postal_code')}
                    />
                  </div>
                  <Input
                    label="Phone (optional)"
                    type="tel"
                    placeholder="+44 7000 000000"
                    {...registerAddress('phone')}
                  />

                  {/* Shipping options */}
                  <div className="space-y-2 pt-2">
                    <p className="label-base">Shipping Method</p>
                    {[
                      {
                        id: 'local',
                        label: 'Local Delivery',
                        sub: '2 to 3 business days',
                        price: 10,
                      },
                      {
                        id: 'express',
                        label: 'Express Delivery',
                        sub: '7 to 24 hours',
                        price: 25,
                      },
                    ].map((opt) => (
                      <label key={opt.id} className="flex items-center justify-between p-4 bg-white border border-border-light cursor-pointer hover:border-button-blue transition-colors">
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${shippingMethod === opt.id ? 'border-button-blue' : 'border-border-light'}`}>
                            {shippingMethod === opt.id && <div className="w-2 h-2 bg-button-blue rounded-full" />}
                          </div>
                          <input
                            type="radio"
                            name="shipping"
                            value={opt.id}
                            checked={shippingMethod === opt.id}
                            onChange={() => setShippingMethod(opt.id as 'local' | 'express')}
                            className="sr-only"
                          />
                          <div>
                            <p className="text-sm font-semibold text-text-primary">{opt.label}</p>
                            <p className="text-xs text-text-secondary">{opt.sub}</p>
                          </div>
                        </div>
                        <span className="text-sm font-bold text-text-primary">
                          £{opt.price.toFixed(2)}
                        </span>
                      </label>
                    ))}
                  </div>

                  {sub < 90 && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm">
                      Minimum order is £90. Please add more items to continue.
                    </div>
                  )}

                  <Button type="submit" fullWidth size="lg" rightIcon={<ChevronRight size={16} />} disabled={sub < 90}>
                    Continue to Payment
                  </Button>
                </form>
              </motion.div>
            )}

            {/* Step 1: Payment */}
            {step === 1 && (
              <motion.div
                key="payment"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-brand-red flex items-center justify-center">
                    <CreditCard size={15} className="text-white" />
                  </div>
                  <h2 className="font-display font-bold text-xl uppercase tracking-wide">
                    Payment Method
                  </h2>
                </div>

                <div className="space-y-3 mb-6">
                  {PAYMENT_METHODS.map((method) => (
                    <label
                      key={method.id}
                      className={cn(
                        'flex items-center gap-4 p-4 border cursor-pointer transition-all',
                        paymentMethod === method.id
                          ? 'border-brand-red bg-brand-red/5'
                          : 'border-surface-200 bg-surface hover:border-surface-300',
                        method.highlight && 'ring-1 ring-brand-red/30'
                      )}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={() => setPaymentMethod(method.id)}
                        className="sr-only"
                      />
                      <div
                        className={cn(
                          'w-4 h-4 border-2 rounded-full flex items-center justify-center shrink-0 transition-colors',
                          paymentMethod === method.id ? 'border-brand-red' : 'border-surface-300'
                        )}
                      >
                        {paymentMethod === method.id && (
                          <div className="w-2 h-2 bg-brand-red rounded-full" />
                        )}
                      </div>
                      <span className="text-xl shrink-0">{method.icon}</span>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-text-primary flex items-center gap-2">
                          {method.label}
                          {method.highlight && (
                            <span className="badge-red text-[10px]">Recommended</span>
                          )}
                        </p>
                        <p className="text-xs text-text-muted mt-0.5">{method.description}</p>
                      </div>
                      {method.discount && (
                        <span className="badge bg-green-500/15 text-green-400 text-[10px] shrink-0">
                          5% OFF
                        </span>
                      )}
                    </label>
                  ))}
                </div>

                <div className="bg-surface-50/50 border border-surface-100 p-4 mb-6 text-sm text-text-muted">
                  <p className="font-semibold text-text-secondary mb-1">Payment Instructions</p>
                  <p>
                    After placing your order, you will receive detailed payment instructions via email.
                    Your order will be dispatched once payment is confirmed.
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button variant="secondary" onClick={() => setStep(0)} leftIcon={<ArrowLeft size={15} />}>
                    Back
                  </Button>
                  <Button
                    fullWidth
                    size="lg"
                    onClick={onPaymentSubmit}
                    rightIcon={<ChevronRight size={16} />}
                  >
                    Review Order
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Review */}
            {step === 2 && (
              <motion.div
                key="review"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="font-display font-bold text-xl uppercase tracking-wide mb-6">
                  Review Your Order
                </h2>

                {/* Delivery summary */}
                <div className="bg-surface border border-surface-100 p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Delivery To</p>
                    <button onClick={() => setStep(0)} className="text-xs text-brand-red hover:text-brand-red-light">Edit</button>
                  </div>
                  {addressData && (
                    <p className="text-sm text-text-secondary">
                      {addressData.first_name} {addressData.last_name} · {addressData.address_line1}, {addressData.city}, {addressData.postal_code}
                    </p>
                  )}
                </div>

                {/* Payment summary */}
                <div className="bg-surface border border-surface-100 p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Payment Method</p>
                    <button onClick={() => setStep(1)} className="text-xs text-brand-red hover:text-brand-red-light">Edit</button>
                  </div>
                  <p className="text-sm text-text-secondary capitalize">
                    {PAYMENT_METHODS.find(m => m.id === paymentMethod)?.label}
                  </p>
                </div>

                {/* Items */}
                <div className="bg-surface border border-surface-100 p-4 mb-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3">
                    Items ({items.length})
                  </p>
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <Image
                        src={item.product.primary_image ?? '/assets/images/placeholder.jpg'}
                        alt={item.product.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 object-cover bg-dark"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-text-primary line-clamp-1">{item.product.name}</p>
                        <p className="text-xs text-text-muted">Qty: {item.quantity}</p>
                      </div>
                      <span className="text-sm font-bold text-brand-red">
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-text-muted mb-5 leading-relaxed">
                  By placing this order you agree to our{' '}
                  <Link href="/terms" className="text-brand-red hover:underline">Terms & Conditions</Link>{' '}
                  and{' '}
                  <Link href="/privacy-policy" className="text-brand-red hover:underline">Privacy Policy</Link>.
                  You confirm you are 18+ and understand the nature of the products.
                </p>

                <div className="flex gap-3">
                  <Button variant="secondary" onClick={() => setStep(1)} leftIcon={<ArrowLeft size={15} />}>
                    Back
                  </Button>
                  <Button
                    fullWidth
                    size="lg"
                    loading={placing}
                    onClick={placeOrder}
                    leftIcon={<Lock size={15} />}
                  >
                    {placing ? 'Placing Order…' : 'Place Order'}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Order summary sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-surface border border-surface-100 p-5 sticky top-24">
            <h3 className="font-display font-bold text-base uppercase tracking-wide mb-4 pb-3 border-b border-surface-100">
              Order Summary
            </h3>
            <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="relative shrink-0">
                    <Image
                      src={item.product.primary_image ?? '/assets/images/placeholder.jpg'}
                      alt={item.product.name}
                      width={44}
                      height={44}
                      className="w-11 h-11 object-cover bg-dark"
                    />
                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-brand-red text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <p className="flex-1 text-xs text-text-secondary line-clamp-2">{item.product.name}</p>
                  <span className="text-xs font-bold text-text-primary whitespace-nowrap">
                    {formatCurrency(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
             <div className="space-y-2 pt-3 border-t border-border-light text-sm">
               <div className="flex justify-between">
                 <span className="text-text-secondary">Subtotal</span>
                 <span className="text-text-primary font-bold">{formatCurrency(sub)}</span>
               </div>
               <div className="flex justify-between">
                 <span className="text-text-secondary">Shipping</span>
                 <span className="text-text-primary font-bold">{formatCurrency(shipping)}</span>
               </div>
               {sub < 90 && (
                 <div className="text-xs text-red-500 font-medium">Minimum order: £90</div>
               )}
               <div className="flex justify-between font-bold text-base pt-2 border-t border-border-light">
                 <span className="text-text-primary">Total</span>
                 <span className="text-button-blue font-display">{formatCurrency(tot)}</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
