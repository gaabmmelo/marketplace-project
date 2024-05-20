# Projeto Marketplace

Desenvolvimento de um sistema para mercado que permite cadastrar os produtos e tipos, definir o percentual de imposto, e realizar vendas com cálculo de valor e impostos por item.
A tela de venda exibirá produtos, quantidades, valor total, e total de impostos e salvando cada venda realizada.

# Funcionalidades

1. Página inicial do projeto que exibe as opções disponíveis: cadastrar tipo, cadastrar produto e cadastrar venda;
2. Lista dos tipos de produto cadastrado, produtos cadastrados e vendas realizadas;

# Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [ ] Tratamento dos erros no front-end;
- [ ] Implementação de mensagens de sucesso de cadastro do tipo de produto, produto e vendas;
- [ ] Implementação de mensagens de erro de cadastro do tipo de produto, produto e vendas;
- [ ] Implementação de testes unitários utilizando o PHPUnit 11.1.3;
- [ ] Atualização de alguns estados no front-end para atualização depois que adicionado um tipo de produto;
- [ ] Revisão de alguns códigos do back-end;
- [ ] Adição de tipos de impostos no tipo de produto (ISS, FIS...);

# 💻 Pré-requisitos

- PHP 8.3.7;
- php-mysqli;
- Composer;
- PostgresSQL;

# Instalando <marketplace-project>

1.  Clone o repositório e entre na pasta;
2.  Instale as dependência do projeto com o comando `composer install`;
3.  Crie um banco de dados chamado "sales-softexpert";
4.  Execute o backup do banco de dados com o arquivo bd.backup encontrado na raiz do projeto;
5.  Após as configurações do banco de dados, inicie o servidor do PHP com o comando `php -S localhost:8080` dentro da pasta de backend;
6.  Para rodar o front-end, execute o comando `npm start` dentro da pasta frontend;
7.  O projeto web estará disponível em `http://localhost:8000`;

# Endpoints

`GET /products`

```json
[
  {
    "id": "Id do produto cadastrado",
    "product_name": "Nome do produto cadastrado",
    "product_type": "Tipo do produto",
    "product_type_id": "Id do tipo de produto",
    "product_value": "Valor do produto",
    "tax_percentage": "Valor do imposto do tipo do produto",
    "created_at": "Data de cadastro"
  }
]
```

`GET /product_type`

```json
[
  {
    "id": "Id do tipo de produto cadastrado",
    "product_type": "Nome do tipo do produto",
    "tax_percentage": "Valor do imposto do tipo do produto",
    "created_at": "Data de cadastro do tipo do produto"
  }
]
```

`GET /sales`

```json
[
  {
    "id": "Id da venda cadastrada",
    "total_purchase": "Valor total da venda",
    "total_tax": "Valor total do imposto sobre a venda",
    "created_at": "Data da venda"
  }
]
```

`GET /sales_product`

```json
[
  {
    "id": "Id do registro do produto vendido",
    "product_id": "Id do produto vendido",
    "id_sale": "Id da venda realizada",
    "product_quantity": "Quantidade do produto vendido",
    "product_value": "Valor do produto vendido",
    "tax_percentage": "Valor do imposto sobre o produto vendido"
  }
]
```
