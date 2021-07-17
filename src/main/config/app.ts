import router from './routes'
import { bodyParser, contentType, cors } from '@/main/middlewares'

import express from 'express'

const app = express()

app.use(bodyParser)
app.use(contentType)
app.use(cors)

app.use('/api', router)

export default app
