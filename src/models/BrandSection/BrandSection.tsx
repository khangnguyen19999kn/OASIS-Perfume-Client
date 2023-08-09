import React from 'react'

import IconChanel from '@/constant/icons/brandIcon/IconChanel'
import IconDior from '@/constant/icons/brandIcon/IconDior'
import IconJean from '@/constant/icons/brandIcon/IconJean'
import IconKillian from '@/constant/icons/brandIcon/IconKillian'
import IconVersace from '@/constant/icons/brandIcon/IconVersace'

import { useStyles } from './BrandSectionStyle'

export default function BrandSection() {
  const { classes } = useStyles()
  const arrIcon = [IconChanel, IconVersace, IconDior, IconJean, IconKillian]
  const renderIcon = () => {
    return arrIcon.map((Icon, index) => {
      return (
        <div key={index}>
          <Icon className={classes.logoBrandSection} />
        </div>
      )
    })
  }
  return <div className={classes.containerBrandSection}>{renderIcon()}</div>
}
