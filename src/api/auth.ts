import { http } from '@/utils/request'

/**
 * Sign in with email and password
 * @param {string} email
 * @param {string} password
 */

export function apiAuthSignIn({ email, password }: { email: string; password: string }) {
  return http.post('/auth/accounts/sign-in/email', {
    email,
    password
  })
}
