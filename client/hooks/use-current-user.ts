import { useQuery } from '@tanstack/react-query'
import * as api from '../api/apiClient'

function useCurrentUser() {
  const userAuth = 'e58bfc70-2877-4e58-939d-b4d1e1b2c2a0' //TODO replace with authentication sub

  const query = useQuery({
    queryKey: ['currentUser'],
    queryFn: () => api.getUser(userAuth),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })
  return { ...query }
}

export default useCurrentUser
