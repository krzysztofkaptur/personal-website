import { cn } from '@/lib/utils'

import type { TopMenuProps } from './types'

export const TopMenu = ({ children, className, ...rest }: TopMenuProps) => {
  return (
    <nav className={cn('flex justify-end gap-4 p-4', className)} {...rest}>
      {children}
    </nav>
  )
}
