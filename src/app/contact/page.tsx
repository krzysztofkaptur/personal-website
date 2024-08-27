import { Metadata } from 'next'

import { PageAnimation } from '@/components'

import { ContactContent } from './parts'

export const metadata: Metadata = {
  title: `Contact | ${process.env.WEBSITE_NAME}`,
  description: '',
}

export default async function Contact() {
  return (
    <PageAnimation className='my-auto'>
      <ContactContent />
    </PageAnimation>
  )
}
