import { Application } from 'express'
import examplesRouter from './api/controllers/examples/router'
import authRouter from './api/controllers/auth/router'

export default function routes(app: Application): void {
  app.use('/api/v1/testing', examplesRouter)
  app.use('/api/v1/token', authRouter)
}
