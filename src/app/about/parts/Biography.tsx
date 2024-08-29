import { Text } from '@/components'

export const AboutBiography = () => {
  return (
    <section className='flex min-h-screen flex-col justify-center gap-8'>
      <header>
        <Text variant='h2' className='uppercase text-primary'>
          About me
        </Text>
      </header>
      <Text className='text-4xl leading-relaxed'>
        Throughout my{' '}
        {new Date().getFullYear() - new Date('2017-08-17').getFullYear()} year
        Front-end journey I've worked with many different technologies, not
        shying away from new challenges and a chance to learn new things.
      </Text>
      <Text className='text-4xl leading-relaxed'>
        Feel free to reach out - I'm open for new, exciting opportunities!
      </Text>
    </section>
  )
}
