import { LoadOrderRegistryByDateSevice } from '@/data/services'
import { LoadOrderRegistryByDateRepositorySpy } from '@/tests/data/mocks/repositories'

type SutTypes = {
  sut: LoadOrderRegistryByDateSevice
  loadOrderRegistryByDateRepositorySpy: LoadOrderRegistryByDateRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadOrderRegistryByDateRepositorySpy = new LoadOrderRegistryByDateRepositorySpy()
  const sut = new LoadOrderRegistryByDateSevice(loadOrderRegistryByDateRepositorySpy)
  return {
    sut,
    loadOrderRegistryByDateRepositorySpy
  }
}

describe('LoadOrderRegistryByDateSevice', () => {
  test('should call LoadOrderRegistryByDateRepository with correct date', async () => {
    const { sut, loadOrderRegistryByDateRepositorySpy } = makeSut()
    await sut.loadByDate('2021-07-18')
    expect(loadOrderRegistryByDateRepositorySpy.date).toBe('2021-07-18')
  })

  test('should throw if LoadOrderRegistryByDateRepository throws', async () => {
    const { sut, loadOrderRegistryByDateRepositorySpy } = makeSut()
    jest.spyOn(loadOrderRegistryByDateRepositorySpy, 'loadByDate').mockImplementationOnce(() => { throw new Error() })
    const promise = sut.loadByDate('2021-07-18')
    await expect(promise).rejects.toThrow()
  })
})
