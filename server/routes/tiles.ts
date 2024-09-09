import express from 'express'
import * as db from '../db/index.ts'
import camelcaseKeys from 'camelcase-keys'
import { SavedTileData, Tile } from 'model/tiles.ts'

const router = express.Router()

//Test Route
router.get('/test', async (req, res) => {
  try {
    let records

    const data = await db.getAllSavedTileRecords()
    data ? (records = camelcaseKeys(data)) : (records = [])

    res.json(records)
  } catch {
    res.sendStatus(500)
  }
})

//Get home feed tiles [PUBLIC]
router.get('/', async (req, res) => {
  try {
    let tiles = [] as Tile[]
    let savedBy = null
    const userId = 10 // Replaced with auth

    userId && (savedBy = userId)
    const data = await db.getPublicTiles(savedBy)
    data && (tiles = camelcaseKeys(data))

    res.json(tiles)
  } catch {
    res.sendStatus(500)
  }
})

//Get a tile [PUBLIC]
router.get('/:id', async (req, res) => {
  try {
    let tile = {} as Tile
    let savedBy = null
    const tileId = req.params.id
    const userId = 1 // Replaced with auth

    userId && (savedBy = userId)
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

    // If record exists, check the timestamp and update is_saved if needed
    if (existingRecord) {
      existingRecord = camelcaseKeys(existingRecord)
      if (saveRequest.updatedAt > existingRecord.updatedAt) {
        const updatedRecord = await db.updateSavedTileRecord(saveRequest)
        res.status(204).json(updatedRecord)
      } else {
        res.sendStatus(204)
      }
    }
    // Else create a new record
    else {
      const newRecord = await db.createSavedTileRecord(saveRequest)
      res.status(201).json(newRecord)
    }
  } catch (error) {
    // console.error(error)
    res.sendStatus(500)
  }
})

export default router
