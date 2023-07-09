import { useUser } from '@auth0/nextjs-auth0/client'
import { Avatar, Card, CardBody, CardFooter, CardHeader, HStack, Heading, Skeleton, VStack } from '@chakra-ui/react'
import { UserProvider } from '@auth0/nextjs-auth0/client'

export const UserAvatar = () => {
    const { user } = useUser()
    return (
        <Avatar size='2xl' src={user?.picture as string} />
        // <AspectRatio ratio={1} w='100%' maxW={100}  >
        //     <Image rounded='full' src={user?.picture as string} width={50} height={50} alt='profile' />
        // </AspectRatio>
    )
}

export const UserName = () => {
    const { user } = useUser()

    return ! user ? (
        <Skeleton h={43.19} w='100%' />
    ) : (
        <Heading>{user.name}</Heading>
    )
}

export default function Profile() {
    return (
        <Card minW='320px' >
            <CardHeader></CardHeader>
            <CardBody>
                <VStack>
                    <UserProvider>
                        <UserAvatar/>
                        <UserName/>
                    </UserProvider>
                </VStack>
            </CardBody>
            <CardFooter>
                <HStack w='100%' justifyContent='space-between' >
                    <a href='/api/auth/logout'>Logout</a>
                    <a href='/api/auth/login'>Login</a>
                </HStack>
            </CardFooter>
        </Card>
    )
}
