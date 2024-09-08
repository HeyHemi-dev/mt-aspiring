import knexFile from './knexfile.js'
import knex from 'knex'
import { SavedTileData, UserSavedTilesTable, TilesTable } from 'model/tiles.ts'
import { UsersTable } from 'model/users.ts'

type Environment = 'production' | 'test' | 'development'

const environment = (process.env.NODE_ENV || 'development') as Environment
const config = knexFile[environment]
export const connection = knex(config)

//Server Functions

export function getAllPublicTiles() {
  return connection('tiles').where(TilesTable.isPrivate, 0).select()
}

export function getAllPublicTilesWithSavedStatus(userId: number) {
  return connection('tiles')
    .leftJoin('user_saved_tiles', function () {
      this.on(
        `tiles.${TilesTable.id}`,
        `user_saved_tiles.${UserSavedTilesTable.tileId}`,
      ).andOn(
        `user_saved_tiles.${UserSavedTilesTable.savedBy}`,
        userId.toString(),
      )
    })
    .where('tiles.is_private', 0)
    .select('tiles.*', `user_saved_tiles.${UserSavedTilesTable.isSaved}`)
}

export function getTileById(tileId: number) {
  return connection('tiles').where(TilesTable.id, tileId).select().first()
}

export function getUserSavedTiles(userId: number) {
  return connection('users')
    .where(`users.${UsersTable.id}`, userId)
    .join(
      'user_saved_tiles',
      `user_saved_tiles.${UserSavedTilesTable.savedBy}`,
      `users.${UsersTable.id}`,
    )
    .join(
      'tiles',
      `tiles.${TilesTable.id}`,
      `user_saved_tiles.${UserSavedTilesTable.tileId}`,
    )
    .select('tiles.*')
}

export function getSavedTileRecord(recordId: number) {
  return connection('user_saved_tiles')
    .where(UserSavedTilesTable.id, recordId)
    .select()
    .first()
}

export function findSavedTileRecord(tileId: number, userId: number) {
  return connection('user_saved_tiles')
    .where(UserSavedTilesTable.savedBy, userId)
    .where(UserSavedTilesTable.tileId, tileId)
    .select()
    .first()
}

export function updateSavedTileRecord(data: SavedTileData) {
  return connection('user_saved_tiles')
    .where(UserSavedTilesTable.savedBy, data.savedBy)
    .where(UserSavedTilesTable.tileId, data.tileId)
    .update({
      [UserSavedTilesTable.isSaved]: data.isSaved,
      [UserSavedTilesTable.updatedAt]: data.updatedAt,
    })
    .returning(UserSavedTilesTable.id)
}

export function createSavedTileRecord(data: SavedTileData) {
  return connection('user_saved_tiles')
    .insert({
      [UserSavedTilesTable.savedBy]: data.savedBy,
      [UserSavedTilesTable.tileId]: data.tileId,
      [UserSavedTilesTable.isSaved]: data.isSaved,
      [UserSavedTilesTable.updatedAt]: data.updatedAt,
    })
    .returning(UserSavedTilesTable.id)
}

export function getAllSavedTileRecords() {
  return connection('user_saved_tiles').select()
}
