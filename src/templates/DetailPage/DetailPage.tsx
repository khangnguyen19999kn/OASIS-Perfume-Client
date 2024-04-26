import { DownOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Select, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Collapse, Rate } from 'antd'
import React, { useState } from 'react'

import ButtonAddToCart from '@/components/ButtonAddToCart'
import CarouselThump from '@/components/CarouselThump'
import Comment from '@/components/Comment/Comment'
import type { DetailPro, TypeOfReview } from '@/constant/types/typeProduct'
import { customToLocaleString } from '@/utils/fommatPrice'

import ModalWriteReview from './ModalWriteReview/ModalWriteReview'
import { useStyles } from './style'

const { Panel } = Collapse

export default function DetailPage({ posts }: DetailPro) {
  const { classes, cx } = useStyles()
  const [active, setActive] = useState(0)

  const [price, setPrice] = useState(
    `${customToLocaleString(posts.priceFor10ml)}đ- ${customToLocaleString(
      posts.priceForFull
    )}đ`
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
  const detailProduct = [
    {
      id: 1,
      title: 'Các nốt hương & Mô tả',
      content: posts.note
    },
    {
      id: 2,
      title: 'Thành phần',
      content: posts.ingredient
    },
    {
      id: 3,
      title: 'Phương thức vận chuyển và đổi trả',
      content:
        '<div>-Hỗ trợ vận chuyển miễn phí</div><br/><div>-Miễn phí đổi trả trong vòng 30 ngày nếu có lỗi của nhà sản xuất</div>'
    }
  ]
  const showColapse = () => {
    return detailProduct.map(item => {
      return (
        <Panel
          className={cx('border-t-transparent font-medium', classes.titlePanel)}
          header={<Text className={classes.titlePanel}>{item.title}</Text>}
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
      setPrice(`${customToLocaleString(posts.priceFor10ml)}đ`)
    } else {
      setSize('100ml')
      setPrice(`${customToLocaleString(posts.priceForFull)}đ`)
    }
  }
  const showComment = () => {
    const reviewShow = posts.reviews.filter(item => item.isVerify === true)
    if (reviewShow.length === 0) {
      return <div className="text-center font-semibold">Chưa có review nào</div>
    }
    return reviewShow.map((item: TypeOfReview, index) => {
      return (
        <div key={index}>
          <Comment
            rate={item.rate}
            comment={item.comment}
            name={item.name}
            createdAt={item.createdAt}
          />
        </div>
      )
    })
  }
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <div className="min-h-screen">
      <ModalWriteReview
        opened={opened}
        onClose={close}
        title="WRITE A REVIEW"
        id={posts.id}
      />
      <div className="flex items-center justify-center">
        <div className="flex w-[50%] justify-around p-5 mobile:w-full mobile:flex-col mobile:justify-normal laptop:w-[80%]">
          <div className="w-[40%] mobile:w-full">
            <CarouselThump
              img={posts.img}
              active={active}
              setActive={setActive}
            />
          </div>
          <div className="flex w-[50%] justify-center mobile:w-full ">
            <div className="w-[90%] py-5 mobile:my-5 mobile:w-full mobile:py-0">
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
                    'mr-3 w-1/6 mobile:w-2/6 laptop:w-[25%]',
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
                Miễn ship trên tất cả các đơn hàng
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
      <div className="flex h-full min-h-[500px] w-full justify-center mobile:justify-normal">
        <div className={classes.reviewSide}>
          <h1>RATINGS & REVIEWS</h1>
          <div className="mb-10 flex justify-between p-3 mobile:flex-col mobile:p-0">
            <div className="flex items-center mobile:mb-2">
              <Rate
                value={posts.averageRate}
                disabled={true}
                className="mb-3"
              />
              <Text className="ml-5">Số REVIEWS</Text>
            </div>
            <div>
              <Button
                className={classes.buttonWriteReview}
                onClick={() => {
                  open()
                }}
              >
                <Text>WRITE A REVIEW</Text>
              </Button>
            </div>
          </div>
          {showComment()}
        </div>
      </div>
    </div>
  )
}
