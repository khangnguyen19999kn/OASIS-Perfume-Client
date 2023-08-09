import { Image, Loader, Text } from '@mantine/core'
import { Rate } from 'antd'
import Link from 'next/link'
import React from 'react'

import type { TypeOfData } from '@/constant/types/typeProduct'

import ButtonAddToCart from '../ButtonAddToCart'
import { useStyles } from './styleCardItemVer2'

export default function CardItemVer2({ posts }: { posts: TypeOfData }) {
  const { classes } = useStyles()
  if (!posts) {
    return (
      <div>
        <Loader size={48} />
      </div>
    )
  }
  const { id, name, priceFor10ml, priceForFull, img, averageRate } = posts

  const mainDescription =
    'Một chai nước hoa tinh tế và nam tính, kết hợp sự mạnh mẽ của gỗ đàn hương và đậm đà của hoa cỏ, tạo nên một hương thơm quyến rũ và cuốn hút cho phái mạnh'

  const fluctuatingPrice = (priceFirst: string, priceLast: string) => {
    const result = `${priceFirst.toLocaleString()}đ - ${priceLast.toLocaleString()}đ`
    return result
  }

  return (
    <Link href={`product/${id}`}>
      <div className={classes.container}>
        <div className={classes.wrapImage}>
          <Image src={img[0]} alt="Image item" />
        </div>
        <div className={classes.Infomation}>
          <Text className={classes.textName}>{name}</Text>
          <Text className={classes.textDescription}>{mainDescription}</Text>
          <Text className={classes.price}>
            {fluctuatingPrice(priceFor10ml, priceForFull)}
          </Text>
          <div className={classes.sidePriceRateButtonAdd}>
            <div className="mb-5 flex w-full justify-center mobile:mb-2">
              <Rate allowHalf defaultValue={averageRate} disabled />
            </div>
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
      </div>
    </Link>
  )
}
