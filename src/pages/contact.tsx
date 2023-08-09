import Head from 'next/head'
import React from 'react'

import ContactPage from '@/templates/ContactPage/ContactPage'

export default function contact() {
  return (
    <>
      <Head>
        <title>Liên hệ </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Fragrance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactPage />
    </>
  )
}
