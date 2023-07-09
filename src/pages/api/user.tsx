import { getAccessToken } from '@/token'
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'

export default withApiAuthRequired( async (req, res) => {
    const token = await getAccessToken()
    const session = await getSession(req, res)
    const id = session?.user?.sub
    const enrollments = await fetch(`https://asasvirtuais.us.auth0.com/api/v2/users/${id}/enrollments`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    }).then( res => res.json() )
    const data = await fetch(`https://asasvirtuais.us.auth0.com/api/v2/users/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    }).then( async res => {
        return {
            ... await res.json(),
            enrollments,
        }
    } )
    res.json({
        ...data,
    })
} )
