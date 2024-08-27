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
