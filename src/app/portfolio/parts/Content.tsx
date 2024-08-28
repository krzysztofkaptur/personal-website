'use client'

import Link from 'next/link'

import { motion } from '@/lib/animation'
import { ZoomIn } from '@/lib/icons'

import { Image, Text } from '@/components'

import { projects } from '@/data/projects'

export const PortfolioContent = () => {
  return (
    <section className='py-32'>
      {Object.values(projects).map((project) => (
        <article
          key={project.company}
          className='align-center flex justify-center py-32'
        >
          <div className='relative flex items-center justify-center'>
            <Link href={`/portfolio/${project.path}`}>
              <motion.div
                className=' absolute -right-10 -top-10 z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white text-gray-500'
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 1 },
                }}
              >
                <ZoomIn size={30} />
              </motion.div>
            </Link>
            <figure className='relative -rotate-3'>
              <div className='absolute bottom-0 left-0 right-0 top-0 bg-gray-600 opacity-70'></div>
              <Image
                src={project.image}
                alt={project.project}
                width={800}
                height={200}
              />
            </figure>
            <div className='absolute text-center'>
              <Text className='text-xl font-medium uppercase'>
                {project.category}
              </Text>
              <Text variant='h3' className='text-7xl font-semibold'>
                {project.project}
              </Text>
            </div>
          </div>
        </article>
      ))}
      <Text className='text-center text-xl font-semibold uppercase'>
        And some more...
      </Text>
    </section>
  )
}
