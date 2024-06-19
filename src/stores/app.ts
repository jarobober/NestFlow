import { defineStore } from 'pinia'
import { useAsyncState } from '@vueuse/core'
import { apiGetUser } from '@/api/users'
import { getSession, removeSession } from '@/utils/session'
import router from '@/router'

export const useAppStore = defineStore('app', {
  state: () => ({
    user: useAsyncState(async () => {
      const session = getSession()
      return await apiGetUser(session.uid)
    }, null)
  }),
  actions: {
    logout() {
      removeSession()
      router.push({ name: 'SignIn' })
    }
  }
})
