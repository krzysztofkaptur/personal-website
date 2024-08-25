import { ReactNode } from 'react'

import { FieldValues, UseFormReturn } from '@/lib/forms'

import { Form as FormUI } from '@/ui'

type Props = {
  children: ReactNode
  className?: string
  onSubmit: () => void
}

export const Form = (
  props: Props & UseFormReturn<FieldValues, any, undefined>
) => {
  const { children, className, onSubmit, ...rest } = props

  return (
    <FormUI {...rest}>
      <form className={className} onSubmit={onSubmit}>
        {children}
      </form>
    </FormUI>
  )
}
