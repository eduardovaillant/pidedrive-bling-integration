import { AddOrderService } from '@/data/services'
import { BlingCreateOrderSpy } from '@/tests/data/mocks/clients'
import { AddOrderRegistryRepositorySpy } from '@/tests/data/mocks/repositories'
import { mockOrderModel } from '@/tests/domain/mocks/order'

type SutTypes = {
  sut: AddOrderService
  blingCreateOrderSpy: BlingCreateOrderSpy
  addOrderRegistryRepositorySpy: AddOrderRegistryRepositorySpy
}

const makeSut = (): SutTypes => {
  const blingCreateOrderSpy = new BlingCreateOrderSpy()
  const addOrderRegistryRepositorySpy = new AddOrderRegistryRepositorySpy()
  const sut = new AddOrderService(blingCreateOrderSpy, addOrderRegistryRepositorySpy)
  return {
    sut,
    blingCreateOrderSpy,
    addOrderRegistryRepositorySpy
  }
}

describe('AddOrderService', () => {
  test('should call BlingCreateOrder with correct values', async () => {
    const { sut, blingCreateOrderSpy } = makeSut()
    await sut.add(mockOrderModel())
    expect(blingCreateOrderSpy.orderModel).toEqual(mockOrderModel())
  })

  test('should throw if BlingCreateOrder throws', async () => {
    const { sut, blingCreateOrderSpy } = makeSut()
    jest.spyOn(blingCreateOrderSpy, 'create').mockImplementationOnce(() => { throw new Error() })
    const promise = sut.add(mockOrderModel())
    await expect(promise).rejects.toThrow()
  })

  test('should throw if Bling response status is diferent than 201', async () => {
    const { sut, blingCreateOrderSpy } = makeSut()
    blingCreateOrderSpy.postResponse = { status: 200 }
    const promise = sut.add(mockOrderModel())
    await expect(promise).rejects.toThrow()
  })

  test('should call AddOrderRegistryRepository with correct values', async () => {
    const { sut, addOrderRegistryRepositorySpy } = makeSut()
    await sut.add(mockOrderModel())
    expect(addOrderRegistryRepositorySpy.value).toBe(mockOrderModel().totalValue)
  })

  test('should throw if AddOrderRegistryRepository throws', async () => {
    const { sut, addOrderRegistryRepositorySpy } = makeSut()
    jest.spyOn(addOrderRegistryRepositorySpy, 'add').mockImplementationOnce(() => { throw new Error() })
    const promise = sut.add(mockOrderModel())
    await expect(promise).rejects.toThrow()
  })
})
