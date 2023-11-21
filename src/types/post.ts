export type TPost = {
  layout: string
  title: string
  pubDate: Date
  description: string
  image: {
    url: string
    alt: string
  }
  tags: string[]
}
