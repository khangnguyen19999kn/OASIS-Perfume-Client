import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

import { AppConfig } from '@/utils/AppConfig'

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="google-site-verification"
            content="jKTrEuutIxyNy0dq7aHAoP7r-8vMJxcyqLMnY7sG8ks"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={''}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Marck+Script&family=Raleway:ital,wght@1,300&display=swap"
            rel="stylesheet"
          />

          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T5J6ZX4X');`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T5J6ZX4X"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
