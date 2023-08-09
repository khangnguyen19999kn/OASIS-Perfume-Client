import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Avatar, Badge } from 'antd'
import Link from 'next/link'
import React, { useContext } from 'react'

import IconSearch from '@/constant/icons/IconSearch'
import IconShoppingCart from '@/constant/icons/IconShoppinCart'
import { CartContext } from '@/Provider/CartProvider'

import SearchAuto from './SearchAuto'
import { useStyles } from './style/FullNavStyle'
import SwitchToggle from './SwitchToggle'

export default function TopHeader() {
  const { classes, cx } = useStyles()
  const context = useContext(CartContext)

  const [opened, { open, close }] = useDisclosure(false)

  return (
    <div className="top-header">
      <Modal opened={opened} onClose={close} title="Tìm kiếm">
        <div className="Search-Top-side">
          <SearchAuto />
        </div>
      </Modal>
      <div className="mr-5 flex items-center justify-center">
        <Link href="/cart">
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
              <IconShoppingCart
                className={cx('h-[20px] w-[20px]', classes.icon)}
              />
            </Avatar>
          </Badge>
        </Link>
      </div>

      <div className="dark-theme-btn mr-5">
        <SwitchToggle />
      </div>
      <div onMouseDown={open}>
        <IconSearch
          className={cx('h-[20px] w-[20px] hover:fill-[#33c1ec]', classes.icon)}
        />
      </div>
    </div>
  )
}
