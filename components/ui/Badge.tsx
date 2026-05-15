import { cn } from '@/lib/utils'

type BadgeVariant = 'red' | 'green' | 'yellow' | 'blue' | 'indigo' | 'muted' | 'outline'

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
  dot?: boolean
}

const variantClasses: Record<BadgeVariant, string> = {
  red:    'bg-brand-red/15 text-brand-red border-brand-red/30',
  green:  'bg-green-500/15 text-green-400 border-green-500/30',
  yellow: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
  blue:   'bg-blue-500/15 text-blue-400 border-blue-500/30',
  indigo: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
  muted:  'bg-surface-100 text-text-muted border-surface-200',
  outline:'bg-transparent text-text-secondary border-surface-200',
}

export default function Badge({ variant = 'muted', children, className, dot }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider border',
        variantClasses[variant],
        className
      )}
    >
      {dot && (
        <span className={cn('w-1.5 h-1.5 rounded-full flex-shrink-0', {
          'bg-brand-red': variant === 'red',
          'bg-green-400': variant === 'green',
          'bg-yellow-400': variant === 'yellow',
          'bg-blue-400': variant === 'blue',
          'bg-indigo-400': variant === 'indigo',
          'bg-text-muted': variant === 'muted',
        })} />
      )}
      {children}
    </span>
  )
}
