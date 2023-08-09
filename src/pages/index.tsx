import Head from 'next/head'
import React from 'react'

import type { NewProBlogProps } from '@/constant/types/typeProduct'
import HomePage from '@/templates/HomePage'

export default function index({ posts, blog }: NewProBlogProps) {
  return (
    <>
      <Head>
        <title>Fragrance Oasis</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Fragrance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HomePage posts={posts} blog={blog} />
      </div>
    </>
  )
}
export async function getStaticProps() {
  const [myDataRes, otherDataRes] = await Promise.all([
    fetch('https://server-oasis-perfume.onrender.com/api/v1/product/favorite'),
    fetch('https://server-oasis-perfume.onrender.com/api/v1/blog/')
  ])

  const [posts, blog] = await Promise.all([
    myDataRes.json(),
    otherDataRes.json()
  ])

  return {
    props: { posts, blog },
    revalidate: 60
  }
}
