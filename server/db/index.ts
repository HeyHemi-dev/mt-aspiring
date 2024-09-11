import knexFile from './knexfile.js'
import knex from 'knex'
import { SavedTileData, UserSavedTilesTable, TilesTable } from 'model/tiles.ts'
import { UserData, UsersTable } from 'model/users.ts'

type Environment = 'production' | 'test' | 'development'

const environment = (process.env.NODE_ENV || 'development') as Environment
const config = knexFile[environment]
export const connection = knex(config)

//Database Query Functions

// Tiles Table Queries --- Tiles Table Queries --- Tiles Table Queries

export function getPublicTiles(savedBy: number | null) {
  return connection(TilesTable.table)
    .leftJoin(UserSavedTilesTable.table, function () {
      this.on(TilesTable.id, UserSavedTilesTable.tileId).andOn(
        UserSavedTilesTable.savedBy,
        connection.raw('?', [savedBy]),
      )
    })
    .where(TilesTable.isPrivate, 0)
    .select(TilesTable.all, UserSavedTilesTable.isSaved)
}
// This query function will likely be the first to optimise;
// Especally if adding some kind of ranked sorting.
// look into indexing (tile_id, saved_by, isPrivate)
// and paginating results (.limit and .offset)

export function getTileById(tileId: number, savedBy: number | null) {
  return connection(TilesTable.table)
    .leftJoin(UserSavedTilesTable.table, function () {
      this.on(TilesTable.id, UserSavedTilesTable.tileId).andOn(
        UserSavedTilesTable.savedBy,
        connection.raw('?', [savedBy]),
      )
    })
    .where(TilesTable.id, tileId)
    .select(TilesTable.all, UserSavedTilesTable.isSaved)
    .first()
}

export function getUserSavedTiles(userId: number) {
  return connection(UsersTable.table)
    .where(UsersTable.id, userId)
    .join(UserSavedTilesTable.table, UserSavedTilesTable.savedBy, UsersTable.id)
    .join(TilesTable.table, TilesTable.id, UserSavedTilesTable.tileId)
    .select(TilesTable.all)
}

export function getSavedTileRecord(recordId: number) {
  return connection(UserSavedTilesTable.table)
    .where(UserSavedTilesTable.id, recordId)
    .select()
    .first()
}

export function findSavedTileRecord(tileId: number, userId: number) {
  return connection(UserSavedTilesTable.table)
    .where(UserSavedTilesTable.savedBy, userId)
    .where(UserSavedTilesTable.tileId, tileId)
    .select()
    .first()
}

export function updateSavedTileRecord(data: SavedTileData) {
  return connection(UserSavedTilesTable.table)
    .where(UserSavedTilesTable.savedBy, data.savedBy)
    .where(UserSavedTilesTable.tileId, data.tileId)
    .update({
      is_saved: data.isSaved,
      updated_at: data.updatedAt,
    })
    .returning(UserSavedTilesTable.id)
}

export function createSavedTileRecord(data: SavedTileData) {
  return connection(UserSavedTilesTable.table)
    .insert({
      saved_by: data.savedBy,
      tile_id: data.tileId,
      is_saved: data.isSaved,
      updated_at: data.updatedAt,
    })
    .returning(UserSavedTilesTable.id)
}

export function getAllSavedTileRecords() {
  return connection(UserSavedTilesTable.table).select()
}

// Users Table Queries --- Users Table Queries --- Users Table Queries

export function getUserById(userId: number) {
  return connection(UsersTable.table)
    .where(UsersTable.id, userId)
    .select()
    .first()
}

export function getUserByAuthRef(userAuth: string) {
  return connection(UsersTable.table)
    .where(UsersTable.userAuth, userAuth)
    .select()
    .first()
}

export function findUserName(username: string) {
  return connection(UsersTable.table)
    .where(UsersTable.username, username)
    .select()
}

export function updateUserByAuthRef(userAuth: string, userData: UserData) {
  console.log('dbFn', userAuth, userData)
  const data = connection(UsersTable.table)
    .where(UsersTable.userAuth, userAuth)
    .update({
      username: userData.username,
      name: userData.name,
      user_type: userData.userType,
    })
    .returning(UsersTable.id)
  return data
}
