import type { AppProps } from 'next/app'
import { Comfortaa } from 'next/font/google'
import Chakra from '@/chakra'

const comfortaa = Comfortaa({
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={comfortaa.style} >
      <Chakra>
        <Component {...pageProps} />
      </Chakra>
    </div>
  )
}
