'use client'

import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'

import { AnimatePresence, motion } from '@/lib/animation'

type TransitionProviderProps = PropsWithChildren<{}>

const animationItems = [
  {
    id: 1,
    className: 'absolute left-0 z-40 h-screen w-1/4 bg-black',
  },
  {
    id: 2,
    className: 'absolute left-1/4 z-40 h-screen w-1/4 bg-black',
  },
  {
    id: 3,
    className: 'absolute left-2/4 z-40 h-screen w-1/4 bg-black',
  },
  {
    id: 4,
    className: 'absolute left-3/4 z-40 h-screen w-1/4 bg-black',
  },
]

const pages = [
  {
    url: '/',
    label: 'Welcome',
  },
  {
    url: '/about',
    label: 'About',
  },
  {
    url: '/portfolio',
    label: 'Portfolio',
  },
  ,
  {
    url: '/side-projects',
    label: 'Side-projects',
  },
  {
    url: '/blog',
    label: 'Blog',
  },
  {
    url: '/contact',
    label: 'Contact',
  },
]

export const TransitionProvider = ({ children }: TransitionProviderProps) => {
  const pathname = usePathname()

  return (
    <AnimatePresence mode='wait'>
      <div
        key={pathname}
        className='flex min-h-screen flex-col border-b border-solid border-gray-700 bg-gradient-to-b from-gray-950 to-gray-800'
      >
        <div className='pointer-events-none flex max-h-screen overflow-hidden'>
          {animationItems?.map((item, index) => (
            <>
              <motion.div
                key={item.id}
                className={item.className}
                initial={{ height: '100vh' }}
                animate={{ height: 0, transition: { delay: index * 0.2 } }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
              <motion.div
                className='fixed bottom-0 left-0 right-0 top-0 z-50 m-auto flex h-fit w-fit cursor-default gap-2 text-6xl tracking-widest text-white'
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                {pages
                  .find((page) => page?.url === pathname)
                  ?.label.split('')
                  .map((letter, index) => (
                    <span
                      key={index}
                      className='inline-block bg-white p-4 text-black'
                    >
                      {letter}
                    </span>
                  ))}
              </motion.div>
            </>
          ))}
        </div>
        {children}
      </div>
    </AnimatePresence>
  )
}
