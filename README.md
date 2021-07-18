# Pipedrive-Bling Integration

## Descrição
> A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling

Para efetuar essa integração, criei um webhook na pipedrive (https://pipedrive.readme.io/docs/guide-for-webhooks?ref=api_reference), que faz uma chamada para o endpoint /pipedrive-webhook da API desenvolvida sempre que um negócio é atualizado.

## Endpoints

Base URL = http://18.231.122.132:3000/api/

|  Método   |          Rota                        |         Descrição                          |
|:---------:|:------------------------------------:|:------------------------------------------:|
| `POST`    | /pipedrive-webhook                   | Rota utilizada pelo webhook da Pipedrive   |
| `GET`     | /order-registries                    | Lista todos registros                      |
| `GET`     | /order-registries/?date=yyyy-mm-dd   | Busca um registro pela data                |


## Responses

## Listagem de todos os registros
### `200`
```json
{
  "data": [
    {
      "id": ObjectID,
      "date": string,
      "value": number
    }
  ]
}
```
## Busca de um registro por data

### `200`
```json
{
  "data": {
      "id": ObjectID,
      "date": string,
      "value": number
    }  
}
```

### `404` - Not Found
```json
{
  "detail": "Not found"
}
```

## Erros
### `500` - Internal Server Error
```json
{
  "error": "InternalServerError",
  "detail": string
}
```
