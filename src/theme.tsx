import { extendTheme } from '@chakra-ui/react'
import { comfortaa } from './font'

export default extendTheme({
    fonts: {
        fonts: {
            body: comfortaa.style.fontFamily,
            heading: comfortaa.style.fontFamily,
        },
    }
})
