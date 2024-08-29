import { posts } from '#site/content'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PageAnimation } from '@/components'

import '@/styles/mdx.css'

import { BlogPostContent } from './parts'

type PostPageProps = {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/')
  const post = posts.find((post) => post.slugAsParams === slug)

  return post
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | ${process.env.WEBSITE_NAME}`,
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split('/') }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <PageAnimation>
      <BlogPostContent post={post} />
    </PageAnimation>
  )
}
