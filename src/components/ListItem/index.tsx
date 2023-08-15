import React from 'react'

import type { NewProcProps, TypeOfData } from '@/constant/types/typeProduct'

import CardItemVer2 from '../CardItemVer2/CardItemVer2'

export default function ListItem({ posts }: NewProcProps) {
  const showItem = () => {
    return posts.map((item: TypeOfData) => {
      return (
        <div key={item.id} className="mt-2">
          <CardItemVer2 posts={item} />
        </div>
      )
    })
  }

  return (
    <div className="flex w-full flex-wrap justify-center gap-2 mobile:flex-col mobile:items-center">
      {showItem()}
    </div>
  )
}
