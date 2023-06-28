import { withApiAuthRequired } from "@auth0/nextjs-auth0"

const env = process.env.NODE_ENV
const isDev = env === 'development'
const url = isDev ? 'https://auth.localhost' : 'https://auth.asasvirtuais.com'

export default withApiAuthRequired( async (req, res) => {

    const returnTo = decodeURIComponent(req.query.returnTo as string)
    const code = req.query.code as string
    if ( ! code )
        return res.redirect(`https://asasvirtuais.us.auth0.com/authorize?response_type=code&client_id=${process.env.AUTH0_CLIENT_ID}&redirect_uri=${encodeURIComponent(`${url}/api/auth/callback?returnTo=${req.query.returnTo}`)}&scope=${encodeURIComponent('openid profile email')}&audience=${encodeURIComponent('https://auth.asasvirtuais.com')}&state=token`)

    const result : {
        access_token: string, refresh_token: string, id_token: string, token_type: 'Bearer'
    } = await fetch('https://asasvirtuais.us.auth0.com/oauth/token', {
        method: 'POST',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({
            code: code,
            grant_type: 'authorization_code',
            client_id: process.env.AUTH0_CLIENT_ID as string,
            client_secret: process.env.AUTH0_CLIENT_SECRET as string,
            redirect_uri: `${url}/api/auth/callback`
        })
    }).then( res => res.json() ).catch( console.error )

    res.redirect(`${returnTo}?token=${result.access_token}`)
} )
