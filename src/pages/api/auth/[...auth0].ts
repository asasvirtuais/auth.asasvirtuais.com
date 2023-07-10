import { handleAuth, handleLogin } from '@auth0/nextjs-auth0'

export default handleAuth({
    async login( req, res ) {
        await handleLogin( req, res, {
            authorizationParams: {
                connection: 'linkedin',
                connection_scope: 'w_member_social'
            }
        } )
    }
})
