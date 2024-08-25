import { posts } from '#site/content'
import type { Metadata } from 'next'
import Link from 'next/link'

import { sortPosts } from '@/lib/utils'

import { PageAnimation } from '@/components'

export const metadata: Metadata = {
  title: `Blog | ${process.env.WEBSITE_NAME}`,
  description: '',
}
const POSTS_PER_PAGE = 5

interface BlogPageProps {
  searchParams: {
    page?: string
  }
}

export default async function Blog({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1
  const sortedPosts = sortPosts(posts.filter((post) => post.published))

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  )

  return (
    <PageAnimation>
      <div className='container max-w-4xl py-6 lg:py-10'>
        <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
          <div className='flex-1 space-y-4'>
            <h1 className='inline-block text-4xl font-black lg:text-5xl'>
              Blog
            </h1>
            <p className='text-xl text-muted-foreground'>
              My ramblings on all things web dev.
            </p>
          </div>
        </div>
        <div className='mt-8 grid grid-cols-12 gap-3'>
          <div className='col-span-12 col-start-1 sm:col-span-8'>
            <hr />
            {displayPosts?.length > 0 ? (
              <ul className='flex flex-col'>
                {displayPosts.map((post) => {
                  const { slug, date, title, description, tags } = post
                  return (
                    <Link key={slug} href={slug}>
                      {title}
                    </Link>
                  )
                })}
              </ul>
            ) : (
              <p>Nothing to see here yet</p>
            )}
          </div>
        </div>
      </div>
    </PageAnimation>
  )
}
