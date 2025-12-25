import express from "express"
import livros from "./livrosRoutes.js"
import autores from "./autoresRoutes.js"
import editores from "./editorasRoutes.js"
const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"))
    app.use(express.json(), livros, autores, editores) //middlewear
}

export default routes