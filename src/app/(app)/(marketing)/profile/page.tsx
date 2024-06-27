import ProfileView from '@/components/marketing/profile'
import { getCurrentUser } from '@/lib/authjs-payload-adapter/payload'
import { redirect } from 'next/navigation'
const ProfilePage = async () => {
  const user = await getCurrentUser()

  if (!user) return redirect('/sign-in')

  return (
    <ProfileView user={user} />
  )
}

export default ProfilePage
