
import { adaptRoute } from '@/main/adapters'
import { makePipedriveWebhookController } from '@/main/factories'

import { Router } from 'express'

const router = Router()

router.post('/deal-webhook', adaptRoute(makePipedriveWebhookController()))

export default router
