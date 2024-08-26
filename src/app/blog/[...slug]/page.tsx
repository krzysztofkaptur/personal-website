import { posts } from '#site/content'
import { siteConfig } from '@/config/site'
import '@/styles/mdx.css'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { BackButton, MDXContent, PageAnimation, Text } from '@/components'

interface PostPageProps {
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

  const ogSearchParams = new URLSearchParams()
  ogSearchParams.set('title', post.title)

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
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
      <BackButton link='/blog' />
      <article className='flex flex-col gap-10 py-10'>
        <header>
          <Text variant='h1'>{post.title}</Text>
        </header>
        <div className='flex flex-col gap-4'>
          <MDXContent code={post.body} />
        </div>
      </article>
    </PageAnimation>
  )
}
