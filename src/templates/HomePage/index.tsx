import React from 'react'

import Banner from '@/components/Banner'
import CarouselComponet from '@/components/Carousel'
import type { NewProBlogProps } from '@/constant/types/typeProduct'
import BestSellsProduct from '@/models/BestSellsProduct'
import BrandSection from '@/models/BrandSection/BrandSection'
import NewsBeauty from '@/models/NewsBeaty/NewsBeauty'

const img1 = '../../assets/banner/home2-banner-1.jpg'
const img2 = '../../assets/banner/home2-banner-2.jpg'
export default function HomePage({ posts, blogs }: NewProBlogProps) {
  return (
    <div>
      <CarouselComponet />
      <div className="mt-[50px] flex w-full flex-wrap justify-around">
        <Banner
          title="Best price"
          textContent="Collection for men"
          background={img1}
          url="/menCollection"
        />
        <Banner
          title="New perfumes 2023"
          textContent="Collection for Women"
          background={img2}
          url="/womenCollection"
        />
      </div>
      <div className="mt-[100px]">
        <BestSellsProduct posts={posts} />
      </div>
      <div className="mt-[100px]">
        <NewsBeauty blogs={blogs} />
      </div>
      <div className="mt-[100px]">
        <BrandSection />
      </div>
    </div>
  )
}
