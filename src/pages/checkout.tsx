import Head from 'next/head'
import React from 'react'

import CheckOutPage from '@/templates/CheckOutPage/CheckOutPage'

export default function checkout() {
  return (
    <>
      <Head>
        <title>Check Out</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Fragrance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <CheckOutPage />
      </div>
    </>
  )
}
