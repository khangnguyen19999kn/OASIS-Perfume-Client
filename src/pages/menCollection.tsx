import Head from 'next/head'
import React from 'react'

import { API_BRANDS, API_PRODUCT_MEN_COLLECTION } from '@/constant/API/API'
import type { StorePageProps } from '@/templates/StorePage/StorePage'
import StorePage from '@/templates/StorePage/StorePage'

export default function menCollection({ posts, brands }: StorePageProps) {
  return (
    <>
      <Head>
        <title>Men Collection </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Fragrance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="laptop:mx-auto laptop:w-[87%] desktop:mx-auto desktop:w-[75%] bigDesktop:w-[55%]">
        <StorePage posts={posts} brands={brands} type="men" />
      </div>
    </>
  )
}
export async function getStaticProps() {
  const [myDataRes, otherDataRes] = await Promise.all([
    fetch(API_PRODUCT_MEN_COLLECTION),
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
