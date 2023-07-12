import { getIdPToken } from '@/token'
import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import cors from 'nextjs-cors'

export default async (req: any, res: any) => {
    await cors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200
    })
    await withApiAuthRequired(async (req, res) => {
        const token = await getIdPToken(req, res, 'google-oauth2')
        if ( ! token )
            return res.status(401).end()
        const response = await fetch( `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`)
    
        if ( response.ok )
            return res.json( await response.json() )
        else
            return res.status(400).end()
    })(req, res)
}
