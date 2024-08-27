'use client'

import { useForm } from '@/lib/forms'

import { Button, Form, Textarea } from '@/components'

import { Input } from '@/ui'

export const ContactForm = () => {
  const handleSubmit = () => {}
  const form = useForm()

  return (
    <Form
      {...form}
      className='flex flex-1 flex-col gap-6'
      onSubmit={handleSubmit}
    >
      <Textarea />
      <Input name='email' placeholder='Your email' />
      <div className='flex gap-4'>
        <Button>Send</Button>
      </div>
    </Form>
  )
}
