import 'module-alias/register'
import env from '@/main/config/env'
import { MongoHelper } from '@/infra/db'
import { PipeDriveClient } from '@/infra/clients/pipedrive-client'
import { AxiosHttpClient } from '@/infra/http'

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    const http = new AxiosHttpClient()
    const service = new PipeDriveClient(http)
    await service.get(1)
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  })
  .catch(console.error)
