import type { TypeBlog } from './typeBlog'

export type TypeOfData = {
  id: string
  name: string
  img: [string]
  type: string
  brand: string
  concentration: string
  priceFor10ml: string
  priceForFull: string
  averageRate: number
  introduce: string
}

export type NewProcProps = {
  posts: TypeOfData[]
}
export type NewProBlogProps = {
  blog: TypeBlog[]
  posts: TypeOfData[]
}
export type DetailPro = {
  posts: TypeOfData
}
export type Icon = {
  className: string
}
