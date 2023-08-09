import React, { useContext } from 'react'

import IconShoppingCart from '@/constant/icons/IconShoppinCart'
import type { CartType } from '@/constant/types/typeCart'
import { CartContext } from '@/Provider/CartProvider'

export default function ButtonAddToCart({
  size,
  price,
  quantity,
  id,
  name,
  img
}: CartType) {
  const context = useContext(CartContext)
  const itemAdd = {
    size,
    price,
    quantity,
    id,
    name,
    img
  }

  return (
    <div>
      <button
        onClick={() => {
          context?.addToCart(itemAdd)
        }}
        className="btn-flip"
        data-front="Add To Cart"
      >
        <div className="btn-flip_back flex h-full w-full items-center justify-center">
          <IconShoppingCart className="h-[20px] w-[20px]" />
        </div>
      </button>
    </div>
  )
}
