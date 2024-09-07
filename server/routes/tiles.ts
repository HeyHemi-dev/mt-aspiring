import express from 'express'
import * as db from '../db/index.ts'
import camelcaseKeys from 'camelcase-keys'
import { SavedTileData } from 'model/tiles.ts'

const router = express.Router()

//Get home feed tiles [PUBLIC]
router.get('/', async (req, res) => {
  try {
    let tiles

    const data = await db.getAllPublicTiles()
    data ? (tiles = camelcaseKeys(data)) : (tiles = [])

    res.json(tiles)
  } catch {
    res.sendStatus(500)
  }
})

//Get a tile [PUBLIC]
router.get('/:id', async (req, res) => {
  try {
    const tileId = req.params.id
    let tile

    const data = await db.getTileById(Number(tileId))
    data ? (tile = camelcaseKeys(data)) : (tile = {})

    res.json(tile)
  } catch {
    res.sendStatus(500)
  }
})

//Get user saved tiles
router.get('/saved/:userId', async (req, res) => {
  try {
    const userId = req.params.userId
    let tiles

    const data = await db.getUserSavedTiles(Number(userId))
    data ? (tiles = camelcaseKeys(data)) : (tiles = [])

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
    console.error(error)
    res.sendStatus(500)
  }
})

export default router
