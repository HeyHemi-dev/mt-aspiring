import { Button } from './ui/button'
import { useState } from 'react'
import { SavedTileData } from 'model/tiles'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateTileSave } from '@/api/apiClient'

function SaveButton({ saveData }: { saveData: SavedTileData }) {
  const [saved, setSaved] = useState(saveData.isSaved)
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (newSaveData: SavedTileData) => updateTileSave(newSaveData),
    onMutate: async (newSaveData) => {
      await queryClient.cancelQueries({
        queryKey: ['tiles', newSaveData.tileId],
      })
      const context = { ...saveData }
      setSaved(newSaveData.isSaved)
      return context
    },
    onError: (context: SavedTileData) => {
      setSaved(context.isSaved)
    },
    onSettled: (newSaveData) => {
      setSaved(newSaveData.isSaved)
      queryClient.invalidateQueries({ queryKey: ['tiles', newSaveData.tileId] })
      queryClient.invalidateQueries({ queryKey: ['tiles'] })
    },
  })

  function handleClick() {
    const newSaveData: SavedTileData = {
      ...saveData,
      isSaved: saved === 1 ? 0 : 1,
      updatedAt: Date.now(),
    }
    console.log('Handling save click, new data:', newSaveData)
    mutation.mutate(newSaveData)
  }

  const buttonText = saved === 1 ? 'Saved' : 'Save'

  return <Button onClick={handleClick}>{buttonText}</Button>
}

export default SaveButton
