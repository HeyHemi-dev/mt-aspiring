import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserData } from 'model/users'
import * as api from '../api/apiClient'

async function useUpdateUser(userAuth: string, userData: UserData) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      await api.updateUser(userAuth, userData)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: [userAuth] })
    },
  })
}

export default useUpdateUser
