'use client'

import { useForm } from '@/lib/forms'

import { Button, Form, InputGroup, Textarea } from '@/components'

export const ContactForm = () => {
  const handleSubmit = () => {}
  const form = useForm()

  return (
    <Form {...form} onSubmit={handleSubmit}>
      <Textarea />
      <InputGroup label='Email' name='email' />
      <div className='flex gap-4'>
        <Button>Send</Button>
      </div>
    </Form>
  )
}
