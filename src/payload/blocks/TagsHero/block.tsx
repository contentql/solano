import { Block } from 'payload/types'

export const Tags_Hero_Block: Block = {
  slug: 'TagsHero',
  // imageURL: '',
  interfaceName: 'TagsHeroType',
  labels: {
    singular: 'Tag Hero Block',
    plural: 'Tags Hero Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      admin: {
        description: 'Please enter tag title in lowercase',
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
        description: 'upload tag image',
      },
    },
  ],
}
