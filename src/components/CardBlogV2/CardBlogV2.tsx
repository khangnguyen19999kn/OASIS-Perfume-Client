import { Button, Text } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

import { useStyles } from './CardBlogV2Style'

interface ICardBeautyProps {
  time: Date
  author: string
  tittle: string
  image: string
  slug: string
}

export default function CardBlogV2({
  time,
  author,
  tittle,
  image,
  slug
}: ICardBeautyProps) {
  const dateString = new Date(time).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  const { classes } = useStyles({ image })
  return (
    <Link href={`/blog/${slug}`} className={classes.cardBeautyBlog}>
      <div className={classes.imgCardBeautyBlog}>
        <div className={classes.content}>
          <div className={classes.wrapperContent}>
            <div className={classes.wrappertittleBlog}>
              <Text className={classes.tittleBlog}>{tittle}</Text>
              <div className="flex w-full justify-center">
                <div className={classes.lineUnderTitle}></div>
              </div>
            </div>
            <div className="absolute bottom-1 right-2 flex w-full justify-end text-gray-300">
              <Text>{dateString}</Text>
              <span className="mx-1">-</span>
              <Text>{author}</Text>
            </div>
            <div className={classes.wrapperBtnReadMore}>
              <Button className={classes.btnReadMore}>
                <Text>Read More</Text>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
