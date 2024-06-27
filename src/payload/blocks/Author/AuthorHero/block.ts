import { Block } from 'payload/types'

export const Author_Hero_Block: Block = {
  slug: 'AuthorHero',
  // imageURL: '',
  interfaceName: 'AuthorHeroType',
  labels: {
    singular: 'Author Hero Block',
    plural: 'Author Hero Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      admin: {
        description: 'Please enter all authors title in lowercase',
      },
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'upload author image',
      },
    },
  ],
}
