import SignInForm from '@/components/common/auth/SignInForm'
import withNoAuth from '@/utils/withNoAuth'

const SignInPage = () => {
  return <SignInForm />
}

export default withNoAuth(SignInPage)
