import { Blog, Tag } from '@payload-types'

import AuthorTagDetails from '@/components/marketing/author/AuthorTagDetails'
import BlogsByTag from '@/components/marketing/author/BlogsByTag'
import { serverClient } from '@/trpc/serverClient'

interface PageProps {
  params: {
    authorName: string
    tagSlug: string
  }
}

async function page({ params }: PageProps) {
  const blogs = await serverClient.tag.getBlogs({
    tagSlug: params?.tagSlug,
  })

  return (
    <>
      <AuthorTagDetails data={blogs?.tagData.at(0) as Tag} />
      <BlogsByTag blogsData={blogs?.blogsData as Blog[]} />
    </>
  )
}

export default page
