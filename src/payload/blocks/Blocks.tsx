export type AdditionalBlockProps = {
  blockIndex: number
  locale: string
}

const blockComponents = {}

const Blocks = ({ blocks, locale }: any) => {
  return (
    <>
      {blocks
        ?.filter(
          (block: any) =>
            block &&
            block.blockType &&
            blockComponents.hasOwnProperty(block.blockType),
        )
        .map((block: any, ix: number) => {
          // @ts-ignore
          const BlockComponent = blockComponents[block.blockType] ?? null
          return BlockComponent ? (
            <BlockComponent
              key={ix}
              {...block}
              blockIndex={ix}
              locale={locale}
            />
          ) : null
        })}
    </>
  )
}

export default Blocks
