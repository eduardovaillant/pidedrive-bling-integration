
export type HttpGetParams = {
  url: string
  params: object
}

export interface HttpGet {
  get: (params: HttpGetParams) => Promise<any>
}
