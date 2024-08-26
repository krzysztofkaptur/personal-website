import { Metadata } from 'next'
import Link from 'next/link'

import { Text } from '@/components'

export const metadata: Metadata = {
  title: `404 | ${process.env.WEBSITE_NAME}`,
  description: '',
}

export default function NotFound() {
  return (
    <section className='flex flex-1 items-center justify-center'>
      <div className='flex flex-col gap-4'>
        <Text>You came to the wrong place</Text>
        <Link href='/'>Go home</Link>
      </div>
    </section>
  )
}
