import { Metadata } from 'next'

import { PageAnimation } from '@/components'

export const metadata: Metadata = {
  title: `Portfolio | ${process.env.WEBSITE_NAME}`,
  description: '',
}

export default async function Portfolio() {
  return (
    <PageAnimation>
      <section className='flex gap-8'>
        <h1>My work</h1>
      </section>
    </PageAnimation>
  )
}
