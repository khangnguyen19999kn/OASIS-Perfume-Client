import { createStyles, Select } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import NomalList from '@/components/NormalList/NomalList'
import ProductGridVirtualList from '@/components/ProductGridVirtualList/ProductGridVirtualList'
import { API_PRODUCT_CONCENTRATION } from '@/constant/API/API'
import type { TypeOfData } from '@/constant/types/typeProduct'

const useStyles = createStyles(() => ({
  selectLeft: {
    marginRight: '10px'
  }
}))
export type StorePageProps = {
  posts: TypeOfData[]
  brands: Brand[]
  type: string
}
type Brand = {
  name: string
}
type ValueSelect = {
  brand?: string
  concentration?: string
  type?: string
}
export default function StorePage({ posts, brands, type }: StorePageProps) {
  const { classes } = useStyles()
  const { width } = useViewportSize()
  const brandList = brands.map(element => ({
    value: element.name,
    label: element.name
  }))
  brandList.unshift({ value: '', label: 'Tất cả' })

  const [list, setList] = useState<TypeOfData[]>(posts)
  const [value, setValue] = useState<ValueSelect>({
    brand: '',
    concentration: '',
    type
  })

  const handleChangeSelect = async (brand?: string, concentration?: string) => {
    try {
      const response = await axios.get(
        `${API_PRODUCT_CONCENTRATION}${concentration || ''}&brand=${
          brand || ''
        }&type=${value.type || ''}`
      )
      setList(response.data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  useEffect(() => {
    handleChangeSelect(value.brand, value.concentration)
  }, [value])
  const checkSizeAndDeviceToRender = () => {
    if (width >= 768 && list.length > 5) {
      return <ProductGridVirtualList posts={list} />
    }
    if (list.length === 0) {
      return <h1 className="text-center">Không có sản phẩm nào</h1>
    }
    return <NomalList posts={list} />
  }
  const checkTitle = () => {
    switch (type) {
      case 'men':
        return 'Men Collection'
      case 'women':
        return 'Women Collection'
      case 'unisex':
        return 'Unisex Collection'
      default:
        return 'Cửa Hàng'
    }
  }

  return (
    <>
      <div>
        <div className="mb-5 flex flex-row mobile:ml-2 tablet:ml-10">
          <h3 className="mr-1 font-medium">Trang Chủ</h3>
          <h3>/</h3>
          <h3 className="ml-1 font-medium">{checkTitle()}</h3>
        </div>
        <div className="flex flex-row tablet:ml-10">
          <Select
            placeholder="Chọn thương hiệu"
            style={{ marginRight: '10px' }}
            className={classes.selectLeft}
            onChange={e => {
              setValue({ ...value, brand: e ?? '' })
            }}
            data={brandList}
          />
          <Select
            placeholder="Chọn nồng độ"
            onChange={e => {
              setValue({ ...value, concentration: e ?? '' })
            }}
            data={[
              { value: '', label: 'Tất cả' },
              { value: 'EDP', label: 'EDP' },
              { value: 'EDT', label: 'EDT' },
              { value: 'Extrait', label: 'Extrait' }
            ]}
          />
        </div>
        <div className="content-list-new-pro ">
          <div className={`mt-2 py-5 ${list.length <= 5 ? 'block' : ''}`}>
            {checkSizeAndDeviceToRender()}
          </div>
        </div>
      </div>
    </>
  )
}
