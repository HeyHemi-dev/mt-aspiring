import { useQuery } from '@tanstack/react-query'
import useCurrentUser from './useCurrentUser'
import * as api from '../api/apiClient'
// import { Tile } from 'model/tiles'

function useTile(tileId: number) {
  const userQuery = useCurrentUser()

  const tileQuery = useQuery({
    queryKey: ['tiles', tileId],
    queryFn: () => api.getTileById(tileId, userQuery.data),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: !!userQuery.data,
  })

  return { ...tileQuery }
}

export default useTile
