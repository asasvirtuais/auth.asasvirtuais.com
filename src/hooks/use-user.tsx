import { useBoolean } from '@chakra-ui/react'
import { useEffect, useState } from  'react'
import { createContext } from '@chakra-ui/react-context'

type Identity = Partial<{
    created_at: string
    email: string
    name: string
    given_name: string
    family_name: string
    nickname: string
    picture: string
    updated_at: string
    user_id: string
    last_ip: string
    last_login: string
    logins_count: number
    identities: {
        provider: string
        access_token: string
        string: string
        user_id: string
        connection: 'discord' | 'google' | 'linkedin'
        isSocial: boolean
    }[]
}>

export function useUserHook () {
    const [user, setUser] = useState<Identity>()
    const [error, setError] = useState()
    const [loading, setLoading] = useBoolean(true)
    useEffect( () => {
        fetch('/api/user').then( async res => {
            if ( res.status !== 200 )
                throw new Error('Unable to retrieve user')
            const json = await res.json()
            return json
        } )
        .then(setUser)
        .catch(setError)
        .finally(setLoading.off)
    }, [] )
    return {
        user,
        error,
        loading,
    }
}

const [ContextProvider, useContext] = createContext<ReturnType<typeof useUserHook>>()

export const UserProvider = ({children}:React.PropsWithChildren) => {
    const context = useUserHook()
    return <ContextProvider value={context}>{children}</ContextProvider>
}

export const useUser = () => useContext()
