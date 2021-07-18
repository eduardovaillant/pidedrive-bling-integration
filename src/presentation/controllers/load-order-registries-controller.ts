import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { notFound, ok, serverError } from '@/presentation/helpers'
import { LoadOrderRegistries, LoadOrderRegistryByDate } from '@/domain/usecases'

export class LoadOrderRegistriesController implements Controller {
  constructor (
    private readonly loadOrderRegistries: LoadOrderRegistries,
    private readonly loadOrderRegistryByDate: LoadOrderRegistryByDate
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const date = httpRequest.query?.date
      if (date) {
        const registry = await this.loadOrderRegistryByDate.loadByDate(date)
        return registry ? ok(registry) : notFound()
      }
      const registries = await this.loadOrderRegistries.load()
      return ok(registries)
    } catch (error) {
      console.error(error)
      return serverError(error)
    }
  }
}
