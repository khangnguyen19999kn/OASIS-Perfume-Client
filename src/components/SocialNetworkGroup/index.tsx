import React from 'react'

import IconFaceBook from '@/constant/icons/IconFaceBook'
import IconInstagram from '@/constant/icons/IconInstagram'

import { useStyles } from './SocialNetworkGroupStyle'

interface SocialNetworkGroupProps {
  color?: string
  hoverColor?: string
}

export default function SocialNetworkGroup({
  color,
  hoverColor
}: SocialNetworkGroupProps) {
  const { classes } = useStyles({ color, hoverColor })
  return (
    <div className="flex">
      <div className="mr-2">
        <IconFaceBook className={classes.icon} />
      </div>
      <div className="mr-2">
        <IconInstagram className={classes.icon} />
      </div>
    </div>
  )
}
