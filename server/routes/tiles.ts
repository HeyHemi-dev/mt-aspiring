import supabase from 'server/supabaseClient'
import express from 'express'

const router = express.Router()

//Get all public tiles
router.get('/', async (req, res) => {
  try {
    const { data } = await supabase
      .from('tiles')
      .select()
      .eq('is_private', false)
    res.json(data)
  } catch {
    res.status(500)
  }
})

//TODO Get all public tiles
router.post('/', async (req, res) => {
  try {
    const newTile = {
      title: 'Test tile',
      description: 'This is a new tile, created for testing purposes.',
      is_private: false,
    }

    const { data, error } = await supabase
      .from('tiles')
      .insert(newTile)
      .select()

    error ? console.log(error.message) : res.json(data)
  } catch {
    res.status(500)
  }
})

export default router
