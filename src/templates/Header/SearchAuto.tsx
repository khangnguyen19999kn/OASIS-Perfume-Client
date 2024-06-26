import type { SelectItemProps } from '@mantine/core'
import {
  ActionIcon,
  Autocomplete,
  Avatar,
  Group,
  HoverCard,
  Text
} from '@mantine/core'
import { useDebouncedValue } from '@mantine/hooks'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { API_PRODUCT_NAME } from '@/constant/API/API'
import { useTruncateString } from '@/constant/hook/useTruncateString'
import IconSearch from '@/constant/icons/IconSearch'
import type { TypeOfData } from '@/constant/types/typeProduct'

import { useStyles } from './style/SearchStyle'

interface ItemProps extends SelectItemProps {
  id: string
  name: string
  image: string
  slug: string
  handleCloseModalSearch: () => void
}

function AutoCompleteItem(props: ItemProps) {
  const truncatedText = useTruncateString(props.name, 20)
  return (
    <div className="mt-[10px] cursor-pointer">
      <Link
        className="no-underline"
        href={`/product/${props.slug}`}
        onClick={props.handleCloseModalSearch}
      >
        <Group>
          <Avatar size="xl" src={props.image} />

          <div>
            <HoverCard width={200} position="top" shadow="md">
              <HoverCard.Target>
                <Text fw={500} size="md" color="dimmed">
                  {truncatedText}
                </Text>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="sm">{props.name}</Text>
              </HoverCard.Dropdown>
            </HoverCard>
          </div>
        </Group>
      </Link>
    </div>
  )
}

export default function SearchAuto({
  handleCloseModalSearch
}: {
  handleCloseModalSearch: () => void
}) {
  const { classes } = useStyles()
  const [value, setValue] = useState('')
  const [debounced] = useDebouncedValue(value, 200)
  const [data, setData] = useState([])
  const handleSearch = async () => {
    try {
      if (debounced.length > 0) {
        const response = await axios.get(`${API_PRODUCT_NAME}${debounced}`)
        const listSuggestions = response.data.map((item: TypeOfData) => {
          return {
            id: item.id,
            name: item.name,
            image: item.img[0],
            value: item.name,
            slug: item.slug
          }
        })
        setData(listSuggestions)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }
  useEffect(() => {
    handleSearch()
  }, [debounced])

  return (
    <div>
      <div className="search-header">
        <Autocomplete
          classNames={{ dropdown: classes.dropdown }}
          placeholder="Bạn muốn tìm gì?"
          value={value}
          onChange={event => setValue(event)}
          rightSection={
            <div className="icon-search-top-header">
              <ActionIcon color="dark">
                <IconSearch className="h-[15px] w-[15px]" />
              </ActionIcon>
            </div>
          }
          limit={4}
          data={data}
          zIndex={1000}
          // eslint-disable-next-line react/no-unstable-nested-components
          itemComponent={item => (
            <AutoCompleteItem
              {...item}
              handleCloseModalSearch={handleCloseModalSearch}
            />
          )}
        />
      </div>
    </div>
  )
}
