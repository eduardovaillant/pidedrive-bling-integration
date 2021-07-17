import { AddOrderService } from '@/data/services/add-order-service'
import { PipedriveWebhookController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { AxiosHttpClient, PipedriveClient } from '@/infra/clients'

export const makePipedriveWebhookController = (): Controller => {
  const axiosClient = new AxiosHttpClient()
  const pipedriveClient = new PipedriveClient(axiosClient)
  const addOrderService = new AddOrderService(pipedriveClient)
  return new PipedriveWebhookController(addOrderService)
}
