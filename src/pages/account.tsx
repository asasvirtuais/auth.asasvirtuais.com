import { Card, CardBody, CardHeader, Center, Container, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react'
import Chakra from '@/chakra'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import AccountProfilePicture from '@/components/account-profile-picture'
import { UserProvider } from '@/hooks/use-user'

export default function Account() {
    return (
        <Chakra>
            <Navbar />
            <Container as='main' maxW='container.xl' w='100%'>
                <Center minH='100vh' w='100%'>
                    <UserProvider>
                        <VStack w='100%'>
                            <AccountProfilePicture />
                            <Card as={Tabs} isFitted w='100%'>
                                <CardHeader>
                                    <TabList>
                                        <Tab>Account</Tab>
                                        <Tab>Profiles</Tab>
                                    </TabList>
                                </CardHeader>
                                <CardBody>
                                    <TabPanels>
                                        <TabPanel>
                                        </TabPanel>
                                        <TabPanel>
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
