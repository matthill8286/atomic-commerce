import { CartProvider } from 'react-use-cart'

import { SettingsProvider } from '@/context/settings'
import Layout from '@/components/layout'

import 'tailwindcss/tailwind.css'

function App({ Component, pageProps }) {
  console.log('>> logging', { pageProps })
  return (
    <SettingsProvider>
      <CartProvider>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </SettingsProvider>
  )
}

export default App
