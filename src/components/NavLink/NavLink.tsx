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
  className: string
}

export const NavLink = ({ link, className }: NavLinkProps) => {
  const pathname = usePathname()

  return (
    <Link
      href={link.url}
      className={cn(
        'relative whitespace-nowrap rounded p-1',
        pathname === link.url && 'text-red-500',
        className
      )}
    >
      {link.label}
    </Link>
  )
}
