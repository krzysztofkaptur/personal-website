import NextImage from 'next/image'

import { cn } from '@/lib/utils'

type Props = {
  alt?: string
  src: string
  width: number
  height: number
  className?: string
}

export const Image = ({ src, alt = '', width, height, className }: Props) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn(className)}
    />
  )
}
