'use client'

import Link from 'next/link'
import { useState } from 'react'

import { motion } from '@/lib/animation'

import { NavLink, NavToggle, Socials, TopMenu } from '@/components'

const links = [
  {
    url: '/',
    label: 'Home',
  },
  {
    url: '/about',
    label: 'About',
  },
  {
    url: '/portfolio',
    label: 'Portfolio',
  },
  {
    url: '/side-projects',
    label: 'Side projects',
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

const listVariants = {
  opened: {
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  closed: {
    x: '100vw',
  },
}

const listItemVariants = {
  opened: {
    x: 0,
    opacity: 1,
  },
  closed: {
    x: -10,
    opacity: 0,
  },
}

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNav = () => setIsOpen((prev) => !prev)

  return (
    <TopMenu>
      {/* mobile nav */}
      <NavToggle isOpen={isOpen} onClick={toggleNav} />
      {isOpen ? (
        <motion.div
          variants={listVariants}
          initial='closed'
          animate='opened'
          className='absolute left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-black text-xl text-white'
        >
          <div className='flex w-full max-w-7xl justify-between'>
            <Socials />
            <div className='flex flex-col gap-10 text-right'>
              {links.map((link) => (
                <motion.div key={link.url} variants={listItemVariants}>
                  <NavLink link={link} className='text-4xl uppercase' />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}
    </TopMenu>
  )
}
