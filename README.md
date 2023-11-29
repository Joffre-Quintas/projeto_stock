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

<!-- ## 🤝 Colaboradores -->

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/joffre-quintas">
        <img src="https://avatars.githubusercontent.com/u/117463401?v=4" width="100px;" alt="Foto do Joffre Quintas no Github"/><br>
        <sub>
          <b>Joffre Quintas</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Gabpnavarro">
        <img src="https://avatars.githubusercontent.com/u/118223745?v=4" width="100px;" alt="Foto do Gabriel Navarro no GitHub"/><br>
        <sub>
          <b>Gabriel Navarro</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
