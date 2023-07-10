import { getAccessToken } from '@/token'
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'

function get(email: string, token: string) {
    return fetch(`https://asasvirtuais.us.auth0.com/api/v2/users-by-email?email=${email}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    } ).then( res => res.json() )
}

async function post(id: string, primaryToken: string, provider: string, user_id: string) {

    return fetch(`https://asasvirtuais.us.auth0.com/api/v2/users/${id}/identities`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${primaryToken}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            user_id,
            provider,
        }),
    } ).then( res => res.json() )
}

export default withApiAuthRequired( async (req, res) => {
    const session = await getSession(req, res)
    const token = await getAccessToken()
    const email = session?.user?.email
    if ( ! email )
        return res.status(404).end()

    if ( req.method === 'GET' )
        return res.json(await get(email, token))
    
    if ( req.method === 'POST' ) {
        const id = session?.user?.sub as string
        const primaryToken = token
        const { user_id, provider } = JSON.parse(req.body)
        return res.json(await post(id, primaryToken, provider, user_id))
    }
} )
