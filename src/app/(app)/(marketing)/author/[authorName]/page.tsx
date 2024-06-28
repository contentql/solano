import { User } from '@payload-types'

import AuthorPostsView from '@/components/marketing/author'
import { serverClient } from '@/trpc/serverClient'

interface PageProps {
  params: {
    authorName: string
  }
  searchParams: {
    tag: string
  }
}

const Author = async ({ params, searchParams }: PageProps) => {
  try {
    const author = await serverClient.author.getAuthorByName({
      authorName: params?.authorName,
    })
    const authorTags = await serverClient.author.getAllTagsByAuthorName({
      authorName: params?.authorName,
    })
    const tag = searchParams?.tag ? searchParams?.tag : authorTags?.at(0)?.slug

    const blogs = await serverClient.author.getBlogsByAuthorNameAndTag({
      authorName: params?.authorName,
      tagSlug: tag!,
    })
    return (
      <AuthorPostsView
        author={author as User}
        blogsData={blogs?.blogs}
        totalBlogs={blogs?.totalBlogs}
        authorTags={authorTags as any}
      />
    )
  } catch (error) {
    console.error('Error fetching blogs:', error)
  }
}

export default Author
