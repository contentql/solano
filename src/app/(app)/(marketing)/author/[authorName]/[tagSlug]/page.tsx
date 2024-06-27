import { Blog, Tag, User } from '@payload-types'

import BlogsByAuthorAndTagView from '@/components/marketing/author/BlogsByAuthorAndTag'
import { serverClient } from '@/trpc/serverClient'

interface PageProps {
  params: {
    authorName: string
    tagSlug: string
  }
}

async function page({ params }: PageProps) {
  const tagData = await serverClient.tag.getTagBySlug({
    slug: params?.tagSlug,
  })

  const authorData = await serverClient.author.getAuthorByName({
    authorName: params?.authorName,
  })
  const blogsData = await serverClient.author.getBlogsByAuthorNameAndTag({
    authorName: params?.authorName,
    tagSlug: params?.tagSlug,
  })
  return (
    <BlogsByAuthorAndTagView
      tagDetails={tagData as Tag}
      authorDetails={authorData as User}
      blogsData={blogsData?.blogs as Blog[]}
    />
  )
}

export default page
