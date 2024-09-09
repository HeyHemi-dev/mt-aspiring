import request from 'superagent'
import { Tile } from 'model/tiles'
import { User } from 'model/users'

const apiPath = '/api/v1'

//Get home feed tiles [PUBLIC]
export async function getTiles(): Promise<Tile[]> {
  const slug = `/tiles`
  const res = await request.get(apiPath + slug)
  return res.body
}

//Get a tile [PUBLIC]
export async function getTileById(id: string | undefined): Promise<Tile> {
  let tileId = ''
  if (id) {
    tileId = id
    const slug = `/tiles/${tileId}`
    const res = await request.get(apiPath + slug)
    return res.body
  } else {
    throw new Error()
  }
}

//Get user saved tiles
export async function getSavedTiles(userId: string): Promise<Tile[]> {
  const slug = `/tiles/saved/${userId}`
  const res = await request.get(apiPath + slug)
  return res.body
}

//Get user details
export async function getUser(userAuth: string): Promise<User> {
  const slug = `/users/${userAuth}`
  const res = await request.get(apiPath + slug)
  return res.body
}

//Get users by username
export async function getUsersByUsername(username: string): Promise<User[]> {
  const slug = `/users/search/${username}`
  const res = await request.get(apiPath + slug)
  return res.body
}
