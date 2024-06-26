import { Blog, Media, User } from '@payload-types'
import Link from 'next/link'

import { formatDate } from '@/utils/dateFormatter'

const RecentPostCard = ({ blog }: { blog: Blog }) => {
  const readingTime = require('reading-time')

  return (
    <div className='flex flex-col space-y-4 rounded-3xl border-none bg-[#1e2846] p-4 text-white'>
      <div className='flex gap-x-4 text-gray-400'>
        <p>{readingTime(blog?.description_html)?.text}</p>
        <span>-</span>
        <p>{formatDate(blog?.createdAt)}</p>
      </div>
      <Link
        href={`/blog/${blog?.slug}`}
        className='line-clamp-1 text-3xl font-bold transition-all duration-300 hover:underline'>
        {blog?.title}
      </Link>
      {/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element */}
      <img
        className='mx-auto h-[20rem] w-full rounded-2xl'
        src={(blog?.blog_image as Media)?.url || ''}
        width={400}
        height={400}
        alt='blog'
      />
      <p className='line-clamp-3 text-lg font-normal text-gray-300'>
        {blog?.sub_title}
      </p>

      <div className='flex flex-wrap space-x-5 '>
        {blog?.author?.map((author, index) => (
          <div className='group flex items-center space-x-2' key={index}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className='h-5 w-5 rounded-full'
              src={(author?.value as User)?.imageUrl || ''}
              alt='user'
            />
            <p className='group-hover:text-indigo-600'>
              {(author?.value as User)?.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentPostCard
