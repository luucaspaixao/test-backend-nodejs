### No projeto foi utilizado o MongoDB, Mongoose, Express e Nodemon

Primeiramente deve-se instalar as dependências do projeto com o comando:
`yarn` ou `npm install`

Após instalado as dependências, iniciar o projeto com o comando:

`npx nodemon` ou `node server.js`

------------


**Rotas disponíveis:**

**GET:**
- Listar todos os produtos: http://localhost:3333/products
- Filtrar produtos: 
  http://localhost:3333/products?name=titledoproduto 
  ou 
  http://localhost:3333/products?category=categoriadoproduto
- Procurar um produto: http://localhost:3333/products/:id

**POST:**
- Criar um produto: http://localhost:3333/products

**UPDATE:**
- Atualizar/Alterar um produto: http://localhost:3333/products/:id

**DELETE:**
- Deletar um produto: - http://localhost:3333/products/:id

------------

**Projeto realizado por: 
Nome: Lucas Rodrigues Paixão
E-mail: luucaspaixao1997@yahoo.com**