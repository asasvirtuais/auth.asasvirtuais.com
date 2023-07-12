import { useBoolean } from "@chakra-ui/react"
import { createContext } from "@chakra-ui/react-context"
import { useEffect, useState } from 'react'

const useTokenInfoHook = ( provider: string ) => {
    const [info, setInfo] = useState()
    const [error, setError] = useState()
    const [warning, setWarning] = useState<string>()
    const [loading, setLoading] = useBoolean()
    useEffect( () => {
        setLoading.on()
        fetch(`/api/${provider}/tokeninfo`)
        .then(res => {
            if ( res.status === 400 )
                setWarning('Failed to retrieve access token info')
            else if ( res.status === 404 )
                setWarning('Not authenticated with provider account')
            return res.json()
        })
        .then(setInfo)
        .catch(setError)
        .finally(setLoading.off)
    }, [] )
    return {
        info,
        error,
        loading,
        warning
    }
}

const [ContextProvider, useContext] = createContext<ReturnType<typeof useTokenInfoHook>>()

export const TokenInfoProvider = ( {
    children,
    provider
} : React.PropsWithChildren<{
    provider: string
}> ) => {
    return (
        <ContextProvider value={useTokenInfoHook(provider)}>
            {children}
        </ContextProvider>
    )
}

export const useTokenInfo = () => useContext()
