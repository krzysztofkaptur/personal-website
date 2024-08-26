import type { Metadata } from 'next'

import { PageAnimation } from '@/components'

import { HomeContent } from './parts'

export const metadata: Metadata = {
  title: process.env.WEBSITE_NAME,
  description: '',
}

export default async function Home() {
  return (
    <PageAnimation className='my-auto'>
      <HomeContent />
    </PageAnimation>
  )
}
