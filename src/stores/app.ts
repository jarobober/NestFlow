import { defineStore } from 'pinia'
import { useAsyncState } from '@vueuse/core'
import { apiGetUser } from '@/api/users'
import { getSession } from '@/utils/session'

export const useAppStore = defineStore('app', {
  state: () => ({
    user: useAsyncState(async () => {
      const session = getSession()
      return await apiGetUser(session.uid)
    }, {})
  }),
  actions: {
    getUser() {}
  }
})
