export interface TileData {
  imagePath: string | null
  title: string
  description?: string | null
  createdAt: string //timestamp
  createdBy: string //uuid
  isPrivate?: 1 | 0
  locationId?: string | number | null
}

export interface Tile extends TileData {
  id: number
  isSaved?: 1 | 0 | null
  savedBy?: number | null
}

export const TilesTable = {
  table: 'tiles',
  all: 'tiles.*',
  id: 'tiles.id',
  imagePath: 'tiles.image_path',
  title: 'tiles.title',
  description: 'tiles.description',
  createdAt: 'tiles.created_at',
  createdBy: 'tiles.created_by',
  isPrivate: 'tiles.is_private',
  locationId: 'tiles.location_id',
}

//user_saved_tiles junction table
export interface SavedTileData {
  savedBy: number //user id
  tileId: number //tile id
  isSaved: 1 | 0
  updatedAt: number //unix date
}

export interface SavedTile extends SavedTileData {
  id: number
}

export const UserSavedTilesTable = {
  table: 'user_saved_tiles',
  all: 'user_saved_tiles.*',
  id: 'user_saved_tiles.id',
  savedBy: 'user_saved_tiles.saved_by',
  tileId: 'user_saved_tiles.tile_id',
  isSaved: 'user_saved_tiles.is_saved',
  updatedAt: 'user_saved_tiles.updated_at',
}
