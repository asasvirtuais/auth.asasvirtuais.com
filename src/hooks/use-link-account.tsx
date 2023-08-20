import { useCallback } from 'react'

export const useLinkAccount = () => {
    const linkAccountProvider = useCallback( (provider: string) => (
        () => {
        }
    ), [] )
    return {
        linkAccountProvider
    }
}
