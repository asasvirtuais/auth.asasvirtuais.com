import { useUser } from '@/hooks/use-user'
import { Box, HStack, Skeleton, VStack, Image, Button, useBoolean } from "@chakra-ui/react";
import { useCallback } from 'react';

const MergeIdentity = ( p : any ) => {
    const { user, setMerge } = useUser()

    const identity = p?.identities?.find( p => !! p.connection )
    const connection = identity?.connection
    const skip = p.user_id === user?.user_id
    const [loading, setLoading] = useBoolean()
    const mergeAccount = useCallback( () => {
        setLoading.on()
        fetch( '/api/merge', {
            method: 'POST',
            body: JSON.stringify({
                provider: identity?.provider as string,
                user_id: identity?.user_id as string
            })
        }).then( res => {
            if ( ! res.ok )
                throw new Error('Failed to merge accounts')
            return res.json()
        } ).then( setMerge ).finally( setLoading.off )
    }, [])
    if ( ! identity )
        return
    if ( skip )
        return null
    return (
        <HStack key={p.user_id} w='100%' justifyContent='space-between' >
            <Image width={50} height={50} src={p.picture} alt={connection as string}  />
            <Box>{connection}</Box>
            <Button isLoading={loading} onClick={mergeAccount} >Link</Button>
        </HStack>
    )
}

export default function Merge (){

    const { merge } = useUser()
    return (
        <VStack minW='320px'>
            {merge?.map( p => {
                return (<MergeIdentity key={p?.user_id} {...p} />)
            })}
        </VStack>
    )

}
