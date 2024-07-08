import { Page } from 'payload-types'

export const homePageData: Omit<Page, 'id' | 'createdAt' | 'updatedAt'> = {
  title: 'Home Page',
  isHome: true,
  _status: 'published',
  blocks: [
    {
      headline: 'Bring Your',
      subHeadline: 'Dream into Reality',
      sub_title:
        'We increase revenue and maintain sustainable growth of your business through powerful website of next js',
      tag_title: 'Popular Tags',
      buttons: [
        {
          button: 'Book a Meeting',
          link: '#',
        },
      ],
      tags: [
        { relationTo: 'tags', value: '' },
        { relationTo: 'tags', value: '' },
        { relationTo: 'tags', value: '' },
        { relationTo: 'tags', value: '' },
      ],
      blockType: 'Hero',
    },
    {
      title: 'Popular Blogs',
      sub_title:
        'Discover the most influential blogs across various categories like technology, lifestyle, travel, food, fashion, and personal finance. ',
      popular_blogs: [
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
        {
          relationTo: 'blogs',
          value: '',
        },
        {
          relationTo: 'blogs',
          value: '',
        },
      ],
      blockType: 'PopularBlogs',
    },
    {
      title: 'Latest Bogs',
      latest_blogs: [
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
        {
          relationTo: 'blogs',
          value: '',
        },
      ],
      blockType: 'LatestBlogs',
    },
    {
      title: 'Top Picks',
      top_picks: [
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
      blockType: 'TopPicks',
    },

    {
      title: 'Tags',
      sub_title: 'Bridging Content with Concise Labels',
      tags: [
        {
          relationTo: 'tags',
          value: '',
        },
        {
          relationTo: 'tags',
          value: '',
        },
        {
          relationTo: 'tags',
          value: '',
        },
        {
          relationTo: 'tags',
          value: '',
        },
      ],
      blockType: 'Tags',
    },
  ],
}
