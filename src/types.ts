import type { UserIdentity, UserProfile } from 'auth0'
declare global {
    namespace AsasAuth {
        type User = {
            sub: string
            identities: Identity[]
        }
        type Identity = UserIdentity
    }
}
