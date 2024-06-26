'use client'

import { Media, TagsHeroType } from '@payload-types'

import { AnimatedTagCard } from '@/components/marketing/tag/AnimatedTagCard'
import { trpc } from '@/trpc/client'

const TagsHero = (tagData: TagsHeroType) => {
  const { data: tags } = trpc.tag.getAllTags.useQuery()
  return (
    <div className='w-full  text-white'>
      <div className='flex flex-col items-center justify-center space-y-8 bg-[#26304e] pb-14 pt-40'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=''
          height={96}
          width={96}
          className='mb-4 h-24 w-24 flex-shrink-0 self-center rounded-full bg-cover bg-center '
          src={(tagData?.image as Media)?.url as string}
        />
        <h1 className='text-center text-3xl font-bold leading-none sm:text-4xl'>
          {tagData?.title}
        </h1>
        <p className='max-w-2xl px-2 text-center md:px-0'>
          {tagData?.description}
        </p>
      </div>
      <div className='relative flex flex-wrap items-center justify-center gap-x-12 gap-y-4 py-20'>
        {tags?.map((tag, index) => (
          <AnimatedTagCard key={index} title={tag?.title} href={tag?.slug!}>
            <div className='flex h-[16rem] w-[14rem] basis-full flex-col items-center justify-center p-4 tracking-tight text-slate-100/50 sm:basis-1/2 '>
              {/* eslint-disable-next-line @next/next/no-img-element  */}
              <img
                className='w-18 h-18 mb-16 rounded-full'
                src={(tag?.tagImage as Media)?.url || ''}
                alt='tag'
                loading='lazy'
                width={100}
                height={100}
              />
              <h3 className='!m-0 max-w-xs !pb-2 text-base  font-bold text-slate-100'>
                {tag?.title}
              </h3>
              <p className='pt-2'>
                {tag?.count} {tag?.count === 1 ? 'Blog' : 'Blogs'}
              </p>
            </div>
          </AnimatedTagCard>
        ))}
      </div>
    </div>
  )
}

export default TagsHero
