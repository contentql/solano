import { env } from '@env'

export const getCurrentUser = async () => {
  try {
    const res = await fetch(`${env.PAYLOAD_URL}/api/me`, {
      credentials: 'include',
    })

    const user = await res.json()

    console.log(user, 'from getCUrrent User')
    return user
  } catch (error) {
    throw new Error('not authenticated')
  }
}
