import { Button } from './ui/button'
import { useState } from 'react'
import { SavedTileData } from 'model/tiles'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateTileSave } from '@/api/apiClient'

function SaveButton({ saveData }: { saveData: SavedTileData }) {
  console.log('saveData being passed as prop', saveData)

  const [saved, setSaved] = useState(saveData.isSaved)
  const queryClient = useQueryClient()

  // const mutation = useMutation(updateTileSave, {
  //   onMutate: async (newSaveData: SavedTileData) => {
  //     await queryClient.cancelQueries(['tiles', newSaveData.tileId])
  //     const previousTile = queryClient.getQueryData([
  //       'tiles',
  //       newSaveData.tileId,
  //     ])
  //     setSaved((prev) => (prev === 1 ? 0 : 1))
  //     return { previousTile }
  //   },
  //   onError: (err, newSaveData, context) => {
  //     if (context?.previousTile) {
  //       queryClient.setQueryData(
  //         ['tiles', newSaveData.tileId],
  //         context.previousTile,
  //       )
  //     }
  //     setSaved(saveData.isSaved)
  //   },
  //   onSettled: (newSaveData) => {
  //     queryClient.invalidateQueries(['tiles', newSaveData.tileId])
  //   },
  // })

  function handleClick() {
    const newSaveData: SavedTileData = {
      ...saveData,
      isSaved: saved === 1 ? 0 : 1,
      updatedAt: Date.now(),
    }
    console.log('Handling save click, new data:', newSaveData)
    updateTileSave(newSaveData)
    // mutation.mutate(newSaveData)
  }

  const buttonText = saved === 1 ? 'Saved' : 'Save'

  return <Button onClick={handleClick}>{buttonText}</Button>
}

export default SaveButton
