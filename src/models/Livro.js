import mongoose from "mongoose";
import { autorSchema } from "./Autor.js"
import { editoraSchema } from "./editora.js";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    titulo: { type: String, required: true },
    editora: editoraSchema,
    preco: { type: Number },
    paginas: { type: Number },
    autor: autorSchema // chave estrangeira, utilizando outra tabela ( em MongoDB n é tabela mas utiliza esse exemplo )
}, { versionKey: false })

const Livro = mongoose.model("livros", livroSchema)

export default Livro