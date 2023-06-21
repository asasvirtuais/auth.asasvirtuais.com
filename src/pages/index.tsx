import { Alert, AlertDescription, AlertIcon, AlertTitle, AspectRatio, Avatar, Box, Button, Center, Container, Flex, HStack, Heading, Image, Spinner, VStack } from '@chakra-ui/react'
import Chakra from '@/chakra'
import Footer from '../components/footer'
import { useUser } from '@auth0/nextjs-auth0/client'

export default function Home() {
    const { user, isLoading, error } = useUser()
    return (
        <Chakra>
            <Flex flexDir='column' justifyContent='space-between' h='100vh'>
            <Box as='main' h='100%'>
                <Container maxW='container.lg' h='inherit'>
                    <Center w='100%' h='inherit'>
                        <VStack w='100%'>
                            <Heading textAlign='center' w='100%' >Asas Virtuais - SSO</Heading>
                            <Center w='100%' >
                                { isLoading ? (
                                    <Spinner/>
                                ) : error ? (
                                    <Alert status='error'>
                                        <AlertIcon />
                                        <AlertTitle>Authentication Error!</AlertTitle>
                                        <AlertDescription>We are sorry, but there was an error with authentication. Please try again later!</AlertDescription>
                                    </Alert>
                                ) : user ? (
                                    <>
                                        <HStack>
                                            <Box>Logged in as: {user.nickname}</Box>
                                            <Box>Name: {user.name}</Box>
                                            <Box>Email: {user.email}</Box>
                                            <Box>Email verified: {user.email_verified ? 'Yes':'No'}</Box>
                                        </HStack>
                                        <Avatar src={user.picture ?? undefined} />
                                    </>
                                ) : (
                                    <Box>
                                        You are not in
                                    </Box>
                                ) }
                            </Center>
                            <HStack>
                                <Button size='lg' w='200px' colorScheme='blue' as='a' href='/api/auth/login' >Login</Button>
                                <Button size='lg' w='200px' colorScheme='green' as='a' href='/api/auth/login' >Logout</Button>
                            </HStack>
                        </VStack>
                    </Center>
                </Container>
            </Box>
            <Footer />
            </Flex>
        </Chakra>
    )
}
