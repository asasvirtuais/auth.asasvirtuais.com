import { handleAuth, handleLogin, handleLogout, handleCallback } from '@auth0/nextjs-auth0'

export default handleAuth({
    async callback(req, res) {
        await handleCallback(req, res, {
            afterCallback(req, res, session, state) {
                if ( req.query.returnTo )
                    res.redirect(req.query.returnTo as string)
                return session
            }
        })
    },
})
