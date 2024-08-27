'use client'

import { motion } from '@/lib/animation'

import { Text } from '@/components'

import { AboutSkill } from '.'

const skills = [
  'HTML',
  'CSS',
  'Javascript',
  'Typescript',
  'React',
  'NextJS',
  'Vue',
  'Nuxt',
]

export const AboutSkills = () => {
  return (
    <section className='flex min-h-screen flex-col justify-center gap-6 py-10'>
      <header>
        <Text variant='h2' className='uppercase text-primary'>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Main tech skills
          </motion.span>
        </Text>
      </header>
      <div className='flex flex-col gap-4'>
        {skills.map((skill, index) => (
          <AboutSkill key={index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  )
}
