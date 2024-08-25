import { Metadata } from 'next'

import { PageAnimation } from '@/components'

export const metadata: Metadata = {
  title: `Side projects | ${process.env.WEBSITE_NAME}`,
  description: '',
}

export default async function SideProjects() {
  return (
    <PageAnimation>
      <section className='flex gap-8'>
        <h1>My side projects</h1>
      </section>
    </PageAnimation>
  )
}
