import { Blog, PopularBlogsTypes } from '@payload-types'

import PopularBlogCard from '@/components/marketing/blog/cards/PopularBlogCard'

const PopularBlogs = (popularBlogs: PopularBlogsTypes) => {
  return (
    <section className='container px-2 py-20 text-white md:px-20'>
      <div role='main' className='flex flex-col items-center justify-center'>
        <h1 className='text-center text-4xl font-semibold leading-9 text-gray-50'>
          {popularBlogs?.title}
        </h1>
        <p className='mt-4 w-11/12 text-center text-base leading-normal text-white md:w-10/12 lg:w-1/2'>
          {popularBlogs?.sub_title}
        </p>
      </div>
      <div className='mt-10 grid w-full auto-rows-[22rem] grid-cols-1 gap-4 md:mt-20 md:grid-cols-2 lg:grid-cols-4 '>
        {popularBlogs?.popular_blogs?.map((blog, idx) => (
          <PopularBlogCard key={idx} index={idx} blog={blog?.value as Blog} />
        ))}
      </div>
    </section>
  )
}

export default PopularBlogs
