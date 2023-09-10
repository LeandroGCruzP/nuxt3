import axios from 'axios'
import { defineStore } from 'pinia'

export const useUsers = defineStore({
  id: 'user',
  state: () => ({
    users: [],
  }),

  actions: {
    async listUsers() {
      try {
        const response = await axios.get('https://64fe3caf596493f7af7eff02.mockapi.io/users')
        this.users = response.data
      } catch (error) {
        console.error('Erro ao buscar os usuários')
        this.users = []
      }
    },
  },
})
