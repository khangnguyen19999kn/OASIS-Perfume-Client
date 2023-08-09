import { Text } from '@mantine/core'
import React from 'react'

import ButtonExploreMore from '@/components/ButtonExploreMore/ButtonExploreMore'
import ListItem from '@/components/ListItem'
import type { NewProcProps } from '@/constant/types/typeProduct'

import { useStyles } from './style'

export default function BestSellsProduct({ posts }: NewProcProps) {
  const { classes } = useStyles()
  return (
    <div>
      <div className={classes.grptittle}>
        <Text className={classes.tittle}>Best product</Text>
        <Text className={classes.textContentTittle}>BEST SELLERS PRODUCT</Text>
      </div>
      <div className=" m-[auto] mt-[30px] w-[60%] mobile:w-[52%] ">
        <ListItem posts={posts} />
        <div className="mt-[30px] ">
          <ButtonExploreMore url="/store" />
        </div>
      </div>
    </div>
  )
}
