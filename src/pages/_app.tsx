import '@/styles/globals.scss'
import '@/styles/styles.scss'
import '@/styles/chatStyle.scss'
import '@/styles/Home.module.scss'
import '@/styles/sideBar.scss'
import '@/styles/buttonStyle.scss'

import type { ColorScheme } from '@mantine/core'
import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useHotkeys, useLocalStorage } from '@mantine/hooks'
import { Notifications } from '@mantine/notifications'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import ShoppingCart from '@/components/ShoppingCart/ShoppingCart'
import BrandSection from '@/models/BrandSection/BrandSection'
import Footer from '@/models/Footer/Footer'
import { CartProvider } from '@/Provider/CartProvider'
import Logo from '@/public/assets/imageGlobal/LogoVer2.png'
import Header from '@/templates/Header'

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  useHotkeys([['mod+J', () => toggleColorScheme()]])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  useEffect(() => {
    const handleChangeStart = () => {
      setLoading(true)
    }
    const handleChangeComplete = () => {
      setLoading(false)
    }
    const initialLoadTimeout = setTimeout(() => {
      setLoading(false)
    }, 100)
    router.events.on('routeChangeStart', handleChangeStart)
    router.events.on('routeChangeComplete', handleChangeComplete)
    router.events.on('routeChangeError', handleChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleChangeStart)
      router.events.off('routeChangeComplete', handleChangeComplete)
      router.events.off('routeChangeError', handleChangeComplete)
      clearTimeout(initialLoadTimeout)
    }
  }, [router])

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme, loader: 'bars' }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Notifications position="top-right" />
        <CartProvider>
          <div>
            <div
              className={
                loading
                  ? 'loader-container'
                  : 'loader-container loader-container-done'
              }
            >
              <div className="loader-logo">
                <Image src={Logo} alt="Logo" width={300} height={300} />
              </div>
            </div>

            <Header />
            <div
              className={`relative z-10 mb-[400px] mt-[100px] mobile:mb-[320px] ${
                colorScheme === 'dark' ? 'bg-[#1a1b1e]' : 'bg-[#ffffff]'
              }`}
            >
              <Component {...pageProps} />
            </div>
            <div className="sticky bottom-5 z-10 float-right mr-[20px] w-[fit-content] rounded  bg-[#cce6e5] mobile:visible laptop:invisible desktop:invisible">
              <ShoppingCart />
            </div>

            <div className="z-1 fixed bottom-0 w-full">
              <Footer />
            </div>
          </div>
        </CartProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
