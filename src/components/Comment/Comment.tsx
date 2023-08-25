import { Text } from '@mantine/core'
import { Rate } from 'antd'
import React from 'react'

import type { TypeOfReview } from '@/constant/types/typeProduct'
import { formatDate } from '@/utils/formatDate'

import { useStyles } from './commentStyle'

export default function Comment({
  rate,
  comment,
  name,
  createdAt
}: Partial<TypeOfReview>) {
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

        <div className="flex justify-between mobile:flex-col">
          <div
            className="w-[80%] mobile:w-full"
            dangerouslySetInnerHTML={{ __html: comment || '' }}
          />
          <div className="w-[20%] px-8 mobile:mt-5 mobile:w-full mobile:px-0 laptop:px-2">
            <div className="flex">
              <Text>Submited &nbsp;</Text>
              <Text className="font-medium">{formatDate(createdAt)}</Text>
            </div>
            <div className="flex">
              <Text>By &nbsp;</Text>
              <Text className="font-medium">{name}</Text>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}
