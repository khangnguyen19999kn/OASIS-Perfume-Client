import { useViewportSize } from '@mantine/hooks'
import { useVirtualizer, useWindowVirtualizer } from '@tanstack/react-virtual'
import React, { useEffect, useRef } from 'react'

import type { NewProcProps, TypeOfData } from '@/constant/types/typeProduct'

import CardItemVer2 from '../CardItemVer2/CardItemVer2'
import { useStyles } from './ProductGridVirtualListStyle'

function ProductGridVirtualList({ posts }: NewProcProps) {
  const { classes } = useStyles()
  const chunkedArray = (array: TypeOfData[], size: number) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
      array.slice(i * size, i * size + size)
    )
  }
  const { width } = useViewportSize()
  const checkWidth = () => {
    if (width >= 1280 && width < 1920) return 4
    if (width >= 1920) return 5
    return 2
  }

  const twoDimensionalArray: TypeOfData[][] =
    chunkedArray(posts, checkWidth()) ?? []

  const parentRef = useRef<HTMLDivElement | null>(null)
  const parentOffsetRef = useRef(0)
  useEffect(() => {
    parentOffsetRef.current = parentRef.current?.offsetTop ?? 0
  }, [])

  const virtualizer = useWindowVirtualizer({
    count: twoDimensionalArray.length,
    estimateSize: () => 350,
    overscan: 4,
    scrollMargin: parentOffsetRef.current
  })

  const columnVirtualizer = useVirtualizer({
    horizontal: true,
    count: twoDimensionalArray[0]?.length ?? 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 350,
    overscan: 4
  })
  const columnItems = columnVirtualizer.getVirtualItems()

  return (
    <div ref={parentRef} style={{ overflowY: 'auto' }}>
      <div
        style={{
          height: virtualizer.getTotalSize() + 100,
          position: 'relative'
        }}
      >
        {virtualizer.getVirtualItems().map(row => {
          return (
            <div
              key={row.key}
              data-index={row.index}
              ref={virtualizer.measureElement}
              style={{
                transform: `translateY(${
                  row.start -
                  virtualizer.options.scrollMargin +
                  (row.index === 0 ? 0 : 10 * row.index)
                }px)`,
                display: 'flex'
              }}
              className={classes.listItem}
            >
              {columnItems.map(column => {
                const rowData = twoDimensionalArray[row.index]
                const cardItemData = rowData ? rowData[column.index] : undefined

                if (!cardItemData) {
                  return null
                }

                return (
                  <div
                    key={column.key}
                    style={{
                      minHeight: row.size
                    }}
                  >
                    <CardItemVer2 posts={cardItemData} />
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductGridVirtualList
