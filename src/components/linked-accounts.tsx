import { FormControl, Text, FormLabel, Box, Skeleton, HStack, Button } from '@chakra-ui/react'
import { useUser } from '@/hooks/use-user'

const LinkedAccount = ( identity: AsasAuth.Identity ) => {
    return (
        <HStack justify='space-between' align='center'>
            <Text>
                {identity.connection === 'google-oauth2' ? 'google' : identity.connection}
            </Text>
        </HStack>
    )
}

export default function LinkedAccounts() {
    const { user, loading } = useUser()
    return (
        <>
            <FormControl>
                <b>Linked accounts</b>
                {loading ? (
                        <Skeleton h={6} />
                    ) : (
                        <Box>
                            {user?.identities?.filter( (i: any) => i.isSocial )?.map( (i: any) => (
                                <LinkedAccount key={i.user_id} {...i} />
                            ))}
                        </Box>
                )}
            </FormControl>
        </>
    )
}
