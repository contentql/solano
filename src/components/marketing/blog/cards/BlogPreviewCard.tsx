import { Blog, Media } from '@payload-types'
import Link from 'next/link'

const BlogPreviewCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className='col-span-1 row-span-1 ' key={blog?.id}>
      <div className='group relative h-full w-full text-white  transition-all duration-500 hover:scale-105 '>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={(blog?.blog_image as Media)?.url || ''}
          alt='blog'
          height={1000}
          className='h-[100%] w-[100%] rounded-3xl object-cover  brightness-50 group-hover:brightness-100'
        />
        <Link
          href={`/blog/${blog?.slug}`}
          className='absolute bottom-4 left-4 line-clamp-2 text-xl font-extrabold'>
          {blog?.title}
        </Link>
      </div>
    </div>
  )
}

export default BlogPreviewCard
