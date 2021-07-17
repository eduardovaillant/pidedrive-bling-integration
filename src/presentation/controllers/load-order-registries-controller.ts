import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { ok, serverError } from '@/presentation/helpers'
import { LoadOrderRegistries } from '@/domain/usecases'

export class LoadOrderRegistriesController implements Controller {
  constructor (
    private readonly loadOrderRegistries: LoadOrderRegistries
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const registries = await this.loadOrderRegistries.load()
      return ok(registries)
    } catch (error) {
      console.error(error)
      return serverError(error)
    }
  }
}
