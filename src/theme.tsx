import { extendTheme } from '@chakra-ui/react'
import { comfortaa, majorMonoDisplay } from './font'

export default extendTheme({
    fonts: {
        body: comfortaa.style.fontFamily,
        heading: majorMonoDisplay.style.fontFamily,
    }
})
