import { getIdPToken } from '@/token'
import { withApiAuthRequired } from '@auth0/nextjs-auth0'

export default withApiAuthRequired(async (req, res) => {
    const token = await getIdPToken(req, res, 'google-oauth2')
    if ( ! token )
        throw new Error('Failed to retrieve provider access token')
    const result = await fetch( `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`)
    .then( res => {
        if ( ! res.ok )
            throw new Error('Unable to access google api')
        return res.json()
    } )
    res.json( result )
})
