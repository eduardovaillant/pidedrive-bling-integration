import { LoadOrderRegistriesController } from '@/presentation/controllers'
import { ok, serverError } from '@/presentation/helpers'
import { LoadOrderRegistriesSpy } from '@/tests/presentation/mocks/order'

type SutTypes = {
  sut: LoadOrderRegistriesController
  loadOrderRegistriesSpydOrderSpy: LoadOrderRegistriesSpy
}

const makeSut = (): SutTypes => {
  const loadOrderRegistriesSpydOrderSpy = new LoadOrderRegistriesSpy()
  const sut = new LoadOrderRegistriesController(loadOrderRegistriesSpydOrderSpy)
  return {
    sut,
    loadOrderRegistriesSpydOrderSpy
  }
}

describe('LoadOrderRegistriesController', () => {
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

  test('should return 200 on success', async () => {
    const { sut, loadOrderRegistriesSpydOrderSpy } = makeSut()
    const response = await sut.handle({})
    expect(response).toEqual(ok(loadOrderRegistriesSpydOrderSpy.registries))
  })
})
