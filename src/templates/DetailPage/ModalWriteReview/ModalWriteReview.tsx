import 'suneditor/dist/css/suneditor.min.css'

import { Button, Modal, Text, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { notifications } from '@mantine/notifications'
import { Rate } from 'antd'
import axios from 'axios'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import React from 'react'

import {
  API_COMMENT,
  API_COMMENT_FAIL,
  API_COMMENT_VERIFY
} from '@/constant/API/API'
import type { TModal } from '@/constant/types/typeModal'

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false
})

export default function ModalWriteReview({ opened, onClose, title }: TModal) {
  const pathname = usePathname()
  const idProduct = pathname.split('/')[2]
  const [isErrorRate, setIsErrorRate] = React.useState(false)
  const [isErrorComment, setIsErrorComment] = React.useState(false)
  const [openedModalVerify, { open, close }] = useDisclosure(false)
  const form = useForm({
    initialValues: {
      email: '',
      comment: '',
      rate: 0,
      name: ''
    }
  })
  const closeModal = () => {
    onClose()
    setIsErrorComment(false)
    setIsErrorRate(false)
    form.setFieldError('email', '')
  }
  const validateForm = () => {
    let checkError = false
    if (form.values.comment.length === 0) {
      setIsErrorComment(true)
      checkError = true
    }
    if (form.values.rate === 0) {
      setIsErrorRate(true)
      checkError = true
    }
    if (!/^\S+@\S+$/.test(form.values.email)) {
      form.setFieldError('email', 'Invalid email')
      checkError = true
    }
    if (form.values.email.length === 0) {
      form.setFieldError('email', 'Email is required')
      checkError = true
    }
    if (checkError) return false

    return true
  }
  const submitReview = async () => {
    if (validateForm()) {
      await axios
        .post(`${API_COMMENT}${idProduct}`, form.values)
        .then(() => {
          setIsErrorComment(false)
          closeModal()
          open()
        })
        .catch(err => {
          notifications.show({
            title: 'Đánh giá thất bại',
            message: err.response.data.message,
            color: 'red'
          })
        })
    }
  }

  const formVerify = useForm({
    initialValues: {
      verifyCode: ''
    },
    validate: {
      verifyCode: value => (value.length === 0 ? 'Không để trống' : null)
    }
  })
  const virifyReview = () => {
    axios
      .put(`${API_COMMENT_VERIFY}${idProduct}`, {
        email: form.values.email,
        verifyCode: formVerify.values.verifyCode
      })
      .then(() => {
        notifications.show({
          title: 'Xác nhận thành công',
          message:
            'Cảm ơn bạn đã đánh giá sản phẩm, đánh giá của bẹn sẽ được ghi nhận trước khi hiển thị',
          color: 'green',
          autoClose: 5000
        })
        close()
        form.reset()
      })
      .catch(err => {
        notifications.show({
          title: 'Xác nhận thất bại',
          message: err.response.data.message,
          color: 'red'
        })
      })
  }
  const closeModalVerify = () => {
    close()
    axios
      .put(`${API_COMMENT_FAIL}${idProduct}`, { comment: form.values.comment })
      .then(() => {
        notifications.show({
          title: 'Xác nhận thất bại',
          message: 'Review của bạn chưa được xác nhận nên sẽ bị xóa',
          color: 'yellow'
        })
      })
      .catch(err => {
        notifications.show({
          title: 'Đã có lỗi hệ thống',
          message: err.response.data.message,
          color: 'red'
        })
      })
  }
  return (
    <div>
      <Modal
        opened={openedModalVerify}
        onClose={closeModalVerify}
        title="Xác nhận"
      >
        <form onSubmit={formVerify.onSubmit(virifyReview)}>
          <Text className="text-center font-semibold ">
            Mã xác nhận đã gửi tới mail của bạn
          </Text>
          <TextInput
            {...formVerify.getInputProps('verifyCode')}
            label="Nhập mã xác nhận"
            placeholder="Vui lòng nhập mã xác nhận"
          />
          <Button
            onClick={() => {
              virifyReview()
            }}
            className="mt-3 bg-[#87c1c1d9!important]"
          >
            Xác nhận
          </Button>
        </form>
      </Modal>
      <Modal centered opened={opened} onClose={closeModal} title={title}>
        <form onSubmit={form.onSubmit(submitReview)}>
          <Text>Đánh giá sản phẫm</Text>
          <Rate
            allowHalf
            onChange={value => {
              form.setFieldValue('rate', value)
              setIsErrorRate(false)
            }}
          />
          {isErrorRate && <Text color="red">Bạn cần đánh giá sản phẩm</Text>}
          <TextInput
            label="Nhập Email của bạn"
            placeholder="Nhập Email của bạn để có thể review"
            {...form.getInputProps('email')}
          />
          <TextInput
            label="Nhập tên của bạn"
            {...form.getInputProps('name')}
            placeholder="Nhập tên của bạn"
          />
          <div className="mt-2">
            <Text className="mb-2 font-semibold">Review của bạn</Text>
            <SunEditor height="400px" {...form.getInputProps('comment')} />
            {isErrorComment && <Text color="red">Bạn cần nhập review</Text>}
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="mt-3 bg-[#87c1c1d9!important]">
              Gửi đánh giá
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
