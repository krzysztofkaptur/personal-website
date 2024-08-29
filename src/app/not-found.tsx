import { Metadata } from 'next'

import { Button, Text } from '@/components'

export const metadata: Metadata = {
  title: `404 | ${process.env.WEBSITE_NAME}`,
  description: '',
}

export default function NotFound() {
  return (
    <section className='flex flex-1 items-center justify-center'>
      <div className='flex flex-col items-center gap-4'>
        <Text variant='h2' className='text-8xl'>
          404
        </Text>
        <Text className='font-semibold uppercase'>Page not found</Text>
        <Button href='/'>Go home</Button>
      </div>
    </section>
  )
}
