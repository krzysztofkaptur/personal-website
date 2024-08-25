import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Blog | ${process.env.WEBSITE_NAME}`,
  description: '',
}

export default async function Blog() {
  return (
    <section className='flex gap-8'>
      <h1>Blog</h1>
    </section>
  )
}
