import express from 'express'
import * as db from '../db/index.ts'
import camelcaseKeys from 'camelcase-keys'
import { User } from 'model/users.ts'

const router = express.Router()

//Get a user
router.get('/:userAuth', async (req, res) => {
  try {
    let user = {} as User
    const userAuth = req.params.userAuth

    const data = await db.getUserByKey(userAuth)
    data && (user = camelcaseKeys(data))

    res.json(user)
  } catch {
    res.sendStatus(500)
  }
})

//Check username is available
router.get('/search/:username', async (req, res) => {
  try {
    let users = {} as User[]
    const username = req.params.username

    const data = await db.findUserName(username)
    data && (users = camelcaseKeys(data))

    res.json(users)
  } catch {
    res.sendStatus(500)
  }
})

export default router
