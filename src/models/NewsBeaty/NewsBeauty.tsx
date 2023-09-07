import { Text } from '@mantine/core'
import React from 'react'

import ButtonExploreMore from '@/components/ButtonExploreMore/ButtonExploreMore'
import CardBlogV2 from '@/components/CardBlogV2/CardBlogV2'
import type { TypeBlogList } from '@/constant/types/typeBlog'

import { useStyles } from './style'

export default function NewsBeauty({ blogs }: TypeBlogList) {
  const { classes } = useStyles()
  const showCardBeauty = () => {
    if (blogs && blogs.length > 0) {
      return blogs.map(item => (
        <CardBlogV2
          key={item.id}
          time={item.date}
          author={item.author}
          tittle={item.title}
          image={item.imgPosing}
          slug={item.slug}
        />
      ))
    }
    // Handle the case where blogs is undefined or empty
    return <p>No blogs to display</p>
  }

  return (
    <div>
      <div className={classes.grptittle}>
        <Text className={classes.tittle}>News & Articles</Text>
        <Text className={classes.textContentTittle}>OUR BEAUTY BLOG</Text>
      </div>
      <div className=" m-[auto] mt-[30px] w-[60%] mobile:w-full tablet:w-full laptop:w-full">
        <div className="flex justify-around mobile:flex-col mobile:items-center ">
          {showCardBeauty()}
        </div>
        <div className="mt-[50px] ">
          <ButtonExploreMore url="/blog" />
        </div>
      </div>
    </div>
  )
}
