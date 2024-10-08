import type { Post } from '#site/content'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1
    if (a.date < b.date) return 1
    return 0
  })
}

export function formatDate(dateStr: string) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const

  return new Date(dateStr).toLocaleDateString('en-US', options)
}
