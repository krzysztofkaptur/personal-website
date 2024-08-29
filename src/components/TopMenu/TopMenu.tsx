import { cn } from '@/lib/utils'

import type { TopMenuProps } from './types'

export const TopMenu = ({ children, className, ...rest }: TopMenuProps) => {
  return (
    <nav
      className={cn(
        'fixed left-[50%] z-50 flex w-full max-w-7xl -translate-x-[50%] justify-end gap-4 p-4',
        className
      )}
      {...rest}
    >
      {children}
    </nav>
  )
}
