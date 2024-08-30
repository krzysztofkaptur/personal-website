'use client'

import { motion } from '@/lib/animation'

import { Badge, Text } from '@/components'

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
  'Git',
  'Vitest',
  'Testing-library',
  'Playwright',
]

const additionalSkills = [
  'Jest',
  'Docker',
  'AWS',
  'Cypress',
  'Wordpress',
  'SCSS',
  'Storybook',
  'Bootstrap',
  'jQuery',
  'Magento',
  'Vue test utils',
  'SQL',
  'NodeJS',
]

export const AboutSkills = () => {
  return (
    <section className='flex min-h-screen flex-col justify-center gap-6 pt-10'>
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
        {skills?.map((skill) => <AboutSkill key={skill} skill={skill} />)}
      </div>
      <div className='flex flex-col gap-4 py-10 md:py-32'>
        <header>
          <Text variant='h2' className='text-primary'>
            Other tech I've worked with
          </Text>
        </header>
        <div className='flex flex-wrap gap-2'>
          {additionalSkills?.map((skill) => (
            <Badge key={skill} variant='outline' text={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
