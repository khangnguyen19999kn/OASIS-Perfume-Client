import type { GetStaticPaths } from 'next'
import React from 'react'

import { API_BLOG, API_BLOG_SLUG } from '@/constant/API/API'
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
  const res = await fetch(API_BLOG)

  const posts = await res.json()

  const paths = posts.map((post: any) => ({
    params: { slug: post.slug.toString() }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const { slug } = params
  const res = await fetch(`${API_BLOG_SLUG}${slug}`)
  const blog = await res.json()
  return {
    props: {
      blog
    },
    revalidate: 1
  }
}
