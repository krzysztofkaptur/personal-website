import { BackButton } from '@/components'

import { projects } from '@/data/projects'

import { SideProjectContent } from './parts'

type SideProjectProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params: { slug } }: SideProjectProps) {
  if (!projects[slug]?.project)
    return { title: `404 | ${process.env.WEBSITE_NAME}` }

  return {
    title: `${projects[slug]?.project} | ${process.env.WEBSITE_NAME}`,
  }
}

export default function Project({ params: { slug } }: SideProjectProps) {
  return (
    <section className='flex flex-col items-start gap-20 py-40 md:gap-40'>
      <BackButton link='/side-projects' />
      <SideProjectContent slug={slug} />
    </section>
  )
}
