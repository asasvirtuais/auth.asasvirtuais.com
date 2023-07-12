import { getIdPToken } from '@/token'
import { withApiAuthRequired } from '@auth0/nextjs-auth0'

export default withApiAuthRequired(async (req, res) => {
    const token = await getIdPToken(req, res, 'google-oauth2')
    if ( ! token ) {
        res.status(404)
        throw new Error('Failed to retrieve provider access token')
    }
    const result = await fetch( `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`)
    .then( response => {
        if ( ! response.ok ) {
            res.status(400)
            return null
        }
        return response.json()
    } )
    if ( result )
        res.json( result )
    else
        res.end()
})
