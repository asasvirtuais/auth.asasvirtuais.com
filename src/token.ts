
export const getAccessToken = async () => {
    const tokenRequest = await fetch(`https://asasvirtuais.us.auth0.com/oauth/token`, {
        method: 'POST',
        body: `{"client_id":"${
            'zJ7bivIwmGxxeUGA90NQbWTdWLKjVOEG'
        }","client_secret":"${
            '8MoTYvN_Vo_hQMuf7dd4fov4ArTuyYlMMrNm4SpkdsECp7pcn60nVOr1SCSrOxqF'
        }","audience":"https://asasvirtuais.us.auth0.com/api/v2/","grant_type":"client_credentials"}`,
        headers: {'content-type': 'application/json'},
    }).then( res => res.json() )
    const token = tokenRequest.access_token
    if ( ! token )
        throw new Error('Unable to retrieve access token')
    return token
}
