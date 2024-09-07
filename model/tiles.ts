export interface TileData {
  imagePath?: string
  title?: string
  description?: string
  createdAt?: Date
  createdBy?: string
  isPrivate?: boolean
}

export interface Tile extends TileData {
  id: string
}

export const TilesTable = {
  id: 'id',
  imagePath: 'image_path',
  title: 'title',
  description: 'description',
  createdAt: 'created_at',
  createdBy: 'created_by',
  isPrivate: 'is_private',
  locationId: 'location_id',
}

//user_saved_tiles junction table
export interface SavedTileData {
  savedBy: string
  tileId: string
  isSaved: boolean
  updatedAt: number //Unix date
}

export interface SavedTile extends SavedTileData {
  id: string
}

export const UserSavedTilesTable = {
  id: 'id',
  savedBy: 'saved_by',
  tileId: 'tile_id',
  isSaved: 'is_saved',
  updatedAt: 'updated_at',
}
