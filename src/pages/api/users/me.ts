import { getAccessToken } from '@/token'
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'

export default withApiAuthRequired( async (req, res) => {
    const session = await getSession(req, res)
    const token = await getAccessToken()
    const id = session?.user?.sub
    const data = await fetch(`https://asasvirtuais.us.auth0.com/api/v2/users/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    }).then( async res => {
        return {
            ... await res.json(),
        }
    } )
    res.json({
        ...data,
    })
} )
