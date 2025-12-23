import express from "express"
import conectaNaDB from "./config/dbConnect.js"
import routes from "./routes/index.js"

const conexao = await conectaNaDB()

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro)
})

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
    
})

const app = express()
routes(app)
// app.use(express.json()) 



// app.get("/", (req, res) => {
//     res.status(200).send("manda-lhe o pix")
// })

// app.get("/livros", async (req, res) => {
//     const listaLivros = await Livro.find({}) 
//     res.status(200).json(listaLivros)
// })

// app.get("/livros/:id", (req, res) => {
//     const index = buscaLivro(req.params.id)
    
//     if (index === -1) res.status(400).send("coloque o id correto")
//     else res.status(200).json(livros[index])
    
// })

// app.post("/livros", (req, res) => {
//     try {
//         livros.push(req.body)
//         res.status(201).send("livro cadastrado com sucesso")
        
//     } catch(error) {
//         res.status("500")
//     }
// })

// app.put("/livros/:id", (req, res) => {
//     const index = buscaLivro(req.params.id)

//     if (index === -1) return res.status(404).send("Livro não encontrado")
    

//     livros[index].titulo = req.body.titulo
//     res.status(200).json(livros[index])
// })

// app.delete("/livros/:id", (req, res) => {
    
//     const index = buscaLivro(req.params.id)

    
//     if (index === -1) return res.status(404).send("Livro não encontrado")

//     livros.splice(index, 1)
    
//     res.status(200).send("livro apagado com sucesso")
// })

export default app

