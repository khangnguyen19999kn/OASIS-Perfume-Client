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
  ingredient: string
  note: string
  averageRate: number
  introduce: string
  reviews: TypeOfReview[]
}
export type TypeOfReview = {
  email: string
  comment: string
  verifyCode: string
  isVerify: boolean
  rate: number
  createdAt: Date
  name: string
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
