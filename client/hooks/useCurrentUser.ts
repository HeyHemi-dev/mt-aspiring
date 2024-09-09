import { useQuery } from '@tanstack/react-query'
import * as api from '../api/apiClient'

async function useCurrentUser() {
  const userAuth = 'e58bfc70-2877-4e58-939d-b4d1e1b2c2a0'

  const { data, isPending, isError } = useQuery({
    queryKey: ['user', userAuth],
    queryFn: () => api.getUser(userAuth),
  })
  return { data, isPending, isError }
}

export default useCurrentUser
