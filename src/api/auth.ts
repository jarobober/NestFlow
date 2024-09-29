import { http } from '@/utils/request'

/**
 * Sign in with email and password
 * @param {string} email
 * @param {string} password
 */

export function apiAuthSignIn({ email, password }: { email: string; password: string }) {
  return http.post('/users/login', {
    email,
    password
  })
}

/**
 * Sign up with email and password
 * @param {string} email
 * @param {string} password
 */

export function apiAuthSignUp({ email, password }: { email: string; password: string }) {
  return http.post('/users/register', {
    email,
    password
  })
}

/**
 * Refresh token
 * @param {string} refresh_token
 */

export function apiRefreshToken(refresh_token: string) {
  return http.post('/auth/accounts/token/refresh', {
    refresh_token
  })
}
