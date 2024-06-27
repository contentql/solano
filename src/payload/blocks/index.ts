import { AuthorHero, Author_Hero_Block } from './Author'
import { BlogHero, Blog_Hero_Block } from './Blog'
import {
  Hero,
  Hero_Block,
  LatestBlogs,
  Latest_Blogs_Block,
  PopularBlogs,
  Popular_Blogs_Block,
  Tags,
  Tags_Block,
  TopPicks,
  Top_Picks_Block,
} from './Home'
import { TagsHero, Tags_Hero_Block } from './Tag'

export const blocksJSX = {
  Hero,
  PopularBlogs,
  TopPicks,
  LatestBlogs,
  Tags,
  TagsHero,
  BlogHero,
  AuthorHero,
}

export type SlugType = keyof typeof blocksJSX

export const blocks = [
  Hero_Block,
  Popular_Blogs_Block,
  Top_Picks_Block,
  Latest_Blogs_Block,
  Tags_Block,
  Tags_Hero_Block,
  Blog_Hero_Block,
  Author_Hero_Block,
]
