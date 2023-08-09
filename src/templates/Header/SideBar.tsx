import { Text } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

import Contact from '@/components/Contact'
import SocialNetworkGroup from '@/components/SocialNetworkGroup'
import IconX from '@/constant/icons/IconX'
import Logo from '@/public/assets/imageGlobal/Logo.png'

interface SideBarProps {
  isOpen: boolean
  onClose: () => void
}

export default function SideBar({ isOpen, onClose }: SideBarProps) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'close'}  `}>
      <div className="flex flex-col p-4">
        <div className="flex justify-end">
          <button className="btn-close " onClick={onClose}>
            <IconX className="h-[30px] w-[30px] hover:fill-[#33c1ec]" />
          </button>
        </div>

        <div className="mt-2 flex justify-center">
          <Image src={Logo} width={200} alt="Logo sideBar" />
        </div>
        <div className="mt-6 ">
          <Text className="font-medium text-[#b1b0b0]">
            Welcome to Oasis Fragrance, where emotions soar and exquisite scents
            await. Discover the essence of elegance and leave your unique mark
            with confidence
          </Text>
        </div>
        <div className="mt-6">
          <Text className="text-xl font-semibold">Contact Us</Text>
          <Contact />
        </div>
        <div className="mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.89577762861416!2d106.61151806033426!3d10.86229967081045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a142a7c55f1%3A0xc01bb8708d4f540a!2zNTEvMSBUaMOhaSBCw6xuaCwg4bqlcCBUcnVuZyBDaMOhbmggMSwgSMOzYyBNw7RuLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1685343841860!5m2!1svi!2s"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
        <div className="mt-8">
          <Text className="text-xl font-semibold">Follow Us</Text>
          <div className="mt-2">
            <SocialNetworkGroup />
          </div>
        </div>
      </div>
    </div>
  )
}
