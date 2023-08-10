
const env = process.env.AUTH_ENV

const isDev = env === 'development'

const prodURL = 'https://auth.asasvirtuais.com'
const devURL = 'https://auth.asasvirtuais.com'

export const url = isDev ? devURL : prodURL
