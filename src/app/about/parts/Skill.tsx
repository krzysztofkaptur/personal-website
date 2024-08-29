'use client'

import { useState } from 'react'

import { motion } from '@/lib/animation'

type AboutSkillProps = {
  skill: string
  index: number
}

export const AboutSkill = ({ skill, index }: AboutSkillProps) => {
  // todo: find a way to make this animation's code better
  const [isInView, setIsInView] = useState(false)
  const whileInView = () => {
    setIsInView(true)

    return {}
  }

  return (
    <motion.div
      key={index}
      className='overflow-hidden'
      onViewportEnter={whileInView}
    >
      <motion.div
        className='p-1 py-4 text-5xl font-semibold md:text-8xl'
        initial={{ y: '100px' }}
        animate={isInView ? { y: 0 } : {}}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {skill}
      </motion.div>
    </motion.div>
  )
}
