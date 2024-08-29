import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

import type { TextVariant } from './types'

type TextProps = {
  children: ReactNode
  variant?: TextVariant
  className?: string
}

export const Text = ({ children, variant = 'p', className }: TextProps) => {
  const styles = () => {
    switch (variant) {
      case 'h1':
        return 'text-4xl md:text-5xl tracking-widest'
      case 'h2':
        return 'text-3xl md:text-4xl tracking-widest'
      case 'h3':
        return 'text-2xl md:text-3xl tracking-widest'
      case 'h4':
        return 'text-xl md:text-2xl tracking-widest'
      case 'h5':
        return 'text-lg md:text-xl tracking-widest'
      case 'h6':
        return 'text-base md:text-lg tracking-widest'
      case 'p':
        return 'text-sm md:text-base'
      default:
        return ''
    }
  }

  const Tag = `${variant}` as keyof JSX.IntrinsicElements

  return <Tag className={cn(styles(), className)}>{children}</Tag>
}
