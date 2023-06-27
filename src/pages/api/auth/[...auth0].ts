import { handleAuth, handleLogin, handleLogout } from '@auth0/nextjs-auth0'

export default handleAuth({
    async login(req, res) {
        await handleLogin(req, res, {
            returnTo: req.query.returnTo as string,
            authorizationParams: {
                scope: 'openid profile email' + req.query.scope ? ` ${req.query.scope as string}` : ''
            }
        })
    },
    async logout(req, res) {
        await handleLogout(req, res, {
            returnTo: req.query.returnTo as string,
        })
    }
})
