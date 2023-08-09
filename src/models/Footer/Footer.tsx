import { Input } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

import ButtonBlob from '@/components/ButtonBlob'
import Contact from '@/components/Contact'
import SocialNetworkGroup from '@/components/SocialNetworkGroup'
import Logo from '@/public/assets/imageGlobal/LogoVer2.png'

import { useStyles } from './styleFooter'

export default function Footer() {
  const { classes } = useStyles()
  return (
    <div>
      <div className={classes.containerFooter}>
        <div className={classes.mainFooter}>
          <div>
            <Image
              src={Logo}
              width={100}
              height={50}
              alt="logo-contact-footer"
              className={classes.logoContact}
            />

            <Contact />
          </div>
          <div className="mt-5 mobile:hidden">
            <h1 className={classes.subscribeTittle}>Subscribe</h1>
            <Input
              classNames={{ input: classes.inputsubcribe }}
              placeholder="Your email"
            />
            <ButtonBlob url="#" text="Subscribe" />
          </div>
        </div>
      </div>
      <div className={classes.miniFooter}>
        <div className={classes.mainMiniFooter}>
          <span className={classes.tittleAuthor}>© 2023 Cosmecos Theme</span>
          <div className="w-[20%]">
            <SocialNetworkGroup />
          </div>
        </div>
      </div>
    </div>
  )
}
