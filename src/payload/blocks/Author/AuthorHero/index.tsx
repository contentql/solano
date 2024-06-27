import { AuthorHeroType, Media } from '@payload-types'

import { AnimatedTagCard } from '@/components/marketing/tag/AnimatedTagCard'
import { trpc } from '@/trpc/client'

const AuthorHero = (data: AuthorHeroType) => {
  const { data: authors } = trpc?.author?.getAllAuthorsWithCount.useQuery()
  return (
    <div className='text-white'>
      <div className='mx-auto flex flex-col items-center justify-center space-y-4 bg-[#26304e] pb-14 pt-40'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=''
          height={96}
          width={96}
          className='mb-4 h-24 w-24 flex-shrink-0 self-center rounded-full bg-cover bg-center '
          src={(data?.image as Media)?.url as string}
        />
        <h1 className='text-center text-4xl font-bold leading-none sm:text-5xl'>
          {data?.title}
        </h1>
        <p className='max-w-lg text-center'>{data?.description}</p>
      </div>
      <div className='relative flex flex-wrap items-center justify-center gap-x-12 gap-y-4 py-20'>
        {authors?.map((author, index) => (
          <AnimatedTagCard
            key={index}
            title={author?.name!}
            href={author?.name!}>
            <div className='flex h-[16rem] w-[14rem] basis-full flex-col items-center justify-center p-4 tracking-tight text-slate-100/50 sm:basis-1/2 '>
              {/* eslint-disable-next-line @next/next/no-img-element  */}
              <img
                className='w-18 h-18 mb-16 rounded-full'
                src={author?.imageUrl!}
                alt='tag'
                loading='lazy'
                width={100}
                height={100}
              />
              <h3 className='!m-0 max-w-xs !pb-2 text-base  font-bold text-slate-100'>
                {author?.name}
              </h3>
              <p className='pt-2'>
                {author?.totalDocs} {author?.totalDocs === 1 ? 'Blog' : 'Blogs'}
              </p>
            </div>
          </AnimatedTagCard>
        ))}
      </div>
    </div>
  )
}

export default AuthorHero
