import DOMPurify from 'dompurify'
import React, { useEffect, useRef } from 'react'

import type { TypeBlogDetail } from '@/constant/types/typeBlog'

export default function BeautyBlogPage({ blog }: TypeBlogDetail) {
  const { title, content } = blog
  const contentRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (contentRef.current) {
      const sanitizedHTML = DOMPurify.sanitize(content)
      contentRef.current.innerHTML = sanitizedHTML
    }
  }, [content])
  return (
    <div className="mt-[150px] flex justify-center mobile:mt-[50px]">
      <div className="w-1/2 p-6 mobile:w-full">
        <h3 className="cursor-pointer text-[#9bcdc8]">Blog</h3>
        <h1 className="mt-5 text-[36px] font-semibold">{title}</h1>
        <b className="mt-5 block h-[3px] w-[30px] bg-slate-400" />
        <div className="mb-[100px] mt-[50px]" ref={contentRef} />
      </div>
    </div>
  )
}
