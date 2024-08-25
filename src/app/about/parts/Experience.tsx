'use client'

import { useRef } from 'react'

import { motion, useInView } from '@/lib/animation'

export const AboutExperience = () => {
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
          Experience
        </motion.h2>
      </header>
    </section>
  )
}
