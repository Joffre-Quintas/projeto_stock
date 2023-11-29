# Estoque

Este projeto é uma solução abrangente para redes de distribuição de produtos, oferecendo uma API RESTful dedicada ao gerenciamento eficiente de informações. 🌐 Além de monitorar o estoque, nossa API integra dados cruciais sobre unidades, produtos, funcionários, endereços e relação do produto e unidade.

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

## Documentação

A documentação da API, com seus endpoints, opções de requisições e possíveis respostas estarão no link [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Como Executar o Projeto

1. **Instale as Dependências**
   ```bash
   npm install

2. **Execute a Aplicação**
   ```bash
   npm run dev
