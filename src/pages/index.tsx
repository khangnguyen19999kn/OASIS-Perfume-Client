import Head from 'next/head'
import React from 'react'

import { API_BLOG, API_FAVORITE_PRODUCT } from '@/constant/API/API'
import type { NewProBlogProps } from '@/constant/types/typeProduct'
import HomePage from '@/templates/HomePage'

export default function index({ posts, blogs }: NewProBlogProps) {
  return (
    <>
      <Head>
        <title>Fragrance Oasis</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Fragrance" />
      </Head>
      <div>
        <HomePage posts={posts} blogs={blogs} />
      </div>
    </>
  )
}
export async function getStaticProps() {
  const [myDataRes, otherDataRes] = await Promise.all([
    fetch(API_FAVORITE_PRODUCT),
    fetch(API_BLOG)
  ])

  const [posts, blogs] = await Promise.all([
    myDataRes.json(),
    otherDataRes.json()
  ])

  return {
    props: { posts, blogs },
    revalidate: 60
  }
}
