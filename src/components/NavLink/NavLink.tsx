'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

type Link = {
  url: string
  label: string
}

type NavLinkProps = {
  link: Link
  index: number
  className?: string
}

export const NavLink = ({ link, className }: NavLinkProps) => {
  const pathname = usePathname()

  return (
    <Link
      href={link.url}
      className={cn(
        `relative whitespace-nowrap rounded text-2xl uppercase sm:text-4xl md:text-base`,
        pathname === link.url && ' text-red-500 line-through',
        className
      )}
    >
      {link.label}
    </Link>
  )
}
