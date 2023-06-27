import { handleAuth, handleLogin, handleLogout, handleCallback } from '@auth0/nextjs-auth0'

export default handleAuth({
    async login(req, res) {
        const scope = req.query.scope ? decodeURIComponent(req.query.scope as string) : null
        const authorizationParams : {
            connection_scope?: string
        } = {}
        if ( scope )
            authorizationParams.connection_scope = scope
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
                    res.redirect(decodeURIComponent(state.returnTo))
                console.log(session)
                return session
            }
        })
    },
    async logout(req, res) {
        await handleLogout(req, res, {
            returnTo: req.query.returnTo as string
        })
    }
})
