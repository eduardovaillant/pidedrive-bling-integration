import { LoadOrderRegistriesService } from '@/data/services'
import { LoadOrderRegistriesRepositorySpy } from '@/tests/data/mocks/repositories'

type SutTypes = {
  sut: LoadOrderRegistriesService
  loadOrderRegistriesRepositorySpy: LoadOrderRegistriesRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadOrderRegistriesRepositorySpy = new LoadOrderRegistriesRepositorySpy()
  const sut = new LoadOrderRegistriesService(loadOrderRegistriesRepositorySpy)
  return {
    sut,
    loadOrderRegistriesRepositorySpy
  }
}

describe('LoadOrderRegistriesService', () => {
  test('should call LoadOrderRegistriesRepository with correct values', async () => {
    const { sut, loadOrderRegistriesRepositorySpy } = makeSut()
    const loadSpy = jest.spyOn(loadOrderRegistriesRepositorySpy, 'load')
    await sut.load()
    expect(loadSpy).toHaveBeenCalled()
  })

  test('should throw if LoadOrderRegistriesRepository throws', async () => {
    const { sut, loadOrderRegistriesRepositorySpy } = makeSut()
    jest.spyOn(loadOrderRegistriesRepositorySpy, 'load').mockImplementationOnce(() => { throw new Error() })
    const promise = sut.load()
    await expect(promise).rejects.toThrow()
  })
})
