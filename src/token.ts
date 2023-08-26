import { getSession } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'

const memory : {
    [TOKEN in string]: any
} = {}

export const getTokenInfoFromMemory = ( token: string ) => {
    return memory[token]
}

export const saveTokenInfoToMemory = ( token: string, info: any ) => {
    memory[token] = info
    return info
}

export const getAccessToken = async () => {
    const tokenRequest = await fetch(`https://asasvirtuais.us.auth0.com/oauth/token`, {
        method: 'POST',
        body: `{"client_id":"${
            process.env.AUTH0_CLIENT_ID
        }","client_secret":"${
            process.env.AUTH0_CLIENT_SECRET
        }","audience":"https://asasvirtuais.us.auth0.com/api/v2/","grant_type":"client_credentials"}`,
        headers: {'content-type': 'application/json'},
    }).then( res => res.json() )
    const token = tokenRequest.access_token
    if ( ! token )
        throw new Error('Unable to retrieve access token')
    return token
}

export const getUserById = async ( id: string ) => {
    const token = await getAccessToken()
    return fetch(`https://asasvirtuais.us.auth0.com/api/v2/users/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    }).then( res => res.json() )
}

export const getIdPTokenByUserId = async ( id: string, provider: string ) => {
    return (await getUserById(id)).identities.find( (i: any) => i.connection === provider )?.access_token
}

export const getIdPToken = async ( req: NextApiRequest, res: NextApiResponse, provider: string ) : Promise<string | null> => {
    const session = await getSession(req, res)
    const id = session?.user?.sub as string
    const user = await getIdPTokenByUserId(id, provider)
    return user.identities.find( (i: any) => i.connection === provider )?.access_token
}
