import type { Metadata } from 'next'
import Image from 'next/image'

import { Button } from '@/components'

export const metadata: Metadata = {
  title: process.env.WEBSITE_NAME,
  description: '',
}

export default async function Home() {
  return (
    <section className='flex h-[calc(100vh-92px)] flex-col lg:flex-row'>
      <div className='relative h-1/2 lg:h-full lg:w-1/2'>
        <Image src='/images/hero.png' fill alt='' className='object-contain' />
      </div>
      <div className='flex flex-1 flex-col justify-center gap-6'>
        <h1 className='text-xl sm:text-3xl md:text-4xl'>
          Crafting Digital Experiences, Designing Tomorrow.
        </h1>
        <p className='text-sm sm:text-base md:text-lg'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          optio veniam enim vero, sunt maxime, sapiente at perferendis sint
          quidem iste ipsum culpa nobis omnis.
        </p>
        <div className='flex gap-4'>
          <Button>View my work</Button>
          <Button>Contact me</Button>
        </div>
      </div>
    </section>
  )
}
