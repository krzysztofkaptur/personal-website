import '@/styles/globals.css'
import { Montserrat, Open_Sans } from 'next/font/google'

import { cn } from '@/lib/utils'

import { TransitionProvider } from '@/providers'

import { Nav, Socials } from '@/components'

import { Toaster } from '@/ui'

const primaryFont = Montserrat({
  subsets: ['latin'],
  variable: '--font-primary',
})
const secondaryFont = Open_Sans({
  subsets: ['latin'],
  variable: '--font-secondary',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark'>
      <body
        className={cn(
          primaryFont.variable,
          secondaryFont.variable,
          'overflow-x-hidden'
        )}
      >
        <TransitionProvider>
          <div className='max-w-7xl'>
            <Nav />
          </div>
          <div className='mx-auto flex w-full max-w-7xl flex-1 gap-20 px-4'>
            <Socials />
            <main className='w-full'>
              <section className='flex min-h-[calc(100vh-92px)] flex-col'>
                {children}
              </section>
            </main>
          </div>
        </TransitionProvider>
        <Toaster />
      </body>
    </html>
  )
}
