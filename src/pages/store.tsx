import Head from 'next/head'
import React from 'react'

import type { StorePageProps } from '@/templates/StorePage/StorePage'
import StorePage from '@/templates/StorePage/StorePage'

export default function store({ posts, brands }: StorePageProps) {
  return (
    <>
      <Head>
        <title>Store </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Fragrance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="laptop:mx-auto laptop:w-[87%] desktop:mx-auto desktop:w-[75%] bigDesktop:w-[55%]">
        <StorePage posts={posts} brands={brands} type={''} />
      </div>
    </>
  )
}
export async function getStaticProps() {
  const [myDataRes, otherDataRes] = await Promise.all([
    fetch('https://server-oasis-perfume.onrender.com/api/v1/product/'),
    fetch('https://server-oasis-perfume.onrender.com/api/v1/brand/')
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
