import { Text } from '@mantine/core'
import React from 'react'

import IconLocation from '@/constant/icons/IconLocation'
import IconMail from '@/constant/icons/IconMail'
import IconPhone from '@/constant/icons/IconPhone'

import { useStyles } from './styleContact'

export default function Contact() {
  const { classes, cx } = useStyles()
  return (
    <div className="mt-4 flex flex-col">
      <div className={cx('flex items-center', classes.infoContact)}>
        <IconLocation
          className={cx(
            'h-[20px] w-[20px] fill-white ',
            classes.logoInfoContact
          )}
        />
        <Text
          className={cx(
            'ml-3 font-medium text-[#b1b0b0]',
            classes.infoContactTittle
          )}
        >
          51/1 Thái Bình, xã Trung Chánh, TP HCM
        </Text>
      </div>
      <div className={cx('mt-3 flex items-center', classes.infoContact)}>
        <IconMail
          className={cx(
            'h-[20px] w-[20px] fill-white ',
            classes.logoInfoContact
          )}
        />
        <Text
          className={cx(
            'ml-3 font-medium text-[#b1b0b0]',
            classes.infoContactTittle
          )}
        >
          khang.nguyen19999kn@gmail.com
        </Text>
      </div>
      <div className={cx('mt-3 flex items-center', classes.infoContact)}>
        <IconPhone
          className={cx(
            'h-[20px] w-[20px] fill-white ',
            classes.logoInfoContact
          )}
        />
        <Text
          className={cx(
            'ml-3 font-medium text-[#b1b0b0]',
            classes.infoContactTittle
          )}
        >
          +84 334146207
        </Text>
      </div>
    </div>
  )
}
