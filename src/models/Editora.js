import mongoose from "mongoose"

const editoraSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.ObjectId},
    nome: {type: String, required: true},
    localizacao: {type: String}
}, { versionKey: false })


const editora = mongoose.model("editora", editoraSchema)

export { editora, editoraSchema}