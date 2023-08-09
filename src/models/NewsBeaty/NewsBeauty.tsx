import { Text } from '@mantine/core'
import React from 'react'

import ButtonExploreMore from '@/components/ButtonExploreMore/ButtonExploreMore'
import CardBeauty from '@/components/CardBeauty/CardBeauty'
import type { TypeBlogList } from '@/constant/types/typeBlog'

import { useStyles } from './style'

export default function NewsBeauty({ blog }: TypeBlogList) {
  const { classes } = useStyles()
  const showCardBeauty = () => {
    return blog.map(item => {
      return (
        <CardBeauty
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
    <div>
      <div className={classes.grptittle}>
        <Text className={classes.tittle}>News & Articles</Text>
        <Text className={classes.textContentTittle}>OUR BEAUTY BLOG</Text>
      </div>
      <div className=" m-[auto] mt-[30px] w-[60%] mobile:w-full ">
        <div className="flex justify-around mobile:flex-col mobile:items-center ">
          {showCardBeauty()}
        </div>
        <div className="mt-[50px] ">
          <ButtonExploreMore url="#" />
        </div>
      </div>
    </div>
  )
}
