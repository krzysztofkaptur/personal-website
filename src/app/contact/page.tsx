import { Metadata } from 'next'

import { ContactForm } from './parts'

export const metadata: Metadata = {
  title: `Contact | ${process.env.WEBSITE_NAME}`,
  description: '',
}

export default async function Contact() {
  return (
    <section className='flex gap-8'>
      <div className='flex-1'>Say hello</div>
      <ContactForm />
    </section>
  )
}
