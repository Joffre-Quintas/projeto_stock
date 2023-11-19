# Unidades API

Bem-vindo ao Unidades API, um projeto de rede de unidades desenvolvido para gerenciar informações sobre funcionários, produtos, endereços, unidades e relações entre produtos e unidades.

## Tecnologias Utilizadas

- TypeScript
- Express.js
- Prisma
- Swagger

## Estrutura do Projeto

O projeto está organizado em diversos módulos, cada um responsável por uma entidade específica. Aqui está uma breve visão geral da estrutura:

- **`/src/controllers`**: Controladores para lidar com as requisições HTTP.
- **`/prisma/migrations`**:  Esta pasta contém os modelos definidos pelo Prisma, que mapeiam diretamente para as tabelas do banco de dados.
- **`/src/routes`**: Definições das rotas da API.
- **`/src/middleware`**: Validações para as rotas.
- **`/src/swagger.json`**: Documentação Swagger para a API.
- **`/src/utils`**: Verificação dos dados de entrada.

## Endpoints Principais

### Funcionários

- **Listar Todos os Funcionários**
  - Método: GET
  - Rota: `/employee`
  - Retorna uma lista de todos os funcionários.

- **Criar Novo Funcionário**
  - Método: POST
  - Rota: `/employee`
  - Cria um novo funcionário com base nos dados fornecidos no corpo da requisição.

- **Deletar Funcionário Pelo ID**
  - Método: DELETE
  - Rota: `/employee/{id}`
  - Deleta um funcionário com base no ID fornecido na URL.

- **Atualizar Funcionário Pelo ID**
  - Método: PUT
  - Rota: `/employee/{id}`
  - Atualiza um funcionário com base no ID fornecido na URL e nos dados fornecidos no corpo da requisição.

### Produtos

- **Listar Todos os Produtos**
  - Método: GET
  - Rota: `/product`
  - Retorna uma lista de todos os produtos em estoque.

- **Criar Novo Produto**
  - Método: POST
  - Rota: `/product`
  - Cria um novo produto com base nos dados fornecidos no corpo da requisição.

- **Atualizar Produto Pelo ID**
  - Método: PUT
  - Rota: `/product/{id}`
  - Atualiza um produto com base no ID fornecido na URL e nos dados fornecidos no corpo da requisição.

- **Excluir Produto Pelo ID**
  - Método: DELETE
  - Rota: `/product/{id}`
  - Exclui um produto com base no ID fornecido na URL.

### Endereços

- **Listar Todos os Endereços**
  - Método: GET
  - Rota: `/address`
  - Retorna uma lista de todos os endereços cadastrados.

- **Adicionar Novo Endereço**
  - Método: POST
  - Rota: `/address`
  - Adiciona um novo endereço com base nos dados fornecidos no corpo da requisição.

- **Obter Informações de um Endereço**
  - Método: GET
  - Rota: `/address/{id}`
  - Retorna informações detalhadas de um endereço com base no ID fornecido na URL.

- **Atualizar Dados do Endereço**
  - Método: PUT
  - Rota: `/address/{id}`
  - Atualiza os dados de um endereço com base no ID fornecido na URL e nos dados fornecidos no corpo da requisição.

- **Excluir Endereço**
  - Método: DELETE
  - Rota: `/address/{id}`
  - Exclui um endereço com base no ID fornecido na URL.

### Unidades

- **Listar Todas as Unidades**
  - Método: GET
  - Rota: `/unit`
  - Retorna informações sobre todas as unidades cadastradas.

- **Criar Nova Unidade**
  - Método: POST
  - Rota: `/unit`
  - Cria uma nova unidade com base nos dados fornecidos no corpo da requisição.

Para mais detalhes sobre outros endpoints, como relações de produtos e unidades ou consultar o valor total dos ativos por unidade, consulte a [Documentação Swagger](http://localhost:3000/api-docs#/).

## Como Executar o Projeto

1. **Instale as Dependências**
   ```bash
   npm install

2. **Execute a Aplicação**
   ```bash
   npm run dev
