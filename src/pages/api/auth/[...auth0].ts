import { getAccessToken } from '@/token'
import { domain } from '@/util'
import { handleAuth, handleLogin, handleCallback, handleLogout, getSession } from '@auth0/nextjs-auth0'

export default handleAuth({
    async login(req, res) {
        let link : string | boolean = typeof req.query.link !== 'undefined'
        const session = await getSession(req, res)
        const user = session?.user
        await handleLogin(req, res, {
            authorizationParams: {
                connection: req.query.connection as string
            },
            getLoginState() {
                return {
                    returnTo: req.query.returnTo,
                    link: link ? {
                        sub: user?.sub,
                        provider: req.query.connection,
                        session: session,
                    } : undefined
                }
            }
        })
    },
    async callback(req, res) {
        await handleCallback(req, res, {
            async afterCallback(req, res, session, state) {
                const link = state?.link
                const accessToken = await getAccessToken()
                if ( link ) {
                    const result = await fetch(`https://${domain}/api/v2/users/${link?.sub}/identities`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                        body: JSON.stringify({
                            provider: link.provider,
                            user_id: session.user.sub,
                        })
                    }).then( res => res.json() )
                    if ( Array.isArray( result ) )
                        session = link.session
                }
                return session
            }
        })
    },
    async logout(req, res) {
        await handleLogout(req, res, {
            returnTo: req.query.returnTo as string | undefined
        })
    }
})
