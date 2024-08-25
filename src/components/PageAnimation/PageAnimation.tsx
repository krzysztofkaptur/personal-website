'use client'

import { PropsWithChildren } from 'react'

import { motion } from '@/lib/animation'

type PageAnimationProps = PropsWithChildren<{}>

export const PageAnimation = ({ children }: PageAnimationProps) => {
  return (
    <motion.div
      className='h-full'
      initial={{ x: '-100vw' }}
      animate={{ x: '0%' }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}
