import deepMerge from 'deepmerge'
import { type Field } from 'payload'
import { blocks } from '../blocks/index'

type BlocksField = (overrides?: Partial<Field>) => Field

export const blocksField: BlocksField = overrides => {
  return deepMerge<Field, Partial<Field>>(
    {
      name: 'blocks',
      type: 'blocks',
      blocks,
    },
    overrides || {},
  )
}
