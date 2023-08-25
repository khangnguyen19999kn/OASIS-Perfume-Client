import { InfoCircleTwoTone } from '@ant-design/icons'
import {
  Button,
  Group,
  Modal,
  Radio,
  Select,
  Text,
  TextInput
} from '@mantine/core'
import { hasLength, isEmail, useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { notifications } from '@mantine/notifications'
import axios from 'axios'
import React, { useContext, useEffect } from 'react'

import CartItem from '@/components/CartItem/CartItem'
import { API_ORDER } from '@/constant/API/API'
import listCity from '@/constant/JSON/cities.json'
import listDistrict from '@/constant/JSON/districts.json'
import listWards from '@/constant/JSON/wards.json'
import type { CartType } from '@/constant/types/typeCart'
import { CartContext } from '@/Provider/CartProvider'

import { useStyles } from './CheckOutPageStyle'

type FormValues = {
  customerName: string
  email: string
  phone: string
  deliveryWay: string
  city: string
  district: string
  ward: string
  address: string
  itemBuy: CartType[]
  id: string
}

export default function CheckOutPage() {
  const { classes } = useStyles()
  const [opened, { open, close }] = useDisclosure(false)
  const [cityCode, setCityCode] = React.useState('')
  const [districtCode, setDistrictCode] = React.useState('')
  const [wardCode, setWardCode] = React.useState('')
  const context = useContext(CartContext)
  const [data, setData] = React.useState<FormValues>()

  const form = useForm({
    initialValues: {
      customerName: '',
      email: '',
      phone: '',
      deliveryWay: 'home',
      city: {},
      district: {},
      ward: {},
      address: '',
      itemBuy: context ? context.listProductInLocalStorage : []
    },

    validate: {
      email: isEmail('Email address is not valid'),
      customerName: hasLength(
        { min: 2, max: 40 },
        ' Name must be between 2 and 40 characters long'
      ),
      phone: value =>
        /^0\d{9}$/g.test(value)
          ? null
          : 'Phone number must be 10 digits and start with 0',
      address: hasLength(
        { min: 2, max: 40 },
        ' Address must be between 2 and 40 characters long'
      )
    }
  })
  const formVerify = useForm({
    initialValues: {
      otp: ''
    },
    validate: {
      otp: hasLength(
        { min: 6, max: 6 },
        ' Code Verify must be 6 characters long'
      )
    }
  })
  const dataCitySelect = listCity.map(city => ({
    value: city.code,
    label: city.name
  }))
  const changeCityCode = (value: string) => {
    setDistrictCode('')
    setWardCode('')
    setCityCode(value)
    const citySelect = listCity.find(city => city.code === value)
    if (citySelect) {
      form.setFieldValue('city', {
        name: citySelect.name,
        code: citySelect.code
      })
      form.setFieldValue('district', {})
      form.setFieldValue('ward', {})
    }
  }
  const dataDistrictSelect = listDistrict
    .filter(city => city.parent_code === cityCode)
    .map(district => ({
      value: district.code,
      label: district.name
    }))
  const changeDistrictCode = (value: string) => {
    setWardCode('')
    setDistrictCode(value)
    const districtSelect = listDistrict.find(
      district => district.code === value
    )
    if (districtSelect) {
      form.setFieldValue('district', {
        name: districtSelect.name,
        code: districtSelect.code
      })
      form.setFieldValue('ward', {})
    }
  }
  const dataWardSelect = listWards
    .filter(ward => ward.parent_code === districtCode)
    .map(ward => ({
      value: ward.code,
      label: ward.name
    }))
  const changeWardCode = (value: string) => {
    setWardCode(value)
    const wardSelect = listWards.find(ward => ward.code === value)
    if (wardSelect) {
      form.setFieldValue('ward', {
        name: wardSelect.name,
        code: wardSelect.code
      })
    }
  }
  useEffect(() => {
    form.setFieldValue('itemBuy', context!.listProductInLocalStorage)
  }, [context!.listProductInLocalStorage])
  const submitForm = () => {
    axios
      .post(API_ORDER, {
        ...form.values
      })
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err)
      })

    open()
  }
  const verifyPhone = () => {
    axios
      .put(API_ORDER, {
        id: data?.id,
        otp: formVerify.values.otp
      })
      .then(res => {
        notifications.show({
          title: 'Success',
          message: `${res.data.message} Bạn đã đặt hàng thành công`,
          color: 'green',
          autoClose: 3000
        })
        form.reset()
        setCityCode('')
        setDistrictCode('')
        setWardCode('')
        close()
        setTimeout(() => {
          context!.removeAllItemInCart()
        }, 2000)
      })
      .catch(err => {
        notifications.show({
          title: 'LỖI',
          color: 'red',
          message: err.response.data.message
        })
      })
  }
  const showCartItems = () => {
    return context?.listProductInLocalStorage.map((item: CartType) => {
      return (
        <div key={item.name}>
          <CartItem
            id={item.id}
            name={item.name}
            size={item.size}
            price={item.price}
            quantity={item.quantity}
            img={item.img}
          />
          <hr />
        </div>
      )
    })
  }
  return (
    <div>
      <Modal opened={opened} onClose={close} title="Authentication">
        <Text ta="center">Vui lòng nhập mã xác nhận</Text>
        <Text ta="center">
          {`Mã xác nhận đã được gửi tới mail ${form.values.email}`}
        </Text>
        <TextInput
          className="mt-3"
          placeholder="Mã xác nhận"
          {...formVerify.getInputProps('otp')}
        />
        <div className="flex justify-center">
          <Button
            className={classes.buttonSubmit}
            onClick={() => {
              verifyPhone()
            }}
          >
            Xác nhận
          </Button>
        </div>
      </Modal>
      <div className="flex h-[200px] w-full items-center justify-center bg-[#f6f6f6] mobile:h-[100px]">
        <h1 className={classes.title}>Check out</h1>
      </div>
      <div className="m-[auto] w-1/2 p-5 mobile:w-full">
        <div className={classes.cartSide}>{showCartItems()}</div>
        <form onSubmit={form.onSubmit(submitForm)}>
          <Text className={classes.subtitle}>Thông tin khách hàng</Text>
          <div className="rounded-md border p-5">
            <div className="flex justify-between">
              <TextInput
                placeholder="Your name"
                label="Full name"
                withAsterisk
                className="mr-1 w-1/2"
                {...form.getInputProps('customerName')}
              />

              <TextInput
                placeholder="Your Phone Number"
                label="Phone Number"
                withAsterisk
                className="ml-1 w-1/2"
                {...form.getInputProps('phone')}
              />
            </div>
            <TextInput
              placeholder="Your Email"
              label="Email"
              withAsterisk
              className="mt-3"
              {...form.getInputProps('email')}
            />
            <div className="m-auto mt-5 flex w-[fit-content] items-center rounded-md border bg-[#EBF1FF] p-1">
              <InfoCircleTwoTone />
              <Text className="ml-2">
                Chúng tôi sẽ gửi thông tin liên quan đến đơn hàng tới bạn thông
                qua email/số điện thoại.
              </Text>
            </div>
          </div>
          <Text className={classes.subtitle}>Yêu cầu nhận hàng</Text>
          <div className="rounded-md border p-5">
            <Radio.Group
              label="Chọn phương thức giao hàng"
              defaultValue="home"
              withAsterisk
              onChange={value => form.setFieldValue('deliveryWay', value)}
            >
              <Group mt="xs">
                <Radio value="home" label="Giao hàng tại nhà" />
                <Radio value="company" label="Giao hàng tại công ty" />
              </Group>
            </Radio.Group>
            <div className="mt-3 flex justify-between">
              <Select
                label="City"
                placeholder="Chọn Tỉnh thành phố"
                searchable
                value={cityCode}
                onChange={changeCityCode}
                data={dataCitySelect}
                className="mr-1 w-1/2"
                withAsterisk
                required
              />
              <Select
                label="District"
                placeholder="Chọn quận huyện"
                searchable
                data={dataDistrictSelect}
                value={districtCode}
                onChange={changeDistrictCode}
                className={`ml-1 w-1/2 ${
                  cityCode === '' ? 'hover:cursor-not-allowed' : ''
                }`}
                disabled={cityCode === ''}
                withAsterisk
                required
              />
            </div>
            <div className="mt-3 flex justify-between">
              <Select
                label="Ward"
                placeholder="Chọn phường xã"
                searchable
                value={wardCode}
                data={dataWardSelect}
                onChange={changeWardCode}
                className={`mr-1 w-1/2 ${
                  districtCode === '' ? 'hover:cursor-not-allowed' : ''
                }`}
                disabled={districtCode === ''}
                withAsterisk
                required
              />
              <TextInput
                placeholder="Đường số, tên đường"
                label="Address"
                withAsterisk
                disabled={wardCode === ''}
                className={`ml-1 w-1/2 ${
                  wardCode === '' ? 'hover:cursor-not-allowed' : ''
                }`}
                {...form.getInputProps('address')}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit" className={classes.buttonSubmit}>
              Tiếp
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
