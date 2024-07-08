import { Page } from 'payload-types'

export const blogPageData: Omit<Page, 'id' | 'createdAt' | 'updatedAt'> = {
  title: 'Blogs',
  slug: 'blog',
  isHome: false,
  _status: 'published',
  blocks: [
    {
      blockType: 'BlogHero',
      title: 'Free Blogs Posting Page for startups',
      description:
        'ContentQL is a free Blog Posting page & marketing website template.',
      button: 'Download Now',
      link: '/',
      blogs: [
        {
          relationTo: 'blogs',
          value: '',
        },
        {
          relationTo: 'blogs',
          value: '',
        },
        {
          relationTo: 'blogs',
          value: '',
        },
        {
          relationTo: 'blogs',
          value: '',
        },
      ],
    },
  ],
}
