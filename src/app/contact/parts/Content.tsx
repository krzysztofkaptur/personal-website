'use client'

import { motion } from '@/lib/animation'

import { Text } from '@/components'

import { ContactForm } from '.'

export const ContactContent = () => {
  return (
    <section className='flex gap-8'>
      <div className='flex-1'>
        <Text variant='h6'>Don't be a stranger</Text>
        <div className='flex gap-1'>
          {'Say-hello'.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: '-10px' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.25,
                delay: index * 0.25,
              }}
              className='text-6xl'
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
      <ContactForm />
    </section>
  )
}
