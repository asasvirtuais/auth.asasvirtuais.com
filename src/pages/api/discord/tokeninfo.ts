import { getIdPToken } from "@/token";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired( async (req, res) => {
    const token = await getIdPToken(req, res, 'discord')
    console.log(token)
    if ( ! token )
        return res.status(401).end()
    const response = await fetch('https://discord.com/api/oauth2/@me', {
        headers: { Authorization: `Bearer ${token}` }
    })

    if ( response.ok ) {
        const result = await response.json()
        if ( result.error ) {
            console.error(response)
            return res.status(400).end()
        }
        else
            return res.json(result)
    } else {
        console.error(response)
        return res.status(400).end()
    }
})
