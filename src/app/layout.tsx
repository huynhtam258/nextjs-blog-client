import theme from '@/config/theme.json'

import Footer from '@/layouts/partials/Footer';
import Header from '@/layouts/partials/Header';
import Providers from '@/layouts/partials/Providers'
import React from 'react'
import "@/styles/main.scss"

export default function RootLayout(
  { children }: { children: React.ReactNode; }
) {
  const pf = theme.fonts.font_family.primary
  const sf = theme.fonts.font_family.secondary

  return (
    <html lang='en'>
      <head>
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
         {/* google font css */}
         <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${pf}${
            sf ? "&family=" + sf : ""
          }&display=swap`}
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <Header />
            {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
