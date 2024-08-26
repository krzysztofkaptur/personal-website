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

export const NavLink = ({ link, index, className }: NavLinkProps) => {
  const pathname = usePathname()

  return (
    <Link
      href={link.url}
      className={cn(
        `relative whitespace-nowrap rounded text-4xl uppercase`,
        pathname === link.url && 'text-6xl text-red-500 line-through',
        className
      )}
    >
      {link.label}
    </Link>
  )
}
