import { useUser } from '@/hooks/use-user'
import { Box, Card, CardBody, CardFooter, FormControl, FormLabel, HStack, Input, Skeleton, Textarea, VStack } from '@chakra-ui/react'
import Merge from './merge'
import Tokens from './tokens'

export default function Account (){
    const { user, loading } = useUser()
    return (
        <Card>
            <CardBody as={VStack} minW='320px' gap={8} >
                <FormControl>
                    <FormLabel>
                        <b>Email</b>
                        {loading ? (
                            <Skeleton h={6} />
                        ) : (
                            <Input isDisabled value={user?.email} />
                        )}
                    </FormLabel>
                </FormControl>
                <FormControl>
                    <FormLabel>
                        <b>Given name</b>
                        {loading ?
                            (
                                <Skeleton h={6} />
                            ) : (
                                <Input isDisabled value={user?.given_name} />
                            )
                        }
                    </FormLabel>
                </FormControl>
                <FormControl>
                    <FormLabel>
                        <b>Family name</b>
                        {loading ? (
                                <Skeleton h={6} />
                            ) : (
                                <Input isDisabled value={user?.family_name} />
                            )
                        }
                    </FormLabel>
                </FormControl>
                <FormControl>
                    <FormLabel>
                        <b>Nickname</b>
                        {loading ? (
                                <Skeleton h={6} />
                            ) : (
                                <Input isDisabled value={user?.nickname} />
                            )
                        }
                    </FormLabel>
                </FormControl>
                <FormControl>
                    <FormLabel>
                        <b>Last login</b>
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
                    </FormLabel>
                </FormControl>
                <FormControl>
                    <FormLabel>
                        <b>Linked accounts</b>
                        {loading ? (
                                <Skeleton h={6} />
                            ) : (
                                <Box>
                                    {user?.identities?.filter( (i: any) => i.isSocial )?.map( (i: any) => (
                                        <Box key={i.user_id}>
                                            {i.connection === 'google-oauth2' ? 'google' : i.connection}
                                        </Box>
                                    ) )}
                                </Box>
                        )}
                    </FormLabel>
                </FormControl>
                <FormControl>
                    <FormLabel>
                        <b>Raw JSON</b>
                        {loading ? (
                                <Skeleton h={6} />
                            ) : (
                                <Textarea isDisabled rows={12} value={JSON.stringify(user, null, 4)} />
                            )
                        }
                    </FormLabel>
                </FormControl>
                <Tokens/>
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
