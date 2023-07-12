import { TokenInfoProvider, useTokenInfo } from '@/hooks/use-token'
import { useUser } from '@/hooks/use-user'
import { FormControl, FormLabel, Skeleton, Textarea, VStack } from '@chakra-ui/react'
import { useEffect, useMemo } from 'react'

const TokenInfo = () => {
    const { info, warning, loading } = useTokenInfo()
    return loading ? (
        <Skeleton h='281.23px' w='100%'/>
    ) : (
        <Textarea isDisabled rows={12} value={warning ?? JSON.stringify(info, null, 4)}/>
    )
}
const IdentityTokenInfo = ( {provider} : {provider:string} ) => {
    return (
        <TokenInfoProvider provider={provider}>
            <FormControl>
                <FormLabel>
                    <b>{provider} token info</b>
                </FormLabel>
                <TokenInfo/>
            </FormControl>
        </TokenInfoProvider>
    )
}

export default function Tokens() {
    const { user } = useUser()
    const identities = useMemo( () => user?.identities, [user?.identities] )

    return (
        <VStack w='100%' >
            {identities?.map( i => (
                <IdentityTokenInfo key={i.connection} provider={i.connection} />
            ) )}
        </VStack>
    )
}
