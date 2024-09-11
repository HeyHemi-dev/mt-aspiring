import * as api from '../api/apiClient'
import { useQuery } from '@tanstack/react-query'
import useCurrentUser from './useCurrentUser'

function useTilesList() {
  const userQuery = useCurrentUser()

  const tileQuery = useQuery({
    queryKey: ['tiles'],
    queryFn: () => api.getTiles(userQuery.data),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: !!userQuery.data,
  })

  return { ...tileQuery }
}

export default useTilesList
