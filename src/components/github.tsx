import { Button, Icon, Link } from '@chakra-ui/react'
import { BsGithub } from 'react-icons/bs'

export default function Github () {
    return (
        <Button as={Link} href='https://github.com/asasvirtuais/auth.asasvirtuais.com' isExternal rightIcon={<Icon as={BsGithub} />} size='lg'>Github Repo</Button>
    )
}
