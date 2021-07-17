import { AddOrderService } from '@/data/services/add-order-service'
import { PipedriveWebhookController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { AxiosHttpClient, PipedriveClient } from '@/infra/clients'
import { BlingClient } from '@/infra/clients/bling-client'

export const makePipedriveWebhookController = (): Controller => {
  const axiosClient = new AxiosHttpClient()
  const pipedriveClient = new PipedriveClient(axiosClient)
  const blingClient = new BlingClient(axiosClient)
  const addOrderService = new AddOrderService(pipedriveClient, blingClient)
  return new PipedriveWebhookController(addOrderService)
}
