'use client'

import Link from 'next/link'

import { Github, Linkedin, Mail } from '@/lib/icons'
import { cn } from '@/lib/utils'

import { Button } from '@/components'

import { useToast } from '@/ui'

const iconSize = 30

const socials = [
  {
    url: 'https://github.com/krzysztofkaptur',
    icon: <Github size={iconSize} />,
  },
  {
    url: 'https://www.linkedin.com/in/krzysztof-kaptur-491645183/',
    icon: <Linkedin size={iconSize} />,
  },
]

type SocialsProps = {
  className?: string
}

export const Socials = ({ className }: SocialsProps) => {
  const { toast } = useToast()
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(process.env.NEXT_PUBLIC_EMAIL!)

      toast({
        title: 'Email copied to clipboard',
        variant: 'destructive',
      })
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <aside className={cn('flex max-h-[calc(100vh-92px)]', className)}>
      <div className='flex flex-col gap-6 self-center'>
        <Button variant='clean'>
          <Mail onClick={copyEmail} size={iconSize} />
        </Button>
        {socials?.map((social) => (
          <Button key={social.url} variant='clean'>
            <Link
              key={social.url}
              href={social.url}
              target='_blank'
              className='text-white'
            >
              {social.icon}
            </Link>
          </Button>
        ))}
      </div>
    </aside>
  )
}
