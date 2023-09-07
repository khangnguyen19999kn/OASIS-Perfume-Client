import Head from 'next/head'
import React from 'react'

import CardBlogV2 from '@/components/CardBlogV2/CardBlogV2'
import type { TypeBlogList } from '@/constant/types/typeBlog'

export default function Blogs({ blogs }: TypeBlogList) {
  const showCardBeauty = () => {
    return blogs.map(item => {
      return (
        <CardBlogV2
          key={item.id}
          time={item.date}
          author={item.author}
          tittle={item.title}
          image={item.imgPosing}
          slug={item.slug}
        />
      )
    })
  }
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Fragrance Blog" />
      </Head>
      <div className="mb-5 flex flex-row mobile:ml-2 tablet:ml-10">
        <h3 className="mr-1 font-medium">Trang Chủ</h3>
        <h3>/</h3>
        <h3 className="ml-1 font-medium">Blogs</h3>
      </div>
      <div className=" m-[auto] mt-[50px] w-full">
        <div className="flex justify-around mobile:flex-col mobile:items-center ">
          {showCardBeauty()}
        </div>
      </div>
    </>
  )
}
