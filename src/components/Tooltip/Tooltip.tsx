import { PropsWithChildren } from 'react'

import {
  Button,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip as UiTooltip,
} from '@/ui'

type TooltipProps = PropsWithChildren<{
  tip: string
}>

export const Tooltip = ({ tip, children }: TooltipProps) => {
  return (
    <TooltipProvider delayDuration={100}>
      <UiTooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{tip}</p>
        </TooltipContent>
      </UiTooltip>
    </TooltipProvider>
  )
}
