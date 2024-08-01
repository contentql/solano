import { env } from '@env'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

export const getCurrentUser = async (headers?: Headers) => {
  if (!headers) {
    // this is a client component

    try {
      const res = await fetch(`${env.PAYLOAD_URL}/api/users/me`, {
        credentials: 'include',
      })

      const { user } = await res.json()

      return user
    } catch (error) {
      throw new Error('not authenticated')
    }
  } else {
    // has token, so server component
    const payload = await getPayloadHMR({
      config: configPromise,
    })
    const { user } = await payload.auth({ headers })

    return user
  }
}
