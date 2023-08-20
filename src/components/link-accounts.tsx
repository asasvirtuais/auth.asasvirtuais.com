import { useLinkAccount } from '@/hooks/use-link-account'
import { Button, VStack } from '@chakra-ui/react'

export default function LinkAccounts() {
    const { linkAccountProvider } = useLinkAccount()
    return (
        <VStack>
            <Button onClick={linkAccountProvider('google-oauth2')}>
                Link with Google
            </Button>
            <Button onClick={linkAccountProvider('linkedin')}>
                Link with LinkedIn
            </Button>
            <Button onClick={linkAccountProvider('discord')}>
                Link with Discord
            </Button>
        </VStack>
    )
}
