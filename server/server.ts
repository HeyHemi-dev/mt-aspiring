import * as Path from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'
import tileRoutes from './routes/tiles'
import userRoutes from './routes/users'

const server = express()

server.use(express.json())
server.use(cors('*' as CorsOptions))

// Server Routes
server.use('/api/v1/tiles', tileRoutes)
server.use('/api/v1/users', userRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
