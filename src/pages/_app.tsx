import type { AppProps } from 'next/app'
import Chakra from '@/chakra'
import { comfortaa } from '@/font'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={comfortaa.style} >
      <Chakra>
        <Component {...pageProps} />
      </Chakra>
    </div>
  )
}
