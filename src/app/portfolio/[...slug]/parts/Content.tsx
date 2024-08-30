import { notFound } from 'next/navigation'

import { Badge, Button, Image, Text } from '@/components'

import { projects } from '@/data/projects'

type ProjectContentProps = {
  slug: string
}

export const ProjectContent = ({ slug }: ProjectContentProps) => {
  const project = projects[slug[0] as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <article className='flex flex-col gap-20'>
      <header className='flex flex-col gap-6 text-center'>
        <Text className='font-medium uppercase'>{project.category}</Text>
        <Text variant='h1' className='font-semibold'>
          {project.project}
        </Text>
      </header>
      <figure>
        <Image
          src={project.image}
          alt={project.project}
          width={960}
          height={400}
          priority
        />
      </figure>
      <div className='flex flex-col gap-8'>
        <header className='flex items-center justify-between'>
          {/* <Text variant='h3'>Description</Text> */}
          <div></div>
          <Button href={project.url} target='_blank'>
            Visit
          </Button>
        </header>
        {/* <Text>{project.description}</Text> */}
      </div>
      <div className='flex flex-col justify-between gap-8 border-t border-solid border-white py-4 md:flex-row'>
        <div className='flex flex-1 flex-col gap-2'>
          <Text variant='h6'>Team</Text>
          <Text>{project.company}</Text>
        </div>
        <div className='flex flex-1 flex-col gap-2'>
          <Text variant='h6'>Role</Text>
          <Text>{project.role}</Text>
        </div>
        <div className='flex-2 flex flex-col gap-2'>
          <Text variant='h6'>Technology</Text>
          <div className='flex flex-wrap gap-2'>
            {project.techStack.map((tech) => (
              <Badge key={tech} text={tech} variant='outline' />
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
