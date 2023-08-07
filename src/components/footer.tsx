import { Center, Container, Heading } from '@chakra-ui/react'
import Link from 'next/link'

export default function Footer() {
    return (
        <Container maxW='container.xl'>
            <Center minH='72px'>
                <Heading as={Link} href='https://asasvirtuais.com'>Asas Virtuais</Heading>
            </Center>
        </Container>
    )
}