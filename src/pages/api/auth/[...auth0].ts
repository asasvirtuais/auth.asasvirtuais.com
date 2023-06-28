import { handleAuth, handleLogin, handleLogout, handleCallback } from '@auth0/nextjs-auth0'

const env = process.env.NODE_ENV
const isDev = env === 'development'
const url = isDev ? 'https://auth.localhost' : 'https://auth.asasvirtuais.com'

export default handleAuth({
    async login(req, res) {
        const scope = req.query.scope ? decodeURIComponent(req.query.scope as string) : null
        const connection = req.query.connection as string
        const authorizationParams : {
            connection_scope?: string
            connection?: string
        } = {}
        if ( scope )
            authorizationParams.connection_scope = scope
        if ( connection )
            authorizationParams.connection = connection
        await handleLogin(req, res, {
            authorizationParams,
            getLoginState(req) {
                if ( req.query.returnTo ) {
                    return {
                        returnTo: decodeURIComponent(req.query.returnTo as string)
                    }
                }
                return {}
            }
        })
    },
    async callback(req, res) {
        if ( !! req.query.code && req.query.state === 'token' && !! req.query.returnTo )
            return res.redirect(`${url}/api/auth/token?code=${
                req.query.code
            }&returnTo=${
                decodeURIComponent(req.query.returnTo as string)
            }`)

        await handleCallback(req, res)
    },
    async logout(req, res) {
        const options : {
            returnTo?: string
        } = {}
        if ( req.query.returnTo )
            options.returnTo = decodeURI(req.query.returnTo  as string)
        await handleLogout(req, res, options)
    }
})
