import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PageAnimation } from '@/components'

export const metadata: Metadata = {
  title: `Side projects | ${process.env.WEBSITE_NAME}`,
  description: '',
}

export default async function SideProjects() {
  // todo: make this page usable
  notFound()

  return (
    <PageAnimation>
      <h1>My side projects</h1>
    </PageAnimation>
  )
}
