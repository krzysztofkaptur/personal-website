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
    },
  }

  return (
    <button
      className='relative z-50 flex h-7 w-8 cursor-pointer flex-col justify-between md:h-8 md:w-10'
      onClick={onClick}
    >
      <motion.div
        animate={isOpen ? 'opened' : 'closed'}
        variants={topVariants}
        className='h-1 w-8 origin-left rounded bg-white md:w-10'
      ></motion.div>
      <motion.div
        animate={isOpen ? 'opened' : 'closed'}
        variants={middleVariants}
        className='h-1 w-8 rounded bg-white md:w-10'
      ></motion.div>
      <motion.div
        animate={isOpen ? 'opened' : 'closed'}
        variants={bottomVariants}
        className='h-1 w-8 origin-left rounded bg-white md:w-10'
      ></motion.div>
    </button>
  )
}
