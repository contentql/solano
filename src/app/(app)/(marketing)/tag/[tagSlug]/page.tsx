import { Blog } from '@payload-types'

import { BentoGridDemo } from '@/components/marketing/blog/BentoGridDemo'
import TagDetails from '@/components/marketing/tag/TagDetails'
import { serverClient } from '@/trpc/serverClient'

interface PageProps {
  params: {
    tagSlug: string
  }
}

const page = async ({ params }: PageProps) => {
  try {
    const blogs = await serverClient.tag.getBlogs({ tagSlug: params?.tagSlug })

    return (
      <div>
        <TagDetails data={blogs?.tagData.at(0) as any} />

        {blogs?.blogsData?.length !== 0 ? (
          <BentoGridDemo blogsData={blogs?.blogsData as Blog[]} />
        ) : (
          <p>Tag is not present</p>
        )}
      </div>
    )
  } catch (error) {
    console.error('Error fetching blogs:', error)
  }
}

export default page
