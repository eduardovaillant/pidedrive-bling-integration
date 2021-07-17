import { Controller } from '@/presentation/protocols'
import { PipedriveWebhookController } from '@/presentation/controllers'
import { AddOrderService } from '@/data/services'
import { AxiosHttpClient, PipedriveClient , BlingClient } from '@/infra/clients'

export const makePipedriveWebhookController = (): Controller => {
  const axiosClient = new AxiosHttpClient()
  const pipedriveClient = new PipedriveClient(axiosClient)
  const blingClient = new BlingClient(axiosClient)
  const addOrderService = new AddOrderService(pipedriveClient, blingClient)
  return new PipedriveWebhookController(addOrderService)
}
