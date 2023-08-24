import { Card, CardBody, CardHeader, Center, Container, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react'
import Chakra from '@/chakra'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import AccountProfilePicture from '@/components/account-profile-picture'
import { UserProvider } from '@/hooks/use-user'
import AccountDetails from '@/components/account-details'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export const getServerSideProps = withPageAuthRequired()

export default function Account() {
    return (
        <Chakra>
            <Navbar />
            <Container as='main' maxW='container.xl' w='100%' pt='72px' px={{base: '0px', md: 4}} >
                <Center minH='100vh' w='100%'>
                    <UserProvider>
                        <VStack w='100%'>
                            <AccountProfilePicture />
                            <Card as={Tabs} isFitted w='100%'>
                                <CardHeader px={0} pt={0}>
                                    <TabList>
                                        <Tab>Account</Tab>
                                    </TabList>
                                </CardHeader>
                                <CardBody px={0}>
                                    <TabPanels>
                                        <TabPanel>
                                            <AccountDetails/>
                                        </TabPanel>
                                    </TabPanels>
                                </CardBody>
                            </Card>
                        </VStack>
                    </UserProvider>
                </Center>
            </Container>
            <Footer/>
        </Chakra>
    )
}
