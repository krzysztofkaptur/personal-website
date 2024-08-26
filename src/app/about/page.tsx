import { Metadata } from 'next'

import { PageAnimation } from '@/components'

import { AboutContent } from './parts'

export const metadata: Metadata = {
  title: `About | ${process.env.WEBSITE_NAME}`,
  description: '',
}

export default async function About() {
  return (
    <PageAnimation>
      <AboutContent />
    </PageAnimation>
  )
}
