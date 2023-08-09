import { Loader } from '@mantine/core'
import React from 'react'

import type { NewProcProps } from '@/constant/types/typeProduct'

import CardItemVer2 from '../CardItemVer2/CardItemVer2'

export default function NomalList({ posts }: NewProcProps) {
  const showItem = () => {
    if (posts) {
      const grpItem = posts.map((element: any, index: number) => (
        <li className="List-item mobile:w-[100%] " key={index}>
          <CardItemVer2 posts={element} />
        </li>
      ))
      return grpItem
    }
    return <Loader height={400} />
  }

  return (
    <div>
      <ul className="flex list-none flex-wrap gap-1 mobile:grid mobile:grid-cols-2 mobile:p-1 laptop:gap-[3.5rem] ">
        {showItem()}
      </ul>
    </div>
  )
}
