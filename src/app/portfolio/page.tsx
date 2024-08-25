import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Portfolio | ${process.env.WEBSITE_NAME}`,
  description: '',
}

export default async function Portfolio() {
  return (
    <main>
      <section className='flex gap-8'>
        <h1>My work</h1>
      </section>
    </main>
  )
}
