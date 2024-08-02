import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { ComponentType, ReactNode } from 'react'

import { getCurrentUser } from '@/utils/getCurrentUser'

/**
 * Higher-order component to restrict access to authenticated users.
 * If the user is authenticated, they will be redirected to the specified path.
 * If the user is not authenticated, they can access the wrapped component.
 *
 * @template P - Props type of the wrapped component
 * @param {ComponentType<P>} WrappedComponent - The component to wrap
 * @param {string} [redirectPath='/dashboard'] - The path to redirect to if the user is authenticated
 * @returns {ComponentType<P>} - The wrapped component with authentication restriction logic
 *
 * @example
 * ```tsx
 * const NonProtectedPage = withNoAuth(MyPageComponent, '/custom-redirect')
 * ```
 */
const withNoAuth = <P extends object>(
  WrappedComponent: ComponentType<P>,
  redirectPath: string = '/',
): ComponentType<P> => {
  const ComponentWithNoAuth = async (props: P): Promise<ReactNode> => {
    const headersList = headers()
    const user = await getCurrentUser(headersList)

    if (user) {
      redirect(redirectPath)
    }

    return <WrappedComponent {...props} />
  }

  return ComponentWithNoAuth as ComponentType<P>
}

export default withNoAuth
