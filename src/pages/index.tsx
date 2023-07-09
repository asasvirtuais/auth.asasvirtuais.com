import { Box, Center, Container } from '@chakra-ui/react'
import Chakra from '@/chakra'
import Footer from '../components/footer'
import Account from '@/components/account'

export default function Home() {
    return (
        <Chakra>
            <Box as='main'>
                <Container maxW='container.lg'>
                    <Center w='100%' minH='100vh'>
                        <Account/>
                    </Center>
                </Container>
            </Box>
            <Footer />
        </Chakra>
    )
}
