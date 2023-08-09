import { Button, Text } from '@mantine/core'
import React, { useContext } from 'react'

import { CartContext } from '@/Provider/CartProvider'

import { useStyles } from './QuantityItemStyle'

interface QuantityItemProps {
  id: string
}

export default function QuantityItem({ id }: QuantityItemProps) {
  const { classes, cx } = useStyles()

  const context = useContext(CartContext)

  return (
    <div className="flex w-[fit-content] border">
      <Button
        classNames={{
          root: cx(classes.buttonQuantity),
          label: cx(
            classes.buttonQuantityLabel,
            `${context?.getQuantityItemAdd(id) === 1 && 'text-gray-400'}`
          )
        }}
        onClick={() => {
          context?.updateQuantityItemAdd('minus', id)
        }}
      >
        -
      </Button>
      <div className="flex h-[50px] w-[50px] items-center justify-center border-x mobile:h-[20px] mobile:w-[20px]">
        <Text>{context?.getQuantityItemAdd(id)}</Text>
      </div>
      <Button
        classNames={{
          root: cx(classes.buttonQuantity),
          label: cx(
            classes.buttonQuantityLabel,
            `${context?.getQuantityItemAdd(id) === 10 && 'text-gray-400'}`
          )
        }}
        onClick={() => {
          context?.updateQuantityItemAdd('plus', id)
        }}
      >
        +
      </Button>
    </div>
  )
}
