import { handleAuth, handleLogin, handleLogout, handleCallback } from '@auth0/nextjs-auth0'

export default handleAuth({
    async login(req, res) {
        await handleLogin(req, res, {
            returnTo: req.query.returnTo as string,
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
