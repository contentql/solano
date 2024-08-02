import { User } from '@payload-types'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { ComponentType, ReactNode } from 'react'

import { getCurrentUser } from '@/utils/getCurrentUser'

interface UserProps {
  user: User
}

/**
 * Higher-order component to restrict access to authenticated users.
 * If a user is not authenticated, they will be redirected to the specified path.
 * If the user is authenticated, they can access the wrapped component.
 *
 * @template P - Props type of the wrapped component
 * @param {ComponentType<P & UserProps>} WrappedComponent - The component to wrap, which requires user authentication
 * @param {string} [redirectPath='/sign-in'] - The path to redirect to if the user is not authenticated (defaults to '/sign-in')
 * @returns {ComponentType<P>} - The wrapped component with authentication logic applied
 *
 * @example
 * ```tsx
 * const ProtectedPage = withAuth(MyPageComponent, '/custom-redirect')
 * ```
 */
const withAuth = <P extends object>(
  WrappedComponent: ComponentType<P & UserProps>,
  redirectPath: string = '/sign-in',
): ComponentType<P> => {
  const ComponentWithAuth = async (props: P): Promise<ReactNode> => {
    const headersList = headers()
    const user = await getCurrentUser(headersList)

    if (!user) {
      redirect(redirectPath)
    }

    return <WrappedComponent user={user} {...props} />
  }

  return ComponentWithAuth as ComponentType<P>
}

export default withAuth
