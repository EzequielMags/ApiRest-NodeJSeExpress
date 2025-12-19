# API REST com Express e MongoDB

Uma API REST desenvolvida em Node.js para gerenciamento de livros, utilizando Express como framework web e MongoDB como banco de dados.

## 📋 Sobre o Projeto

Este projeto é uma API REST completa que permite realizar operações CRUD (Create, Read, Update, Delete) em uma coleção de livros. Foi desenvolvido como parte do curso da Alura sobre criação de APIs REST com Express e MongoDB.

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
│   ├── app.js              # Configuração do Express e rotas
│   ├── config/
│   │   └── dbConnect.js    # Configuração de conexão com MongoDB
│   └── models/
│       └── Livro.js        # Modelo de dados do Livro
├── server.js               # Ponto de entrada da aplicação
├── package.json            # Dependências e scripts do projeto
└── README.md               # Documentação do projeto
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

### GET `/`
Retorna uma mensagem de boas-vindas.

**Resposta:**
```
manda-lhe o pix
```

### GET `/livros`
Retorna a lista de todos os livros cadastrados.

**Resposta de Sucesso (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "titulo": "O Senhor dos Anéis",
    "editora": "Martins Fontes",
    "preco": 89.90,
    "paginas": 1200
  }
]
```

### GET `/livros/:id`
Retorna um livro específico pelo ID.

**Parâmetros:**
- `id` (URL) - ID do livro

**Resposta de Sucesso (200):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "titulo": "O Senhor dos Anéis",
  "editora": "Martins Fontes",
  "preco": 89.90,
  "paginas": 1200
}
```

**Resposta de Erro (400):**
```
coloque o id correto
```

### POST `/livros`
Cria um novo livro.

**Body (JSON):**
```json
{
  "titulo": "O Hobbit",
  "editora": "HarperCollins",
  "preco": 49.90,
  "paginas": 320
}
```

**Resposta de Sucesso (201):**
```
livro cadastrado com sucesso
```

**Resposta de Erro (500):**
```
Erro interno do servidor
```

### PUT `/livros/:id`
Atualiza um livro existente.

**Parâmetros:**
- `id` (URL) - ID do livro

**Body (JSON):**
```json
{
  "titulo": "O Hobbit - Edição Especial"
}
```

**Resposta de Sucesso (200):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "titulo": "O Hobbit - Edição Especial",
  "editora": "HarperCollins",
  "preco": 49.90,
  "paginas": 320
}
```

**Resposta de Erro (404):**
```
Livro não encontrado
```

### DELETE `/livros/:id`
Remove um livro do banco de dados.

**Parâmetros:**
- `id` (URL) - ID do livro

**Resposta de Sucesso (200):**
```
livro apagado com sucesso
```

**Resposta de Erro (404):**
```
Livro não encontrado
```

## 📊 Modelo de Dados

O modelo `Livro` possui os seguintes campos:

```javascript
{
  _id: ObjectId,        // ID único gerado automaticamente pelo MongoDB
  titulo: String,       // Título do livro (obrigatório)
  editora: String,      // Editora do livro
  preco: Number,        // Preço do livro
  paginas: Number       // Número de páginas
}
```

## 🔍 Exemplos de Uso

### Criar um novo livro
```bash
curl -X POST http://localhost:3000/livros \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Clean Code",
    "editora": "Alta Books",
    "preco": 89.90,
    "paginas": 425
  }'
```

### Listar todos os livros
```bash
curl http://localhost:3000/livros
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
    "titulo": "Clean Code - Edição Revisada"
  }'
```

### Deletar um livro
```bash
curl -X DELETE http://localhost:3000/livros/507f1f77bcf86cd799439011
```

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo desenvolvimento com nodemon
- `npm test` - Executa os testes (ainda não implementado)

## 📝 Notas Importantes

- Certifique-se de que a variável de ambiente `DB_CONNECTION_STRING` está configurada corretamente antes de iniciar o servidor
- O servidor roda na porta 3000 por padrão
- A conexão com o MongoDB é estabelecida automaticamente ao iniciar a aplicação
- O projeto utiliza ES Modules (`"type": "module"` no package.json)

## 🤝 Contribuindo

Este é um projeto de aprendizado. Sinta-se à vontade para fazer fork, sugerir melhorias ou reportar problemas!

## 📄 Licença

Este projeto está sob a licença ISC.

