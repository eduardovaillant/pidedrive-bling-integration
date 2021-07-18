import { LoadOrderRegistriesController } from '@/presentation/controllers'
import { notFound, ok, serverError } from '@/presentation/helpers'
import { LoadOrderRegistriesSpy, LoadOrderRegistryByDateSpy } from '@/tests/presentation/mocks/order'

type SutTypes = {
  sut: LoadOrderRegistriesController
  loadOrderRegistriesSpydOrderSpy: LoadOrderRegistriesSpy
  loadOrderRegistryByDateSpy: LoadOrderRegistryByDateSpy
}

const makeSut = (): SutTypes => {
  const loadOrderRegistriesSpydOrderSpy = new LoadOrderRegistriesSpy()
  const loadOrderRegistryByDateSpy = new LoadOrderRegistryByDateSpy()
  const sut = new LoadOrderRegistriesController(loadOrderRegistriesSpydOrderSpy, loadOrderRegistryByDateSpy)
  return {
    sut,
    loadOrderRegistriesSpydOrderSpy,
    loadOrderRegistryByDateSpy
  }
}

describe('LoadOrderRegistriesController', () => {
  test('should call LoadOrderRegistryByDate if date is provided', async () => {
    const { sut, loadOrderRegistryByDateSpy } = makeSut()
    const date = '2021-07-18'
    await sut.handle({ query: { date } })
    expect(loadOrderRegistryByDateSpy.date).toBe(date)
  })

  test('should return 500 if LoadOrderRegistryByDate throws', async () => {
    const { sut, loadOrderRegistryByDateSpy } = makeSut()
    jest.spyOn(loadOrderRegistryByDateSpy, 'loadByDate').mockImplementationOnce(() => { throw new Error() })
    const date = '2021-07-18'
    const response = await sut.handle({ query: { date } })
    expect(response).toEqual(serverError(new Error()))
  })

  test('should return 200 on LoadOrderRegistryByDate success', async () => {
    const { sut, loadOrderRegistryByDateSpy } = makeSut()
    const date = '2021-07-18'
    const response = await sut.handle({ query: { date } })
    expect(response).toEqual(ok(loadOrderRegistryByDateSpy.registry))
  })

  test('should return 404 if LoadOrderRegistryByDate returns null', async () => {
    const { sut, loadOrderRegistryByDateSpy } = makeSut()
    loadOrderRegistryByDateSpy.registry = null
    const date = '2021-07-18'
    const response = await sut.handle({ query: { date } })
    expect(response).toEqual(notFound())
  })

  test('should call LoadOrderRegistries', async () => {
    const { sut, loadOrderRegistriesSpydOrderSpy } = makeSut()
    const loadSpy = jest.spyOn(loadOrderRegistriesSpydOrderSpy, 'load')
    await sut.handle({})
    expect(loadSpy).toHaveBeenCalled()
  })

  test('should return 500 if LoadOrderRegistries throws', async () => {
    const { sut, loadOrderRegistriesSpydOrderSpy } = makeSut()
    jest.spyOn(loadOrderRegistriesSpydOrderSpy, 'load').mockImplementationOnce(() => { throw new Error() })
    const response = await sut.handle({})
    expect(response).toEqual(serverError(new Error()))
  })

  test('should return 200 on LoadOrderRegistries success', async () => {
    const { sut, loadOrderRegistriesSpydOrderSpy } = makeSut()
    const response = await sut.handle({})
    expect(response).toEqual(ok(loadOrderRegistriesSpydOrderSpy.registries))
  })
})
