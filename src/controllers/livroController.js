import { autor } from "../models/Autor.js"
import { editora } from "../models/editora.js"
import Livro from "../models/Livro.js"

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await Livro.find({}) 
            res.status(200).json(listaLivros)

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Erro ao lista Livros`})
        }
    }  

    static async listarLivroPorID(req, res) {
        try {
            const id = req.params.id
            const livroEncontrado = await Livro.findById(id) 
            console.log(livroEncontrado)
            res.status(200).json(livroEncontrado)

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Erro ao encontrar Livro`})
        }
    }

    static async listarLivrosPorEditora(req, res) {
        const editora = req.query.editora

        try {
            const livrosPorEditora = await Livro.find({editora})// ou pode deixar editora: editora
            res.status(200).json(livrosPorEditora)
        } catch (error) {
            res.status(500).json( { message: `${error.message} - Erro ao buscar Livros por Editora`} )
        }
    }

    static async cadastrarLivro (req, res) {
        const novoLivro = req.body
        
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor)
            //Editora
            const editoraEcontrada = await editora.findById(novoLivro.editora)
            const livroCompleto = {...novoLivro,editora: {...editoraEcontrada._doc} ,autor: {...autorEncontrado._doc}} // _doc é aonde de fato esta os dados do autor
            const livroCriado = await Livro.create(livroCompleto)
            res.status(201).json({ message: "livro cadastrado com sucesso", livro: livroCriado })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Erro ao cadastrar Livro`})
        }
    }

    static async atualizarLivro (req, res) {
         try {
            
            const id = req.params.id
            await Livro.findByIdAndUpdate(id, req.body) 
            res.status(200).json({ message: `Livro atualizado com sucesso`})
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Erro ao atualizar livro`})
         }
    }

    static async deletarLivro (req, res) {
        try {
            const id = req.params.id 
            await Livro.findByIdAndDelete(id)
            res.status(200).json( { message: "Livro deletado com sucesso" } )
        } catch (error) {
            res.status(500). json( { message: `${error.message} - Erro ao Deletar livro` } )
        }
    }
}

export default LivroController