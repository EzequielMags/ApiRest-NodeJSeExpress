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

    static async cadastrarLivro (req, res) {
        try {
            const novoLivro = await Livro.create(req.body)
            res.status(201).json({ message: "livro cadastrado com sucesso", livro: novoLivro })
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