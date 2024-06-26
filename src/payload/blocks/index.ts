// This is just to consolidate all the existing blocks and it's respective jsx
// Always prefer to individually import, the required block or jsx
import Hero from './Hero'
import { Hero_Block } from './Hero/Block'
import LatestBlogs from './LatestBlogs'
import { Latest_Blogs_Block } from './LatestBlogs/block'
import PopularBlogs from './PopularBlogs'
import { Popular_Blogs_Block } from './PopularBlogs/block'
import Tags from './Tags'
import { Tags_Block } from './Tags/block'
import TagsHero from './TagsHero'
import { Tags_Hero_Block } from './TagsHero/block'
import TopPicks from './TopPicks'
import { Top_Picks_Block } from './TopPicks/block'

export const blocksJSX = {
  Hero,
  PopularBlogs,
  TopPicks,
  LatestBlogs,
  Tags,
  TagsHero,
}

export type SlugType = keyof typeof blocksJSX

export const blocks = [
  Hero_Block,
  Popular_Blogs_Block,
  Top_Picks_Block,
  Latest_Blogs_Block,
  Tags_Block,
  Tags_Hero_Block,
]
