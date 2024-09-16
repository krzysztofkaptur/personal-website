import { Metadata } from 'next'

import { PageAnimation } from '@/components'

import { SideProjectsContent } from './parts'

export const metadata: Metadata = {
  title: `Side projects | ${process.env.WEBSITE_NAME}`,
  description: '',
}

export default async function SideProjects() {
  return (
    <PageAnimation>
      <SideProjectsContent />
    </PageAnimation>
  )
}
