import { Text } from '@mantine/core'
import { Rate } from 'antd'
import React from 'react'

import type { TCommnentProps } from '@/constant/types/typeComment'

import { useStyles } from './commentStyle'

export default function Comment({
  title,
  content,
  date,
  rate,
  author,
  from
}: TCommnentProps) {
  const { classes } = useStyles()
  return (
    <div>
      <div className="mb-5 p-4">
        <Rate
          value={rate}
          allowHalf={true}
          disabled={true}
          className={classes.rateReview}
        />
        <Text className="mb-5 font-bold">{title}</Text>
        <div className="flex justify-between mobile:flex-col">
          <Text className="w-[80%] mobile:w-full">{content}</Text>
          <div className="w-[20%] px-8 mobile:mt-5 mobile:w-full mobile:px-0 laptop:px-2">
            <div className="flex">
              <Text>Submited &nbsp;</Text>
              <Text className="font-medium">{date}</Text>
            </div>
            <div className="flex">
              <Text>By &nbsp;</Text>
              <Text className="font-medium">{author}</Text>
            </div>
            <div className="flex">
              <Text>From &nbsp;</Text>
              <Text className="font-medium">{from}</Text>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}
