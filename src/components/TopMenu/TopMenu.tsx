import { cn } from '@/lib/utils'

import type { TopMenuProps } from './types'

export const TopMenu = ({ children, className, ...rest }: TopMenuProps) => {
  return (
    <nav
      className={cn(
        'fixed left-[calc(50%-40rem)] z-50 flex w-full max-w-7xl justify-end gap-4 py-4',
        className
      )}
      {...rest}
    >
      {children}
    </nav>
  )
}
