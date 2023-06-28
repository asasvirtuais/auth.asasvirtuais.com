import { withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired( async (req, res) => {
    const token = await fetch( 'https://asasvirtuais.us.auth0.com/oauth/token', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            client_id: process.env.AUTH0_CLIENT_ID,
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            audience: 'https://auth.asasvirtuais.com',
            grant_type: 'client_credentials'
        })
    } ).then( res => res.json() ).then( ({access_token}) => access_token )
    res.json(token)
} )
