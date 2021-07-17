export interface AddOrder {
  add: (dealId: number) => Promise<void>
}
