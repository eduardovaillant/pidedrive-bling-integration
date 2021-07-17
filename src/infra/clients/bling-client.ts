import { BlingAddOrder, HttpPost } from '@/data/protocols'
import env from '@/main/config/env'

export class BlingClient implements BlingAddOrder {
  constructor (
    private readonly httpPost: HttpPost
  ) {}

  async add (order: any): Promise<any> {
    const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <pedido>
     <cliente>
     <nome>Teste 2</nome>
     <tipoPessoa>J</tipoPessoa>
     <cpf_cnpj>14736694000134</cpf_cnpj>
     <ie>3067663000</ie>  
     <fone>5481153376</fone>
     <email>teste@teste.com.br</email>
     </cliente>
     <itens>
     <item>
     <codigo>001</codigo>
     <descricao>Produto Teste</descricao>
     <un>Pç</un>
     <qtde>10</qtde>
     <vlr_unit>100</vlr_unit>
     </item>
     </itens>
     <parcelas>
     <parcela> 
     <vlr>1000</vlr>
     </parcela>
     </parcelas>
    </pedido>
    `
    const response = await this.httpPost.post({
      url: env.blingBaseUrl + `pedido/json?apikey=${env.blingToken}&xml=${encodeURI(xml)}`
    })
    return response
  }
}
