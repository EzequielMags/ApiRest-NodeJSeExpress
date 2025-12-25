import { editora } from "../models/editora.js";


class EditoraController {
    static async listarEditoras(req, res) {
        try {
            const listaEditoras = await editora.find({}) // await pq estamos mexendo com banco de dados
            res.status(200).json(listaEditoras)
            
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Erro ao listarEditoras`})
        }

        
    }

    static async listarEditoraPorID(req, res) {
        try {
            const id = req.params.id
            const editoraEscolhida = await editora.findById(id)
            res.status(200).json(editoraEscolhida)
            
        } catch (error) {
            res.status(500).json({message: `${error.message} - Erro ao listar Editora`})
        }
    }

    static async cadastrarEditora(req, res) {
        try {
            const novaEditora = await editora.create(req.body)
            res.status(200).json({message: `Editora criada com sucesso - ${novaEditora}`})
        } catch (error) {
            res.status(500).json({message: `${error.message} - Erro ao criar Editora`})
        }
    }

    static async atualizarEditora(req, res) {
        try {
            const id = req.params.id 
            await editora.findByIdAndUpdate(id, req.body)
            res.status(200).json({message: `Editora atualizada com sucesso`})
        } catch (error) {
            res.status(500).json({message: `${error.message} - Erro ao atualizar Editora`})
        }
    }

    static async deletarEditora(req, res) {
        try {
            const id = req.params.id 
            await editora.findByIdAndDelete(id)
            res.status(200).json({message: `Editora deletada com sucesso - ${novaEditora}`})
        } catch (error) {
            res.status(500).json({message: `${error.message} - Erro ao deletar Editora`})
        }
    }
}

export default EditoraController