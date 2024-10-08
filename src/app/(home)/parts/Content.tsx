import { Button, Text } from '@/components'

import { AnimatedText } from '.'

export const HomeContent = () => {
  return (
    <div className='flex flex-1 flex-col justify-center gap-6'>
      <header>
        <Text
          variant='h6'
          className='inline-block text-xl font-semibold uppercase'
        >
          Hello!
        </Text>
        <Text
          variant='h1'
          className='text-xl sm:text-3xl md:text-4xl lg:text-8xl'
        >
          I'm <span className='font-medium'>Chris</span>,{' '}
          <div className='flex gap-1 whitespace-nowrap font-medium'>
            <AnimatedText
              text='Front-end'
              className='bg-white p-2 text-black md:p-4'
            />
          </div>
          <span>developer</span>
        </Text>
      </header>
      <Text className='text-sm font-semibold sm:text-base md:text-xl'>
        A specialist from Poland, working on top-notch projects in variety of
        modern technologies.
      </Text>
      <div className='flex gap-4'>
        <Button href='/portfolio' variant='outline'>
          View my work
        </Button>
        <Button href='/contact'>Contact me</Button>
      </div>
    </div>
  )
}
