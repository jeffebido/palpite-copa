
# Palpite da Copa

API  em TS, Express e Prisma estruturado em layered architecture. Objetiva ser Um CRUD simples para palpites dos jogos da Copa do Mundo.




## Documentação da API

#### Cria novo palpite

```http
  POST /palpite
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `jogoId` | `int` | **Obrigatório**. Id do Jogo |
| `userId` | `int` | **Obrigatório**. Id do usuário que fará o palpite |
| `palpiteCasa` | `int` | **Obrigatório**. Quantidade de gols time da casa |
| `palpiteFora` | `int` | **Obrigatório**. Quantidade de gols time de fora |

#### Retorna palpites de usuário

```http
  GET /palpites/${userId}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `userId`      | `int` | **Obrigatório**. O ID do usuário que quer filtrar|


#### Deleta Palpite

```http
  DELETE /palpite/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do palpite a ser deletado|

#### Abre jogo para novos palpites

```http
  PUT /abreJogo/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do palpite|

#### Fecha jogo para novos palpites

```http
  PUT /fechaJogo/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do palpite|



