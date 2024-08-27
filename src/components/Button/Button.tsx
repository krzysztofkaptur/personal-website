'use client'

import Link from 'next/link'
import { PropsWithChildren, useCallback } from 'react'

import { motion, useAnimation } from '@/lib/animation'

import { Button as ButtonUI, Spinner } from '@/ui'
import type { ButtonProps } from '@/ui'

type ButtonPropsType = PropsWithChildren<
  ButtonProps & {
    isLoading?: boolean
    isRound?: boolean
    href?: string
  }
>

export const Button = ({
  isLoading = false,
  children,
  type = 'button',
  href,
  ...props
}: ButtonPropsType) => {
  const controls = useAnimation()

  return (
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
  )
}
