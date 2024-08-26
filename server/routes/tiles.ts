//import { createClient } from '@supabase/supabase-js'
import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    //const { data } = await supabase.from('tiles').select()
    const data = 'Hello'
    res.json(data)
  } catch {
    res.status(500)
  }
})

export default router
