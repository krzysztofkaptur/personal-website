import { Post } from '#site/content'

import { formatDate } from '@/lib/utils'

import { BackButton, Badge, MDXContent, Text } from '@/components'

type BlogPostContentProps = {
  post: Post
}

export const BlogPostContent = ({ post }: BlogPostContentProps) => {
  return (
    <section className='py-32'>
      <BackButton link='/blog' />
      <article className='flex max-w-2xl flex-col gap-10 py-10'>
        <header className='flex flex-col gap-2'>
          <Text variant='h1'>{post.title}</Text>

          <div className='flex items-center gap-4'>
            {post?.category ? (
              <Badge text={`#${post?.category}`} variant='outline' />
            ) : null}
            {post?.date ? (
              <span className='text-xs text-muted-foreground'>
                {formatDate(post.date)}
              </span>
            ) : null}
          </div>
        </header>
        <div className='flex flex-col gap-4'>
          <MDXContent code={post.body} />
        </div>
      </article>
    </section>
  )
}
