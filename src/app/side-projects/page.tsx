import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Side projects | ${process.env.WEBSITE_NAME}`,
  description: '',
}

export default async function SideProjects() {
  return (
    <main>
      <section className='flex gap-8'>
        <h1>My side projects</h1>
      </section>
    </main>
  )
}
