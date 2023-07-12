import { TokenInfoProvider, useTokenInfo } from '@/hooks/use-token'
import { useUser } from '@/hooks/use-user'
import { FormControl, FormLabel, Textarea, VStack } from '@chakra-ui/react'
import { useMemo } from 'react'

const TokenInfo = () => {
    const { info, warning } = useTokenInfo()
    return (
        <Textarea isDisabled rows={12} value={JSON.stringify(info, null, 4) ?? warning}/>
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
