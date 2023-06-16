'use client'
import theme from '@/theme'
import { PropsWithChildren } from 'react'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export default function Chakra( { children } : PropsWithChildren ) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                { children }
            </ChakraProvider>
        </CacheProvider>
    )
}


