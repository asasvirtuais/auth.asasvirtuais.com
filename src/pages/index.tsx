import { Box, Button, Center, Container, Flex } from '@chakra-ui/react'
import Chakra from '@/chakra'
import Footer from '../components/footer'

export default function Home() {
    return (
        <Chakra>
            <Flex flexDir='column' justifyContent='space-between' h='100vh'>
            <Box as='main' h='100%'>
                <Container maxW='container.lg' h='inherit'>
                    <Center w='100%' h='inherit'>
                        <Box>
                            <Button as='a' href='/api/login' >Login</Button>
                        </Box>
                    </Center>
                </Container>
            </Box>
            <Footer />
            </Flex>
        </Chakra>
    )
}
