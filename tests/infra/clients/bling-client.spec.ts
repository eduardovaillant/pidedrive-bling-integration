import { BlingClient } from '@/infra/clients'
import { blingOrderXmlHelper } from '@/infra/helpers'
import env from '@/main/config/env'
import { HttpPostSpy } from '@/tests/data/mocks/clients'
import { mockOrderModel } from '@/tests/domain/mocks/order'

type SutTypes = {
  sut: BlingClient
  httpPostSpy: HttpPostSpy
}

const makeSut = (): SutTypes => {
  const httpPostSpy = new HttpPostSpy()
  const sut = new BlingClient(httpPostSpy)
  return {
    sut,
    httpPostSpy
  }
}

describe('BlingClient', () => {
  test('should call HttpPost with correct url', async () => {
    const { sut, httpPostSpy } = makeSut()
    await sut.create(mockOrderModel())
    const xml = blingOrderXmlHelper(mockOrderModel())
    expect(httpPostSpy.params.url).toBe(env.blingBaseUrl + `pedido/json?apikey=${env.blingToken}&xml=${xml}`)
  })

  test('should throw if HttpPost throws', async () => {
    const { sut, httpPostSpy } = makeSut()
    jest.spyOn(httpPostSpy, 'post').mockImplementationOnce(() => { throw new Error() })
    const promise = sut.create(mockOrderModel())
    await expect(promise).rejects.toThrow()
  })

  test('should return the response on success', async () => {
    const { sut, httpPostSpy } = makeSut()
    httpPostSpy.response = {}
    const response = await sut.create(mockOrderModel())
    expect(response).toEqual({})
  })
})
