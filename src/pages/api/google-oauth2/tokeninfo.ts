import { getIdPToken } from '@/token'
import { withApiAuthRequired } from '@auth0/nextjs-auth0'

export default withApiAuthRequired(async (req, res) => {
    const token = await getIdPToken(req, res, 'google-oauth2')
    if ( ! token )
        return res.status(401).end()
    const response = await fetch( `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`)

    if ( response.ok )
        return res.json( await response.json() )
    else
        return res.status(400).end()
})
