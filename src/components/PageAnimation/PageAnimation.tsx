'use client'

import { PropsWithChildren } from 'react'

import { motion } from '@/lib/animation'

type PageAnimationProps = PropsWithChildren<{}>

export const PageAnimation = ({ children }: PageAnimationProps) => {
  return (
    <motion.div
      className='h-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}
