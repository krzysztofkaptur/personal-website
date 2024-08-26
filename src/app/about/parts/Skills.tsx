'use client'

import { useRef } from 'react'

import { motion, useInView } from '@/lib/animation'

import { Text } from '@/components'

const skills = [
  'HTML',
  'CSS',
  'Javascript',
  'Typescript',
  'React',
  'NextJS',
  'Vue',
  'Nuxt',
  'Vitest',
  'Testing library',
  'Playwright',
  'Tailwind',
  'ShadCN',
  'Vercel',
  'AWS',
  'Git',
  'Github Actions',
  'Docker',
]

export const AboutSkills = () => {
  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' })

  return (
    <section className='flex h-screen flex-col gap-6'>
      <header>
        <Text variant='h2'>
          <motion.span
            initial={{ x: '-300px', opacity: 0 }}
            animate={isTitleInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            ref={titleRef}
          >
            Skills
          </motion.span>
        </Text>
      </header>
      <ul className='flex max-w-md flex-wrap gap-2'>
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className='bg-black p-1 text-white'
            initial={{ opacity: 0, x: '-40px' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: index * 0.3,
            }}
          >
            {skill}
          </motion.div>
        ))}
      </ul>
    </section>
  )
}
