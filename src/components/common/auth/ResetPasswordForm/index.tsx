'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

import { trpc } from '@/trpc/client'

// import { generateResetPasswordToken, resetPassword } from './actions'

const generateTokenSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
  token: z.string(),
})

// Form component to request a password reset token
export function GenerateResetTokenForm() {
  const form = useForm<z.infer<typeof generateTokenSchema>>({
    resolver: zodResolver(generateTokenSchema),
    mode: 'onBlur',
    defaultValues: { email: '' },
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form

  const {
    mutate: generateResetPasswordTokenMutation,
    isPending: isGeneratePasswordPending,
    isError: isGeneratePasswordError,
    error: generatePasswordError,
    isSuccess: isGeneratePasswordSuccess,
  } = trpc.auth.forgotPassword.useMutation({
    onSuccess: () => {
      toast.success('Please check you mail!')
    },
    onError: () => {
      toast.error('Error sending you mail, try again!')
    },
  })

  const onSubmit = async (data: z.infer<typeof generateTokenSchema>) => {
    generateResetPasswordTokenMutation({
      ...data,
    })
  }

  return (
    <main id='content' role='main' className='mx-auto  w-full max-w-lg p-6'>
      <div className='mt-7 rounded-xl  border-2 border-indigo-300 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800'>
        <div className='p-4 sm:p-7'>
          <div className='text-center'>
            <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
              Forgot password?
            </h1>
            <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
              Remember your password?
              <a
                className='pl-1 font-medium text-blue-600 decoration-2 hover:underline'
                href='/sign-in'>
                SignIn here
              </a>
            </p>
          </div>

          <div className='mt-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='grid gap-y-4'>
                {isGeneratePasswordSuccess && (
                  <p style={{ color: 'green' }}></p>
                )}
                <div>
                  <label
                    htmlFor='email'
                    className='mb-2 ml-1 block text-sm font-bold dark:text-white'>
                    Email address
                  </label>
                  <div className='relative'>
                    <input
                      {...register('email')}
                      type='email'
                      id='email'
                      name='email'
                      className='block w-full rounded-md border-2 border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500'
                      aria-describedby='email-error'
                    />
                  </div>
                  {errors.email && (
                    <p
                      className='mt-2 hidden text-xs text-red-600'
                      id='email-error'>
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <button
                  type='submit'
                  disabled={isGeneratePasswordPending}
                  className='mt-3 inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-opacity-50 dark:focus:ring-offset-gray-800'>
                  {isGeneratePasswordPending ? 'Sending...' : 'Send Reset Link'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

// Form component to reset the password using the provided token
export function ResetPasswordForm({ token }: { token: string }) {
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(resetPasswordSchema),
    mode: 'onBlur',
    defaultValues: { token, password: '' },
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form

  const {
    mutate: resetPasswordMutation,
    isPending: isResetPasswordPending,
    isError: isResetPasswordError,
    error: resetPasswordError,
    isSuccess: isResetPasswordSuccess,
  } = trpc.auth.resetPassword.useMutation({
    onSuccess: () => {
      toast.success('Changed your password!')
      router.push('/sign-in')
    },
    onError: () => {
      toast.error('Not able to change your password, try again!')
    },
  })

  const onSubmit = async (data: z.infer<typeof resetPasswordSchema>) => {
    resetPasswordMutation({
      ...data,
    })
  }

  return (
    <main id='content' role='main' className='mx-auto  w-full max-w-lg p-6'>
      <div className='mt-7 rounded-xl  border-2 border-indigo-300 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800'>
        <div className='p-4 sm:p-7'>
          <div className='text-center'>
            <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
              Almost there!
            </h1>
            <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
              Please enter a new password to reset.
            </p>
          </div>

          <div className='mt-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='grid gap-y-4'>
                {isResetPasswordSuccess && (
                  <p style={{ color: 'green' }}>
                    Successfully changed the password!
                  </p>
                )}
                <div>
                  <label
                    htmlFor='password'
                    className='mb-2 ml-1 block text-sm font-bold dark:text-white'>
                    New Password
                  </label>
                  <div className='relative'>
                    <input
                      {...register('password')}
                      type='password'
                      id='password'
                      name='password'
                      placeholder='● ● ● ● ● ● ● ●'
                      className='block w-full rounded-md border-2 border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500'
                    />
                  </div>
                  {errors.password && (
                    <p
                      className='mt-2 hidden text-xs text-red-600'
                      id='email-error'>
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <button
                  type='submit'
                  disabled={isResetPasswordPending}
                  className='mt-3 inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-opacity-50 dark:focus:ring-offset-gray-800'>
                  {isResetPasswordPending ? 'Processing...' : 'Reset Password'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
