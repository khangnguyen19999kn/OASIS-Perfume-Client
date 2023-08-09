import React from 'react'

import CardItem from '@/components/CardItem/CardItem'
import CardItemVer2 from '@/components/CardItemVer2/CardItemVer2'
import type { DetailPro } from '@/constant/types/typeProduct'

export default function test({ posts }: DetailPro) {
  return (
    <div className="flex h-[500px] items-center justify-around">
      <CardItemVer2 posts={posts} />
      <CardItem posts={posts} />
    </div>
  )
}

export async function getStaticProps() {
  const myDataRes = await fetch(
    'https://server-oasis-perfume.onrender.com/api/v1/product/6461b2c694c2824b6d0b5100'
  )
  const posts = await myDataRes.json()

  return {
    props: { posts },
    revalidate: 60
  }
}
