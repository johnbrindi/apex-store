'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { User, Lock, Bell, Save, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

const profileSchema = z.object({
  first_name: z.string().min(1, 'First name required'),
  last_name: z.string().min(1, 'Last name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
})

const passwordSchema = z.object({
  current_password: z.string().min(1, 'Current password required'),
  new_password: z.string().min(8, 'Min 8 characters'),
  confirm_password: z.string(),
}).refine((d) => d.new_password === d.confirm_password, {
  message: 'Passwords do not match',
  path: ['confirm_password'],
})

type ProfileForm = z.infer<typeof profileSchema>
type PasswordForm = z.infer<typeof passwordSchema>

const TABS = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'security', label: 'Security', icon: Lock },
  { id: 'notifications', label: 'Notifications', icon: Bell },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [profileSaved, setProfileSaved] = useState(false)
  const [passwordSaved, setPasswordSaved] = useState(false)
  const [newsletter, setNewsletter] = useState(true)
  const [orderUpdates, setOrderUpdates] = useState(true)
  const [promoEmails, setPromoEmails] = useState(false)

  const {
    register: regProfile,
    handleSubmit: handleProfile,
    formState: { errors: profileErrors },
  } = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
    defaultValues: { first_name: 'John', last_name: 'Smith', email: 'john@example.com', phone: '' },
  })

  const {
    register: regPwd,
    handleSubmit: handlePwd,
    reset: resetPwd,
    formState: { errors: pwdErrors },
  } = useForm<PasswordForm>({ resolver: zodResolver(passwordSchema) })

  const onProfileSubmit = async (data: ProfileForm) => {
    await new Promise((r) => setTimeout(r, 700))
    setProfileSaved(true)
    setTimeout(() => setProfileSaved(false), 3000)
  }

  const onPasswordSubmit = async (data: PasswordForm) => {
    await new Promise((r) => setTimeout(r, 700))
    setPasswordSaved(true)
    resetPwd()
    setTimeout(() => setPasswordSaved(false), 3000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display font-bold text-2xl uppercase tracking-wide text-white">
          Account Settings
        </h1>
        <p className="text-text-muted text-sm mt-1">Manage your profile, security, and preferences</p>
      </div>

      {/* Tab nav */}
      <div className="flex items-center border-b border-surface-100 gap-0">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'flex items-center gap-2 px-5 py-3 text-sm font-semibold uppercase tracking-wide border-b-2 transition-colors',
              activeTab === tab.id
                ? 'border-brand-red text-white'
                : 'border-transparent text-text-muted hover:text-white'
            )}
          >
            <tab.icon size={14} />
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <motion.div
            key="profile"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <form onSubmit={handleProfile(onProfileSubmit)} className="space-y-5 max-w-lg">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  error={profileErrors.first_name?.message}
                  {...regProfile('first_name')}
                />
                <Input
                  label="Last Name"
                  error={profileErrors.last_name?.message}
                  {...regProfile('last_name')}
                />
              </div>
              <Input
                label="Email Address"
                type="email"
                error={profileErrors.email?.message}
                {...regProfile('email')}
              />
              <Input
                label="Phone Number (optional)"
                type="tel"
                placeholder="+44 7000 000000"
                {...regProfile('phone')}
              />

              <div className="flex items-center gap-4 pt-2">
                <Button type="submit" leftIcon={<Save size={14} />}>
                  Save Changes
                </Button>
                <AnimatePresence>
                  {profileSaved && (
                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5 text-sm text-green-400"
                    >
                      <CheckCircle size={15} /> Saved!
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <motion.div
            key="security"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <form onSubmit={handlePwd(onPasswordSubmit)} className="space-y-5 max-w-lg">
              <div className="bg-surface-50/50 border border-surface-100 p-4 text-sm text-text-muted">
                <p className="font-semibold text-text-secondary mb-1">Password Requirements</p>
                <ul className="list-disc list-inside space-y-0.5 text-xs">
                  <li>At least 8 characters long</li>
                  <li>Mix of letters and numbers recommended</li>
                  <li>Avoid using the same password on multiple sites</li>
                </ul>
              </div>

              <Input
                label="Current Password"
                type="password"
                placeholder="Your current password"
                error={pwdErrors.current_password?.message}
                {...regPwd('current_password')}
              />
              <Input
                label="New Password"
                type="password"
                placeholder="New password (min 8 characters)"
                error={pwdErrors.new_password?.message}
                {...regPwd('new_password')}
              />
              <Input
                label="Confirm New Password"
                type="password"
                placeholder="Repeat new password"
                error={pwdErrors.confirm_password?.message}
                {...regPwd('confirm_password')}
              />

              <div className="flex items-center gap-4 pt-2">
                <Button type="submit" leftIcon={<Lock size={14} />}>
                  Update Password
                </Button>
                <AnimatePresence>
                  {passwordSaved && (
                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5 text-sm text-green-400"
                    >
                      <CheckCircle size={15} /> Password updated!
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <motion.div
            key="notifications"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="max-w-lg space-y-3"
          >
            {[
              { id: 'newsletter', label: 'Newsletter', sub: 'New products, guides, and updates', value: newsletter, set: setNewsletter },
              { id: 'order', label: 'Order Updates', sub: 'Dispatch notifications and tracking', value: orderUpdates, set: setOrderUpdates },
              { id: 'promo', label: 'Promotional Emails', sub: 'Deals, discounts, and offers', value: promoEmails, set: setPromoEmails },
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-surface border border-surface-100">
                <div>
                  <p className="text-sm font-semibold text-text-primary">{item.label}</p>
                  <p className="text-xs text-text-muted mt-0.5">{item.sub}</p>
                </div>
                <button
                  onClick={() => item.set(!item.value)}
                  className={cn(
                    'relative w-11 h-6 rounded-full transition-colors duration-200 shrink-0',
                    item.value ? 'bg-brand-red' : 'bg-surface-300'
                  )}
                  aria-label={`Toggle ${item.label}`}
                >
                  <span
                    className={cn(
                      'absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200',
                      item.value ? 'translate-x-5.5' : 'translate-x-0.5'
                    )}
                    style={{ transform: item.value ? 'translateX(22px)' : 'translateX(2px)' }}
                  />
                </button>
              </div>
            ))}

            <Button leftIcon={<Save size={14} />} className="mt-4">
              Save Preferences
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
