'use client'

import Link from 'next/link'

import { motion } from '@/lib/animation'
import { ZoomIn } from '@/lib/icons'

import { Image, Text } from '@/components'

import { sideProjects } from '@/data/projects'

export const SideProjectsContent = () => {
  return (
    <section className='py-32'>
      <header className='flex-1 space-y-4'>
        <Text variant='h1' className='uppercase text-primary'>
          Side projects
        </Text>
        <Text>What I do after work</Text>
      </header>
      {Object.values(sideProjects).map((project) => (
        <article
          key={project.project}
          className='align-center flex justify-center py-24 md:py-32'
        >
          <div className='relative flex items-center justify-center'>
            <Link href={`/side-projects/${project.path}`}>
              <motion.div
                className=' absolute -right-2 -top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-500 md:-right-10 md:-top-10 md:h-20 md:w-20'
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 1 },
                }}
              >
                <ZoomIn size={24} />
              </motion.div>
            </Link>
            <figure className='relative -rotate-3'>
              <div className='absolute bottom-0 left-0 right-0 top-0 bg-gray-600 opacity-70'></div>
              <Image
                src={project.image}
                alt={project.project}
                width={800}
                height={400}
              />
            </figure>
            <div className='absolute text-center'>
              <Text className='text-lg font-medium uppercase md:text-xl'>
                {project.category}
              </Text>
              <Text variant='h3' className='text-3xl font-semibold md:text-7xl'>
                {project.project}
              </Text>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
