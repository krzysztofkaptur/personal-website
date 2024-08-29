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
          height={200}
        />
      </figure>
      <div className='flex flex-col gap-8'>
        <header className='flex items-center justify-between'>
          <Text variant='h2'>Description</Text>
          <Button href={project.url}>Visit</Button>
        </header>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          officiis distinctio, sequi nisi quidem amet necessitatibus ipsum et
          eius porro dolores iure hic labore dicta neque. Ex blanditiis modi
          minus doloribus tenetur accusantium fuga. Eos, est velit. Rerum
          tempora unde porro, voluptatibus harum ea ducimus architecto
          reprehenderit aliquid laboriosam a neque. Debitis, omnis nemo ducimus
          quasi ea facilis labore qui molestias adipisci dolor vitae id odit
          eius cumque optio soluta fuga esse aliquam error iusto nulla. Eos
          excepturi quisquam totam vero temporibus architecto dolore odit
          ducimus enim quam, assumenda illo, harum officiis suscipit cum amet
          aliquid adipisci? Beatae, tempora. Aperiam!
        </Text>
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
