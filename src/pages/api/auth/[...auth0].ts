import { handleAuth, handleLogin, handleLogout, handleCallback } from '@auth0/nextjs-auth0'

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
            returnTo: req.query.returnTo as string,
            authorizationParams,
            getLoginState(req) {
                return {
                    returnTo: req.query.returnTo
                }
            }
        })
    },
    async callback(req, res) {
        await handleCallback(req, res, {
            
            afterCallback(_req, res, session, state) {
                if ( state && state.returnTo )
                    res.redirect(decodeURI(state.returnTo))
                console.log(session)
                return session
            }
        })
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
