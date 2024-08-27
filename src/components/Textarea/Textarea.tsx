import { cn } from '@/lib/utils'

import { Textarea as UiTextarea } from '@/ui'

type TextareaProps = {
  className?: string
  placeholder?: string
}

export const Textarea = ({
  placeholder = 'Type your message here.',
  className,
}: TextareaProps) => {
  return (
    <UiTextarea
      placeholder={placeholder}
      className={cn(
        'resize-none focus:outline-none focus-visible:outline-none',
        className
      )}
    />
  )
}
