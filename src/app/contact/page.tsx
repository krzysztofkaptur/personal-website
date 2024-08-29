import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PageAnimation } from '@/components'

import { ContactContent } from './parts'

export const metadata: Metadata = {
  title: `Contact | ${process.env.WEBSITE_NAME}`,
  description: '',
}

export default async function Contact() {
  // todo: make this page usable
  notFound()

  return (
    <PageAnimation className='my-auto'>
      <ContactContent />
    </PageAnimation>
  )
}
