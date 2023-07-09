import { handleAuth, handleLogin, handleLogout, handleCallback } from '@auth0/nextjs-auth0'

const env = process.env.NODE_ENV
const isDev = env === 'development'
const url = isDev ? 'https://auth.localhost' : 'https://auth.asasvirtuais.com'

export default handleAuth()
