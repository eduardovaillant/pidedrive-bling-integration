import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { ok, serverError } from '@/presentation/helpers'
import { AddOrder } from '@/domain/usecases'
import { OrderModel } from '@/domain/models'

export class PipedriveWebhookController implements Controller {
  constructor (
    private readonly addOrder: AddOrder
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const body = httpRequest.body

      if (body.current.status === 'won') {
        console.log(body.current)

        const order: OrderModel = {
          clientName: body.current.person_name,
          productCount: body.current.products_count,
          totalValue: body.current.value
        }

        console.log(order)

        await this.addOrder.add(order)
      }

      return ok('')
    } catch (error) {
      console.error(error)
      return serverError(error)
    }
  }
}
