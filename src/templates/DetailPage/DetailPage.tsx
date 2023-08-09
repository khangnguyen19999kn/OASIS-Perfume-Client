import { DownOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Select, Text } from '@mantine/core'
import { Collapse, Rate } from 'antd'
import React, { useState } from 'react'

import ButtonAddToCart from '@/components/ButtonAddToCart'
import CarouselThump from '@/components/CarouselThump'
import Comment from '@/components/Comment/Comment'
import { commentMock } from '@/constant/mock/CommentMock'
import { detailProductMock } from '@/constant/mock/DetailProductMock'
import type { TCommnentProps } from '@/constant/types/typeComment'
import type { DetailPro } from '@/constant/types/typeProduct'

import { useStyles } from './style'

const { Panel } = Collapse

export default function DetailPage({ posts }: DetailPro) {
  const { classes, cx } = useStyles()
  const [active, setActive] = useState(0)
  const [price, setPrice] = useState(
    `${posts.priceFor10ml.toLocaleString()}đ- ${posts.priceForFull.toLocaleString()}đ`
  )
  const [size, setSize] = useState('')
  const [quantity, setQuantity] = useState('1')
  const showQuantity = () => {
    const result = []
    for (let i = 1; i <= 5; i += 1) {
      result.push({ value: i.toString(), label: i.toString() })
    }
    return result
  }
  const dataQuantity = showQuantity()
  const showColapse = () => {
    return detailProductMock.map(item => {
      return (
        <Panel
          className={cx('border-t-transparent font-medium', classes.titlePanel)}
          header={<Text className={classes.titlePanel}>{item.tittle}</Text>}
          key={item.id}
          style={{ borderRadius: 0 }}
        >
          <div
            className={classes.contentCollapseSide}
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
          <hr className="mt-5" />
        </Panel>
      )
    })
  }

  const chosseSize = (sizeCheck: string) => {
    if (sizeCheck === '10ml') {
      setSize('10ml')
      setPrice(`${posts.priceFor10ml.toLocaleString()}đ`)
    } else {
      setSize('100ml')
      setPrice(`${posts.priceForFull.toLocaleString()}đ`)
    }
  }
  const showComment = () => {
    return commentMock.map(
      ({ title, content, date, rate, author, from }: TCommnentProps) => {
        return (
          <Comment
            key={title}
            title={title}
            content={content}
            date={date}
            rate={rate}
            author={author}
            from={from}
          />
        )
      }
    )
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex w-[50%] justify-around p-5 mobile:w-full mobile:flex-col mobile:justify-normal">
          <div className="w-[40%] mobile:w-full">
            <CarouselThump
              img={posts.img}
              active={active}
              setActive={setActive}
            />
          </div>
          <div className="flex w-[50%] justify-center mobile:w-full ">
            <div className="w-[90%] py-5 mobile:my-5 mobile:w-full mobile:py-0">
              {' '}
              <h1 className={classes.tittleNameDetail}>{posts.name}</h1>
              <Rate
                allowHalf={true}
                value={posts.averageRate}
                disabled={true}
                className="mb-3"
              />
              <Text className={classes.priceDetail}>{price}</Text>
              <div className="mb-[40px] flex w-full justify-end">
                <Select
                  defaultValue="100ml"
                  data={[
                    { value: '10ml', label: '10ml' },
                    { value: '100ml', label: '100ml' }
                  ]}
                  onChange={e => {
                    chosseSize(e ?? '')
                  }}
                  className={cx(
                    'mr-3 w-1/6 mobile:w-2/6',
                    classes.rootSelectSize
                  )}
                />
                <Select
                  classNames={{
                    root: classes.rootSelectQuantity
                  }}
                  defaultValue="1"
                  data={dataQuantity}
                  className="w-1/6 mobile:w-2/6"
                  onChange={e => {
                    setQuantity(e ?? '')
                  }}
                />
              </div>
              <div className="mb-3">
                <ButtonAddToCart
                  size={size}
                  quantity={parseInt(quantity, 10)}
                  price={price.length > 50 ? posts.priceFor10ml : price}
                  id={posts.id}
                  name={posts.name}
                  img={posts.img[0]}
                />
              </div>
              <Text className="mb-5 text-center ">
                Complimentary shipping on all orders
              </Text>
              <Collapse
                ghost={true}
                expandIcon={({ isActive }) => (
                  <div>
                    <RightOutlined
                      style={{
                        display: isActive ? 'none' : 'block'
                      }}
                      className={classes.iconHeaderCollapse}
                    />
                    <DownOutlined
                      style={{
                        display: isActive ? 'block' : 'none'
                      }}
                      className={classes.iconHeaderCollapse}
                    />
                  </div>
                )}
                className="rounded-none border-none bg-transparent"
                expandIconPosition="end"
              >
                {showColapse()}
              </Collapse>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-10" />
      <div className="flex w-full justify-center mobile:justify-normal">
        <div className={classes.reviewSide}>
          <h1>RATINGS & REVIEWS</h1>
          <div className="mb-10 flex justify-between p-3 mobile:flex-col mobile:p-0">
            <div className="flex items-center mobile:mb-2">
              <Rate value={5} disabled={true} className="mb-3" />
              <Text className="ml-5">Số REVIEWS</Text>
            </div>
            <div>
              <Button className={classes.buttonWriteReview}>
                <Text>WRITE A REVIEW</Text>
              </Button>
            </div>
          </div>
          {showComment()}
        </div>
      </div>
    </>
  )
}
