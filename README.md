# API REST com Express e MongoDB

Uma API REST desenvolvida em Node.js para gerenciamento de livros, autores e editoras, utilizando Express como framework web e MongoDB como banco de dados.

## 📋 Sobre o Projeto

Este projeto é uma API REST completa que permite realizar operações CRUD (Create, Read, Update, Delete) em três entidades principais: **Livros**, **Autores** e **Editoras**. O sistema mantém relacionamentos entre essas entidades, onde livros podem estar associados a autores e editoras. Foi desenvolvido como parte do curso da Alura sobre criação de APIs REST com Express e MongoDB.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web para Node.js
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM (Object Data Modeling) para MongoDB
- **dotenv** - Gerenciamento de variáveis de ambiente
- **nodemon** - Ferramenta para desenvolvimento com reinicialização automática

## 📁 Estrutura do Projeto

```
.
├── src/
│   ├── app.js                    # Configuração do Express e middleware
│   ├── config/
│   │   └── dbConnect.js          # Configuração de conexão com MongoDB
│   ├── controllers/
│   │   ├── autorController.js    # Controlador de Autores
│   │   ├── editoraController.js  # Controlador de Editoras
│   │   └── livroController.js    # Controlador de Livros
│   ├── models/
│   │   ├── Autor.js              # Modelo de dados do Autor
│   │   ├── Editora.js            # Modelo de dados da Editora
│   │   └── Livro.js              # Modelo de dados do Livro
│   └── routes/
│       ├── index.js              # Configuração centralizada de rotas
│       ├── autoresRoutes.js      # Rotas de Autores
│       ├── editorasRoutes.js     # Rotas de Editoras
│       └── livrosRoutes.js       # Rotas de Livros
├── server.js                     # Ponto de entrada da aplicação
├── package.json                  # Dependências e scripts do projeto
└── README.md                     # Documentação do projeto
```

## ⚙️ Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) ou MongoDB instalado localmente

## 🔧 Instalação

1. Clone o repositório ou baixe os arquivos do projeto

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto com a seguinte variável:

```env
DB_CONNECTION_STRING=mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/<nome-do-banco>?retryWrites=true&w=majority
```

**Exemplo:**
```env
DB_CONNECTION_STRING=mongodb+srv://usuario:senha123@cluster0.p9othsv.mongodb.net/livraria?retryWrites=true&w=majority
```

> **Nota:** Substitua `<usuario>`, `<senha>`, `<cluster>` e `<nome-do-banco>` pelos valores da sua conexão MongoDB.

## 🏃 Como Executar

### Modo Desenvolvimento

Para executar o projeto em modo desenvolvimento (com reinicialização automática):

```bash
npm run dev
```

### Modo Produção

Para executar o projeto normalmente:

```bash
node server.js
```

O servidor estará rodando em `http://localhost:3000`

## 📚 Endpoints da API

### Rota Raiz

#### GET `/`
Retorna uma mensagem de boas-vindas.

**Resposta (200):**
```
Curso de Node.js
```

---

### 📖 Endpoints de Livros

#### GET `/livros`
Retorna a lista de todos os livros cadastrados.

**Resposta de Sucesso (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "titulo": "O Senhor dos Anéis",
    "editora": {
      "_id": "507f1f77bcf86cd799439012",
      "nome": "Martins Fontes",
      "localizacao": "São Paulo"
    },
    "autor": {
      "_id": "507f1f77bcf86cd799439013",
      "nome": "J.R.R. Tolkien",
      "nacionalidade": "Inglês"
    },
    "preco": 89.90,
    "paginas": 1200
  }
]
```

#### GET `/livros/:id`
Retorna um livro específico pelo ID.

**Parâmetros:**
- `id` (URL) - ID do livro

**Resposta de Sucesso (200):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "titulo": "O Senhor dos Anéis",
  "editora": {
    "_id": "507f1f77bcf86cd799439012",
    "nome": "Martins Fontes",
    "localizacao": "São Paulo"
  },
  "autor": {
    "_id": "507f1f77bcf86cd799439013",
    "nome": "J.R.R. Tolkien",
    "nacionalidade": "Inglês"
  },
  "preco": 89.90,
  "paginas": 1200
}
```

**Resposta de Erro (500):**
```json
{
  "message": "Erro ao encontrar Livro - [detalhes do erro]"
}
```

