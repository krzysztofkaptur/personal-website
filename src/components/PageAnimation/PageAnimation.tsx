'use client'

import { PropsWithChildren } from 'react'

import { motion } from '@/lib/animation'
import { cn } from '@/lib/utils'

type PageAnimationProps = PropsWithChildren<{
  className?: string
}>

export const PageAnimation = ({ className, children }: PageAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={cn('h-full', className)}
    >
      {children}
    </motion.div>
  )
}
