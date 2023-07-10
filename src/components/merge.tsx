import { useUser } from '@/hooks/use-user'
import { Box, HStack, Skeleton, VStack, Image, Button } from "@chakra-ui/react";

export default function Merge (){

    const { user, merge } = useUser()
    return (
        <VStack minW='320px'>
            {merge?.map( p => {
                const connection = p?.identities?.find( p => !! p.connection )?.connection
                const skip = p.user_id === user?.user_id
                if ( skip )
                    return null
                return (
                    <HStack key={p.user_id} w='100%' justifyContent='space-between' >
                        <Image width={50} height={50} src={p.picture} alt={connection as string}  />
                        <Box>{connection}</Box>
                        <Button>Link</Button>
                    </HStack>
                )
            })}
        </VStack>
    )

}
