import { Blog } from '@payload-types'

import { BlogPost } from './BlogPost'
import { HorizontalScrollCarousel } from './HorizontalScrollCarousel'

const BlogPostView = ({
  blog,
  blogsData,
  decodedSlug,
}: {
  blog: Blog
  blogsData: Blog[]
  decodedSlug: string
}) => {
  return (
    <div className='px-2'>
      <BlogPost slug={decodedSlug} data={blog as Blog} />
      <h1 className='mt-20 text-center text-4xl font-extrabold text-white'>
        Popular Blogs
      </h1>
      <p className='mt-2 text-center text-gray-500'>scroll to see more blogs</p>
      <HorizontalScrollCarousel blogsData={blogsData} />
    </div>
  )
}

export default BlogPostView
