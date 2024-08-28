import { Metadata } from 'next'

import { PageAnimation } from '@/components'

import { PortfolioContent } from './parts'

export const metadata: Metadata = {
  title: `Portfolio | ${process.env.WEBSITE_NAME}`,
  description: '',
}

export default async function Portfolio() {
  return (
    <PageAnimation>
      <PortfolioContent />
    </PageAnimation>
  )
}
