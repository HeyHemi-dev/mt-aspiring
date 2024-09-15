import express from 'express'
import * as db from '../db/index.ts'
import camelcaseKeys from 'camelcase-keys'
import { SavedTile, SavedTileData, Tile, TileData } from 'model/tiles.ts'
import { User } from 'model/users.ts'

const router = express.Router()

//List tiles [PUBLIC]
router.get('/', async (req, res) => {
  try {
    let tiles = [] as Tile[]
    const userId = Number(req.query.currentUser)

    const savedBy = userId ? userId : null
    const data = await db.getPublicTiles(savedBy)
    data && (tiles = camelcaseKeys(data))

    res.json(tiles)
  } catch {
    res.sendStatus(500)
  }
})

//Get a tile [PUBLIC]
router.get('/:tileId', async (req, res) => {
  try {
    let tile = {} as Tile
    const tileId = req.params.tileId
    const userId = Number(req.query.currentUser)

    const savedBy = userId ? userId : null
    const data = await db.getTileById(Number(tileId), savedBy)
    data && (tile = camelcaseKeys(data))

    res.json(tile)
  } catch {
    res.sendStatus(500)
  }
})

//Get user saved tiles
router.get('/saved/:userId', async (req, res) => {
  try {
    let tiles = [] as Tile[]
    const userId = req.params.userId

    const data = await db.getUserSavedTiles(Number(userId))
    data && (tiles = camelcaseKeys(data))

    res.json(tiles)
  } catch {
    res.sendStatus(500)
  }
})

//Save/Unsave a tile
router.put('/saved', async (req, res) => {
  try {
    const saveRequest = req.body as SavedTileData

    // Look for existing saved tile record
    let existingRecord = await db.findSavedTileRecord(
      Number(saveRequest.tileId),
      Number(saveRequest.savedBy),
    )

    // console.log('saveRequest', saveRequest)
    // console.log('existingRecord', existingRecord)

    Number(saveRequest.updatedAt)

    // If record exists, check the timestamp and update is_saved if needed
    if (existingRecord) {
      existingRecord = camelcaseKeys(existingRecord)
      if (saveRequest.updatedAt > existingRecord.updatedAt) {
        let updatedRecords = await db.updateSavedTileRecord(saveRequest)
        updatedRecords = camelcaseKeys(updatedRecords)
        res.status(200).json(updatedRecords[0])
      } else {
        res.status(200).json(existingRecord)
      }
    }
    // Else create a new record
    else {
      let newRecords = await db.createSavedTileRecord(saveRequest)
      newRecords = camelcaseKeys(newRecords)
      res.status(201).json(newRecords[0])
    }
  } catch (error) {
    // console.error(error)
    res.sendStatus(500)
  }
})

//Create a tile
router.post('/', async (req, res) => {
  try {
    //Get the data
    const tileData = req.body as TileData
    const userAuth = tileData.createdBy

    //Create record in tiles table
    let newTiles = await db.createTile(tileData)
    newTiles = camelcaseKeys(newTiles)
    const newTile = newTiles[0] as Tile

    //Get the user info (for userId)
    let user = await db.getUserByAuthRef(userAuth)
    user = camelcaseKeys(user) as User

    //Create user saved tile record
    const saveRequest: SavedTileData = {
      tileId: newTile.id,
      savedBy: user.id,
      isSaved: 1,
      updatedAt: Date.now(),
    }
    let saveRecords = await db.createSavedTileRecord(saveRequest)
    saveRecords = camelcaseKeys(saveRecords)
    const saveRecord = saveRecords[0] as SavedTile

    //Get tile with saved info
    let data = await db.getTileById(newTile.id, saveRecord.savedBy)
    data = camelcaseKeys(data)
    res.json(data)
  } catch {
    res.sendStatus(500)
  }
})

//Create a tile
// router.post('/', async (req, res) => {
//   try {
//     // Get the data
//     const tileData = req.body as TileData
//     console.log('Received tile data:', tileData) // Log incoming request data

//     const userAuth = tileData.createdBy
//     console.log('User auth reference:', userAuth) // Log user auth reference

//     // Create record in tiles table
//     let newTiles = await db.createTile(tileData)
//     console.log('New tile created:', newTiles) // Log after creating a tile

//     newTiles = camelcaseKeys(newTiles)
//     const newTile = newTiles[0] as Tile
//     console.log('Formatted new tile:', newTile) // Log after camelcaseKeys

//     // Get the user info (for userId)
//     let user = await db.getUserByAuthRef(userAuth)
//     console.log('User fetched from db:', user) // Log user data

//     user = camelcaseKeys(user) as User
//     console.log('Formatted user data:', user) // Log after camelcaseKeys

//     // Create user saved tile record
//     const saveRequest: SavedTileData = {
//       tileId: newTile.id,
//       savedBy: user.id,
//       isSaved: 1,
//       updatedAt: Date.now(),
//     }
//     console.log('Save request data:', saveRequest) // Log save request

//     let saveRecords = await db.createSavedTileRecord(saveRequest)
//     console.log('Saved tile record:', saveRecords) // Log saved record

//     saveRecords = camelcaseKeys(saveRecords)
//     const saveRecord = saveRecords[0] as SavedTile
//     console.log('Formatted save record:', saveRecord) // Log after formatting

//     // Get tile with saved info
//     let data = await db.getTileById(newTile.id, saveRecord.savedBy)
//     console.log('Tile with saved info:', data) // Log fetched tile with saved info

//     data = camelcaseKeys(data)
//     res.json(data)
//   } catch (error) {
//     console.error('Error in creating tile:', error) // Log the error message
//     res.sendStatus(500)
//   }
// })

export default router
