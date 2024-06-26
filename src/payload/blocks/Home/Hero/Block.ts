import { Block } from 'payload/types'

export const Hero_Block: Block = {
  slug: 'Hero',
  interfaceName: 'HeroType',
  labels: {
    singular: 'Hero Block',
    plural: 'Hero Blocks',
  },
  fields: [
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      required: true,
    },
    {
      name: 'subHeadline',
      type: 'text',
      label: 'Sub-headline',
      required: true,
    },
    {
      name: 'sub_title',
      type: 'text',
      label: 'Sub Title',
      required: true,
    },
    {
      name: 'buttons',
      label: 'Buttons',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'button',
          label: 'Button Label',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'tag_title',
      type: 'text',
      label: 'Tags Title',
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: ['tags'],
      hasMany: true,
    },
  ],
}
