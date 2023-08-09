import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'

import type { CartType } from '@/constant/types/typeCart'
import { CartContext } from '@/Provider/CartProvider'

import QuantityItem from '../QuantityItem/QuantityItem'
import { useStyles } from './CartItemStyle'

export default function CartItem({ size, price, id, name, img }: CartType) {
  const { classes } = useStyles()
  const context = useContext(CartContext)
  const priceWithoutCommaAndSymbol = parseInt(price.replace(/,|đ/g, ''), 10)
  const priceTotalItem =
    priceWithoutCommaAndSymbol * context!.getQuantityItemAdd(id)
  return (
    <div>
      <div className="relative w-[100%] p-5  mobile:p-1 ">
        <div className="absolute right-5 top-3 cursor-pointer hover:text-[red] mobile:right-2 mobile:top-1">
          <button
            onClick={() => {
              context?.removeItemInCart(id, size)
            }}
          >
            X
          </button>
        </div>
        <div className="flex items-center justify-between pr-[50px] mobile:pr-0">
          <Image
            src={img}
            width={150}
            height={150}
            className={classes.imgCartItem}
            alt="img Cart item"
          />
          <div className="flex w-1/3 flex-col mobile:w-2/3">
            <Link href={`/product/${id}`}>
              <h3 className="mb-3 mobile:mb-1">{name}</h3>
            </Link>

            <h3 className="mb-3 mobile:mb-1">Size: {size}</h3>
            <h2 className="hidden mobile:block">{price} VNĐ</h2>
            <QuantityItem id={id} />
          </div>
          <h2 className="block mobile:hidden">
            {priceWithoutCommaAndSymbol.toLocaleString()}
            VNĐ
          </h2>
          <h2>
            {priceTotalItem.toLocaleString()}
            VNĐ
          </h2>
        </div>
      </div>
    </div>
  )
}
