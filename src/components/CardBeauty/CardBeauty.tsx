import { Button, Text } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

import { useStyles } from './style'

interface CardBeautyProps {
  time: Date
  author: string
  tittle: string
  image: string
  slug: string
}

export default function CardBeauty({
  time,
  author,
  tittle,
  image,
  slug
}: CardBeautyProps) {
  const dateString = new Date(time).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  const { classes } = useStyles({ image })
  return (
    <div className={classes.cardBeautyBlog}>
      <Link href={`/blog/${slug}`}>
        <div className={classes.imgCardBeautyBlog}></div>
        <div className={classes.timeAndAuthor}>
          <Text>{dateString}</Text>
          <span className="mx-1">-</span>
          <Text>{author}</Text>
        </div>
        <Text className={classes.tittleBlog}>{tittle}</Text>
        <div>
          <Button className={classes.btnReadMore}>
            <Text>Read More</Text>
          </Button>
        </div>
      </Link>
    </div>
  )
}
