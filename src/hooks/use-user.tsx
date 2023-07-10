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

export function useMergeHook() {
    const [error, setError] = useState()
    const [loading, setLoading] = useBoolean()
    const [merge, setMerge] = useState<Identity[]>()

    useEffect( () => {
        fetch('/api/merge')
        .then( res => {
            if ( ! res.ok )
                throw new Error('Unable to retrieve accounts to merge')
            return res.json()
        } )
        .then( setMerge )
        .catch( setError )
        .finally( setLoading.off )
    }, [] )
    return {
        error,
        loading,
        merge,
        setMerge
    }
}

export function useUserHook () {
    const [user, setUser] = useState<Identity>()
    const [error, setError] = useState()
    const [loading, setLoading] = useBoolean(true)
    const { merge, setMerge } = useMergeHook()
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
        merge,
        error,
        loading,
        setMerge
    }
}

const [ContextProvider, useContext] = createContext<ReturnType<typeof useUserHook>>()

export const UserProvider = ({children}:React.PropsWithChildren) => {
    const context = useUserHook()
    return <ContextProvider value={context}>{children}</ContextProvider>
}

export const useUser = () => useContext()
