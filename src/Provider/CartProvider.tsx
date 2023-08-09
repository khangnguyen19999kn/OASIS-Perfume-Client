import { showNotification } from '@mantine/notifications'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import IconX from '@/constant/icons/IconX'
import type { CartType } from '@/constant/types/typeCart'

export type CartContextType = {
  totalItemInCart: number
  setTotalItemInCart: (value: number) => void
  addToCart: (itemAdd: CartType) => void | undefined
  quantityItemAdd: number
  setQuantityItem: (value: number) => void
  updateQuantityItemAdd: (type: string, idItem: string) => void
  priceAllProduct: number
  setPriceAllProduct: (value: number) => void
  listProductInLocalStorage: CartType[]
  getQuantityItemAdd: (idItem: string) => number
  removeItemInCart: (idItem: string, size: string) => void
  removeAllItemInCart: () => void
}
type Props = {
  children?: React.ReactNode
}

export const CartContext = React.createContext<CartContextType | null>(null)
export const CartProvider: React.FC<Props> = props => {
  const router = useRouter()
  // Get Item in LocalStorage
  const [listProductInLocalStorage, setListProductInLocalStorage] = useState<
    CartType[]
  >([])
  const [totalItemInCart, setTotalItemInCart] = useState(0)
  const [quantityItemAdd, setQuantityItem] = useState(0)
  const [priceAllProduct, setPriceAllProduct] = useState(0)
  useEffect(() => {
    setListProductInLocalStorage(
      JSON.parse(localStorage.getItem('cart') ?? '[]')
    )
  }, [])
  useEffect(() => {
    setTotalItemInCart(
      listProductInLocalStorage.reduce(
        (total: number, item: CartType) => total + item.quantity,
        0
      )
    )
  }, [listProductInLocalStorage])
  useEffect(() => {
    setPriceAllProduct(
      listProductInLocalStorage.reduce(
        (total: number, item: CartType) =>
          total + parseInt(item.price.replace(/,|đ/g, ''), 10) * item.quantity,
        0
      )
    )
  }, [listProductInLocalStorage])

  const getQuantityItemAdd = (idItem: string) => {
    const existingProduct = listProductInLocalStorage.find(
      (item: CartType) => item.id === idItem
    )
    if (existingProduct) {
      // Sản phẩm đã tồn tại trong giỏ hàng
      setQuantityItem(existingProduct.quantity)
      return existingProduct.quantity
    }
    // Sản phẩm chưa tồn tại trong giỏ hàng
    setQuantityItem(1)
    return 1
  }
  const showErrorOrSuccessNotification = (
    isSuccess: boolean,
    messageShow: string
  ) => {
    if (isSuccess) {
      showNotification({
        autoClose: 2000,
        title: 'Success',
        message: messageShow,
        color: 'teal',
        className: 'my-notification-class'
      })
    } else {
      showNotification({
        autoClose: 2000,
        title: 'Lỗi',
        message: 'Bạn cần chọn size sản phẩm',
        color: 'red',
        icon: <IconX className="h-[10px] w-[10px]" />,
        className: 'my-notification-class',

        styles: theme => ({
          root: {
            backgroundColor: theme.colors.blue[6],
            borderColor: theme.colors.blue[6],

            '&::before': { backgroundColor: theme.white }
          },

          title: { color: theme.white },
          description: { color: theme.white },
          closeButton: {
            color: theme.white,
            '&:hover': { backgroundColor: theme.colors.blue[7] }
          }
        }),
        sx: { backgroundColor: 'black' },
        loading: false
      })
    }
  }

  const updateQuantityItemAdd = (type: string, idItem: string) => {
    const existingProduct = listProductInLocalStorage.find(
      (item: CartType) => item.id === idItem
    )
    if (existingProduct) {
      // Sản phẩm đã tồn tại trong giỏ hàng
      if (type === 'plus') {
        if (existingProduct.quantity < 10) {
          const updatedProduct = {
            ...existingProduct,
            quantity: existingProduct.quantity + 1
          }
          setQuantityItem(existingProduct.quantity + 1)
          const updatedList = listProductInLocalStorage.map(item =>
            item.id === idItem ? updatedProduct : item
          )
          showErrorOrSuccessNotification(true, 'Thêm sản phẩm thành công')
          setListProductInLocalStorage(updatedList)
          localStorage.setItem('cart', JSON.stringify(updatedList))
        }
      }
      if (type === 'minus') {
        if (existingProduct.quantity > 1) {
          const updatedProduct = {
            ...existingProduct,
            quantity: existingProduct.quantity - 1
          }
          setQuantityItem(existingProduct.quantity - 1)
          const updatedList = listProductInLocalStorage.map(item =>
            item.id === idItem ? updatedProduct : item
          )
          showErrorOrSuccessNotification(true, 'Thêm sản phẩm thành công')
          setListProductInLocalStorage(updatedList)
          localStorage.setItem('cart', JSON.stringify(updatedList))
        }
      }
    }
  }
  const addToCart = (itemAdd: CartType) => {
    if (itemAdd.size === '') {
      showErrorOrSuccessNotification(false, 'Bạn cần chọn size sản phẩm')
    } else {
      const existingProduct = listProductInLocalStorage.find(
        (item: CartType) => item.id === itemAdd.id && item.size === itemAdd.size
      )

      if (existingProduct) {
        // Sản phẩm đã tồn tại trong giỏ hàng
        if (existingProduct.quantity < 10) {
          const updatedProduct = {
            ...existingProduct,
            quantity: existingProduct.quantity + 1
          }

          const updatedList = listProductInLocalStorage.map(item =>
            item.id === itemAdd.id ? updatedProduct : item
          )
          showErrorOrSuccessNotification(true, 'Thêm sản phẩm thành công')
          setListProductInLocalStorage(updatedList)
          localStorage.setItem('cart', JSON.stringify(updatedList))
        }
      } else {
        // Sản phẩm chưa tồn tại trong giỏ hàng
        const newProduct = {
          ...itemAdd,
          quantity: 1
        }

        const updatedList = [...listProductInLocalStorage, newProduct]
        showErrorOrSuccessNotification(true, 'Thêm sản phẩm thành công')
        setListProductInLocalStorage(updatedList)
        localStorage.setItem('cart', JSON.stringify(updatedList))
      }
    }
  }
  const removeItemInCart = (idItem: string, size: string) => {
    const updatedList = listProductInLocalStorage.filter(
      (item: CartType) => item.id !== idItem || item.size !== size
    )
    setListProductInLocalStorage(updatedList)
    localStorage.setItem('cart', JSON.stringify(updatedList))
    if (updatedList.length === 0) {
      localStorage.removeItem('cart')
      router.push('/')
    }
  }
  const removeAllItemInCart = () => {
    localStorage.removeItem('cart')
    setListProductInLocalStorage([])
    router.push('/')
  }

  const value = {
    totalItemInCart,
    setTotalItemInCart,
    addToCart,
    quantityItemAdd,
    setQuantityItem,
    priceAllProduct,
    setPriceAllProduct,
    updateQuantityItemAdd,
    listProductInLocalStorage,
    getQuantityItemAdd,
    removeItemInCart,
    removeAllItemInCart
  }
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  )
}
