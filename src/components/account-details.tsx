import { useUser } from '@/hooks/use-user'
import { Box, FormControl, FormLabel, HStack, Input, Skeleton, VStack } from '@chakra-ui/react'
import LinkedAccounts from './linked-accounts'
import LinkAccounts from './link-accounts'

export default function AccountDetails (){
    const { user, loading } = useUser()
    return (
        <VStack>
            <FormControl>
                <FormLabel>
                    <b>Email</b>
                    {loading ? (
                        <Skeleton h={6} />
                    ) : (
                        <Input style={{opacity: 1}} isDisabled value={user?.email} />
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
                            <Input style={{opacity: 1}} isDisabled value={user?.given_name} />
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
                            <Input style={{opacity: 1}} isDisabled value={user?.family_name} />
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
                            <Input style={{opacity: 1}} isDisabled value={user?.nickname} />
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
            <LinkedAccounts/>
            <LinkAccounts/>
            <HStack w='100%' justifyContent='space-between'>
                <a href='/api/auth/login' >Login</a>
                <a href='/api/auth/logout' >Logout</a>
            </HStack>
        </VStack>
    )
}
