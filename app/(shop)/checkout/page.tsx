'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import { Check, Info, Landmark, Bitcoin, CreditCard, RefreshCw } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCartStore()
  const [placing, setPlacing] = useState(false)
  const [placed, setPlaced] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('bank_transfer')

  const cartTotal = subtotal()
  const shipping = cartTotal >= 149 ? 0 : 4.99
  const total = cartTotal + shipping

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setPlacing(true)
    
    // Simulate sending email to Davethomson1122@gmail.com
    await new Promise(r => setTimeout(r, 1500))
    
    clearCart()
    setPlacing(false)
    setPlaced(true)
  }

  if (placed) {
    return (
      <div className="max-w-3xl mx-auto py-16 text-center">
        <div className="w-16 h-16 bg-[#42A042] text-white rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={32} />
        </div>
        <h1 className="font-display font-bold text-3xl mb-4 text-text-primary">Order Complete</h1>
        <p className="text-text-secondary mb-8">
          Thank you. Your order has been received. All order details and payment instructions have been sent to our administration team (Davethomson1122@gmail.com) and a copy has been sent to your email.
        </p>
        <Link href="/my-account/orders" className="bg-button-blue text-white px-8 py-3 font-semibold hover:bg-blue-700 transition-colors">
          View My Orders
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-[1100px] mx-auto py-8 px-4">
      {/* Breadcrumb */}
      <div className="flex justify-center items-center text-[11px] font-bold text-text-secondary uppercase tracking-[2px] space-x-4 mb-8">
        <span className="hover:text-text-primary transition-colors cursor-pointer">Shopping Cart</span>
        <span>→</span>
        <span className="text-text-primary">Checkout</span>
        <span>→</span>
        <span>Order Complete</span>
      </div>

      <div className="mb-6 text-sm text-text-secondary border-t-2 border-button-blue bg-surface-100 p-4 flex gap-1 items-center">
        <span>Have a coupon?</span>
        <a href="#" className="text-button-blue hover:text-blue-700">Click here to enter your code</a>
      </div>

      <div className="bg-[#51a351] text-white px-4 py-3 text-sm flex items-center gap-2 mb-8 rounded-sm">
        <Check size={16} /> Customer matched zone "Everywhere"
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Column - Billing */}
        <div className="flex-1 w-full">
          <h2 className="font-bold text-[15px] text-text-primary uppercase mb-4">Billing Details</h2>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-semibold text-text-primary mb-1.5">First name <span className="text-red-500">*</span></label>
                <input required type="text" className="w-full border border-border-light p-2.5 text-sm focus:outline-none focus:border-button-blue" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-text-primary mb-1.5">Last name <span className="text-red-500">*</span></label>
                <input required type="text" className="w-full border border-border-light p-2.5 text-sm focus:outline-none focus:border-button-blue" />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-text-primary mb-1.5">Country / Region <span className="text-red-500">*</span></label>
              <select className="w-full border border-border-light p-2.5 text-sm font-bold focus:outline-none focus:border-button-blue bg-surface-100">
                <option value="">Select a country...</option>
                {["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom (UK)", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"].map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-text-primary mb-1.5">Street address <span className="text-red-500">*</span></label>
              <input required type="text" placeholder="House number and street name" className="w-full border border-border-light p-2.5 text-sm focus:outline-none focus:border-button-blue mb-2" />
              <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" className="w-full border border-border-light p-2.5 text-sm focus:outline-none focus:border-button-blue" />
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-text-primary mb-1.5">Town / City <span className="text-red-500">*</span></label>
              <input required type="text" className="w-full border border-border-light p-2.5 text-sm focus:outline-none focus:border-button-blue" />
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-text-primary mb-1.5">State / County <span className="text-red-500">*</span></label>
              <input required type="text" className="w-full border border-border-light p-2.5 text-sm focus:outline-none focus:border-button-blue" />
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-text-primary mb-1.5">Postcode / ZIP <span className="text-red-500">*</span></label>
              <input required type="text" className="w-full border border-border-light p-2.5 text-sm focus:outline-none focus:border-button-blue uppercase" />
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-text-primary mb-1.5">Phone (optional)</label>
              <input type="tel" className="w-full border border-border-light p-2.5 text-sm focus:outline-none focus:border-button-blue" />
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-text-primary mb-1.5">Email address <span className="text-red-500">*</span></label>
              <input required type="email" className="w-full border border-border-light p-2.5 text-sm focus:outline-none focus:border-button-blue" />
            </div>

            <div className="pt-4">
              <label className="flex items-center gap-2 cursor-pointer font-bold text-[13px] text-text-primary uppercase">
                <input type="checkbox" className="w-4 h-4" />
                Deliver to a different address?
              </label>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-text-primary mb-1.5">Order notes (optional)</label>
              <textarea rows={3} placeholder="Notes about your order, e.g. special notes for delivery." className="w-full border border-border-light p-2.5 text-sm focus:outline-none focus:border-button-blue resize-none" />
            </div>
          </div>
        </div>

        {/* Right Column - Order */}
        <div className="w-full lg:w-[480px]">
          <h2 className="font-bold text-[15px] text-text-primary text-center uppercase mb-4">Your Order</h2>
          <div className="border-[2px] border-button-blue p-6 bg-white">
            <table className="w-full text-sm mb-6">
              <thead>
                <tr className="border-b border-border-light">
                  <th className="text-left font-bold py-3 text-text-primary">Product</th>
                  <th className="text-right font-bold py-3 text-text-primary">Subtotal</th>
                </tr>
              </thead>
              <tbody className="border-b border-border-light divide-y divide-border-light">
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className="py-3 text-text-secondary pr-4">
                      {item.product.name} <strong className="text-text-primary">× {item.quantity}</strong>
                    </td>
                    <td className="py-3 text-right text-text-primary font-semibold whitespace-nowrap">
                      £{(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-b border-border-light">
                  <th className="text-left py-3 text-text-primary font-bold">Subtotal</th>
                  <td className="py-3 text-right text-text-primary font-bold">£{cartTotal.toFixed(2)}</td>
                </tr>
                <tr className="border-b border-border-light">
                  <th className="text-left py-4 text-text-primary font-bold align-top">Shipping</th>
                  <td className="py-4 text-right text-[13px] text-text-secondary space-y-2">
                    <label className="flex items-center justify-end gap-2 cursor-pointer">
                      Flat Rate: <span className="font-bold text-text-primary">£4.99</span>
                      <input type="radio" name="shipping" checked={cartTotal < 149} readOnly />
                    </label>
                    {cartTotal >= 149 && (
                      <label className="flex items-center justify-end gap-2 cursor-pointer">
                        Free Delivery
                        <input type="radio" name="shipping" checked={cartTotal >= 149} readOnly />
                      </label>
                    )}
                  </td>
                </tr>
                <tr>
                  <th className="text-left py-4 text-text-primary font-bold text-lg">Total</th>
                  <td className="py-4 text-right text-button-blue font-bold text-xl">£{total.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>

            <div className="space-y-3 mb-6">
              {[
                { id: 'bank_transfer', label: 'Bank Transfer', icon: Landmark, desc: 'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.' },
                { id: 'revolut', label: 'Revolut - 5% discount + FREE PRODUCT', icon: RefreshCw, desc: 'Send payment via Revolut. You will receive 5% off your total plus a free product! Payment instructions will be emailed to you after checkout.' },
                { id: 'crypto', label: 'Bitcoin (Crypto) - 5% discount applied', icon: Bitcoin, desc: 'Pay securely with Bitcoin or other major cryptocurrencies. A 5% discount is automatically applied.' },
                { id: 'card', label: 'Credit/Debit cards', icon: CreditCard, desc: 'Pay securely using your Visa, Mastercard, or American Express. Note: Payment instructions will be provided after placing the order.' },
              ].map((method) => (
                <div key={method.id} className="border border-border-light bg-surface-100 relative">
                  <label className="flex items-center gap-3 p-4 cursor-pointer">
                    <input 
                      type="radio" 
                      name="payment_method" 
                      checked={paymentMethod === method.id}
                      onChange={() => setPaymentMethod(method.id)}
                      className="w-4 h-4 accent-button-blue"
                    />
                    <method.icon size={20} className="text-text-secondary" />
                    <span className="font-bold text-[13px] text-text-primary">{method.label}</span>
                  </label>
                  {paymentMethod === method.id && (
                    <div className="px-4 pb-4 pt-1 text-[13px] text-text-secondary leading-relaxed pl-12">
                      {method.desc}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-[13px] text-text-secondary leading-relaxed mb-6">
              Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="/privacy-policy" className="text-button-blue hover:underline">privacy policy</a>.
            </p>

            <button
              type="submit"
              disabled={placing}
              className="w-full bg-button-blue text-white font-bold text-[15px] py-4 hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {placing ? 'PROCESSING...' : 'PLACE ORDER'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
