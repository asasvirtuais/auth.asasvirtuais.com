import { getAccessToken } from '@/token'
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'

export default withApiAuthRequired( async (req, res) => {
    const session = await getSession(req, res)
    const token = await getAccessToken()
    const email = session?.user?.email
    if ( ! email )
        return res.status(404).end()

    const data = await fetch(`https://asasvirtuais.us.auth0.com/api/v2/users-by-email?email=${email}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    } ).then( res => res.json() )

    res.json( data )
} )
