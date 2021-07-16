
export type HttpGetParams = {
  url: string
  params: object
}

export interface HttpGetClient {
  get: <T = any> (params: HttpGetParams) => Promise<T>
}
