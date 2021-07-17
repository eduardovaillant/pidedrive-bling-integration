export type HttpPostParams = {
  url: string
}

export interface HttpPost {
  post: (params: HttpPostParams) => Promise<any>
}
