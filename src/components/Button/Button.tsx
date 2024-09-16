'use client'

import Link from 'next/link'
import { HTMLAttributeAnchorTarget, PropsWithChildren } from 'react'

import { ArrowRight } from '@/lib/icons'

import { Button as ButtonUI, Spinner } from '@/ui'
import type { ButtonProps } from '@/ui'

type ButtonPropsType = PropsWithChildren<
  ButtonProps & {
    isLoading?: boolean
    href?: string
    target?: HTMLAttributeAnchorTarget
  }
>

export const Button = ({
  isLoading = false,
  children,
  type = 'button',
  href,
  target,
  ...props
}: ButtonPropsType) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          target={target ?? href.includes('http') ? '_blank' : '_self'}
        >
          <ButtonContent
            isLoading={isLoading}
            type={type}
            href={href}
            {...props}
          >
            {children}
            {href.includes('http') ? <ArrowRight size={16} /> : ''}
          </ButtonContent>
        </Link>
      ) : (
        <ButtonContent isLoading={isLoading} type={type} href={href} {...props}>
          {children}
        </ButtonContent>
      )}
    </>
  )
}

const ButtonContent = ({
  type,
  disabled,
  isLoading,
  children,
  ...props
}: ButtonPropsType): JSX.Element => (
  <ButtonUI type={type} disabled={isLoading || disabled} {...props}>
    {!isLoading ? children : <Spinner />}
  </ButtonUI>
)
