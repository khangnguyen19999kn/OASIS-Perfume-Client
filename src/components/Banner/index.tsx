import { Text } from '@mantine/core'
import React from 'react'

import ButtonBlob from '../ButtonBlob'
import { useStyles } from './style'

interface BannerProps {
  title: string
  textContent: string
  background: string
  url: string
}

export default function Banner({
  title,
  textContent,
  background,
  url
}: BannerProps) {
  const { classes } = useStyles({ backgroundUrl: background })
  return (
    <div className={'h-[380px] w-[45%] pl-[20px] pt-[20px] mobile:w-full'}>
      <div className={classes.wrapperBanner}>
        <div className={classes.grpContent}>
          <Text className={classes.title}>{title}</Text>
          <Text className={classes.textContent}>{textContent}</Text>
          <ButtonBlob url={url} text="See More" />
        </div>
        <div className={classes.banner}></div>
      </div>
    </div>
  )
}
