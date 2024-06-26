import { Blog, Media } from '@payload-types'
import Link from 'next/link'

import { cn } from '@/utils/cn'
import { formatDate } from '@/utils/dateFormatter'

const PopularBlogCard = ({ blog, index }: { blog: Blog; index: number }) => {
  const readingTime = require('reading-time')
  return (
    <div
      key={blog?.id}
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-xl',
        'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        'transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
        (index === 2 || index === 3) &&
          'row-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2',
      )}>
      <div
        className='transition-all duration-300 ease-in-out group-hover:blur-sm group-hover:filter'
        style={{
          backgroundImage: `url(${(blog?.blog_image as Media)?.url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
        }}
      />
      <div className='pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10'>
        <div className='flex  origin-left transform-gpu gap-2 text-white transition-all duration-300 ease-in-out group-hover:scale-75'>
          <div>
            <p className='text-xs text-gray-400'>
              {formatDate(blog?.createdAt)}
            </p>
          </div>
        </div>
        <h3 className='line-clamp-1 text-xl font-semibold text-neutral-700 dark:text-neutral-300'>
          {blog?.title}
        </h3>
        <p className='line-clamp-1 max-w-lg text-gray-400'>{blog?.sub_title}</p>
      </div>

      <div
        className={cn(
          'absolute -bottom-2 flex w-full translate-y-10 transform-gpu flex-row items-center justify-between p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100',
        )}>
        <div className='font-bold text-white'>
          {readingTime(blog?.description_html)?.text}
        </div>
        <Link
          href={`/blog/${blog?.slug}`}
          className='rounded-lg p-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
          View More
        </Link>
      </div>
      <div className='pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10' />
    </div>
  )
}

export default PopularBlogCard
