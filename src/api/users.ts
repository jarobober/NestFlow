import { http } from '@/utils/request'

/**
 * Get user by uid
 * @param {string} uid
 */

export function apiGetUser(uid: string) {
  return http.get(`/rest/collections/users/${uid}`)
}
