import { posts } from '#site/content'
import type { Metadata } from 'next'

import { sortPosts } from '@/lib/utils'

import { PageAnimation } from '@/components'

import { BlogContent } from './parts'

export const metadata: Metadata = {
  title: `Blog | ${process.env.WEBSITE_NAME}`,
  description: '',
}

type BlogPageProps = {
  searchParams: {
    page?: string
  }
}

export default async function Blog({}: BlogPageProps) {
  const publishedPosts = sortPosts(posts.filter((post) => post.published))

  return (
    <PageAnimation>
      <BlogContent posts={publishedPosts} />
    </PageAnimation>
  )
}
