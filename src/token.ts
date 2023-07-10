
export const getAccessToken = async () => {
    const tokenRequest = await fetch(`https://asasvirtuais.us.auth0.com/oauth/token`, {
        method: 'POST',
        body: `{"client_id":"${
            process.env.AUTH0_CLIENT_ID
        }","client_secret":"${
            process.env.AUTH0_CLIENT_SECRET
        }","audience":"https://asasvirtuais.us.auth0.com/api/v2/","grant_type":"client_credentials"}`,
        headers: {'content-type': 'application/json'},
    }).then( res => res.json() ).catch(console.log)
    console.log(tokenRequest)
    const token = tokenRequest.access_token
    if ( ! token )
        throw new Error('Unable to retrieve access token')
    return token
}