import { cn } from '@/lib/utils'

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = { sm: 'size-4', md: 'size-8', lg: 'size-12' }

export function Spinner({ size = 'md', className }: SpinnerProps) {
  return (
    <span
      className={cn(
        'block rounded-full border-2 border-slate-200 border-t-indigo-600 animate-spin',
        sizes[size],
        className,
      )}
    />
  )
}

export function FullPageSpinner() {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-slate-950">
      <Spinner size="lg" className="border-slate-700 border-t-indigo-500" />
    </div>
  )
}
