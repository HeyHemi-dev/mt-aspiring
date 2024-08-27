import * as api from './apiClient'
import { Tile } from 'model/tiles'

async function useShowTileById(id: string | undefined): Promise<Tile> {
  let tileId = ''

  if (id) {
    tileId = id
    const stub = `/tiles/${tileId}`
    const res = await api.get(stub)
    return res
  } else {
    throw new Error()
  }
}

export default useShowTileById
