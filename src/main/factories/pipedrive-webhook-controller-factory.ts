import { Controller } from '@/presentation/protocols'
import { PipedriveWebhookController } from '@/presentation/controllers'
import { AddOrderService } from '@/data/services'
import { AxiosHttpClient, BlingClient } from '@/infra/clients'

export const makePipedriveWebhookController = (): Controller => {
  const axiosClient = new AxiosHttpClient()
  const blingClient = new BlingClient(axiosClient)
  const addOrderService = new AddOrderService(blingClient)
  return new PipedriveWebhookController(addOrderService)
}
