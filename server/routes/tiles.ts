import supabase from 'server/supabaseClient'
import express from 'express'
import camelcaseKeys from 'camelcase-keys'

const router = express.Router()

//Get home feed tiles [PUBLIC]
router.get('/', async (req, res) => {
  try {
    const { data } = await supabase
      .from('tiles')
      .select()
      .eq('is_private', false)

    let tiles
    data ? (tiles = camelcaseKeys(data)) : (tiles = [])

    res.json(tiles)
  } catch {
    res.status(500)
  }
})

//Get a tile [PUBLIC]
router.get('/:id', async (req, res) => {
  try {
    const tileId = req.params.id
    const { data } = await supabase.from('tiles').select().eq('id', tileId)

    let tile
    data ? (tile = camelcaseKeys(data)) : (tile = {})

    res.json(tile)
  } catch {
    res.status(500)
  }
})

//TODO Get all public tiles
// router.post('/', async (req, res) => {
//   try {
//     const newTile = {
//       title: 'Test tile',
//       description: 'This is a new tile, created for testing purposes.',
//       is_private: false,
//     }

//     const { data, error } = await supabase
//       .from('tiles')
//       .insert(newTile)
//       .select()

//     error ? console.log(error.message) : res.json(data)
//   } catch {
//     res.status(500)
//   }
// })

export default router