#### GET `/livros/busca?editora=nomeEditora`
Retorna livros filtrados por editora usando query parameter.

**Parâmetros:**
- `editora` (Query) - Nome da editora

**Resposta de Sucesso (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "titulo": "O Senhor dos Anéis",
    "editora": {...},
    "autor": {...},
    "preco": 89.90,
    "paginas": 1200
  }
]
```

#### POST `/livros`
Cria um novo livro. Requer IDs válidos de autor e editora já cadastrados.

**Body (JSON):**
```json
{
  "titulo": "O Hobbit",
  "editora": "507f1f77bcf86cd799439012",
  "autor": "507f1f77bcf86cd799439013",
  "preco": 49.90,
  "paginas": 320
}
```

**Resposta de Sucesso (201):**
```json
{
  "message": "livro cadastrado com sucesso",
  "livro": {
    "_id": "507f1f77bcf86cd799439014",
    "titulo": "O Hobbit",
    "editora": {...},
    "autor": {...},
    "preco": 49.90,
    "paginas": 320
  }
}
```

**Resposta de Erro (500):**
```json
{
  "message": "Erro ao cadastrar Livro - [detalhes do erro]"
}
```

#### PUT `/livros/:id`
Atualiza um livro existente.

**Parâmetros:**
- `id` (URL) - ID do livro

**Body (JSON):**
```json
{
  "titulo": "O Hobbit - Edição Especial",
  "preco": 59.90
}
```

**Resposta de Sucesso (200):**
```json
{
  "message": "Livro atualizado com sucesso"
}
```

**Resposta de Erro (500):**
```json
{
  "message": "Erro ao atualizar livro - [detalhes do erro]"
}
```

#### DELETE `/livros/:id`
Remove um livro do banco de dados.

**Parâmetros:**
- `id` (URL) - ID do livro

**Resposta de Sucesso (200):**
```json
{
  "message": "Livro deletado com sucesso"
}
```

**Resposta de Erro (500):**
```json
{
  "message": "Erro ao Deletar livro - [detalhes do erro]"
}
```

---

### 👤 Endpoints de Autores

#### GET `/autores`
Retorna a lista de todos os autores cadastrados.

**Resposta de Sucesso (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439013",
    "nome": "J.R.R. Tolkien",
    "nacionalidade": "Inglês"
  }
]
```

#### GET `/autores/:id`
Retorna um autor específico pelo ID.

**Parâmetros:**
- `id` (URL) - ID do autor

**Resposta de Sucesso (200):**
```json
{
  "_id": "507f1f77bcf86cd799439013",
  "nome": "J.R.R. Tolkien",
  "nacionalidade": "Inglês"
}
```

#### POST `/autores`
Cria um novo autor.

**Body (JSON):**
```json
{
  "nome": "George R.R. Martin",
  "nacionalidade": "Americano"
}
```

**Resposta de Sucesso (201):**
```json
{
  "message": "Autor cadastrado com sucesso",
  "autor": {
    "_id": "507f1f77bcf86cd799439015",
    "nome": "George R.R. Martin",
    "nacionalidade": "Americano"
  }
}
```

#### PUT `/autores/:id`
Atualiza um autor existente.

**Parâmetros:**
- `id` (URL) - ID do autor

**Body (JSON):**
```json
{
  "nacionalidade": "Estadunidense"
}
```

**Resposta de Sucesso (200):**
```json
{
  "message": "Autor atualizado com sucesso"
}
```

#### DELETE `/autores/:id`
Remove um autor do banco de dados.

**Parâmetros:**
- `id` (URL) - ID do autor

**Resposta de Sucesso (200):**
```json
{
  "message": "Autor deletado com sucesso"
}
```

---

### 🏢 Endpoints de Editoras

#### GET `/editoras`
Retorna a lista de todas as editoras cadastradas.

**Resposta de Sucesso (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439012",
    "nome": "Martins Fontes",
    "localizacao": "São Paulo"
  }
]
```

#### GET `/editoras/:id`
Retorna uma editora específica pelo ID.

**Parâmetros:**
- `id` (URL) - ID da editora

**Resposta de Sucesso (200):**
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "nome": "Martins Fontes",
  "localizacao": "São Paulo"
}
```

#### POST `/editoras`
Cria uma nova editora.

**Body (JSON):**
```json
{
  "nome": "Companhia das Letras",
  "localizacao": "Rio de Janeiro"
}
```

