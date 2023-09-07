import React from 'react'

import { API_BLOG } from '@/constant/API/API'
import type { TypeBlogList } from '@/constant/types/typeBlog'
import Blogs from '@/models/Blogs/Blogs'

export default function blog({ blogs }: TypeBlogList) {
  return (
    <div className="tablet:w-full laptop:mx-auto laptop:w-[87%] desktop:mx-auto desktop:w-[75%] bigDesktop:w-[55%]">
      <Blogs blogs={blogs} />
    </div>
  )
}
export async function getStaticProps() {
  const res = await fetch(API_BLOG)

  const blogs = await res.json()

  return {
    props: { blogs },
    revalidate: 60
  }
}
