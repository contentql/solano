'use client'

import { Blog, Tag } from '@payload-types'

import { BentoGridDemo } from '@/components/marketing/blog/BentoGridDemo'
import { trpc } from '@/trpc/client'

import BlogHeroSection from './BlogHeroSection'
import { TagsMarquee } from './TagsMarquee'

interface TagsDetails extends Tag {
  count: number
}

const AllBlogs = ({ blogsData }: { blogsData: Blog[] }) => {
  const { data: blogs } = trpc.blog.getAllBlogs.useQuery(undefined, {
    initialData: blogsData,
  })

  const { data: tagsDetails } = trpc.tag.getAllTags.useQuery()

  return (
    <div className='overflow-hidden'>
      <BlogHeroSection blogsData={blogsData} />
      <TagsMarquee tagsDetails={tagsDetails as TagsDetails[]} />
      <BentoGridDemo blogsData={blogs} />
    </div>
  )
}

export default AllBlogs
