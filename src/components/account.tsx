import { useUser } from '@/hooks/use-user'
import { Box, Card, CardBody, CardFooter, FormControl, FormLabel, HStack, Input, Skeleton, Textarea, VStack } from '@chakra-ui/react'
import Merge from './merge'

export default function Account (){
    const { user, loading } = useUser()
    return (
        <Card>
            <CardBody as={VStack} minW='320px' gap={8} >
                <FormControl>
                    <FormLabel><b>Email</b></FormLabel>
                    <Box>
                        {loading ? (
                            <Skeleton h={6} />
                        ) : (
                            <Box>{user?.email}</Box>
                        )}
                    </Box>
                </FormControl>
                <FormControl>
                    <FormLabel><b>Given name</b></FormLabel>
                    {loading ? (
                            <Skeleton h={6} />
                        ) : (
                        <Box>{user?.given_name}</Box>
                    )}
                </FormControl>
                <FormControl>
                    <FormLabel><b>Family name</b></FormLabel>
                    {loading ? (
                            <Skeleton h={6} />
                        ) : (
                        <Box>{user?.family_name}</Box>
                    )}
                </FormControl>
                <FormControl>
                    <FormLabel><b>Nickname</b></FormLabel>
                    {loading ? (
                            <Skeleton h={6} />
                        ) : (
                            <Box>{user?.nickname}</Box>
                    )}
                </FormControl>
                <FormControl>
                    <FormLabel><b>Last login</b></FormLabel>
                    {loading ? (
                            <Skeleton h={6} />
                        ) : (
                            <Box>
                                {new Date(user?.last_login as string).toLocaleString(undefined, {
                                    year: 'numeric',
                                    month: 'long',
                                    weekday: 'long',
                                    day: 'numeric',
                                    hour: 'numeric',
                                    minute: 'numeric'
                                })}
                            </Box>
                    )}
                </FormControl>
                <FormControl>
                    <FormLabel><b>Linked accounts</b></FormLabel>
                    {loading ? (
                            <Skeleton h={6} />
                        ) : (
                            <Box>
                                {user?.identities?.filter( (i: any) => i.isSocial )?.map( (i: any) => (
                                    <Box key={i.user_id}>
                                        {i.provider === 'google-oauth2' ? 'google' : i.provider === 'oauth' ? i.provider : i.user_id.split('|')[0]}
                                    </Box>
                                ) )}
                                </Box>
                    )}
                </FormControl>
                <FormControl>
                    <FormLabel><b>Raw JSON</b></FormLabel>
                    {loading ? (
                            <Skeleton h={6} />
                        ) : (
                            <Box>
                                <Textarea isDisabled={true} rows={12} value={JSON.stringify(user, null, 4)} />
                            </Box>
                    )}
                </FormControl>
                <Merge/>
            </CardBody>
            <CardFooter>
                <HStack w='100%' justifyContent='space-between'>
                    <a href='/api/auth/login' >Login</a>
                    <a href='/api/auth/logout' >Logout</a>
                </HStack>
            </CardFooter>
        </Card>
    )
}
