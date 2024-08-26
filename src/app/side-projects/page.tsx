import { Metadata } from 'next'

import { PageAnimation } from '@/components'

export const metadata: Metadata = {
  title: `Side projects | ${process.env.WEBSITE_NAME}`,
  description: '',
}

export default async function SideProjects() {
  return (
    <PageAnimation>
      <h1>My side projects</h1>
    </PageAnimation>
  )
}
