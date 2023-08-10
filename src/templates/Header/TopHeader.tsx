import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import ShoppingCart from '@/components/ShoppingCart/ShoppingCart'
import IconSearch from '@/constant/icons/IconSearch'

import SearchAuto from './SearchAuto'
import { useStyles } from './style/FullNavStyle'
import SwitchToggle from './SwitchToggle'

export default function TopHeader() {
  const { classes, cx } = useStyles()
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <div className="top-header">
      <Modal opened={opened} onClose={close} title="Tìm kiếm">
        <div className="Search-Top-side">
          <SearchAuto />
        </div>
      </Modal>
      <div className="mr-5 flex items-center justify-center">
        <ShoppingCart />
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
