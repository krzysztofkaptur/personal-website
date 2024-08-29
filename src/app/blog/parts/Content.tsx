import { Post } from '#site/content'
import Link from 'next/link'

import { formatDate } from '@/lib/utils'

import { Badge, Text } from '@/components'

type BlogContentProps = {
  posts: Post[]
}

export const BlogContent = ({ posts }: BlogContentProps) => {
  return (
    <section className='py-32'>
      <div className='flex flex-col gap-10 py-10'>
        <header className='flex-1 space-y-4'>
          <Text variant='h1' className='uppercase text-primary'>
            Blog
          </Text>
          <Text>My thoughts on tech</Text>
        </header>
        {posts?.length > 0 ? (
          <section className='flex flex-col gap-8'>
            {posts.map((post) => {
              const { slug, title, description, tags, date } = post
              return (
                <article key={slug} className='flex flex-1 flex-col gap-2'>
                  <header>
                    <Text variant='h4'>
                      <Link href={slug}>{title}</Link>
                    </Text>
                    <span className='text-xs text-muted-foreground'>
                      {formatDate(date)}
                    </span>
                  </header>
                  <Text>{description}</Text>
                  <footer className='flex flex-wrap gap-2'>
                    {tags?.map((tag) => (
                      <Badge key={tag} text={tag} variant='secondary' />
                    ))}
                  </footer>
                </article>
              )
            })}
          </section>
        ) : (
          <p>Nothing to see here yet</p>
        )}
      </div>
    </section>
  )
}
