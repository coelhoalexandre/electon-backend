# Electon Backend

## Rodando o projeto

Após a clonagem do projeto, é necessário instalar as dependências com o `npm install` e é possível iniciar o projeto com `npm run start` ou `npm run start:dev`, levantar o servidor sem e com watch mode, respectivamente, na porta 8080.

Só que antes de levantar o servidor, esse projeto originalmente usa Prisma Studio com Postgres como banco de dados, entretanto é possível fazer conexões com outras formas de bancos dados, desde que seja possível com o Prisma ORM e provido pelo postgres(provider definido em schema.prism).

É necessário um arquivo `.env` com a variável **DATABASE_URL** que será lida pelo Prisma.

Após isso, será necessário o comando `npm run prisma:migrate` para rodar as migrações e atualiza o cliente do Prisma dos arquivos.

Por fim, também é necessário uma variável **JWT_SECRET** em `.env` com algum valor qualquer, que será usado na criação de JWTs.

## Rotas

- Product - **/product**

  - Post - **/** - Cria um Produto a partir dos dados passados no body. Dados necessários definido em /src/modules/product/dto/create-product.dto.ts.
  - Get - **/** - Ler muitos Produtos e pode receber alguns dados de pesquisa, definido em /src/interfaces/product-query-string.interface.ts.
  - Get - **/popular** - Ler muitos Produtos priorizando aqueles com maiores quantidades de estrelas e também aceita o mesmos dados de pesquisa que a rota acima.
  - Get - **/:slug** - Ler um único produto baseado em seu campo único slug passado por parâmetro.
  - Patch - **/:id** - Atualiza um produto baseado em seu campo de identificação, id, passado por parâmetro com os dados passados, definido em /src/modules/product/dto/update-product.dto.ts.
  - Delete - **/:id** - Remove um produto baseado em campo de identificação, id.

- Category - **/category**

  - Post - **/** - Cria uma categoria a partir dos dados passados no body. Dados necessários definido em /src/category/modules/dto/create-category.dto.ts.
  - Get - **/** - Ler muitas categorias. Um detalhe é que é realizado uma modificação no padrão do objetivo, em que é criada a propriedade totalItems que recebe a quantidade de produtos.
  - Patch - **/:id** - Atualiza um produto baseado em seu campo de identificação, id, passado por parâmetro com os dados passados, definido em /src/modules/category/dto/update-category.dto.ts. (Não atualiza produtos)

- User - **/user**

  - Post - **/** - Cria um usuário a partir dos dados passados no body. Dados necessários definido em /src/user/modules/dto/create-user.dto.ts.
  - Get - **/** - Ler muitos usuários.
  - Get - **/cart-items** - Ler usuários pelo id e retorna seus itens de carrinho. Token de Autenticação no headers.
  - Patch - **/cart-items** - Atualiza o carrinho de produtos do usuário adicionando novos IDs.

- Auth - **/auth**

  - Post - **/** - Devolve (ou não) objeto com token de acesso a partir dos dados passados pelo body. Dados necessários definido /src/auth/modules/dto/create-signin.dto.ts.
  - Get - **/** - Devolve usuário autenticado.

- Cart Item - **/cart-item**

  - Post - **/auth** - Cria um item de carrinho a partir dos dados passados no body e id do usuário na autenticação. Dados necessários para o body definido em /src/modules/product/dto/create-product.dto.ts.
  - Post - **/no-auth** - Cria um item de carrinho a partir dos dados passados no body. Dados necessários para o body definido em /src/modules/product/dto/create-product.dto.ts.
  - Patch - **/auth/:id** - Atualiza exclusivamente a quantidade do item do carrinho identificado pelo id passado pelo parâmetro e o body. Necessário autenticação.
  - Patch - **/no-auth/:id** - Atualiza exclusivamente a quantidade do item do carrinho identificado pelo id passado pelo parâmetro e o body.
  - Delete - **/auth/all** - Remove todos os itens de carrinho de um id de usuário. Necessário autenticação.
  - Delete - **/auth/:id** - Remove um item de carrinho identificado pelo parâmetro id. Necessário autenticação.
  - Delete - **/no-auth/:id** - Remove um item de carrinho identificado pelo parâmetro id.

## Ferramentas Usadas

- NestJS
- Prisma ORM
- Prisma Studio
- TypeScript
- JSON Web Token
- Bcrypt
- Postman

## Objetivos

Iniciar o Prisma
Criar schema de Produtos
Desenvolver Módulo de Produtos
Criar schema de Categorias
Desenvolver Módulo de Categorias
Criar schema de Usuário
Desenvolver Módulo de Usuário
'Hashear' senha do usuário
Desenvolver Módulo de Autenticação
Desenvolver função de Login
Desenvolver Guard para verificação de Autenticação
Criar schema de CartItem
Desenvolver Módulo de CartItem
Finalizar CRUD de Produtos
Finalizar CRUD de Categorias
Finalizar CRUD de Usuários
Finalizar CRUD de CartItem
Criar schema de Marca
Desenvolver Módulo de Marca
Criar schema de Favoritos
Desenvolver Módulo de Favoritos
Criar schema de Reviews
Desenvolver Módulo de Reviews
Criar schema de Variação de Produto
Gerenciar Produto para que haja Variações (Preço, Cores, Marcas, Reviews)
Finalizar CRUD de Marca
Finalizar CRUD de Reviews
Finalizar CRUD de Favoritos
Aprimorar sistema de Autenticação com Refresh Token
Criar schema de Papéis/Permissões
Desenvolver Módulo de Papéis/Permissões
Finalizar CRUD de Papéis/Permissões
Melhorar a Segurança de Leitura de Dados com tratamento de Permissões
Iniciar desenvolvimento do sistema de checkout
Criar schema de Pedidos
Desenvolver Módulo de Pedidos
Finalizar CRUD de Pedidos
Criar schema de Espaços/Lojas Físicos
Desenvolver Módulo de Espaços/Lojas Físicos
Finalizar CRUD de Espaços/Lojas Físicos
Cálculo de Frete
Finalizar o desenvolvimento do sistema de checkout
Criar schema de Post do Blog
Desenvolver Módulo de Post do Blog
Finalizar CRUD de Post do Blog
Tratar os Erros
Tornar o Código mais escalável
Desenvolvimento de um Logging Melhor
Adicionar Testes Automatizados
Refatorar
