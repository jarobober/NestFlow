import { http } from '@/utils/request'

/**
 * Get list of lists
 */

export function apiGetLists() {
  return http.get('/todos')
}

/**
 * Create list
 */

interface ListItem {
  name: string
  completed: boolean
}

interface ListData {
  listName: string
  items: ListItem[]
}

export function apiPostList(payload: ListData) {
  return http.post('/todos', payload)
}
