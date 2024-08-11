import { http } from '@/utils/request'

/**
 * Get list of lists
 *
 */

export function apiGetLists() {
  return http.get('/todos')
}
