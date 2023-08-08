import { useUser } from '@/hooks/use-user'
import { Avatar } from '@chakra-ui/react'

export default function AccountProfilePicture() {
    const { user } = useUser() 
    return (
        <Avatar src={user?.picture} size='2xl' />
    )
}
