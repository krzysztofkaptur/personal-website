'use client'

import { motion } from '@/lib/animation'

type NavToggleProps = {
  isOpen: boolean
  onClick: () => void
}

export const NavToggle = ({ isOpen, onClick }: NavToggleProps) => {
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: 'rgb(255,255,255)',
    },
  }

  const middleVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  }

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: 'rgb(255,255,255)',
    },
  }

  return (
    <button
      className='relative z-50 flex h-8 w-10 cursor-pointer flex-col justify-between lg:hidden'
      onClick={onClick}
    >
      <motion.div
        animate={isOpen ? 'opened' : 'closed'}
        variants={topVariants}
        className='h-1 w-10 origin-left rounded bg-black'
      ></motion.div>
      <motion.div
        animate={isOpen ? 'opened' : 'closed'}
        variants={middleVariants}
        className='h-1 w-10 rounded bg-black'
      ></motion.div>
      <motion.div
        animate={isOpen ? 'opened' : 'closed'}
        variants={bottomVariants}
        className='h-1 w-10 origin-left rounded bg-black'
      ></motion.div>
    </button>
  )
}
