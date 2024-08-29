import { BackButton } from '@/components'

import { projects } from '@/data/projects'

import { ProjectContent } from './parts'

type ProjectProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params: { slug } }: ProjectProps) {
  if (!projects[slug]?.project)
    return { title: `404 | ${process.env.WEBSITE_NAME}` }

  return {
    title: `${projects[slug]?.project} | ${process.env.WEBSITE_NAME}`,
  }
}

export default function Project({ params: { slug } }: ProjectProps) {
  return (
    <section className='flex flex-col gap-40 py-40'>
      <BackButton link='/portfolio' />
      <ProjectContent slug={slug} />
    </section>
  )
}
