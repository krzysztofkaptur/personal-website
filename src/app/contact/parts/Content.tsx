'use client'

import Link from 'next/link'

import { motion } from '@/lib/animation'

import { Text } from '@/components'

export const ContactContent = () => {
  return (
    <section className='flex items-center gap-8'>
      <div className='flex-1'>
        <Text variant='h6'>Don't be a stranger</Text>
        <Text className='text-3xl'>Say hello</Text>
      </div>
      <div>
        <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
          <Text className='text-4xl uppercase'>
            {process.env.NEXT_PUBLIC_EMAIL!.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: '-10px' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                className='text-3xl'
              >
                {letter}
              </motion.span>
            ))}
          </Text>
        </Link>
      </div>
    </section>
  )
}
