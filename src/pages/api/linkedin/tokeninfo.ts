import { getIdPToken } from "@/token";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";

const client_id = process.env.LINKEDIN_CLIENT_ID as string
const client_secret = process.env.LINKEDIN_CLIENT_SECRET as string
export default withApiAuthRequired( async (req, res) => {
    const token = await getIdPToken(req, res, 'linkedin')
    var body = []
    const data = {
        client_id,
        client_secret,
        token
    }
    for (const prop in data) {
        const key = encodeURIComponent(prop)
        const value = encodeURIComponent((data as Record<string, any>)[key as string])
        body.push(key + '=' + value)
    }
    const dataString = body.join('&')
    const result = await fetch(`https://www.linkedin.com/oauth/v2/introspectToken?client_id=${
        client_id
    }&client_secret=${
        client_secret
    }&token=${
        token
    }`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: dataString
    }).then( res => res.json() )
    res.json(result)
})
