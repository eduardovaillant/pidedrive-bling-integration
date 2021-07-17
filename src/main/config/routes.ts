
import { adaptRoute } from '@/main/adapters'
import { makePipedriveWebhookController, makeLoadOrderRegistriesController } from '@/main/factories'

import { Router } from 'express'

const router = Router()

router.post('/deal-webhook', adaptRoute(makePipedriveWebhookController()))
router.get('/order-registries', adaptRoute(makeLoadOrderRegistriesController()))

export default router
