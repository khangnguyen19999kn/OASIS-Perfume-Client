import { Avatar, Badge } from 'antd'
import Link from 'next/link'
import React, { useContext } from 'react'

import IconShoppingCart from '@/constant/icons/IconShoppinCart'
import { CartContext } from '@/Provider/CartProvider'

import { useStyles } from './ShoppingCartStyle'

export default function ShoppingCart() {
  const { classes, cx } = useStyles()
  const context = useContext(CartContext)
  return (
    <Link href="/cart" className="flex">
      <Badge count={context?.totalItemInCart}>
        <Avatar
          shape="square"
          style={{
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            background: 'none'
          }}
        >
          <IconShoppingCart className={cx('h-[20px] w-[20px]', classes.icon)} />
        </Avatar>
      </Badge>
    </Link>
  )
}
