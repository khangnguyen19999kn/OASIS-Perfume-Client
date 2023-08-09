import type { GetStaticPaths } from 'next'
import React from 'react'

import type { TypeBlogDetail } from '@/constant/types/typeBlog'
import BeautyBlogPage from '@/templates/BeautyBlogPage/BeautyBlogPage'

export default function index({ blog }: TypeBlogDetail) {
  return (
    <div>
      <BeautyBlogPage blog={blog} />
    </div>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `https://server-oasis-perfume.onrender.com/api/v1/blog/`
  )

  const posts = await res.json()

  const paths = posts.map((post: any) => ({
    params: { slug: post.slug.toString() }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const { slug } = params
  const res = await fetch(
    `https://server-oasis-perfume.onrender.com/api/v1/blog/slug/${slug}`
  )
  const blog = await res.json()
  return {
    props: {
      blog
    },
    revalidate: 1
  }
}
