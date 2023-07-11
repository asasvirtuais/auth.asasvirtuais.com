import { handleAuth, handleLogin, handleLogout } from '@auth0/nextjs-auth0'

export default handleAuth({
    async login(req, res) {
        await handleLogin(req, res, {
            getLoginState() {
                return {
                    returnTo: req.query.returnTo
                }
            }
        })
    },
    async logout(req, res) {
        if ( req.query.returnTo )
            res.redirect(req.query.returnTo as string)
        await handleLogout(req, res)
    }
})
