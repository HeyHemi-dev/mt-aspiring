import request from 'superagent'
//import * as api from './apiClient'
import { Tile } from 'model/tiles'

async function useShowTiles(): Promise<Tile[]> {
  const stub = `/tiles`
  //const res = await api.get(stub)
  const res = await request.get(`/api/v1${stub}`)
  return res.body
}

export default useShowTiles