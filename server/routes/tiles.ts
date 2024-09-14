import express from 'express'
import * as db from '../db/index.ts'
import camelcaseKeys from 'camelcase-keys'
import { SavedTileData, Tile } from 'model/tiles.ts'

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

// Save/Unsave a tile
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

export default router
