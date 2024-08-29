import { Post } from '#site/content'

import { BackButton, MDXContent, Text } from '@/components'

type BlogPostContentProps = {
  post: Post
}

export const BlogPostContent = ({ post }: BlogPostContentProps) => {
  return (
    <section className='py-32'>
      <BackButton link='/blog' />
      <article className='flex flex-col gap-10 py-10'>
        <header>
          <Text variant='h1'>{post.title}</Text>
        </header>
        <div className='flex flex-col gap-4'>
          <MDXContent code={post.body} />
        </div>
      </article>
    </section>
  )
}
