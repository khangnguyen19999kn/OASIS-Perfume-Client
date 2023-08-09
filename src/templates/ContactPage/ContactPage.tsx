import { Button, Modal, Text, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React from 'react'

import SocialNetworkGroup from '@/components/SocialNetworkGroup'
import IconLocation from '@/constant/icons/IconLocation'

import { useStyles } from './contactPageStyle'

export default function Contact() {
  const { classes } = useStyles()
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <div className="mt-[175px] flex justify-center mobile:mt-10 mobile:pb-4">
      <Modal opened={opened} onClose={close} size="auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.89577762861416!2d106.61151806033426!3d10.86229967081045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a142a7c55f1%3A0xc01bb8708d4f540a!2zNTEvMSBUaMOhaSBCw6xuaCwg4bqlcCBUcnVuZyBDaMOhbmggMSwgSMOzYyBNw7RuLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1685343841860!5m2!1svi!2s"
          width="700"
          height="500"
          style={{ border: 0 }}
          loading="lazy"
          className={classes.iframe}
        ></iframe>
      </Modal>
      <div className="w-1/2 mobile:w-full">
        <div className="flex items-center">
          <b className="h-[2px] flex-1 bg-slate-400" />
          <h1 className="mx-2 text-center font-bold">
            CHÚNG TÔI LUÔN LẮNG NGHE VÀ HỖ TRỢ MỌI LÚC MỌI NƠI{' '}
          </h1>
          <b className="h-[2px] flex-1 bg-slate-400" />
        </div>
        <h2 className="mt-5 text-center text-[30px] font-medium">
          GỬI YÊU CẦU TỚI CHÚNG TÔI
        </h2>
        <div className="mt-[100px] flex justify-around mobile:mt-[50px] mobile:flex-col-reverse">
          <div>
            <div className="flex justify-center">
              <Text className={classes.mainTextContent}>Hotline:</Text>
              <Text className="ml-1 text-[30px]">0334146207</Text>
            </div>
            <h3 className="text-[18px] mobile:text-center">
              Follow các mạng xã hội của chúng tôi
            </h3>
            <div className="mt-5 flex justify-center">
              <SocialNetworkGroup color="#000000" />
            </div>
          </div>
          <div>
            <Text className={classes.mainTextContent}>Giờ Làm Việc</Text>
            <Text className="text-[18px] mobile:text-center">
              Thứ 2 - Chủ Nhật: 8:00 - 22:00
            </Text>
            <div className="mt-5 flex justify-center">
              <Tooltip label="Ấn vào để xem bản đồ">
                <Button onClick={open} className={classes.buttonLocation}>
                  <IconLocation className={classes.iconLocation} />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
