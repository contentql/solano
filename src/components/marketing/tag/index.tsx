import { BlogListItems } from '../blog/BlogListItems'
import { Blog } from '@payload-types'

import TagDetails from './TagDetails'

function TagBlogListView({
  tagDetails,
  blogs,
}: {
  tagDetails: any
  blogs: Blog[]
}) {
  return (
    <div>
      <TagDetails data={tagDetails} />
      <BlogListItems blogsData={blogs as Blog[]} />
    </div>
  )
}

export default TagBlogListView
