import { Text } from '@/components'

export const AboutBiography = () => {
  return (
    <section className='flex h-screen gap-8'>
      <div className='flex flex-1 flex-col gap-6'>
        <header>
          <Text variant='h2'>Biography</Text>
        </header>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          optio veniam enim vero, sunt maxime, sapiente at perferendis sint
          quidem iste ipsum culpa nobis omnis? Aperiam optio odit eius in natus
          sit impedit, tempore aspernatur unde enim ab magnam deleniti incidunt,
          minima dolor, vel dicta. Quis quasi consectetur earum totam.
        </p>
      </div>
      <div className='flex-1'>SVG</div>
    </section>
  )
}
