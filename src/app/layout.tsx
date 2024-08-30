import { Montserrat, Open_Sans } from 'next/font/google'

import { cn } from '@/lib/utils'

import { TransitionProvider } from '@/providers'

import { Nav, Socials } from '@/components'

import { Toaster } from '@/ui'

import '@/styles/globals.css'

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
          <Nav />
          <div className='mx-auto flex w-full max-w-6xl flex-1 gap-40 px-4'>
            <Socials className='fixed bottom-0 top-0 hidden sm:flex' />
            <div className='hidden sm:block'></div>
            <main className='w-full'>
              <section className='flex min-h-[calc(100vh-92px)] flex-col'>
                {children}
              </section>
            </main>
          </div>
        </TransitionProvider>
        <footer className='border-t border-solid border-gray-500 bg-neutral-950'>
          <div className='mx-auto max-w-6xl p-4'>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  )
}
