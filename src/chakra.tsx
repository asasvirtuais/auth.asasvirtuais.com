import theme from '@/theme'
import { PropsWithChildren } from 'react'

import { ChakraProvider } from '@chakra-ui/react'

export default function Chakra( { children } : PropsWithChildren ) {
    return (
        <ChakraProvider theme={theme}>
            { children }
        </ChakraProvider>
    )
}


