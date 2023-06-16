"use client"
import { Box, Button, Center, Container, Flex } from '@chakra-ui/react'
import Footer from './(footer)'
import Chakra from '@/chakra'

export default function Home() {
    return (
        <Chakra>
            <Flex flexDir='column' justifyContent='space-between' h='100vh'>
            <Box as='main' h='100%'>
                <Container maxW='container.lg' h='inherit'>
                    <Center w='100%' h='inherit'>
                        <Box>
                            <Button as='a' href='/api/login' ></Button>
                        </Box>
                    </Center>
                </Container>
            </Box>
            <Footer />
            </Flex>
        </Chakra>
    )
}
