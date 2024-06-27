import { User } from '@payload-types'

import LeftSideMenu from './LeftSideMenu'
import RightSideContent from './RightSideContent'

const ProfileView = ({ user }: { user: User }) => {
  return (
    <div className='flex w-full flex-col gap-5 bg-transparent px-3 py-20 md:flex-row md:px-16 lg:px-28'>
      <LeftSideMenu />
      <RightSideContent user={user} />
    </div>
  )
}

export default ProfileView
