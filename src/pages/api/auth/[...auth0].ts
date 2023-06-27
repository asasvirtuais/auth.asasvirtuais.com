import { handleAuth, handleLogin, handleLogout, handleCallback } from '@auth0/nextjs-auth0'

export default handleAuth({
    async callback(req, res) {
        await handleCallback(req, res, {
            redirectUri: req.query.redirectUri as string,
            authorizationParams: {
                scope: (req.query.scope ? `${req.query.scope as string} ` : '') + 'openid profile email',
                redirect_uri: req.query.redirectUri as string,
            }
        })
    },
    async login(req, res) {
        await handleLogin(req, res, {
            returnTo: req.query.returnTo as string,
            authorizationParams: {
                scope: (req.query.scope ? `${req.query.scope as string} ` : '') + 'openid profile email',
                redirect_uri: req.query.redirectUri as string,
            }
        })
    },
    async logout(req, res) {
        await handleLogout(req, res, {
            returnTo: req.query.returnTo as string
        })
    }
})
