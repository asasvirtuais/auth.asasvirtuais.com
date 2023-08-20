import { getIdPToken, getTokenInfoFromMemory, saveTokenInfoToMemory } from '@/token'
import { withApiAuthRequired } from '@auth0/nextjs-auth0'

export default withApiAuthRequired( async (req, res) => {
    const token = await getIdPToken(req, res, 'discord')
    if ( ! token )
        return res.status(401).end()
    const cached = getTokenInfoFromMemory(token)
    if ( cached )
        return res.json(cached)
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
            return res.json(saveTokenInfoToMemory(token, result))
    } else {
        console.error(response)
        return res.status(400).end()
    }
})
