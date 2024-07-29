import ProfileView from '@/components/marketing/profile'
import { getCurrentUser } from '@/utils/getCurrentUser'
import { redirect } from 'next/navigation'
const ProfilePage = async () => {
  const user = await getCurrentUser()

  if (!user) return redirect('/sign-in')

  return (
    <ProfileView user={user} />
  )
}

export default ProfilePage
