import { Box, Center, Container } from '@chakra-ui/react'
import Chakra from '@/chakra'
import Footer from '../components/footer'
import Account from '@/components/account'
import { UserProvider } from '@/hooks/use-user'

export default function Home() {
    return (
        <Chakra>
            <Box as='main'>
                <Container maxW='container.lg'>
                    <Center flexDir='column' w='100%' minH='100vh'>
                        <UserProvider>
                            <Account/>
                        </UserProvider>
                    </Center>
                </Container>
            </Box>
            <Footer />
        </Chakra>
    )
}
