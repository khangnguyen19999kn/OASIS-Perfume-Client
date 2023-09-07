export type TypeBlog = {
  id: string
  title: string
  content: string
  author: string
  date: Date
  imgPosing: string
  slug: string
}
export type TypeBlogDetail = {
  blog: TypeBlog
}
export type TypeBlogList = {
  blogs: TypeBlog[]
}
