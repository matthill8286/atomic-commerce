import { CartProvider } from 'react-use-cart'

import { SettingsProvider } from '@/context/settings'
import Layout from '@/components/layout'

import 'tailwindcss/tailwind.css'

import { ThemeProvider } from 'styled-components'
import { saiyanTheme } from '@matthill8286/atomic-ui'

function App({ Component, pageProps }) {
  console.log('>> logging', { pageProps })
  return (
    <ThemeProvider theme={saiyanTheme}>
      <SettingsProvider>
        <CartProvider>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </CartProvider>
      </SettingsProvider>
    </ThemeProvider>
  )
}

export default App
