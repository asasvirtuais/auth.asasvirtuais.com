import { Icon, Container, HStack, Heading, IconButton, useColorModeValue, Box } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import {
  Button,
  useColorMode,
  Center,
} from '@chakra-ui/react'

import { BsPeopleFill } from 'react-icons/bs'
import Link from 'next/link'

export default function Navbar() {
    const { toggleColorMode } = useColorMode()
    return (
        <>
            <Box position='absolute' top={0} left={0} right={0} w='100%' zIndex={10}>
                <Container maxW='container.xl'>
                    <Center justifyContent='space-between' minH='72px'>
                        <Heading as={Link} href='/'
                            display={{base: 'none', md: 'block'}}
                        >Asas Virtuais</Heading>
                        <HStack ml='auto' alignItems='center' >
                            <Button as={Link} href='/account' leftIcon={
                                <Icon as={BsPeopleFill} />
                            } size='lg' colorScheme='blue' >
                                My Account
                            </Button>
                            <IconButton onClick={toggleColorMode} size='lg' aria-label='color mode' icon={useColorModeValue(
                                <SunIcon/>,
                                <MoonIcon/>
                            )} />
                        </HStack>
                    </Center>
                </Container>
            </Box>
        </>
    )
}
