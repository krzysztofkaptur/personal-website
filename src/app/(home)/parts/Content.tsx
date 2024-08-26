import { Button, Text } from '@/components'

export const HomeContent = () => {
  return (
    <div className='flex flex-1 flex-col justify-center gap-6'>
      <header>
        <Text
          variant='h6'
          className='text-xl font-semibold uppercase tracking-widest'
        >
          Hello!
        </Text>
        <Text
          variant='h1'
          className='text-xl sm:text-3xl md:text-4xl lg:text-8xl'
        >
          I&apos;m <span className='font-medium'>Chris</span>,{' '}
          <div className='whitespace-nowrap'>
            <span className='inline-block bg-white p-4 text-black'>
              Front-end
            </span>{' '}
            developer
          </div>
        </Text>
      </header>
      <Text className='text-sm sm:text-base md:text-lg'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
        optio veniam enim vero, sunt maxime, sapiente at perferendis sint quidem
        iste ipsum culpa nobis omnis.
      </Text>
      <div className='flex gap-4'>
        <Button href='/portfolio'>View my work</Button>
        <Button href='/contact' variant='outline'>
          Contact me
        </Button>
      </div>
    </div>
  )
}
