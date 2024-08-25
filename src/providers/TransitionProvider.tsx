'use client'

import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'

import { AnimatePresence, motion } from '@/lib/animation'

type TransitionProviderProps = PropsWithChildren<{}>

export const TransitionProvider = ({ children }: TransitionProviderProps) => {
  const pathname = usePathname()

  return (
    <AnimatePresence mode='wait'>
      <div key={pathname}>
        <motion.div
          className='fixed z-40 h-screen w-screen rounded-b-[100px] bg-black'
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.div
          className='fixed bottom-0 left-0 right-0 top-0 z-50 m-auto h-fit w-fit cursor-default text-8xl text-white'
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {pathname.substring(1)}
        </motion.div>
        <motion.div
          className='fixed bottom-0 z-30 h-screen w-screen rounded-t-[100px] bg-black'
          initial={{ height: '140vh' }}
          animate={{ height: '0vh', transition: { delay: 0.5 } }}
        />
        {children}
      </div>
    </AnimatePresence>
  )
}