**Resposta de Sucesso (200):**
```json
{
  "message": "Editora criada com sucesso - [objeto da editora]"
}
```

#### PUT `/editoras/:id`
Atualiza uma editora existente.

**Parâmetros:**
- `id` (URL) - ID da editora

**Body (JSON):**
```json
{
  "localizacao": "Brasília"
}
```

**Resposta de Sucesso (200):**
```json
{
  "message": "Editora atualizada com sucesso"
}
```

#### DELETE `/editoras/:id`
Remove uma editora do banco de dados.

**Parâmetros:**
- `id` (URL) - ID da editora

**Resposta de Sucesso (200):**
```json
{
  "message": "Editora deletada com sucesso - [objeto da editora]"
}
```

---

## 📊 Modelos de Dados

### Modelo Autor

```javascript
{
  _id: ObjectId,           // ID único gerado automaticamente pelo MongoDB
  nome: String,            // Nome do autor (obrigatório)
  nacionalidade: String    // Nacionalidade do autor
}
```

### Modelo Editora

```javascript
{
  _id: ObjectId,           // ID único gerado automaticamente pelo MongoDB
  nome: String,            // Nome da editora (obrigatório)
  localizacao: String      // Localização da editora
}
```

### Modelo Livro

```javascript
{
  _id: ObjectId,           // ID único gerado automaticamente pelo MongoDB
  titulo: String,          // Título do livro (obrigatório)
  editora: {               // Schema embedded da Editora
    _id: ObjectId,
    nome: String,
    localizacao: String
  },
  autor: {                 // Schema embedded do Autor
    _id: ObjectId,
    nome: String,
    nacionalidade: String
  },
  preco: Number,           // Preço do livro
  paginas: Number          // Número de páginas
}
```

> **Nota:** Os modelos Autor e Editora são incorporados (embedded) ao modelo Livro usando schemas do Mongoose, criando um relacionamento entre as entidades.

---

## 🔍 Exemplos de Uso

### Criar um Autor

```bash
curl -X POST http://localhost:3000/autores \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "J.K. Rowling",
    "nacionalidade": "Britânica"
  }'
```

### Criar uma Editora

```bash
curl -X POST http://localhost:3000/editoras \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Rocco",
    "localizacao": "Rio de Janeiro"
  }'
```

### Criar um Livro (usando IDs de autor e editora existentes)

```bash
curl -X POST http://localhost:3000/livros \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Harry Potter e a Pedra Filosofal",
    "editora": "507f1f77bcf86cd799439012",
    "autor": "507f1f77bcf86cd799439013",
    "preco": 39.90,
    "paginas": 309
  }'
```

### Listar todos os livros

```bash
curl http://localhost:3000/livros
```

### Buscar livros por editora

```bash
curl "http://localhost:3000/livros/busca?editora=Martins Fontes"
```

### Buscar um livro por ID

```bash
curl http://localhost:3000/livros/507f1f77bcf86cd799439011
```

### Atualizar um livro

```bash
curl -X PUT http://localhost:3000/livros/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Harry Potter e a Pedra Filosofal - Edição Especial"
  }'
```

### Deletar um livro

```bash
curl -X DELETE http://localhost:3000/livros/507f1f77bcf86cd799439011
```

---

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo desenvolvimento com nodemon
- `npm test` - Executa os testes (ainda não implementado)

---

## 📝 Notas Importantes

- Certifique-se de que a variável de ambiente `DB_CONNECTION_STRING` está configurada corretamente antes de iniciar o servidor
- O servidor roda na porta 3000 por padrão
- A conexão com o MongoDB é estabelecida automaticamente ao iniciar a aplicação
- O projeto utiliza ES Modules (`"type": "module"` no package.json)
- Para cadastrar um livro, é necessário que o autor e a editora já existam no banco de dados
- Os dados de autor e editora são incorporados (embedded) ao documento do livro no MongoDB
- A ordem das rotas é importante: rotas com query parameters (como `/livros/busca`) devem ser declaradas antes de rotas com parâmetros de URL (como `/livros/:id`)

---

## 🤝 Contribuindo

Este é um projeto de aprendizado. Sinta-se à vontade para fazer fork, sugerir melhorias ou reportar problemas!

---

## 📄 Licença

Este projeto está sob a licença ISC.
