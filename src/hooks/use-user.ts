import { useBoolean } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function useUserHook () {
    const [user, setUser] = useState()
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
        user: user as undefined | Record<string, any>,
        error,
        loading,
        setLoading
    }
}
