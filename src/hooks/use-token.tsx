import { useBoolean } from "@chakra-ui/react"
import { createContext } from "@chakra-ui/react-context"
import { useEffect, useState } from 'react'

const useTokenInfoHook = () => {
    const [info, setInfo] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useBoolean()
    useEffect( () => {
        setLoading.on()
        fetch('/api/google/tokeninfo')
        .then(res => res.json())
        .then(setInfo)
        .catch(setError)
        .finally(setLoading.off)
    }, [] )
    return {
        info,
        error,
        loading
    }
}

const [ContextProvider, useContext] = createContext<ReturnType<typeof useTokenInfoHook>>()

export const TokenInfoProvider = ( {children} : React.PropsWithChildren ) => {
    return (
        <ContextProvider value={useTokenInfoHook()}>
            {children}
        </ContextProvider>
    )
}

export const useTokenInfo = () => useContext()
