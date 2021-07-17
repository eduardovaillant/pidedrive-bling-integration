import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { ok, serverError } from '@/presentation/helpers'
import { AddOrder } from '@/domain/usecases'

export class PipedriveWebhookController implements Controller {
  constructor (
    private readonly addOrder: AddOrder
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const body = httpRequest.body
      console.log(body.current)
      await this.addOrder.add(body.meta.id)
      return ok('')
    } catch (error) {
      console.error(error)
      return serverError(error)
    }
  }
}
