import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { globalStyle } from 'stitches.config'

export default function MyApp ({ Component, pageProps }: AppProps) {
  useEffect(() => {
    globalStyle()
  }, [])

  return (
    <>
      <style jsx global>{`
        html {
          background: #FDCFAD;
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #FDCFAD;
          color: #000000;
        }

        *, *::before, *::after {
          box-sizing: border-box;
        }

        a {
          color: #000000;
          text-decoration: none;
        }

        ::selection {
          background: #000000;
          color: #FFFFFF;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
