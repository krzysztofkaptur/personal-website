'use client'

import Link from 'next/link'
import { PropsWithChildren, useCallback } from 'react'

import { motion, useAnimation } from '@/lib/animation'

import { Button as ButtonUI, Spinner } from '@/ui'
import type { ButtonProps } from '@/ui'

const getRandomTransformOrigin = () => {
  const value = (16 + 40 * Math.random()) / 100
  const value2 = (15 + 36 * Math.random()) / 100
  return {
    originX: value,
    originY: value2,
  }
}

const getRandomDelay = () => -(Math.random() * 0.7 + 0.05)

const randomDuration = () => Math.random() * 0.07 + 0.23

const variants = {
  start: (i: number) => ({
    rotate: i % 2 === 0 ? [-1, 1.3, 0] : [1, -1.4, 0],
    transition: {
      delay: getRandomDelay(),
      repeat: Infinity,
      duration: randomDuration(),
    },
  }),
  reset: {
    rotate: 0,
  },
}

type ButtonPropsType = PropsWithChildren<
  ButtonProps & {
    isLoading?: boolean
    isRound?: boolean
    href?: string
    animate?: boolean
  }
>

export const Button = ({
  isLoading = false,
  children,
  type = 'button',
  animate = false,
  href,
  ...props
}: ButtonPropsType) => {
  const controls = useAnimation()

  const ButtonContent = useCallback(
    () => (
      <>
        {href ? (
          <Link href={href}>
            <ButtonUI
              type={type}
              disabled={isLoading}
              onMouseEnter={() => controls.start('start')}
              onMouseLeave={() => controls.stop()}
              {...props}
            >
              {!isLoading ? children : <Spinner />}
            </ButtonUI>
          </Link>
        ) : (
          <ButtonUI
            type={type}
            disabled={isLoading}
            onMouseEnter={() => controls.start('start')}
            onMouseLeave={() => controls.stop()}
            {...props}
          >
            {!isLoading ? children : <Spinner />}
          </ButtonUI>
        )}
      </>
    ),
    []
  )

  return animate ? (
    <motion.div
      variants={variants}
      animate={controls}
      style={{
        ...getRandomTransformOrigin(),
      }}
    >
      <ButtonContent />
    </motion.div>
  ) : (
    <ButtonContent />
  )
}
