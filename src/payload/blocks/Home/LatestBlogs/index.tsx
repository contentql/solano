'use client'

import { Blog, LatestBlogsTypes } from '@payload-types'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'

import BlogPreviewCard from '@/components/marketing/blog/cards/BlogPreviewCard'
import RecentPostCard from '@/components/marketing/blog/cards/RecentPostCard'

function LatestBlogs(latestBlogs: LatestBlogsTypes) {
  const readingTime = require('reading-time')
  const settings = {
    autoplay: true,
    speed: 700,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  }
  return (
    <section className='container px-2 py-20 text-white md:px-20'>
      <h1 className='pb-4 text-3xl font-bold'>{latestBlogs?.title}</h1>
      <div className='grid grid-cols-1 gap-x-4 gap-y-4  md:grid-cols-2  lg:grid-cols-4'>
        <div className='col-span-1 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-2'>
          <Slider {...settings}>
            {latestBlogs?.latest_blogs?.map((blog, index) => (
              <RecentPostCard key={index} blog={blog?.value as Blog} />
            ))}
          </Slider>
        </div>

        {latestBlogs?.latest_blogs
          ?.slice(0, 4)
          ?.map((blog, index) => (
            <BlogPreviewCard key={index} blog={blog?.value as Blog} />
          ))}
      </div>
    </section>
  )
}

export default LatestBlogs
