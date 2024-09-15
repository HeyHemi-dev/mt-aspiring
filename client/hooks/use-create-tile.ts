import { useMutation, useQueryClient } from '@tanstack/react-query'
import { TileData } from 'model/tiles'
import * as api from '../api/apiClient'

function useCreateTile() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ tileData }: { tileData: TileData }) => {
      return await api.createTile(tileData)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['tiles'] })
    },
  })
}

export default useCreateTile
