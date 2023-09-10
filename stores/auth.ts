import { defineStore } from 'pinia'

export const useAuth = defineStore({
  id: 'auth',
  state: () => {
    return {
      token: 'token',
      user: {} || ''
    }
  },
  actions: {
    async login(username: string, password: string) {
      console.log('[LOGIN]', username, password)

      this.user = username
    }
  }
})
