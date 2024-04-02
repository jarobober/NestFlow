import axios from 'axios'
import { getSession } from '@/utils/session'

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT
})

http.interceptors.request.use(
  function (config) {
    const sessionData = getSession()

    // If token exists, add it to the request headers
    // if (Object.keys(sessionData).length) {
    //   config.headers.Authorization = `Bearer ${token}`
    // } else {
    //   // If token doesn't exist, redirect to sign-in page
    //   // TODO: handle router instead of location.href
    //   window.location.href = '/sign-in'
    // }

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
