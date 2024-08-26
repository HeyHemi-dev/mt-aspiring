import supabase from 'server/supabaseClient'
import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const { data } = await supabase.from('tiles').select()
    res.json(data)
  } catch {
    res.status(500)
  }
})

export default router
