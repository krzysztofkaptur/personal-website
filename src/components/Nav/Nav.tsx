'use client'

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
      staggerChildren: 0.1,
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

type NavProps = {
  className?: string
}

export const Nav = ({ className }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNav = () => setIsOpen((prev) => !prev)

  return (
    <>
      <TopMenu className={className}>
        <NavToggle isOpen={isOpen} onClick={toggleNav} />
        <div className='hidden gap-4 md:flex'>
          {links.map((link, index) => (
            <motion.div key={link.url} variants={listItemVariants}>
              <NavLink link={link} index={index} />
            </motion.div>
          ))}
        </div>
      </TopMenu>
      {isOpen ? (
        <motion.div
          variants={listVariants}
          initial='closed'
          animate='opened'
          className='fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-neutral-950 text-xl md:hidden'
        >
          <div className='flex w-full max-w-7xl justify-between px-4'>
            <Socials />
            <div className='flex flex-col gap-10 pr-4 text-right'>
              {links.map((link, index) => (
                <motion.div key={link.url} variants={listItemVariants}>
                  <NavLink link={link} index={index} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}
    </>
  )
}
