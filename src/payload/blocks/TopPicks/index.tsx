import { Blog, TopPicksTypes } from '@payload-types'

import AnimatedBlogCard from '@/components/marketing/blog/cards/AnimatedBlogCard'

const TopPicks = (TopPicks: TopPicksTypes) => {
  return (
    <section className='container px-2 py-20 text-white md:px-20'>
      <h1 className='pb-4 text-4xl font-semibold leading-9 text-gray-50'>
        {TopPicks?.title}
      </h1>
      <div className='grid w-full grid-cols-3 gap-y-8  md:gap-8'>
        {TopPicks?.top_picks?.map((blog, index) => (
          <div
            key={index}
            className={`${(blog?.value as Blog)?.select_blog_size === '2' ? 'col-span-2' : 'col-span-1'}`}>
            <AnimatedBlogCard blogData={blog?.value as Blog} index={index} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default TopPicks
