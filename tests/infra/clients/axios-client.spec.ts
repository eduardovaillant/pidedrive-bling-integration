import { AxiosHttpClient } from '@/infra/clients'

import axios from 'axios'

jest.mock('axios', () => ({
  async post (url: string): Promise<any> {
    return 'any_response'
  }
}))

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

describe('AxiosHttpClient', () => {
  test('should call post with correct url', async () => {
    const sut = makeSut()
    const postSpy = jest.spyOn(axios, 'post')
    await sut.post({ url: 'any_url' })
    expect(postSpy).toHaveBeenCalledWith('any_url')
  })

  test('should throw if post throws', async () => {
    const sut = makeSut()
    jest.spyOn(axios, 'post').mockImplementationOnce(() => { throw new Error() })
    const promise = sut.post({ url: 'any_url' })
    await expect(promise).rejects.toThrow()
  })

  test('should return a response on succes', async () => {
    const sut = makeSut()
    const response = await sut.post({ url: 'any_url' })
    expect(response).toBe('any_response')
  })
})
