import request from 'superagent'
import { SavedTileData, Tile, TileData } from 'model/tiles'
import { User, UserData } from 'model/users'

const apiPath = '/api/v1'

//List tiles [PUBLIC]
export async function getTiles(currentUser?: User): Promise<Tile[]> {
  let slug = `/tiles`
  //Add query params
  slug = currentUser ? `${slug}?currentUser=${currentUser.id}` : slug

  const res = await request.get(apiPath + slug)
  return res.body
}

//Get a tile [PUBLIC]
export async function getTileById(
  tileId: number,
  currentUser?: User,
): Promise<Tile> {
  let slug = `/tiles/${tileId}`
  //Add query params
  slug = currentUser ? `${slug}?currentUser=${currentUser.id}` : slug

  const res = await request.get(apiPath + slug)
  return res.body
}

//Create a tile
export async function createTile(tileData: TileData): Promise<Tile> {
  const slug = `/tiles`
  const res = await request
    .post(apiPath + slug)
    .send(JSON.stringify(tileData))
    .set('Content-Type', 'application/json')
  return res.body
}

//Get user saved tiles
export async function getSavedTiles(user: User): Promise<Tile[]> {
  const slug = `/tiles/saved/${user.id}`
  const res = await request.get(apiPath + slug)
  return res.body
}

//Save/unsave a tile
export async function updateTileSave(saveData: SavedTileData) {
  console.log('Sending data to server:', saveData) // Log the data you're sending
  const slug = `/tiles/saved`
  const res = await request
    .put(apiPath + slug)
    .send(JSON.stringify(saveData))
    .set('Content-Type', 'application/json')
  console.log('Response from server:', res.body) // Log the server response
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

// Update user details
export async function updateUser(userAuth: string, userData: UserData) {
  const slug = `/users/${userAuth}`
  const res = await request
    .patch(apiPath + slug)
    .send(JSON.stringify(userData))
    .set('Content-Type', 'application/json')
  return res.body
}
