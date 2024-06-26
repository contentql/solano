import AllBlogs from '@/components/marketing/blog/AllBlogs'
import { serverClient } from '@/trpc/serverClient'

const page = async () => {
  const blogsData = await serverClient.blog.getAllBlogs()

  return (
    <div>
      <AllBlogs blogsData={blogsData} />
    </div>
  )
}
export default page
