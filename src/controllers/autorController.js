import { autor } from "../models/Autor.js"

class AutorController {

    static async listarAutores(req, res) {
        try {
            const listaAutores = await autor.find({}) 
            res.status(200).json(listaAutores)

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Erro ao listar Autores`})
        }
    }  

    static async listarAutoresPorID(req, res) {
        try {
            const id = req.params.id
            const AutorEncontrado = await autor.findById(id) 
            
            res.status(200).json(AutorEncontrado)

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Erro ao encontrar Autor`})
        }
    }

    static async cadastrarAutor (req, res) {
        try {
            const novoAutor = await autor.create(req.body)
            res.status(201).json({ message: "Autor cadastrado com sucesso", autor: novoAutor })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Erro ao cadastrar Autor`})
        }
    }

    static async atualizarAutor (req, res) {
         try {
            
            const id = req.params.id
            await autor.findByIdAndUpdate(id, req.body) 
            res.status(200).json({ message: `Autor atualizado com sucesso`})
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Erro ao atualizar Autor`})
         }
    }

    static async deletarAutor (req, res) {
        try {
            const id = req.params.id 
            await autor.findByIdAndDelete(id)
            res.status(200).json( { message: "Autor deletado com sucesso" } )
        } catch (error) {
            res.status(500). json( { message: `${error.message} - Erro ao Deletar Autor` } )
        }
    }
}

export default AutorController