import express from "express"

const app = express()

const livros = [
    {
        id: 1,
        titulo: "little principe"
    },
    {
        id: 2,
        titulo: "what if"
    }
]

app.get("/", (req, res) => {
    res.status(200).send("manda-lhe o pix")
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros) 
})

export default app