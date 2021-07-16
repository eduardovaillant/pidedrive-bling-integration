
export type Params = {
  url: string
  params: object
}

export interface HttpGetClient {
  get: <T = any> (params: Params) => Promise<T>
}
