import { Page } from 'payload-types'

export const authorPageData: Omit<Page, 'id' | 'createdAt' | 'updatedAt'> = {
  title: 'Authors',
  isHome: false,
  _status: 'published',
  blocks: [
    {
      blockType: 'AuthorHero',
      title: 'Discover Authors',
      description:
        'Discover the talented individuals shaping our content. Meet our authors, the creative minds bringing our blog to life.',
      image: '',
    },
  ],
}
