import { getIdPToken } from '@/token'
import { withApiAuthRequired } from '@auth0/nextjs-auth0'

export default withApiAuthRequired( async (req, res) => {
    const token = await getIdPToken(req, res, 'linkedin')
    if ( ! token )
        throw new Error('Failed to retrieve provider access token')
    const result = await fetch( 'https://api.linkedin.com/v2/me', {
        headers: {
            authorization: `Bearer ${token}`,
            'LinkedIn-Version': '202304',
            'X-Restli-Protocol-Version': '2.0.0',
            'Content-Type': 'application/json'
        }
    }).then( res => res.json() )
    console.log(result)
    res.status(200).end()
} )
