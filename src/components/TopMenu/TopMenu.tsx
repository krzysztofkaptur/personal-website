'use client'

import { cn } from '@/lib/utils'

import type { TopMenuProps } from './types'

export const TopMenu = ({ children, className, ...rest }: TopMenuProps) => {
  return (
    <nav
      className={cn(
        'fixed z-30 flex w-full justify-center bg-neutral-950',
        className
      )}
      {...rest}
    >
      <div className='flex w-full max-w-7xl justify-end gap-4 p-4'>
        {children}
      </div>
    </nav>
  )
}
