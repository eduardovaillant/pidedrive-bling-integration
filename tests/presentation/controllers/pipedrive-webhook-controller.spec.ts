import { PipedriveWebhookController } from '@/presentation/controllers'
import { ok, serverError } from '@/presentation/helpers'
import { mockOrderModel } from '@/tests/domain/mocks/order'
import { AddOrderSpy } from '@/tests/presentation/mocks/order'
import { mockPipedriveWebhookRequest } from '@/tests/presentation/mocks/pipedrive-webhook-request'

type SutTypes = {
  sut: PipedriveWebhookController
  addOrderSpy: AddOrderSpy
}

const makeSut = (): SutTypes => {
  const addOrderSpy = new AddOrderSpy()
  const sut = new PipedriveWebhookController(addOrderSpy)
  return {
    sut,
    addOrderSpy
  }
}

describe('PipedriveWebhookController', () => {
  test('should call AddOrder with correct values if status is won', async () => {
    const { sut, addOrderSpy } = makeSut()
    await sut.handle(mockPipedriveWebhookRequest())
    expect(addOrderSpy.orderModel).toEqual(mockOrderModel())
  })

  test('should return 500 if AddOrder throws', async () => {
    const { sut, addOrderSpy } = makeSut()
    jest.spyOn(addOrderSpy, 'add').mockImplementationOnce(() => { throw new Error() })
    const response = await sut.handle(mockPipedriveWebhookRequest())
    expect(response).toEqual(serverError(new Error()))
  })

  test('should return 200 on success', async () => {
    const { sut } = makeSut()
    const response = await sut.handle(mockPipedriveWebhookRequest())
    expect(response).toEqual(ok(''))
  })
})
