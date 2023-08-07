import { Center, Container, Heading, Link } from '@chakra-ui/react'
export default function Footer() {
    return (
        <Container maxW='container.xl'>
            <Center minH='72px'>
                <Heading as={Link} isExternal href='https://asasvirtuais.com' target='_blank' >Asas Virtuais</Heading>
            </Center>
        </Container>
    )
}