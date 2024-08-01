import SignUpForm from '@/components/common/auth/SignUpForm'
import withNoAuth from '@/utils/withNoAuth'

const SignUp = () => {
  return <SignUpForm />
}

export default withNoAuth(SignUp)
