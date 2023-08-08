import { Box, Text, Center, Container, Heading, SimpleGrid, VStack, chakra, Link, Button } from '@chakra-ui/react'
import Chakra from '@/chakra'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Github from '@/components/github'

const Video = () => (
    <Box
        overflow='hidden'
        paddingBottom='56.25%'
        position='relative'
        height={0}
    >
        <iframe style={{
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            position: 'absolute'
        }} width="560" height="315" src="https://www.youtube-nocookie.com/embed/yufqeJLP1rI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </Box>
)

const Title = () => (
    <Heading
        as='h2'
        w='auto'
        mb={4}
        fontSize={{ base: '4xl', md: '6xl' }}
        fontWeight={600}
        lineHeight='110%'>
            Asas<br/><chakra.span whiteSpace='pre'>{' '}Virtuais</chakra.span>
    </Heading>
)

const Slogan = () => (
    <Text fontSize='lg'>User account platform by</Text>
)

const BottomText = () => (
    <>
        <Text maxW='50ch' textAlign='center' fontSize='lg'>This open-source project is an user account platform made with <Link href='https://nextjs.org/' target='_blank'>NextJS</Link> and <Link href='https://auth0.com/' target='_blank' isExternal>Auth0</Link></Text>
        <Github/>
    </>
)

const LogoBox = () => (
    <VStack h='100%'>
        <Slogan/>
        <Title/>
        <BottomText />
    </VStack>
)

const InfoBox = () => (
    <Box>
        <Video/>
    </Box>
)

export default function Home() {
    return (
        <Chakra>
            <Navbar />
            <Container as='main' maxW='container.xl' pt={{base: '72px', md: '0px'}}>
                <Center flexDir='column' w='100%' minH='100vh'>
                    <SimpleGrid w='100%' gap={4} columns={{base: 1, md: 2}}>
                        <LogoBox/>
                        <InfoBox/>
                    </SimpleGrid>
                </Center>
            </Container>
            <Footer />
        </Chakra>
    )
}
