import { OrderModel } from '@/domain/models/order'

export const blingOrderXmlHelper = (order: OrderModel): string => {
  const xml = `
  <?xml version="1.0" encoding="UTF-8"?>
  <pedido>
  <cliente>
  <nome>${order.clientName}</nome>
  </cliente>
  <itens>
  <item>
  <codigo>001</codigo>
  <descricao>Produto Teste</descricao>
  <un>Pç</un>
  <qtde>${order.productCount}</qtde>
  <vlr_unit>100</vlr_unit>
  </item>
  </itens>
  <parcelas>
  <parcela> 
  <vlr>${order.totalValue}</vlr>
  </parcela>
  </parcelas>
  </pedido>
  `
  return encodeURI(xml)
}
