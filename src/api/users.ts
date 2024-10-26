import { http } from '@/utils/request'

/**
 * Get user by uid
 * @param {string} uid
 */

export function apiGetUser(uid: string) {
  // todo: to remove or change after switching to node backend
  return http.get(`/rest/collections/users/${uid}`)
}
