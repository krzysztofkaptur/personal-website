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
}

export const NavLink = ({ link }: NavLinkProps) => {
  const pathname = usePathname()

  return (
    <Link
      href={link.url}
      className={cn(
        'whitespace-nowrap rounded p-1',
        pathname === link.url ? 'bg-black text-white' : ''
      )}
    >
      {link.label}
    </Link>
  )
}
