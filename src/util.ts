const env = process.env.AUTH_ENV

const isDev = env === 'development'

const devURL = process.env.AUTH0_BASE_URL
const prodURL = process.env.AUTH0_BASE_URL_PROD

export const domain = process.env.AUTH0_DOMAIN as string
export const tenantURL = process.env.AUTH0_ISSUER_BASE_URL as string
export const clientId = process.env.AUTH0_CLIENT_ID as string

export const url = isDev ? devURL : prodURL
