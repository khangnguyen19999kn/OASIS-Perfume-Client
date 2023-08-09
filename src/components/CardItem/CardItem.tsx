import { HoverCard, Image, Loader, Text } from '@mantine/core'
import { Rate } from 'antd'
import Link from 'next/link'
import React from 'react'

import type { TypeOfData } from '@/constant/types/typeProduct'

import ButtonAddToCart from '../ButtonAddToCart'
import { useStyles } from './styleCardItem'

export default function CardItem({ posts }: { posts: TypeOfData }) {
  const { classes } = useStyles()
  if (!posts) {
    return (
      <div>
        <Loader size={48} />
      </div>
    )
  }
  const { id, name, priceFor10ml, priceForFull, img, averageRate } = posts
  // const truncatedText = useTruncateString(name, 20)
  const fluctuatingPrice = (priceFirst: string, priceLast: string) => {
    const result = `${priceFirst}đ - ${priceLast}đ`
    return result
  }
  return (
    <Link href={`product/${id}`}>
      <div className={classes.cardItem}>
        <div className={classes.wrapImgItem}>
          <div className={classes.ImgItem}>
            <Image src={img[0]} width={250} height={250} alt="productItem" />
          </div>
        </div>
        <div className="mt-2">
          <Rate allowHalf defaultValue={averageRate} disabled />
        </div>
        <HoverCard closeDelay={1000} width={200} position="top" shadow="md">
          <HoverCard.Target>
            <Text className={classes.nameProduct}>{name}</Text>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">{name}</Text>
          </HoverCard.Dropdown>
        </HoverCard>

        <Text className={classes.priceProduct}>
          {fluctuatingPrice(priceFor10ml, priceForFull)}
        </Text>
        <div className="mt-2 w-full px-2">
          <ButtonAddToCart
            size=""
            price={posts.priceFor10ml}
            quantity={1}
            id={posts.id}
            name={posts.name}
            img={posts.img[0]}
          />
        </div>
      </div>
    </Link>
  )
}
