import { DownOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Input, Text } from '@mantine/core'
import { Collapse } from 'antd'
import Link from 'next/link'
import React, { useContext } from 'react'

import CartItem from '@/components/CartItem/CartItem'
import type { CartType } from '@/constant/types/typeCart'
import { CartContext } from '@/Provider/CartProvider'

import { useStyles } from './CartPageStyle'

const { Panel } = Collapse

export default function CartPage() {
  const { classes, cx } = useStyles()

  const context = useContext(CartContext)

  const showCartItems = () => {
    return context?.listProductInLocalStorage.map((item: CartType) => {
      return (
        <div key={item.name}>
          <CartItem
            id={item.id}
            name={item.name}
            size={item.size}
            price={item.price}
            quantity={item.quantity}
            img={item.img}
          />
          <hr />
        </div>
      )
    })
  }
  return (
    <div>
      <div className="flex h-[200px] w-full items-center justify-center bg-[#f6f6f6] mobile:h-[100px]">
        <h1 className={classes.title}>Shopping Bag</h1>
        <h1 className={classes.title}>({context?.totalItemInCart})</h1>
      </div>
      <div className=" m-[auto] w-[60%] mobile:w-full">
        <div className="flex justify-between mobile:flex-col">
          {/* Cart Item  */}
          <div className="w-[70%] mobile:w-full">{showCartItems()}</div>
          <div className="w-[30%] bg-[#f6f6f6] px-3 mobile:mt-3 mobile:w-full">
            <div className={cx(classes.orderSumarySide, 'p-5 mobile:mt-2')}>
              <div className="mb-4">
                <h2 className="text-[24px] font-semibold">ORDER SUMMARY</h2>
                <div className="mt-5 flex justify-between">
                  <Text className="text-[16px]">Subtotal</Text>
                  <Text className="text-[16px] font-bold">
                    {context?.priceAllProduct.toLocaleString()}
                    VND
                  </Text>
                </div>
                <div className="mt-5 flex justify-between">
                  <Text className="text-[16px]">Discount</Text>
                  <Text className="text-[16px] font-bold">{0} VND</Text>
                </div>
                <div className="mt-5 flex justify-between">
                  <Text className="text-[16px]">Delivery</Text>
                  <Text className="text-[16px] font-bold">{0} VND</Text>
                </div>
              </div>
              <hr />
              <div className="my-4">
                <Text className="text-[24px] font-semibold">Total</Text>
                <Text className="text-[24px] font-semibold">
                  {context?.priceAllProduct.toLocaleString()}
                  VND
                </Text>
              </div>
              <hr />
              <Collapse
                ghost
                expandIcon={({ isActive }) => (
                  <div>
                    <RightOutlined
                      style={{
                        display: isActive ? 'none' : 'block'
                      }}
                      className={classes.discountTitle}
                    />
                    <DownOutlined
                      style={{
                        display: isActive ? 'block' : 'none'
                      }}
                      className={classes.discountTitle}
                    />
                  </div>
                )}
                className="rounded-none border-none bg-transparent"
                expandIconPosition="end"
              >
                <Panel
                  className={cx('border-t-transparent font-medium ')}
                  header={
                    <Text className={classes.discountTitle}>DISCOUNT CODE</Text>
                  }
                  style={{ borderRadius: 0 }}
                  key={''}
                >
                  <div className="flex justify-between ">
                    <Input className="flex-1" placeholder="Nhâp mã giảm giá" />
                    <Button className={cx(classes.button, 'ml-2')}>
                      Apply
                    </Button>
                  </div>
                </Panel>
              </Collapse>
              <hr />
              <div className="mt-5 ">
                <Link href="/checkout">
                  <Button className={cx(classes.button, 'w-full')}>
                    Check Out
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
