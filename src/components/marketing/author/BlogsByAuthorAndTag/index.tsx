import { BlogListItems } from '../../blog/BlogListItems'
import AuthorTagDetails from '../AuthorTagDetails'
import { Blog, Tag, User } from '@payload-types'

const BlogsByAuthorAndTagView = ({
  tagDetails,
  authorDetails,
  blogsData,
}: {
  authorDetails: User
  tagDetails: Tag
  blogsData: Blog[]
}) => {
  return (
    <>
      <AuthorTagDetails
        tagDetails={tagDetails as Tag}
        authorDetails={authorDetails as User}
      />
      <BlogListItems blogsData={blogsData} />
    </>
  )
}

export default BlogsByAuthorAndTagView
