'use client'

import { motion } from '@/lib/animation'
import { cn } from '@/lib/utils'

type AnimatedTextProps = {
  text: string
  className?: string
}

export const AnimatedText = ({ text, className }: AnimatedTextProps) => {
  return text.split('').map((letter, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 4,
        delay: index * 0.2,
      }}
      className={cn('flex justify-center', className)}
    >
      {letter}
    </motion.span>
  ))
}
