import { posts } from '#site/content'
import type { Metadata } from 'next'
import Link from 'next/link'

import { formatDate, sortPosts } from '@/lib/utils'

import { Badge, PageAnimation, Text } from '@/components'

export const metadata: Metadata = {
  title: `Blog | ${process.env.WEBSITE_NAME}`,
  description: '',
}
interface BlogPageProps {
  searchParams: {
    page?: string
  }
}

export default async function Blog({ searchParams }: BlogPageProps) {
  const publishedPosts = sortPosts(posts.filter((post) => post.published))

  return (
    <PageAnimation>
      <div className='flex flex-col gap-10 py-10'>
        <header className='flex-1 space-y-4'>
          <Text variant='h1'>Blog</Text>
          <Text>My thoughts on tech</Text>
        </header>
        {publishedPosts?.length > 0 ? (
          <section className='flex flex-col gap-8'>
            {publishedPosts.map((post) => {
              const { slug, title, description, tags, date, author } = post
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
    </PageAnimation>
  )
}
