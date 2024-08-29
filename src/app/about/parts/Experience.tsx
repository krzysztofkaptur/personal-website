'use client'

import Link from 'next/link'

import { motion } from '@/lib/animation'

import { Text } from '@/components'

const jobs = [
  {
    title: 'Front-end developer',
    company: 'Develocraft',
    url: 'https://develocraft.com/',
    timeframe: '2022-03 - Present',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit nisi earum minima sunt provident sapiente aliquid delectus dolores explicabo illum placeat eos dolore odit, quo officiis eligendi voluptatum dolorem natus. Sit iure fuga unde praesentium, quos placeat facere. Voluptas vitae quaerat illum nisi adipisci quas officia cumque doloremque, sit totam!',
  },
  {
    title: 'Front-end developer',
    company: 'Fallwork',
    url: 'https://www.fallwork.pl/',
    timeframe: '2021-01 - 2022-02',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit nisi earum minima sunt provident sapiente aliquid delectus dolores explicabo illum placeat eos dolore odit, quo officiis eligendi voluptatum dolorem natus. Sit iure fuga unde praesentium, quos placeat facere. Voluptas vitae quaerat illum nisi adipisci quas officia cumque doloremque, sit totam!',
  },
  {
    title: 'Front-end developer',
    company: 'Macopedia',
    url: 'https://macopedia.com/pl',
    timeframe: '2020-02 - 2020-12',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit nisi earum minima sunt provident sapiente aliquid delectus dolores explicabo illum placeat eos dolore odit, quo officiis eligendi voluptatum dolorem natus. Sit iure fuga unde praesentium, quos placeat facere. Voluptas vitae quaerat illum nisi adipisci quas officia cumque doloremque, sit totam!',
  },
  {
    title: 'Front-end developer',
    company: 'STX Next',
    url: 'https://stxnext.com/',
    timeframe: '2019-06 - 2020-01',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit nisi earum minima sunt provident sapiente aliquid delectus dolores explicabo illum placeat eos dolore odit, quo officiis eligendi voluptatum dolorem natus. Sit iure fuga unde praesentium, quos placeat facere. Voluptas vitae quaerat illum nisi adipisci quas officia cumque doloremque, sit totam!',
  },
  {
    title: 'Front-end developer',
    company: 'EFirst Asia',
    url: 'https://efirst.asia/',
    timeframe: '2017-07 - 2019-03',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit nisi earum minima sunt provident sapiente aliquid delectus dolores explicabo illum placeat eos dolore odit, quo officiis eligendi voluptatum dolorem natus. Sit iure fuga unde praesentium, quos placeat facere. Voluptas vitae quaerat illum nisi adipisci quas officia cumque doloremque, sit totam!',
  },
]

export const AboutExperience = () => {
  return (
    <section className='flex min-h-screen flex-col gap-8 py-20'>
      <header>
        <Text variant='h2' className='uppercase text-primary'>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Experience
          </motion.span>
        </Text>
      </header>
      <section className='relative flex flex-col'>
        {jobs?.map((job) => (
          <div className='flex gap-10' key={job.company}>
            <div className='relative hidden flex-col items-center md:flex'>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className='relative z-10 block h-6 w-6 rounded-full border-8 border-solid border-primary bg-white'
              ></motion.div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className='absolute top-5 block h-[calc(100%-1rem)] w-0.5 bg-primary shadow shadow-primary'
              ></motion.div>
            </div>
            <motion.article
              initial={{ y: '200px' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              className='pb-8'
            >
              <header>
                <Text
                  variant='h4'
                  className='flex flex-col text-lg font-semibold md:flex-row md:gap-2 md:text-2xl'
                >
                  {job.title}
                  <Link href={job.url} target='_blank' className='text-primary'>
                    @{job.company}
                  </Link>
                </Text>
                <Text className='text-muted-foreground'>{job.timeframe}</Text>
              </header>
              <Text className='py-4'>{job.description}</Text>
            </motion.article>
          </div>
        ))}
      </section>
    </section>
  )
}
