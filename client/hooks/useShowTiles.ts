//import request from 'superagent'
import * as api from './apiClient'
import { Tile } from 'model/tiles'

async function useShowTiles(): Promise<Tile[]> {
  const stub = `/tiles`
  const res = await api.get(stub)
  //throw new Error()
  return res
}

export default useShowTiles
