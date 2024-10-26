import axios from 'axios'
import { apiRefreshToken } from '@/api/auth'
import { getSession, saveSession, removeSession } from '@/utils/session'
import router from '@/router'

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT
})

http.interceptors.request.use(
  function (config) {
    const sessionData = getSession()

    // If token exists, add it to the request headers
    if (Object.keys(sessionData).length) {
      config.headers.Authorization = sessionData.token
    } else {
      // If token doesn't exist, redirect to sign-in page
      router.push({ name: 'SignIn' })
    }

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  function (response) {
    // Any status code that lies within the range of 2xx causes this function to trigger
    return response
  },
  async function (error) {
    const originalRequest = error.config

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const sessionData = getSession()
        const newTokenData = await apiRefreshToken(sessionData.refreshToken) // Implement your refreshToken function
        saveSession(newTokenData)
        originalRequest.headers.Authorization = newTokenData.token
        return http(originalRequest) // Retry the original request with new token
      } catch (refreshError) {
        removeSession()
        router.push({ name: 'SignIn' })
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)
