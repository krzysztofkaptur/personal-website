import Link from 'next/link'

import { ArrowBigLeft } from '@/lib/icons'

type BackButtonProps = {
  link: string
}

export const BackButton = ({ link }: BackButtonProps) => {
  return (
    <Link href={link} className='flex gap-2'>
      <ArrowBigLeft />
      <span>Go back</span>
    </Link>
  )
}
