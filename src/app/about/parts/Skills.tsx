'use client'

import { useRef } from 'react'

import { motion, useInView } from '@/lib/animation'

const skills = ['HTML', 'CSS', 'Javascript', 'Typescript']

export const AboutSkills = () => {
  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' })

  return (
    <section className='h-screen'>
      <header>
        <motion.h2
          initial={{ x: '-300px', opacity: 0 }}
          animate={isTitleInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          ref={titleRef}
        >
          Skills
        </motion.h2>
      </header>
      <ul className='flex flex-wrap gap-2'>
        {skills.map((skill) => (
          <div key={skill} className='bg-black p-1 text-white'>
            {skill}
          </div>
        ))}
      </ul>
    </section>
  )
}
