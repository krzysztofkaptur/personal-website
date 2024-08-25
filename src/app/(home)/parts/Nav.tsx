'use client'

import Link from 'next/link'
import { useState } from 'react'

import { motion } from '@/lib/animation'
import { Github, Linkedin, Mail } from '@/lib/icons'

import { Button, Logo, NavLink, NavToggle, TopMenu } from '@/components'

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
    <TopMenu className='absolute left-0 right-0 mx-auto w-full max-w-7xl'>
      <div className='hidden flex-1 justify-between gap-2 lg:flex'>
        {links.map((link) => (
          <NavLink key={link.url} link={link} />
        ))}
      </div>
      <div className='flex flex-1 lg:justify-center'>
        <Link href='/'>
          <Logo width={60} />
        </Link>
      </div>
      <div className='hidden flex-1 items-center justify-end gap-4 lg:flex'>
        <Button>
          <Mail />
        </Button>
        <Link href='https://github.com/krzysztofkaptur' target='_blank'>
          <Github />
        </Link>
        <Link
          href='https://www.linkedin.com/in/krzysztof-kaptur-491645183/'
          target='_blank'
        >
          <Linkedin />
        </Link>
      </div>

      {/* mobile nav */}
      <NavToggle isOpen={isOpen} onClick={toggleNav} />
      {isOpen ? (
        <motion.div
          variants={listVariants}
          initial='closed'
          animate='opened'
          className='absolute left-0 top-0 z-20 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-black text-xl text-white'
        >
          {links.map((link) => (
            <motion.div key={link.url} variants={listItemVariants}>
              <Link href={link.url}>{link.label}</Link>
            </motion.div>
          ))}
        </motion.div>
      ) : null}
    </TopMenu>
  )
}
