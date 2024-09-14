import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserData } from 'model/users'
import * as api from '../api/apiClient'

function useUpdateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      userAuth,
      userData,
    }: {
      userAuth: string
      userData: UserData
    }) => {
      await api.updateUser(userAuth, userData)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['currentUser'] })
    },
  })
}

export default useUpdateUser
