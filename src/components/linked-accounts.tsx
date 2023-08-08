import { FormControl, FormLabel, Box, Skeleton } from '@chakra-ui/react'
import { useUser } from '@/hooks/use-user'

export default function LinkedAccounts() {
    const { user, loading } = useUser()
    return (
        <>
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
                                ))}
                            </Box>
                    )}
                </FormLabel>
            </FormControl>
        </>
    )
}
