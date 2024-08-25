'use client'

import Link from 'next/link'
import { PropsWithChildren } from 'react'

import { Button as ButtonUI, Spinner } from '@/ui'
import type { ButtonProps } from '@/ui'

type ButtonPropsType = PropsWithChildren<
  ButtonProps & { isLoading?: boolean; isRound?: boolean; href?: string }
>

export const Button = ({
  isLoading = false,
  children,
  type = 'button',
  href,
  ...props
}: ButtonPropsType) => {
  return (
    <>
      {href ? (
        <Link href={href}>
          <ButtonUI type={type} disabled={isLoading} {...props}>
            {!isLoading ? children : <Spinner />}
          </ButtonUI>
        </Link>
      ) : (
        <ButtonUI type={type} disabled={isLoading} {...props}>
          {!isLoading ? children : <Spinner />}
        </ButtonUI>
      )}
    </>
  )
}
