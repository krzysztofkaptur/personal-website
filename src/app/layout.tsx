import '@/styles/globals.css'
import { Montserrat, Open_Sans } from 'next/font/google'

import { cn } from '@/lib/utils'

import { TransitionProvider } from '@/providers'

import { Toaster } from '@/ui'

import { Nav } from './(home)/parts'

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
    <html lang='en'>
      <body
        className={cn(
          primaryFont.variable,
          secondaryFont.variable,
          'flex h-screen flex-col bg-gradient-to-b from-blue-100 to-red-100'
        )}
      >
        <TransitionProvider>
          <Nav />
          <div className='mx-auto max-w-4xl flex-1 px-4 pt-20'>
            <main>{children}</main>
          </div>
        </TransitionProvider>
        <Toaster />
      </body>
    </html>
  )
}
