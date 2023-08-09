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

import { useTruncateString } from '@/constant/hook/useTruncateString'
import IconSearch from '@/constant/icons/IconSearch'
import type { TypeOfData } from '@/constant/types/typeProduct'

import { useStyles } from './style/SearchStyle'

interface ItemProps extends SelectItemProps {
  id: string
  name: string
  image: string
}

function AutoCompleteItem(props: ItemProps) {
  const truncatedText = useTruncateString(props.name, 20)
  return (
    <div className="mt-[10px] cursor-pointer">
      <Link className="no-underline" href={`/product/${props.id}`}>
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

export default function SearchAuto() {
  const { classes } = useStyles()
  const [value, setValue] = useState('')
  const [debounced] = useDebouncedValue(value, 200)
  const [data, setData] = useState([])
  const handleSearch = async () => {
    try {
      if (debounced.length > 0) {
        const response = await axios.get(
          `https://server-oasis-perfume.onrender.com/api/v1/product/sort/name?name=${debounced}`
        )
        const listSuggestions = response.data.map((item: TypeOfData) => {
          return {
            id: item.id,
            name: item.name,
            image: item.img[0],
            value: item.name
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
          itemComponent={item => <AutoCompleteItem {...item} />}
        />
      </div>
    </div>
  )
}
