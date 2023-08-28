import Head from 'next/head'
import React from 'react'

import { API_BRANDS, API_PRODUCT } from '@/constant/API/API'
import type { StorePageProps } from '@/templates/StorePage/StorePage'
import StorePage from '@/templates/StorePage/StorePage'

export default function store({ posts, brands }: StorePageProps) {
  return (
    <>
      <Head>
        <title>Store </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Fragrance" />
      </Head>
      <div className="laptop:mx-auto laptop:w-[87%] desktop:mx-auto desktop:w-[75%] bigDesktop:w-[55%]">
        <StorePage posts={posts} brands={brands} type={''} />
      </div>
    </>
  )
}
export async function getStaticProps() {
  const [myDataRes, otherDataRes] = await Promise.all([
    fetch(API_PRODUCT),
    fetch(API_BRANDS)
  ])

  const [posts, brands] = await Promise.all([
    myDataRes.json(),
    otherDataRes.json()
  ])

  return {
    props: { posts, brands },
    revalidate: 60
  }
}
